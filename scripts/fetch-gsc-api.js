const fs = require("fs");
const https = require("https");
const path = require("path");
const { buildReport } = require("./analyze-gsc-export");

const root = path.resolve(__dirname, "..");
const siteUrl = process.env.GSC_SITE_URL || "sc-domain:toolsquark.com";
const apiBase = "https://searchconsole.googleapis.com/webmasters/v3";

function argValue(name, fallback) {
  const index = process.argv.indexOf(name);
  return index >= 0 && process.argv[index + 1] ? process.argv[index + 1] : fallback;
}

function isoDate(date) {
  return date.toISOString().slice(0, 10);
}

function defaultDates() {
  const end = new Date();
  end.setUTCDate(end.getUTCDate() - 3);
  const start = new Date(end);
  start.setUTCDate(start.getUTCDate() - 27);
  return { startDate: isoDate(start), endDate: isoDate(end) };
}

function requestJson(url, options = {}, body) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const req = https.request({
      hostname: parsed.hostname,
      path: `${parsed.pathname}${parsed.search}`,
      method: options.method || "GET",
      headers: options.headers || {}
    }, (res) => {
      let data = "";
      res.setEncoding("utf8");
      res.on("data", (chunk) => { data += chunk; });
      res.on("end", () => {
        let parsedBody = {};
        try {
          parsedBody = data ? JSON.parse(data) : {};
        } catch {
          return reject(new Error(`Invalid JSON response from ${parsed.hostname}: ${data.slice(0, 500)}`));
        }
        if (res.statusCode < 200 || res.statusCode >= 300) {
          const message = parsedBody.error?.message || data.slice(0, 500);
          return reject(new Error(`HTTP ${res.statusCode}: ${message}`));
        }
        resolve(parsedBody);
      });
    });
    req.on("error", reject);
    if (body) req.write(body);
    req.end();
  });
}

async function accessToken() {
  if (process.env.GSC_ACCESS_TOKEN) return process.env.GSC_ACCESS_TOKEN;
  const clientId = process.env.GSC_CLIENT_ID;
  const clientSecret = process.env.GSC_CLIENT_SECRET;
  const refreshToken = process.env.GSC_REFRESH_TOKEN;
  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error([
      "Missing Google authorization.",
      "Set GSC_ACCESS_TOKEN for a short-lived run, or set GSC_CLIENT_ID, GSC_CLIENT_SECRET, and GSC_REFRESH_TOKEN for repeatable API access.",
      "Required OAuth scope: https://www.googleapis.com/auth/webmasters.readonly"
    ].join("\n"));
  }
  const params = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    refresh_token: refreshToken,
    grant_type: "refresh_token"
  });
  const response = await requestJson("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Content-Length": Buffer.byteLength(params.toString())
    }
  }, params.toString());
  if (!response.access_token) throw new Error("OAuth response did not include access_token.");
  return response.access_token;
}

async function searchAnalytics(token, dimensions, startDate, endDate, rowLimit = 25000) {
  const encodedSite = encodeURIComponent(siteUrl);
  const body = JSON.stringify({
    startDate,
    endDate,
    dimensions,
    rowLimit,
    dataState: "final"
  });
  const response = await requestJson(`${apiBase}/sites/${encodedSite}/searchAnalytics/query`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(body)
    }
  }, body);
  return response.rows || [];
}

function csvEscape(value) {
  const text = String(value ?? "");
  return /[",\n\r]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

function writeCsv(file, headers, rows) {
  const lines = [headers.join(",")];
  for (const row of rows) lines.push(headers.map((header) => csvEscape(row[header])).join(","));
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `${lines.join("\n")}\n`, "utf8");
}

function rowsToCsvRows(rows, dimensions) {
  return rows.map((row) => {
    const output = {};
    dimensions.forEach((dimension, index) => { output[dimension] = row.keys?.[index] || ""; });
    output.clicks = row.clicks || 0;
    output.impressions = row.impressions || 0;
    output.ctr = row.ctr || 0;
    output.position = row.position || 0;
    return output;
  });
}

function reportRowsFromQueryPage(rows) {
  return rows.map((row) => ({
    query: row.query,
    page: new URL(row.page).pathname.replace(/\/$/, "") || "/",
    clicks: Number(row.clicks) || 0,
    impressions: Number(row.impressions) || 0,
    ctr: Number(row.ctr) || 0,
    position: Number(row.position) || 0,
    sourceFile: "query-page.csv"
  }));
}

async function main() {
  if (process.argv.includes("--self-test")) {
    const sampleRows = rowsToCsvRows([{ keys: ["query", "https://toolsquark.com/tools/bmi-calculator.html"], clicks: 1, impressions: 20, ctr: 0.05, position: 8.2 }], ["query", "page"]);
    if (sampleRows[0].query !== "query" || sampleRows[0].page.indexOf("toolsquark.com") < 0) throw new Error("row conversion failed");
    if (!reportRowsFromQueryPage(sampleRows)[0].page.startsWith("/tools/")) throw new Error("report row conversion failed");
    console.log("GSC API fetcher self-test passed.");
    return;
  }

  const defaults = defaultDates();
  const startDate = argValue("--start", process.env.GSC_START_DATE || defaults.startDate);
  const endDate = argValue("--end", process.env.GSC_END_DATE || defaults.endDate);
  const outputDir = path.resolve(argValue("--output-dir", path.join(root, "seo", "gsc", "api", `${startDate}_to_${endDate}`)));
  const token = await accessToken();

  const specs = [
    { name: "query-page", dimensions: ["query", "page"] },
    { name: "query", dimensions: ["query"] },
    { name: "page", dimensions: ["page"] },
    { name: "date", dimensions: ["date"] },
    { name: "country", dimensions: ["country"] },
    { name: "device", dimensions: ["device"] }
  ];

  const outputs = {};
  for (const spec of specs) {
    const rows = rowsToCsvRows(await searchAnalytics(token, spec.dimensions, startDate, endDate), spec.dimensions);
    const headers = [...spec.dimensions, "clicks", "impressions", "ctr", "position"];
    const file = path.join(outputDir, `${spec.name}.csv`);
    writeCsv(file, headers, rows);
    outputs[spec.name] = { file, rows };
  }

  const reportFile = path.join(root, "seo", "gsc", "reports", `gsc-api-${startDate}_to_${endDate}.md`);
  const report = buildReport(reportRowsFromQueryPage(outputs["query-page"].rows), [outputs["query-page"].file]);
  fs.mkdirSync(path.dirname(reportFile), { recursive: true });
  fs.writeFileSync(reportFile, report, "utf8");

  const queryPage = outputs["query-page"].rows;
  const totalClicks = queryPage.reduce((sum, row) => sum + Number(row.clicks || 0), 0);
  const totalImpressions = queryPage.reduce((sum, row) => sum + Number(row.impressions || 0), 0);
  console.log(`Fetched Search Console data for ${siteUrl}`);
  console.log(`Range: ${startDate} to ${endDate}`);
  console.log(`Query-page rows: ${queryPage.length}`);
  console.log(`Clicks: ${totalClicks}; impressions: ${totalImpressions}; CTR: ${totalImpressions ? (totalClicks / totalImpressions * 100).toFixed(2) : "0.00"}%`);
  console.log(`CSV directory: ${outputDir}`);
  console.log(`Report: ${reportFile}`);
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
