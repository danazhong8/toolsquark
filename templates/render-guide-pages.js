const fs = require("fs");
const path = require("path");
const guides = require("./guide-page-data");

const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "guides");
const site = "https://toolsquark.com";
const updated = "June 28, 2026";
const modified = "2026-06-28";

const guideGroups = [
  {
    title: "Body Metrics & Energy Planning",
    description: "Compare weight, body composition, maintenance calories, calorie goals, macros, and protein planning before choosing a calculator.",
    slugs: ["body-metrics-calorie-planning-tools", "metric-vs-imperial-bmi-formula", "mifflin-st-jeor-equation-explained", "bmr-vs-resting-calorie-calculator", "maintenance-calories-vs-calorie-deficit", "bmi-vs-body-fat-vs-waist", "bmr-vs-tdee-vs-calorie-goal", "bmr-vs-rmr-vs-tdee", "how-to-set-macro-targets", "protein-per-meal-vs-daily-protein"]
  },
  {
    title: "Sleep & Daily Movement",
    description: "Separate sleep timing, sleep quality, sleep debt, and practical movement goals.",
    slugs: ["sleep-schedule-and-sleep-quality", "sleep-debt-vs-sleep-quality", "how-to-choose-a-realistic-daily-step-goal"]
  },
  {
    title: "Stress, Anxiety & Follow-Through",
    description: "Choose the right self-check for overload, high alert, task delay, consistency, or attention friction.",
    slugs: ["stress-vs-anxiety-patterns", "procrastination-vs-follow-through"]
  },
  {
    title: "Digital Habits",
    description: "Distinguish device-level checking from social feed capture, comparison, and displacement.",
    slugs: ["social-media-addiction-vs-normal-use", "smartphone-use-vs-social-media-use"]
  },
  {
    title: "Relationships & Emotional Connection",
    description: "Move from unclear emotional strain to needs, communication, disclosure safety, and repair.",
    slugs: ["identify-and-communicate-emotional-needs", "relationship-conflict-repair"]
  }
];

