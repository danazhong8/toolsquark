const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const configDir = path.join(__dirname, "assessment-pages");
const outDir = path.join(root, "tools");

function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderRelated(items = []) {
  return items.map((item) => `
            <a href="${esc(item.href)}" class="recommend-card">
                <div>
                    <h4>${esc(item.title)}</h4>
                    <p>${esc(item.description)}</p>
                </div>
                <span>${esc(item.action || "Open Tool")} &rarr;</span>
            </a>`).join("");
}

function renderFaq(items = []) {
  return items.map((item) => `
        <div class="faq-item">
            <h4>${esc(item.question)}</h4>
            <p>${esc(item.answer)}</p>
        </div>`).join("");
}

function renderPage(config) {
  const canonical = `https://toolsquark.com/tools/${config.slug}.html`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: config.schemaName || config.h1,
    url: canonical,
    operatingSystem: "All",
    applicationCategory: "HealthApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description: config.schemaDescription || config.description
  };
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
<style>
:root{--primary:#0f172a;--accent:#2563eb;--text-muted:#64748b;--bg:#f8fafc;--low:#22c55e;--mid:#eab308;--high:#ef4444;}
*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:var(--primary);line-height:1.6;padding:20px 10px}.container{max-width:850px;margin:auto}.breadcrumb{font-size:.85rem;color:var(--text-muted);margin-bottom:20px;display:flex;align-items:center;gap:6px;flex-wrap:wrap}.breadcrumb a{color:var(--accent);text-decoration:none;font-weight:700}.breadcrumb a:hover{text-decoration:underline}
.hero{background:linear-gradient(135deg,#2563eb,#1d4ed8);color:white;padding:45px 35px;border-radius:24px;margin-bottom:25px;box-shadow:0 12px 35px rgba(37,99,235,.15)}.hero h1{font-size:36px;font-weight:800;margin-bottom:12px}.hero p{font-size:16px;opacity:.92}.card{background:white;padding:30px;border-radius:24px;margin-bottom:25px;border:1px solid #e2e8f0;box-shadow:0 4px 20px rgba(0,0,0,.03)}.card h3{font-size:1.3rem;font-weight:800;margin-bottom:20px;color:#1e293b}
.quiz-header{display:flex;align-items:center;gap:14px;margin-bottom:24px}.progress-wrap{flex:1;height:14px;background:#e2e8f0;border-radius:999px;overflow:hidden}.progress-bar{height:100%;width:0;background:linear-gradient(90deg,#2563eb,#3b82f6);transition:width .25s}.progress-text{font-size:13px;font-weight:800;color:var(--text-muted);white-space:nowrap}.question{font-size:21px;font-weight:800;color:#1e293b;margin-bottom:22px;line-height:1.45}.answers-grid{display:flex;flex-direction:column;gap:12px}.option{width:100%;text-align:left;padding:16px 18px;border:2px solid #e2e8f0;border-radius:14px;background:#f8fafc;color:#334155;font-size:15px;font-weight:650;cursor:pointer;transition:.2s}.option:hover{border-color:var(--accent);background:#eff6ff;color:var(--accent);transform:translateY(-1px)}.option.selected{border-color:var(--accent);background:#dbeafe;color:#1e40af}.option.selected-heavy{border-color:#f97316;background:#fff7ed;color:#9a3412}.hidden{display:none!important}
.result-box{background:#f8fafc;border:1px solid #e2e8f0;padding:30px;border-radius:20px;text-align:center}.score{font-size:60px;font-weight:900;color:var(--accent);line-height:1;margin-bottom:8px}.profile{font-size:22px;font-weight:900;margin-bottom:12px}.description{color:#475569;font-size:15px;margin:0 auto 24px;max-width:660px;line-height:1.65}.indicator-grid{text-align:left;margin-top:20px}.bar{margin-bottom:18px;background:white;border:1px solid #e2e8f0;border-radius:14px;padding:14px}.bar-label{display:flex;justify-content:space-between;gap:10px;color:#334155;font-weight:800;font-size:14px;margin-bottom:8px}.bar-bg{height:10px;background:#e2e8f0;border-radius:999px;overflow:hidden}.bar-fill{height:100%;width:0;background:linear-gradient(90deg,#38bdf8,#2563eb);border-radius:999px;transition:width .8s cubic-bezier(.16,1,.3,1)}.insight{background:white;border-left:4px solid var(--accent);padding:16px;border-radius:8px;text-align:left;margin-top:12px;color:#475569;font-size:14px}
.recommend-grid{display:grid;grid-template-columns:1fr 1fr;gap:15px}.recommend-card{background:#f8fafc;border:1px solid #e2e8f0;padding:20px;border-radius:16px;text-decoration:none;color:inherit;transition:.2s;display:flex;flex-direction:column;justify-content:space-between}.recommend-card:hover{border-color:var(--accent);background:#eff6ff;transform:translateY(-2px)}.recommend-card h4{font-size:15px;font-weight:800;color:#1e293b;margin-bottom:5px}.recommend-card p{font-size:13px;color:var(--text-muted);line-height:1.4}.recommend-card span{font-size:13px;font-weight:800;color:var(--accent);margin-top:12px}.faq-item{margin-bottom:20px;border-bottom:1px solid #f1f5f9;padding-bottom:15px}.faq-item:last-child{border:none;padding:0;margin:0}.faq-item h4{font-size:15px;font-weight:800;color:#1e293b;margin-bottom:6px}.faq-item p{font-size:14px;color:var(--text-muted);line-height:1.6}.scientific-backing{font-size:.85rem;color:var(--text-muted);line-height:1.6;border-top:1px solid #e2e8f0;padding-top:25px;margin-top:25px}footer{text-align:center;margin-top:40px;padding-top:20px;border-top:1px solid #e2e8f0;color:var(--text-muted);font-size:13px}
@media(max-width:768px){.hero{padding:36px 24px}.hero h1{font-size:28px}.question{font-size:19px}.recommend-grid{grid-template-columns:1fr}.score{font-size:46px}}
${config.extraCss || ""}
</style>
</head>
<body>
<div class="container">
    <div class="breadcrumb"><a href="https://toolsquark.com/">Home</a> &gt; <a href="https://toolsquark.com/${esc(config.categoryHref || "mental-health.html")}">${esc(config.categoryLabel || "Mental Health")}</a> &gt; <span>${esc(config.h1)}</span></div>
    <div class="hero"><h1>${esc(config.h1)}</h1><p>${esc(config.hero)}</p></div>
    <div class="card" id="quiz-card">
        <div class="quiz-header"><div class="progress-wrap"><div class="progress-bar" id="progress-bar"></div></div><div class="progress-text" id="progress-text">Question 1 / ${config.questions.length}</div></div>
        <div class="question" id="question-text"></div>
        <div class="answers-grid" id="answers-container"></div>
    </div>
    <div class="card hidden" id="result-card">
        <div class="result-box">
            <div class="score"><span id="score-val">0</span> / ${config.questions.length * 4}</div>
            <div class="profile" id="profile-status"></div>
            <p class="description" id="profile-desc"></p>
            <div class="indicator-grid" id="indicator-grid"></div>
            <div id="insight-grid"></div>
        </div>
    </div>
    <div class="card"><h3>${esc(config.relatedTitle || "Recommended Tools")}</h3><div class="recommend-grid">${renderRelated(config.related)}</div></div>
    <div class="card"><h3>Frequently Asked Questions</h3>${renderFaq(config.faq)}</div>
    <div class="card" style="background:#f8fafc;border:none;"><div class="scientific-backing"><p><strong>Methodology & Privacy:</strong> ${config.methodology}</p><p style="font-style:italic;font-size:12px;"><strong>Disclaimer:</strong> ${config.disclaimer}</p></div></div>
    <footer>&copy; 2026 ToolsQuark. All rights reserved.</footer>
</div>
<script>
const questions = ${JSON.stringify(config.questions, null, 2)};
const profiles = ${JSON.stringify(config.profiles, null, 2)};
const indicators = ${JSON.stringify(config.indicators || [], null, 2)};
let current = 0;
let totalScore = 0;
let isTransitioning = false;

function activeProfile() {
    for (const profile of profiles) {
        if (totalScore >= profile.min && totalScore <= profile.max) return profile;
    }
    return profiles[profiles.length - 1];
}
function loadQuestion() {
    const q = questions[current];
    document.getElementById('question-text').innerText = q.question;
    document.getElementById('progress-text').innerText = \`Question \${current + 1} / \${questions.length}\`;
    document.getElementById('progress-bar').style.width = \`\${((current + 1) / questions.length) * 100}%\`;
    document.getElementById('answers-container').innerHTML = q.options.map((option, index) => \`<button class="option" onclick="selectOption(this, \${index + 1}, \${index})">\${option}</button>\`).join('');
    isTransitioning = false;
}
function selectOption(el, score, optionIndex) {
    if (isTransitioning) return;
    isTransitioning = true;
    document.querySelectorAll('.option').forEach((item) => item.classList.remove('selected', 'selected-heavy'));
    el.classList.add(optionIndex >= 2 ? 'selected-heavy' : 'selected');
    totalScore += score;
    setTimeout(() => {
        current += 1;
        if (current < questions.length) loadQuestion();
        else showResult();
    }, 260);
}
function showResult() {
    const profile = activeProfile();
    document.getElementById('quiz-card').classList.add('hidden');
    document.getElementById('result-card').classList.remove('hidden');
    document.getElementById('score-val').innerText = totalScore;
    document.getElementById('profile-status').innerText = profile.title;
    document.getElementById('profile-status').style.color = profile.color || 'var(--accent)';
    document.getElementById('profile-desc').innerText = profile.description;
    document.getElementById('indicator-grid').innerHTML = indicators.map((item) => {
        const value = profile.indicators && profile.indicators[item.key] != null ? profile.indicators[item.key] : Math.round((totalScore / (questions.length * 4)) * 100);
        return \`<div class="bar"><div class="bar-label"><span>\${item.label}</span><span>\${value}%</span></div><div class="bar-bg"><div class="bar-fill" style="width:\${value}%"></div></div></div>\`;
    }).join('');
    document.getElementById('insight-grid').innerHTML = (profile.insights || []).map((text) => \`<div class="insight">\${text}</div>\`).join('');
    document.getElementById('result-card').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
loadQuestion();
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
  const html = renderPage(config);
  const outPath = path.join(outDir, `${config.slug}.html`);
  fs.writeFileSync(outPath, html, "utf8");
  console.log(`Rendered ${path.relative(root, outPath)}`);
}
