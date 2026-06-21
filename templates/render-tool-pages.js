const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const configDir = path.join(__dirname, "tool-pages");
const outDir = path.join(root, "tools");
const defaultLastUpdated = "June 19, 2026";

function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function cleanOutput(value) {
  return value.replace(/[ \t]+$/gm, "");
}

function renderRelated(items = []) {
  return items.map((item) => `
            <a href="${esc(item.href)}" class="recommend-card">
                <div>
                    <h4>${esc(item.title)}</h4>
                    <p>${esc(item.description)}</p>
                </div>
                <span class="action-text">${esc(item.action || "Open Tool")} &rarr;</span>
            </a>`).join("");
}

function renderFaq(items = []) {
  return items.map((item) => `
        <div class="faq-item">
            <h4>${esc(item.question)}</h4>
            <p>${item.answer}</p>
        </div>`).join("");
}

function renderContentSections(items = []) {
  return items.map((section) => `
    <div class="content-section">
        <h3>${esc(section.title)}</h3>
        ${section.body}
    </div>`).join("");
}

function renderReferences(items = []) {
  if (!items.length) return "";
  return `<div class="card side-card reference-card" id="references"><h3>Authoritative References</h3><p class="reference-intro">Sources explain the underlying method and general guidance. They do not endorse this calculator or replace individual care.</p><ul class="reference-list">${items.map((item) => `<li><a href="${esc(item.href)}" target="_blank" rel="noopener noreferrer">${esc(item.title)}</a><span>${esc(item.publisher)}</span></li>`).join("")}</ul></div>`;
}