function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function styles() {
  return `:root{--ink:#172033;--muted:#5f6b7c;--line:#dbe2ea;--blue:#1d4ed8;--blue-soft:#eff6ff;--green:#047857;--bg:#f8fafc}*{box-sizing:border-box}body{margin:0;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:var(--ink);background:var(--bg);line-height:1.68}a{color:var(--blue)}.navbar{background:#fff;border-bottom:1px solid var(--line);padding:15px max(20px,5%);display:flex;justify-content:space-between;align-items:center}.logo{font-size:22px;font-weight:850;text-decoration:none}.nav-links{display:flex;gap:22px;flex-wrap:wrap}.nav-links a{color:#475569;text-decoration:none;font-size:14px;font-weight:750}.shell{max-width:1160px;margin:0 auto;padding:34px 22px 72px}.breadcrumb{font-size:13px;color:var(--muted);margin-bottom:24px}.breadcrumb a{text-decoration:none;font-weight:750}.hero{max-width:890px;padding-bottom:32px;border-bottom:1px solid var(--line)}.eyebrow{font-size:13px;font-weight:850;color:var(--green);text-transform:uppercase}.hero h1{font-size:clamp(2.1rem,5vw,3.45rem);line-height:1.08;letter-spacing:0;margin:10px 0 14px}.hero p{font-size:1.08rem;color:var(--muted);max-width:780px;margin:0}.meta{display:flex;gap:10px 22px;flex-wrap:wrap;margin-top:18px;color:#475569;font-size:13px;font-weight:700}.layout{display:grid;grid-template-columns:minmax(0,760px) 300px;gap:54px;align-items:start;margin-top:34px}.article h2{font-size:1.55rem;line-height:1.25;margin:38px 0 12px}.article h2:first-child{margin-top:0}.article p{margin:0 0 16px;color:#334155}.article ul,.article ol{padding-left:22px;margin:0 0 18px;color:#334155}.article li{margin:8px 0}.table-wrap{overflow-x:auto;margin:16px 0 24px}table{width:100%;border-collapse:collapse;background:#fff;font-size:14px}th,td{text-align:left;vertical-align:top;padding:12px;border:1px solid var(--line)}th{background:#eef2f7;font-size:12px;text-transform:uppercase;color:#475569}.note{border-left:4px solid #0f766e;background:#ecfdf5;padding:14px 16px;color:#28534a;margin:20px 0}.formula{background:#f1f5f9;border:1px solid var(--line);padding:14px 16px;font-family:ui-monospace,SFMono-Regular,Consolas,monospace;margin:18px 0}.flow{display:grid;grid-template-columns:auto 1fr auto auto 1fr auto auto 1fr;gap:8px 12px;align-items:center;background:#fff;border:1px solid var(--line);padding:18px;margin:18px 0 24px}.flow strong{color:#1e3a8a}.flow span{font-size:12px;color:var(--muted)}.flow b{color:#94a3b8}.sidebar{position:sticky;top:24px}.side-section{border-top:3px solid #1d4ed8;padding-top:15px;margin-bottom:30px}.side-section h2{font-size:1rem;margin:0 0 12px}.tool-link{display:block;background:#fff;border:1px solid var(--line);border-radius:8px;padding:14px;margin-bottom:10px;text-decoration:none;color:inherit}.tool-link:hover,.tool-link:focus-visible{border-color:#3b82f6;outline:none}.tool-link strong{display:block;font-size:14px;color:#1e293b}.tool-link span{display:block;font-size:12px;color:var(--muted);margin:5px 0 8px}.tool-link em{font-style:normal;font-size:12px;color:var(--blue);font-weight:800}.faq,.sources,.related{margin-top:44px;padding-top:26px;border-top:1px solid var(--line)}.faq h2,.sources h2,.related h2{font-size:1.45rem;margin:0 0 16px}.faq-item{padding:16px 0;border-bottom:1px solid var(--line)}.faq-item h3{font-size:1rem;margin:0 0 6px}.faq-item p{margin:0;color:var(--muted)}.sources ul{padding-left:20px}.sources li{margin:9px 0}.sources span{display:block;font-size:12px;color:var(--muted)}.related-grid,.guide-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.related-card,.guide-card{display:block;background:#fff;border:1px solid var(--line);border-radius:8px;padding:18px;text-decoration:none;color:inherit}.related-card:hover,.guide-card:hover{border-color:#3b82f6}.related-card strong,.guide-card strong{display:block;color:#1e293b}.related-card span,.guide-card span{display:block;color:var(--muted);font-size:13px;margin-top:6px}.disclaimer{margin-top:34px;padding:16px;border:1px solid var(--line);background:#fff;color:var(--muted);font-size:13px}footer{padding:34px 20px;border-top:1px solid var(--line);text-align:center;color:var(--muted);font-size:13px}footer a{color:inherit;margin:0 8px}.index-hero{max-width:820px;margin-bottom:36px}.index-hero h1{font-size:clamp(2.2rem,5vw,3.5rem);line-height:1.08;margin:0 0 14px}.index-hero p{color:var(--muted);font-size:1.06rem}.guide-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.guide-card{min-height:180px}.guide-card small{display:block;color:var(--green);font-weight:800;text-transform:uppercase;margin-bottom:9px}.guide-card strong{font-size:1.08rem}.guide-card em{display:block;font-style:normal;color:var(--blue);font-size:13px;font-weight:800;margin-top:14px}@media(max-width:900px){.layout{grid-template-columns:1fr}.sidebar{position:static}.flow{grid-template-columns:1fr}.flow b{transform:rotate(90deg);width:max-content}.guide-grid{grid-template-columns:1fr}}@media(max-width:640px){.navbar{align-items:flex-start;flex-direction:column;gap:10px}.nav-links{gap:12px}.shell{padding:26px 18px 56px}.hero h1{font-size:2.15rem}.related-grid{grid-template-columns:1fr}th,td{min-width:140px}}`;
}

function indexStyles() {
  return `.guide-section{margin-top:36px;padding-top:28px;border-top:1px solid var(--line)}.featured-guides{margin-top:0;padding:22px;background:#eef6ff;border:1px solid #bfdbfe;border-radius:8px}.section-heading{display:grid;grid-template-columns:minmax(0,320px) minmax(0,1fr);gap:22px;align-items:end;margin-bottom:16px}.section-heading h2{font-size:1.35rem;line-height:1.2;margin:0}.section-heading p{color:var(--muted);margin:0;font-size:.95rem}@media(max-width:900px){.section-heading{grid-template-columns:1fr}}@media(max-width:640px){.featured-guides{padding:18px}}`;
}

