const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const site = "https://toolsquark.com";
const sitemapPath = path.join(root, "sitemap.xml");
const vercelPath = path.join(root, "vercel.json");

function fail(message) {
  console.error(`ERROR: ${message}`);
  process.exitCode = 1;
}

function read(file) {
  return fs.readFileSync(file, "utf8");
}

function fileForUrlPath(urlPath) {
  if (!urlPath || urlPath === "/") return path.join(root, "index.html");
  return path.join(root, urlPath.replace(/^\//, ""));
}

const sitemap = read(sitemapPath);
const vercel = JSON.parse(read(vercelPath));
const redirects = vercel.redirects || [];
const redirectSources = new Set(redirects.map((item) => item.source));
const sitemapUrls = Array.from(sitemap.matchAll(/<loc>(https:\/\/toolsquark\.com\/[^<]*)<\/loc>/g)).map((match) => match[1]);

const wwwRedirect = redirects.find((item) =>
  item.source === "/(.*)" &&
  item.permanent === true &&
  item.destination === "https://toolsquark.com/$1" &&
  Array.isArray(item.has) &&
  item.has.some((condition) => condition.type === "host" && condition.value === "www.toolsquark.com")
);

if (!wwwRedirect) {
  fail("Missing permanent www.toolsquark.com to toolsquark.com redirect.");
}

for (const url of sitemapUrls) {
  const relativePath = url.replace(site, "") || "/";
  const filePath = fileForUrlPath(relativePath);
  if (!fs.existsSync(filePath)) {
    fail(`Sitemap URL has no local file: ${url}`);
    continue;
  }
  if (relativePath.endsWith(".html")) {
    const html = read(filePath);
    const expectedCanonical = `<link rel="canonical" href="${url}">`;
    if (!html.includes(expectedCanonical)) {
      fail(`Canonical mismatch for ${relativePath}. Expected ${expectedCanonical}`);
    }
    if (html.includes("https://www.toolsquark.com")) {
      fail(`Found www canonical/link in ${relativePath}`);
    }
  }
}

const toolFiles = fs.readdirSync(path.join(root, "tools")).filter((file) => file.endsWith(".html")).sort();
for (const file of toolFiles) {
  const rootSource = `/${file}`;
  const expectedDestination = `/tools/${file}`;
  const matchingRedirect = redirects.find((item) =>
    item.source === rootSource &&
    item.destination === expectedDestination &&
    item.permanent === true
  );
  if (!matchingRedirect) {
    fail(`Missing root legacy redirect: ${rootSource} -> ${expectedDestination}`);
  }
}

if (!process.exitCode) {
  console.log(`Indexing hygiene audit passed: ${sitemapUrls.length} sitemap URLs, ${toolFiles.length} tool redirects, apex canonicals.`);
}
