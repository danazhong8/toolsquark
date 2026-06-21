const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const queryMap = JSON.parse(fs.readFileSync(path.join(root, "seo", "core-query-map.json"), "utf8"));

const headerAliases = {
  query: ["query", "top queries", "queries", "查询", "热门查询"],
  page: ["page", "top pages", "pages", "url", "网页", "页面", "热门网页"],
  clicks: ["clicks", "点击", "点击次数"],
  impressions: ["impressions", "展示", "展示次数"],
  ctr: ["ctr", "点击率"],
  position: ["position", "average position", "排名", "平均排名"]
};

function parseCsv(text) {
  const rows = [];
  let row = [];
  let value = "";
  let quoted = false;
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    if (char === '"') {
      if (quoted && text[index + 1] === '"') {
        value += '"';
        index += 1;
      } else {
        quoted = !quoted;
      }
    } else if (char === "," && !quoted) {
      row.push(value);
      value = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && text[index + 1] === "\n") index += 1;
      row.push(value);
      if (row.some((cell) => cell.trim() !== "")) rows.push(row);
      row = [];
      value = "";
    } else {
      value += char;
    }
  }
  row.push(value);
  if (row.some((cell) => cell.trim() !== "")) rows.push(row);
  return rows;
}

function normalizeHeader(value) {
  return String(value).replace(/^\uFEFF/, "").trim().toLowerCase();
}

function headerKey(value) {
  const normalized = normalizeHeader(value);
  return Object.entries(headerAliases).find(([, aliases]) => aliases.includes(normalized))?.[0] || null;
}

function numberValue(value) {
  const normalized = String(value || "0").replace(/,/g, "").replace(/%/g, "").trim();
  const number = Number(normalized);
  return Number.isFinite(number) ? number : 0;
}

function ctrValue(value) {
  const text = String(value || "").trim();
  if (!text) return null;
  const number = numberValue(text);
  return text.includes("%") || number > 1 ? number / 100 : number;
}

function normalizePage(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  try {
    const parsed = new URL(raw, "https://toolsquark.com");
    return parsed.pathname.replace(/\/$/, "") || "/";
  } catch {
    return raw.replace(/^https?:\/\/[^/]+/i, "").replace(/\/$/, "") || "/";
  }
}

function inferPageFromFilename(file) {
  const slug = path.basename(file, path.extname(file)).toLowerCase();
  return queryMap.pages.find((page) => path.basename(page.path, ".html").toLowerCase() === slug)?.path || "";
}

function parseExport(file) {
  const table = parseCsv(fs.readFileSync(file, "utf8"));
  if (table.length < 2) return [];
  const keys = table[0].map(headerKey);
  if (!keys.includes("clicks") || !keys.includes("impressions")) {
    throw new Error(`${file}: clicks and impressions columns are required`);
  }
  const inferredPage = inferPageFromFilename(file);
  return table.slice(1).map((cells) => {
    const source = {};
    keys.forEach((key, index) => {
      if (key) source[key] = cells[index] || "";
    });
    const clicks = numberValue(source.clicks);
    const impressions = numberValue(source.impressions);
    return {
      query: String(source.query || "").trim(),
      page: normalizePage(source.page || inferredPage),
      clicks,
      impressions,
      ctr: ctrValue(source.ctr) ?? (impressions ? clicks / impressions : 0),
      position: numberValue(source.position),
      sourceFile: path.basename(file)
    };
  }).filter((row) => row.query || row.page);
}

function collectCsvFiles(inputs) {
  return inputs.flatMap((input) => {
    const resolved = path.resolve(input);
    if (!fs.existsSync(resolved)) throw new Error(`Input not found: ${input}`);
    if (fs.statSync(resolved).isDirectory()) {
      return fs.readdirSync(resolved).filter((name) => name.toLowerCase().endsWith(".csv")).map((name) => path.join(resolved, name));
    }
    return [resolved];
  });
}

function weightedPosition(rows) {
  const weighted = rows.reduce((sum, row) => sum + row.position * row.impressions, 0);
  const impressions = rows.reduce((sum, row) => sum + row.impressions, 0);
  return impressions ? weighted / impressions : 0;
}

function percent(value) {
  return `${(value * 100).toFixed(1)}%`;
}

function statusFor(metrics) {
  if (!metrics.impressions) return "No data";
  if (metrics.position <= 10 && metrics.impressions >= 50 && metrics.ctr < 0.05) return "CTR opportunity";
  if (metrics.position > 5 && metrics.position <= 20 && metrics.impressions >= 20) return "Near win";
  if (metrics.clicks > 0) return "Active";
  return "Needs demand/coverage review";
}