function nav(prefix = "../") {
  return `<nav class="navbar"><a class="logo" href="${prefix}index.html">ToolsQuark</a><div class="nav-links"><a href="${prefix}health.html">Health</a><a href="${prefix}mental-health.html">Mental Health</a><a href="${prefix}lifestyle.html">Lifestyle</a><a href="${prefix}emotional-connection.html">Relationships</a><a href="${prefix}guides.html">Guides</a></div></nav>`;
}

function footer(prefix = "../") {
  return `<footer><div><a href="${prefix}about.html">About</a><a href="${prefix}editorial-policy.html">Editorial Policy</a><a href="${prefix}privacy.html">Privacy</a><a href="${prefix}terms.html">Terms</a></div><p>&copy; 2026 ToolsQuark. Educational information, not diagnosis or treatment.</p></footer>`;
}

function guideBySlug(slug) {
  return guides.find((guide) => guide.slug === slug);
}

function renderGuideCard(guide) {
  return `<a class="guide-card" href="guides/${guide.slug}.html"><small>${esc(guide.primaryQuery)}</small><strong>${esc(guide.h1)}</strong><span>${esc(guide.description)}</span><em>Read guide &rarr;</em></a>`;
}

function renderGuide(guide) {
  const canonical = `${site}/guides/${guide.slug}.html`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: guide.h1,
      description: guide.description,
      datePublished: modified,
      dateModified: modified,
      mainEntityOfPage: canonical,
      author: { "@type": "Organization", name: "ToolsQuark", url: `${site}/about.html` },
      publisher: { "@type": "Organization", name: "ToolsQuark", url: `${site}/` }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${site}/` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${site}/guides.html` },
        { "@type": "ListItem", position: 3, name: guide.h1, item: canonical }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: guide.faq.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer }
      }))
    }
  ];
  const article = guide.sections.map(([title, body]) => `<section><h2>${esc(title)}</h2>${body}</section>`).join("");
  const tools = guide.tools.map(([slug, title, description, action]) => `<a class="tool-link" href="../tools/${slug}.html" data-tool-slug="${esc(slug)}"><strong>${esc(title)}</strong><span>${esc(description)}</span><em>${esc(action)} &rarr;</em></a>`).join("");
  const faq = guide.faq.map(([question, answer]) => `<div class="faq-item"><h3>${esc(question)}</h3><p>${esc(answer)}</p></div>`).join("");
  const references = guide.references.map(([title, publisher, href]) => `<li><a href="${esc(href)}" target="_blank" rel="noopener noreferrer">${esc(title)}</a><span>${esc(publisher)}</span></li>`).join("");
  const related = guide.related.map((slug) => {
    const target = guideBySlug(slug);
    return `<a class="related-card" href="${target.slug}.html"><strong>${esc(target.h1)}</strong><span>${esc(target.description)}</span></a>`;
  }).join("");
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<link rel="canonical" href="${canonical}">
<title>${esc(guide.title)}</title>
<meta name="description" content="${esc(guide.description)}">
<meta property="og:type" content="article">
<meta property="og:site_name" content="ToolsQuark">
<meta property="og:title" content="${esc(guide.h1)}">
<meta property="og:description" content="${esc(guide.description)}">
<meta property="og:url" content="${canonical}">
<meta name="twitter:card" content="summary">
<script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>
<script>window.va=window.va||function(){(window.vaq=window.vaq||[]).push(arguments);};</script>
<script defer src="/_vercel/insights/script.js"></script>
<style>${styles()}.article,.sidebar{min-width:0}.table-wrap{width:100%;max-width:100%}</style>
</head>
<body>
${nav()}
<div class="shell">
  <div class="breadcrumb"><a href="../index.html">Home</a> &gt; <a href="../guides.html">Guides</a> &gt; ${esc(guide.h1)}</div>
  <header class="hero"><span class="eyebrow">Decision Guide</span><h1>${esc(guide.h1)}</h1><p>${esc(guide.intro)}</p><div class="meta"><span>Reviewed: ${updated}</span><span>Primary topic: ${esc(guide.primaryQuery)}</span><span>Educational guidance</span></div></header>
  <div class="layout">
    <article class="article">${article}<section class="faq"><h2>Frequently Asked Questions</h2>${faq}</section><section class="sources"><h2>Sources And Further Reading</h2><ul>${references}</ul></section><section class="related"><h2>Related Guides</h2><div class="related-grid">${related}</div></section><div class="disclaimer">These guides provide general education and help select a relevant tool. They do not diagnose a condition, prescribe treatment, or replace individualized professional guidance.</div></article>
    <aside class="sidebar"><section class="side-section"><h2>Use The Matching Tool</h2>${tools}</section><section class="side-section"><h2>Editorial Standard</h2><p style="font-size:13px;color:var(--muted)">Methods, limitations, references, and correction routes are disclosed under the <a href="../editorial-policy.html">Editorial & Methodology Policy</a>.</p></section></aside>
  </div>
