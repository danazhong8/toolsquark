const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const map = JSON.parse(fs.readFileSync(path.join(root, "seo", "core-query-map.json"), "utf8"));
const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
const errors = [];
const rows = [];

function textBetween(html, expression) {
  return (html.match(expression)?.[1] || "").replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
}

function normalize(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

if (map.pages.length !== 12) errors.push(`Expected 12 mapped pages, found ${map.pages.length}`);
if (new Set(map.pages.map((page) => page.path)).size !== map.pages.length) errors.push("Mapped paths must be unique");
if (new Set(map.pages.map((page) => normalize(page.primaryQuery))).size !== map.pages.length) errors.push("Primary queries must be unique");

for (const page of map.pages) {
  const file = path.join(root, page.path);
  if (!fs.existsSync(file)) {
    errors.push(`${page.path}: file does not exist`);
    continue;
  }
  const html = fs.readFileSync(file, "utf8");
  const title = textBetween(html, /<title>([\s\S]*?)<\/title>/i);
  const h1 = textBetween(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1] || "";
  const query = normalize(page.primaryQuery);
  const titleMatch = normalize(title).includes(query);
  const h1Match = normalize(h1).includes(query);
  const expectedCanonical = `https://toolsquark.com${page.path}`;
  const inSitemap = sitemap.includes(`<loc>${expectedCanonical}</loc>`);

  if (!titleMatch && !h1Match) errors.push(`${page.path}: primary query is absent from title and H1`);
  if (canonical !== expectedCanonical) errors.push(`${page.path}: canonical is ${canonical || "missing"}`);
  if (!inSitemap) errors.push(`${page.path}: missing from sitemap`);
  if (!page.secondaryQueries?.length || !page.intent || !page.snippetAngle || !page.cannibalizationGuard) {
    errors.push(`${page.path}: query strategy fields are incomplete`);
  }

  rows.push({
    page: page.path,
    primaryQuery: page.primaryQuery,
    titleOrH1: titleMatch || h1Match ? "yes" : "no",
    canonical: canonical === expectedCanonical ? "yes" : "no",
    sitemap: inSitemap ? "yes" : "no"
  });
}

console.table(rows);
if (errors.length) {
  errors.forEach((error) => console.error(`ERROR: ${error}`));
  process.exitCode = 1;
} else {
  console.log("Core query map audit passed: 12 unique pages with aligned titles/H1, canonicals, and sitemap entries.");
}
