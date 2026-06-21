const fs = require("fs");
const path = require("path");

let sharp;
try {
  sharp = require("sharp");
} catch (error) {
  throw new Error("The social-card generator requires the sharp package. Add it to NODE_PATH or install it before running this script.");
}

const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "assets", "social");
const cards = [
  {
    file: "stress-pattern-self-check.png",
    eyebrow: "14-DAY ORIGINAL SELF-CHECK",
    title: ["Stress Pattern", "Self-Check"],
    description: ["Review overload, control strain, reactivity,", "and daily-life impact."],
    accent: "#2563eb",
    dimensions: [
      ["Perceived overload", "#2563eb", 78],
      ["Control strain", "#0891b2", 58],
      ["Stress reactivity", "#16a34a", 68],
      ["Daily-life impact", "#d97706", 46]
    ]
  },
  {
    file: "anxiety-high-alert-self-check.png",
    eyebrow: "14-DAY ORIGINAL SELF-CHECK",
    title: ["Anxiety And High-Alert", "Pattern Self-Check"],
    description: ["Review physical alertness, persistent worry,", "sensitivity, and recovery."],
    accent: "#0f766e",
    dimensions: [
      ["Physical alertness", "#0f766e", 72],
      ["Worry persistence", "#2563eb", 64],
      ["Trigger sensitivity", "#7c3aed", 56],
      ["Recovery and impact", "#d97706", 48]
    ]
  },
  {
    file: "procrastination-pattern-self-check.png",
    eyebrow: "30-DAY ORIGINAL SELF-CHECK",
    title: ["Procrastination Pattern", "Self-Check"],
    description: ["Review initiation, avoidance, short-term reward", "pull, and perfectionistic delay."],
    accent: "#7c3aed",
    dimensions: [
      ["Task initiation", "#7c3aed", 74],
      ["Emotional avoidance", "#2563eb", 62],
      ["Short-term reward pull", "#d97706", 54],
      ["Perfectionistic delay", "#0f766e", 44]
    ]
  }
];

function xml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function textLines(lines, x, y, size, weight, color, lineHeight) {
  return lines.map((line, index) => `<text x="${x}" y="${y + index * lineHeight}" font-family="Arial, Helvetica, sans-serif" font-size="${size}" font-weight="${weight}" fill="${color}">${xml(line)}</text>`).join("");
}

function renderSvg(card) {
  const dimensionRows = card.dimensions.map(([label, color, width], index) => {
    const y = 202 + index * 76;
    return `<text x="800" y="${y}" font-family="Arial, Helvetica, sans-serif" font-size="17" font-weight="700" fill="#334155">${xml(label)}</text>
      <rect x="800" y="${y + 14}" width="290" height="12" rx="6" fill="#e2e8f0"/>
      <rect x="800" y="${y + 14}" width="${Math.round(290 * width / 100)}" height="12" rx="6" fill="${color}"/>`;
  }).join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="#f8fafc"/>
    <rect width="1200" height="14" fill="${card.accent}"/>
    <text x="70" y="88" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="800" fill="#2563eb">ToolsQuark</text>
    <text x="70" y="188" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="800" fill="${card.accent}">${xml(card.eyebrow)}</text>
    ${textLines(card.title, 70, 257, 58, 800, "#0f172a", 65)}
    ${textLines(card.description, 70, 421, 23, 400, "#475569", 34)}
    <text x="70" y="576" font-family="Arial, Helvetica, sans-serif" font-size="17" fill="#64748b">toolsquark.com</text>
    <rect x="760" y="105" width="370" height="430" rx="8" fill="#ffffff" stroke="#dbe3ec"/>
    <text x="800" y="158" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="800" fill="#0f172a">Four-part answer pattern</text>
    ${dimensionRows}
    <line x1="800" y1="478" x2="1090" y2="478" stroke="#e2e8f0"/>
    <text x="800" y="505" font-family="Arial, Helvetica, sans-serif" font-size="14" fill="#64748b">Private browser-side reflection.</text>
    <text x="800" y="526" font-family="Arial, Helvetica, sans-serif" font-size="14" fill="#64748b">Not clinically validated or diagnostic.</text>
  </svg>`;
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });
  for (const card of cards) {
    const outputPath = path.join(outDir, card.file);
    await sharp(Buffer.from(renderSvg(card))).png().toFile(outputPath);
    console.log(`Rendered ${path.relative(root, outputPath)}`);
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