</div>
${footer()}
<script>
const guideSlug = ${JSON.stringify(guide.slug)};
const allowedGuideSources = new Set(['github', 'linkedin', 'x', 'reddit', 'newsletter']);
const requestedGuideSource = new URLSearchParams(window.location.search).get('utm_source');
const guideSource = allowedGuideSources.has(requestedGuideSource) ? requestedGuideSource : 'direct';

function trackGuideEvent(name, data = {}) {
  const safeData = { guide: guideSlug, ...data };
  window.dispatchEvent(new CustomEvent('toolsquark:guide', { detail: { name, data: safeData } }));
  if (typeof window.va === 'function') window.va('event', { name, data: safeData });
}

trackGuideEvent('guide_view', { source: guideSource });
document.addEventListener('click', (event) => {
  const toolLink = event.target.closest('[data-tool-slug]');
  if (!toolLink) return;
  trackGuideEvent('guide_tool_click', {
    tool: toolLink.dataset.toolSlug,
    source: 'matching_tool'
  });
  trackGuideEvent('tool_click', {
    tool: toolLink.dataset.toolSlug,
    source: 'guide'
  });
});
</script>
</body>
</html>`;
}

function renderIndex() {
  const startingGuides = ["body-metrics-calorie-planning-tools", "sleep-debt-vs-sleep-quality", "stress-vs-anxiety-patterns", "smartphone-use-vs-social-media-use"].map(guideBySlug).filter(Boolean);
  const startingCards = startingGuides.map(renderGuideCard).join("");
  const groupedSections = guideGroups.map((group) => {
    const cards = group.slugs.map(guideBySlug).filter(Boolean).map(renderGuideCard).join("");
    return `<section class="guide-section"><div class="section-heading"><h2>${esc(group.title)}</h2><p>${esc(group.description)}</p></div><div class="guide-grid">${cards}</div></section>`;
  }).join("");
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "ToolsQuark Decision Guides",
    url: `${site}/guides.html`,
    description: "Evidence-informed guides for choosing and interpreting ToolsQuark calculators and self-checks.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: guides.map((guide, index) => ({ "@type": "ListItem", position: index + 1, url: `${site}/guides/${guide.slug}.html`, name: guide.h1 }))
    }
  };
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<link rel="canonical" href="${site}/guides.html">
<title>Calculator & Self-Check Guides | ToolsQuark</title>
<meta name="description" content="Compare body metrics, energy estimates, sleep tools, stress and anxiety patterns, execution friction, and relationship communication.">
<script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>
<script>window.va=window.va||function(){(window.vaq=window.vaq||[]).push(arguments);};</script>
<script defer src="/_vercel/insights/script.js"></script>
<style>${styles()}${indexStyles()}</style>
</head>
<body>
${nav("")}
<main class="shell"><div class="breadcrumb"><a href="index.html">Home</a> &gt; Guides</div><header class="index-hero"><h1>Choose The Right Tool, Then Read The Result Carefully</h1><p>These guides separate look-alike calculations and self-checks, explain what each method can answer, and route you to the smallest useful next step.</p></header><section class="guide-section featured-guides"><div class="section-heading"><h2>Start With These Decision Guides</h2><p>Use these pages when you are not sure which calculator or self-check should come first.</p></div><div class="guide-grid">${startingCards}</div></section>${groupedSections}<div class="disclaimer">Guides are educational and evidence-informed. They do not replace medical, mental health, nutrition, or relationship support from a qualified professional.</div></main>
${footer("")}
</body>
</html>`;
}

fs.mkdirSync(outDir, { recursive: true });
for (const guide of guides) {
  fs.writeFileSync(path.join(outDir, `${guide.slug}.html`), renderGuide(guide), "utf8");
  console.log(`Rendered guides\\${guide.slug}.html`);
}
fs.writeFileSync(path.join(root, "guides.html"), renderIndex(), "utf8");
console.log("Rendered guides.html");
