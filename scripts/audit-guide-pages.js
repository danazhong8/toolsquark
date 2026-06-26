const fs = require("fs");
const path = require("path");
const guides = require("../templates/guide-page-data");

const root = path.resolve(__dirname, "..");
const errors = [];
const rows = [];

function text(html, expression) {
  return (html.match(expression)?.[1] || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

if (new Set(guides.map((guide) => guide.slug)).size !== guides.length) errors.push("Guide slugs must be unique");
if (new Set(guides.map((guide) => guide.primaryQuery)).size !== guides.length) errors.push("Guide primary queries must be unique");

for (const guide of guides) {
  const file = path.join(root, "guides", `${guide.slug}.html`);
  if (!fs.existsSync(file)) {
    errors.push(`${guide.slug}: generated page is missing`);
    continue;
  }
  const html = fs.readFileSync(file, "utf8");
  const body = text(html, /<body[^>]*>([\s\S]*?)<\/body>/i);
  const words = (body.match(/\b[A-Za-z][A-Za-z'-]*\b/g) || []).length;
  const expectedCanonical = `https://toolsquark.com/guides/${guide.slug}.html`;
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1] || "";
  const schemaBlock = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i)?.[1] || "";
  try {
    JSON.parse(schemaBlock);
  } catch {
    errors.push(`${guide.slug}: JSON-LD is invalid`);
  }
  if (canonical !== expectedCanonical) errors.push(`${guide.slug}: canonical is missing or incorrect`);
  if (!html.includes("<h1>")) errors.push(`${guide.slug}: H1 is missing`);
  if (words < 500) errors.push(`${guide.slug}: only ${words} visible words`);
  if (guide.sections.length < 5 || guide.faq.length < 3 || guide.references.length < 2 || guide.tools.length < 2) {
    errors.push(`${guide.slug}: content contract is incomplete`);
  }
  for (const [slug] of guide.tools) {
    if (!fs.existsSync(path.join(root, "tools", `${slug}.html`))) errors.push(`${guide.slug}: linked tool ${slug} is missing`);
  }
  rows.push({ guide: guide.slug, words, sections: guide.sections.length, tools: guide.tools.length, references: guide.references.length });
}

console.table(rows);
if (errors.length) {
  errors.forEach((error) => console.error(`ERROR: ${error}`));
  process.exitCode = 1;
} else {
  console.log(`Guide audit passed: ${guides.length} unique pages with valid schema, canonicals, links, and content depth.`);
}
