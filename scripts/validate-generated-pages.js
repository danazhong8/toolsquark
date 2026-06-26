const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const toolsDir = path.join(root, "tools");

let scriptCount = 0;
let pageCount = 0;

for (const file of fs.readdirSync(toolsDir).filter((name) => name.endsWith(".html"))) {
  pageCount += 1;
  const html = fs.readFileSync(path.join(toolsDir, file), "utf8");
  const jsonLd = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!jsonLd) throw new Error(`${file}: missing JSON-LD script`);
  JSON.parse(jsonLd[1]);

  const scripts = [...html.matchAll(/<script(?![^>]*application\/ld\+json)[^>]*>([\s\S]*?)<\/script>/g)];
  for (const script of scripts) {
    new Function(script[1]);
    scriptCount += 1;
  }
}

console.log(`Validated ${pageCount} tool pages and compiled ${scriptCount} inline scripts.`);
