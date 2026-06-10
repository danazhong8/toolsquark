const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const toolsDir = path.join(root, "tools");

function textBetween(html, regex) {
  const match = html.match(regex);
  return match ? match[1].replace(/\s+/g, " ").trim() : "";
}

const rows = fs.readdirSync(toolsDir)
  .filter((file) => file.endsWith(".html"))
  .filter((file) => !/[ A-Z]/.test(file))
  .sort()
  .map((file) => {
    const html = fs.readFileSync(path.join(toolsDir, file), "utf8");
    const hasQuestions = /const\s+questions\s*=|let\s+questions\s*=|question-block|selectOption/i.test(html);
    const hasCalculate = /function\s+calculateNow/i.test(html);
    return {
      file,
      type: hasQuestions ? "assessment" : hasCalculate ? "calculator" : "static",
      title: textBetween(html, /<title>([\s\S]*?)<\/title>/i),
      h1: textBetween(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i),
      description: textBetween(html, /<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']/i)
    };
  });

console.table(rows);