function renderPage(config) {
  const canonical = `https://toolsquark.com/tools/${config.slug}.html`;
  const categoryUrl = `https://toolsquark.com/${config.categoryHref || "health.html"}`;
  const lastUpdated = config.lastUpdated || defaultLastUpdated;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: config.schemaName || config.h1,
      url: canonical,
      operatingSystem: "All",
      applicationCategory: "HealthApplication",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      description: config.schemaDescription || config.description,
      publisher: { "@type": "Organization", name: "ToolsQuark", url: "https://toolsquark.com/" },
      isPartOf: { "@type": "WebSite", name: "ToolsQuark", url: "https://toolsquark.com/" }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://toolsquark.com/" },
        { "@type": "ListItem", position: 2, name: config.categoryLabel || "Health Tools", item: categoryUrl },
        { "@type": "ListItem", position: 3, name: config.h1, item: canonical }
      ]
    }
  ];

  if (config.faq?.length) {
    schema.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: config.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: String(item.answer).replace(/<[^>]*>/g, "")
        }
      }))
    });
  }

  const resultContent = config.resultHtml || `
            <div class="result-val"><span id="calc-output">0</span>${config.resultUnit ? `<span class="result-unit">${esc(config.resultUnit)}</span>` : ""}</div>
            <div class="result-status" id="calc-status">${esc(config.resultStatus || "Result")}</div>
            <div class="bmi-gauge-container">
                <div class="bmi-pointer" id="gauge-pointer"></div>
                <div class="bmi-gauge-bar"></div>
                <div class="bmi-labels">${(config.gaugeLabels || ["Low", "Target", "High"]).map((label) => `<span>${esc(label)}</span>`).join("")}</div>
            </div>
            <p class="result-desc" id="calc-desc"></p>
            <div class="suggestion-box">
                <h4>${esc(config.insightTitle || "Actionable Insight")}</h4>
                <p id="calc-suggestion"></p>
            </div>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="canonical" href="${canonical}">
<title>${esc(config.title)}</title>
<meta name="description" content="${esc(config.description)}">
<script type="application/ld+json">
${JSON.stringify(schema, null, 2)}
</script>
<script>window.va=window.va||function(){(window.vaq=window.vaq||[]).push(arguments);};</script>
<script defer src="/_vercel/insights/script.js"></script>
<style>
:root{--primary:#0f172a;--accent:#2563eb;--text-muted:#64748b;--bg:#f8fafc;--underweight:#38bdf8;--normal:#22c55e;--overweight:#eab308;--obese:#ef4444;}
*{margin:0;padding:0;box-sizing:border-box;}body{font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:var(--primary);line-height:1.6;padding:20px}.container{max-width:1240px;margin:auto}.breadcrumb{font-size:.85rem;color:var(--text-muted);margin-bottom:12px;display:flex;align-items:center;gap:6px;flex-wrap:wrap}.breadcrumb a{color:var(--accent);text-decoration:none;font-weight:600}.breadcrumb a:hover{text-decoration:underline}
.hero{padding:22px 0 28px;margin-bottom:28px;border-bottom:1px solid #dbe3ec}.hero h1{font-size:40px;font-weight:850;margin-bottom:10px;letter-spacing:0;line-height:1.15}.hero p{font-size:17px;color:#475569;max-width:820px}.workspace-grid{display:grid;grid-template-columns:minmax(0,1fr) 340px;gap:32px;align-items:start}.main-column,.side-column{min-width:0}.card{background:white;padding:30px;border-radius:8px;margin-bottom:24px;border:1px solid #e2e8f0;box-shadow:0 3px 14px rgba(15,23,42,.04)}.card h3{font-size:1.25rem;font-weight:800;margin-bottom:20px;color:#1e293b}.side-card{padding:22px}.side-card h3{font-size:1.05rem;margin-bottom:14px}.side-sticky{position:static}.fact-list{list-style:none;display:grid;gap:10px}.fact-list li{display:flex;justify-content:space-between;gap:14px;padding-bottom:10px;border-bottom:1px solid #eef2f7;font-size:13px}.fact-list li:last-child{border-bottom:none;padding-bottom:0}.fact-list span{color:var(--text-muted)}.fact-list strong{text-align:right;color:#334155}.page-nav{list-style:none;display:grid;gap:8px;margin-top:18px;padding-top:16px;border-top:1px solid #e2e8f0}.page-nav a{color:var(--accent);text-decoration:none;font-size:14px;font-weight:750}.page-nav a:hover{text-decoration:underline}
.unit-switcher{display:flex;background:#f1f5f9;padding:4px;border-radius:12px;margin-bottom:25px}.unit-tab{flex:1;text-align:center;padding:10px;font-size:14px;font-weight:700;color:var(--text-muted);border-radius:9px;cursor:pointer;transition:.2s}.unit-tab.active{background:white;color:var(--accent);box-shadow:0 4px 10px rgba(0,0,0,.05)}
.input-row{display:flex;gap:16px}.input-group{margin-bottom:20px;flex:1}.input-group label{display:block;font-weight:700;margin-bottom:8px;color:#374151;font-size:14px}.input-wrapper{position:relative;display:flex;align-items:center}.input-wrapper input,.input-wrapper select{width:100%;padding:14px 45px 14px 14px;border:2px solid #e2e8f0;border-radius:12px;font-size:16px;outline:none;transition:.2s;font-weight:600;background:white;color:var(--primary)}.input-wrapper input:focus,.input-wrapper select:focus{border-color:#2563eb;background:#eff6ff}.unit-badge{position:absolute;right:15px;color:var(--text-muted);font-size:14px;font-weight:600;pointer-events:none}
.calc-submit-btn{width:100%;padding:16px;border:none;border-radius:14px;background:#2563eb;color:white;font-size:16px;font-weight:bold;cursor:pointer;transition:.2s;box-shadow:0 4px 12px rgba(37,99,235,.2)}.calc-submit-btn:hover{background:#1d4ed8;transform:translateY(-1px)}
.result-box{border-top:1px solid #dbe3ec;padding:28px 0 0;margin-top:30px;text-align:center}.result-val{font-size:54px;font-weight:900;color:var(--accent);line-height:1;margin-bottom:5px;letter-spacing:0}.result-unit{font-size:20px;font-weight:700;color:var(--text-muted);margin-left:5px}.result-status{font-size:22px;font-weight:800;margin-bottom:15px}.bmi-gauge-container{max-width:500px;margin:20px auto;position:relative}.bmi-gauge-bar{height:12px;background:linear-gradient(to right,var(--underweight) 0%,var(--normal) 35%,var(--overweight) 70%,var(--obese) 100%);border-radius:6px}.bmi-pointer{position:absolute;width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:10px solid var(--primary);top:-14px;transform:translateX(-50%);transition:left .5s cubic-bezier(.175,.885,.32,1.275)}.bmi-labels{display:flex;justify-content:space-between;font-size:11px;color:var(--text-muted);font-weight:bold;margin-top:6px;padding:0 4px}.result-desc{color:#475569;font-size:15px;margin:15px auto;max-width:650px;line-height:1.7}.suggestion-box{background:#f8fafc;border-left:4px solid var(--accent);padding:18px;border-radius:6px;text-align:left;margin-top:20px}.suggestion-box h4{color:#1e293b;margin-bottom:6px;font-size:15px;font-weight:800}.suggestion-box p{color:#475569;font-size:14px}.macro-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:18px}.macro-pill{background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:16px}.macro-pill strong{display:block;font-size:22px;color:#1e293b}.macro-pill span{font-size:13px;color:var(--text-muted);font-weight:700}
.recommend-grid{display:grid;grid-template-columns:1fr 1fr;gap:15px}.recommend-card{background:#f8fafc;border:1px solid #e2e8f0;padding:20px;border-radius:16px;text-decoration:none;color:inherit;transition:.2s;display:flex;flex-direction:column;justify-content:space-between}.recommend-card:hover{border-color:var(--accent);background:#eff6ff;transform:translateY(-2px)}.recommend-card h4{font-size:15px;font-weight:800;color:#1e293b;margin-bottom:5px}.recommend-card p{font-size:13px;color:var(--text-muted);line-height:1.4}.action-text{font-size:13px;font-weight:700;color:var(--accent);margin-top:12px;display:inline-flex}.content-section{border-bottom:1px solid #f1f5f9;padding-bottom:22px;margin-bottom:24px}.content-section:last-child{border-bottom:none;padding-bottom:0;margin-bottom:0}.content-section h3{margin-bottom:10px}.content-section p,.content-section li{font-size:15px;color:#475569;line-height:1.75}.content-section p{margin-bottom:12px}.content-section ul,.content-section ol{padding-left:22px;margin:10px 0}.formula-box{background:#f8fafc;border:1px solid #dbeafe;border-left:4px solid var(--accent);border-radius:12px;padding:16px;margin:14px 0;color:#1e293b;font-weight:800}.note-box{background:#fff7ed;border:1px solid #fed7aa;border-radius:12px;padding:16px;margin-top:14px;color:#7c2d12}.reference-intro{font-size:14px;color:var(--text-muted);margin-bottom:14px}.reference-list{list-style:none}.reference-list li{padding:12px 0;border-bottom:1px solid #e2e8f0}.reference-list li:last-child{border-bottom:none}.reference-list a{display:block;color:var(--accent);font-weight:750;text-decoration:none;line-height:1.4}.reference-list a:hover{text-decoration:underline}.reference-list span{display:block;font-size:13px;color:var(--text-muted);margin-top:4px}.faq-item{margin-bottom:20px;border-bottom:1px solid #f1f5f9;padding-bottom:15px}.faq-item:last-child{border:none;padding:0;margin:0}.faq-item h4{font-size:15px;font-weight:800;color:#1e293b;margin-bottom:6px}.faq-item p{font-size:14px;color:var(--text-muted);line-height:1.6;text-align:justify}.scientific-backing{font-size:.85rem;color:var(--text-muted);line-height:1.6;border-top:1px solid #e2e8f0;padding-top:25px;margin-top:25px}.scientific-backing p{margin-bottom:10px}.updated-row{font-size:12px;color:var(--text-muted);font-weight:700;margin-top:16px}footer{text-align:center;margin-top:40px;padding-top:20px;border-top:1px solid #e2e8f0;color:var(--text-muted);font-size:13px}
footer a{color:var(--accent);font-weight:700;text-decoration:none;margin:0 8px}footer a:hover{text-decoration:underline}
.side-column .recommend-grid{grid-template-columns:1fr}.side-column .recommend-card{border-radius:6px;padding:17px}.side-column .scientific-backing{border-top:none;padding-top:0;margin-top:0}@media(max-width:1050px){.workspace-grid{grid-template-columns:1fr}.side-sticky{position:static}.side-column{display:grid;grid-template-columns:1fr 1fr;gap:20px}.side-column .card{margin-bottom:0}}@media(max-width:768px){body{padding:14px}.hero{padding:18px 0 22px;margin-bottom:20px}.hero h1{font-size:30px}.hero p{font-size:15px}.card{padding:22px 18px}.input-row,.recommend-grid,.macro-grid{grid-template-columns:1fr;flex-direction:column;gap:0}.result-val{font-size:42px}.side-column{grid-template-columns:1fr}.side-column .card{margin-bottom:0}}
${config.extraCss || ""}
</style>
</head>
<body>
<div class="container">
    <div class="breadcrumb"><a href="https://toolsquark.com/">Home</a> &gt; <a href="${categoryUrl}">${esc(config.categoryLabel || "Health Tools")}</a> &gt; <span>${esc(config.h1)}</span></div>
    <div class="hero"><h1>${esc(config.h1)}</h1><p>${esc(config.hero)}</p></div>
    <div class="workspace-grid">
    <main class="main-column">
    <div class="card" id="calculator">
${config.controlsHtml}
        <button class="calc-submit-btn" onclick="calculateNow()">${esc(config.buttonText || "Calculate Now")}</button>
        <div id="result-area" class="result-box" style="display:none;">
${resultContent}
        </div>
    </div>
    ${config.contentSections?.length ? `<div class="card" id="guide">${renderContentSections(config.contentSections)}</div>` : ""}
    <div class="card" id="faq"><h3>Frequently Asked Questions</h3>${renderFaq(config.faq)}</div>
    </main>
    <aside class="side-column" aria-label="Tool information">
        <div class="card side-card side-sticky"><h3>At A Glance</h3><ul class="fact-list"><li><span>Cost</span><strong>Free</strong></li><li><span>Account</span><strong>Not required</strong></li><li><span>Processing</span><strong>In your browser</strong></li><li><span>Purpose</span><strong>Educational estimate</strong></li></ul><nav aria-label="On this page"><ul class="page-nav"><li><a href="#calculator">Calculator</a></li>${config.contentSections?.length ? `<li><a href="#guide">Detailed guide</a></li>` : ""}<li><a href="#faq">FAQs</a></li>${config.references?.length ? `<li><a href="#references">References</a></li>` : ""}<li><a href="#methodology">Methodology</a></li></ul></nav></div>
        <div class="card side-card" id="related"><h3>${esc(config.relatedTitle || "Related Tools")}</h3><div class="recommend-grid">${renderRelated(config.related)}</div></div>
        ${renderReferences(config.references)}
        <div class="card side-card" id="methodology"><div class="scientific-backing"><p><strong>Methodology & Quality Assurance:</strong> ${config.methodology}</p><p style="font-style:italic;font-size:12px;"><strong>Medical Disclaimer:</strong> ${config.disclaimer || "These calculations are educational estimates and not medical advice, diagnosis, or treatment. Consult a qualified professional for personal guidance."}</p><div class="updated-row">Last updated: ${esc(lastUpdated)}</div></div></div>
    </aside>
    </div>
    <footer><div><a href="https://toolsquark.com/about.html">About</a><a href="https://toolsquark.com/editorial-policy.html">Editorial Policy</a><a href="https://toolsquark.com/privacy.html">Privacy</a></div><p style="margin-top:10px;">&copy; 2026 ToolsQuark. All rights reserved.</p></footer>
</div>
<script>
${config.script}
</script>
</body>
</html>
`;
}

const only = process.argv.slice(2);
const files = fs.readdirSync(configDir)
  .filter((file) => file.endsWith(".config.js"))
  .filter((file) => only.length === 0 || only.includes(path.basename(file, ".config.js")));

for (const file of files) {
  const configPath = path.join(configDir, file);
  delete require.cache[require.resolve(configPath)];
  const config = require(configPath);
  const html = cleanOutput(renderPage(config));
  const outPath = path.join(outDir, `${config.slug}.html`);
  fs.writeFileSync(outPath, html, "utf8");
  console.log(`Rendered ${path.relative(root, outPath)}`);
}