function normalizeQuery(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function seedCoverage(page, rows) {
  const actual = rows.map((row) => normalizeQuery(row.query));
  const seeds = [page.primaryQuery, ...page.secondaryQueries].map(normalizeQuery);
  return seeds.filter((seed) => actual.some((query) => query === seed || query.includes(seed))).length;
}

function buildReport(rows, files) {
  const totalClicks = rows.reduce((sum, row) => sum + row.clicks, 0);
  const totalImpressions = rows.reduce((sum, row) => sum + row.impressions, 0);
  const overallCtr = totalImpressions ? totalClicks / totalImpressions : 0;
  const scope = files.length === 1 && rows.some((row) => row.query && row.page) ? "Combined query-page export" : "Core-page exports (partial site scope)";
  const lines = [
    "# Google Search Console 28-Day Review",
    "",
    `Generated: ${new Date().toISOString().slice(0, 10)}`,
    `Scope: ${scope}`,
    `Inputs: ${files.map((file) => path.basename(file)).join(", ")}`,
    "",
    "## Goal Progress",
    "",
    `- Impressions: ${totalImpressions.toLocaleString()} / 28,000 (${percent(Math.min(1, totalImpressions / 28000))})`,
    `- Clicks: ${totalClicks.toLocaleString()} / 2,800 (${percent(Math.min(1, totalClicks / 2800))})`,
    `- CTR: ${percent(overallCtr)} / 10.0% target`,
    `- Daily average: ${(totalImpressions / 28).toFixed(1)} impressions; ${(totalClicks / 28).toFixed(1)} clicks`,
    "",
    "## Core 12 Pages",
    "",
    "| Page | Primary query | Clicks | Impressions | CTR | Position | Seed coverage | Status |",
    "|---|---|---:|---:|---:|---:|---:|---|"
  ];

  const opportunities = [];
  for (const page of queryMap.pages) {
    const pageRows = rows.filter((row) => row.page === page.path);
    const clicks = pageRows.reduce((sum, row) => sum + row.clicks, 0);
    const impressions = pageRows.reduce((sum, row) => sum + row.impressions, 0);
    const ctr = impressions ? clicks / impressions : 0;
    const position = weightedPosition(pageRows);
    const metrics = { clicks, impressions, ctr, position };
    const coverage = seedCoverage(page, pageRows);
    lines.push(`| ${page.path} | ${page.primaryQuery} | ${clicks} | ${impressions} | ${percent(ctr)} | ${position ? position.toFixed(1) : "-"} | ${coverage}/${1 + page.secondaryQueries.length} | ${statusFor(metrics)} |`);
    for (const row of pageRows) {
      if (row.impressions >= 10 && row.position > 5 && row.position <= 20) opportunities.push({ ...row, type: "Near-win ranking" });
      else if (row.impressions >= 50 && row.position <= 10 && row.ctr < 0.05) opportunities.push({ ...row, type: "Low CTR" });
    }
  }

  lines.push("", "## Query Opportunities", "");
  if (!opportunities.length) {
    lines.push("No threshold-qualified opportunities in this export.");
  } else {
    lines.push("| Type | Query | Page | Impressions | CTR | Position |", "|---|---|---|---:|---:|---:|");
    opportunities.sort((a, b) => b.impressions - a.impressions).slice(0, 30).forEach((row) => {
      lines.push(`| ${row.type} | ${row.query} | ${row.page} | ${row.impressions} | ${percent(row.ctr)} | ${row.position.toFixed(1)} |`);
    });
  }

  lines.push(
    "",
    "## Decision Rules",
    "",
    "- No data: confirm indexing, canonical, sitemap presence, and internal links before rewriting content.",
    "- Position 5-20 with impressions: strengthen the matching section and links; preserve the query-page boundary.",
    "- Position 1-10 with low CTR: test title and visible summary against the actual query intent.",
    "- Unmapped query: add it only when the page genuinely answers it; otherwise route it to a better page.",
    "- Review on a 28-day cadence and log each title/content change before comparing the next period.",
    ""
  );
  return lines.join("\n");
}

function selfTest() {
  const sample = "query,page,clicks,impressions,ctr,position\n\"bmi calculator\",https://toolsquark.com/tools/bmi-calculator.html,8,100,8%,7.5\n";
  const parsed = parseCsv(sample);
  if (parsed.length !== 2 || parsed[1][0] !== "bmi calculator") throw new Error("CSV parser self-test failed");
  const normalized = normalizePage(parsed[1][1]);
  if (normalized !== "/tools/bmi-calculator.html") throw new Error("URL normalization self-test failed");
  if (queryMap.pages.length !== 12 || new Set(queryMap.pages.map((page) => page.path)).size !== 12) throw new Error("Core query map must contain 12 unique pages");
  for (const page of queryMap.pages) {
    if (!fs.existsSync(path.join(root, page.path))) throw new Error(`Mapped page does not exist: ${page.path}`);
  }
  const report = buildReport([{
    query: "bmi calculator",
    page: "/tools/bmi-calculator.html",
    clicks: 8,
    impressions: 100,
    ctr: 0.08,
    position: 7.5,
    sourceFile: "sample.csv"
  }], ["sample.csv"]);
  if (!report.includes("8 / 2,800") || !report.includes("bmi calculator") || !report.includes("1/5")) throw new Error("Report generation self-test failed");
  console.log("GSC analyzer self-test passed.");
}

function main() {
  const args = process.argv.slice(2);
  if (args.includes("--self-test")) return selfTest();
  const outputIndex = args.indexOf("--output");
  const output = outputIndex >= 0 ? args[outputIndex + 1] : path.join(root, "seo", "gsc", "reports", `gsc-${new Date().toISOString().slice(0, 10)}.md`);
  const inputs = args.filter((arg, index) => index !== outputIndex && index !== outputIndex + 1);
  if (!inputs.length) {
    throw new Error("Usage: node scripts/analyze-gsc-export.js <csv-or-directory> [more inputs] [--output report.md]");
  }
  const files = collectCsvFiles(inputs);
  if (!files.length) throw new Error("No CSV files found.");
  const rows = files.flatMap(parseExport);
  fs.mkdirSync(path.dirname(path.resolve(output)), { recursive: true });
  const report = buildReport(rows, files);
  fs.writeFileSync(path.resolve(output), report, "utf8");
  console.log(`Analyzed ${rows.length} rows from ${files.length} file(s).`);
  console.log(`Report: ${path.resolve(output)}`);
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

module.exports = { buildReport, normalizePage, parseCsv, parseExport };
