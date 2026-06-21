const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const site = "https://toolsquark.com";
const updated = "June 21, 2026";

const pages = [
  {
    file: "about.html",
    title: "About ToolsQuark | Purpose, Standards & Ownership",
    description: "Learn what ToolsQuark publishes, how its calculators and self-checks are maintained, what the site does not provide, and how to report corrections.",
    h1: "About ToolsQuark",
    intro: "ToolsQuark is an independently maintained library of browser-based calculators and educational self-checks.",
    type: "AboutPage",
    sections: [
      ["What We Publish", `<p>ToolsQuark builds practical calculators for body metrics, nutrition planning, activity, dates, sleep, and everyday routines. It also publishes original self-reflection checklists for stress, attention, work strain, habits, and digital use.</p><p>Calculator inputs and self-check answers are processed in the browser. No account is required.</p>`],
      ["What We Do Not Claim", `<p>ToolsQuark is not a clinic, healthcare provider, diagnostic service, or substitute for qualified professional care. The self-checks are original editorial tools unless a page explicitly says otherwise; they are not validated clinical instruments.</p><p>No named physician, psychologist, dietitian, or other clinician currently reviews every page. We state that plainly because a fabricated review badge would be worse than no badge at all.</p>`],
      ["How Tools Are Built", `<p>Each professionalized tool documents its formula or scoring method, assumptions, limitations, worked examples, and relevant sources. We prefer public-health agencies, standards bodies, original research, and peer-reviewed reviews when they directly support the page.</p><p>Read the full <a href="editorial-policy.html">Editorial & Methodology Policy</a> for source selection, testing, and update practices.</p>`],
      ["Ownership And Corrections", `<p>The project source is maintained in the public <a href="https://github.com/danazhong8/toolsquark" target="_blank" rel="noopener noreferrer">ToolsQuark GitHub repository</a>. Errors, broken sources, and reproducible calculation problems can be reported through <a href="https://github.com/danazhong8/toolsquark/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a>.</p><p>Corrections are evaluated against the implementation, cited source, and generated page before publication.</p>`],
      ["Privacy In Brief", `<p>ToolsQuark does not require an account and does not intentionally send calculator values or individual self-check answers through analytics events. Aggregate traffic measurement is described in the <a href="privacy.html">Privacy Policy</a>.</p>`]
    ]
  },
  {
    file: "editorial-policy.html",
    title: "Editorial & Methodology Policy | ToolsQuark",
    description: "See how ToolsQuark selects sources, documents formulas, labels original self-checks, tests calculations, handles corrections, and updates content.",
    h1: "Editorial & Methodology Policy",
    intro: "The standards used to build, test, source, label, and update ToolsQuark pages.",
    type: "WebPage",
    sections: [
      ["Scope And Responsibility", `<p>ToolsQuark publishes educational tools, not personalized professional advice. Every page should make its purpose, method, assumptions, and limits understandable without hiding important caveats behind a disclaimer.</p>`],
      ["Source Hierarchy", `<p>We prefer sources in this order when they directly fit the claim:</p><ol><li>Government and public-health agencies, standards bodies, and professional clinical organizations.</li><li>Original peer-reviewed research describing a formula or method.</li><li>Systematic reviews and peer-reviewed consensus statements.</li><li>Secondary sources only when a stronger primary source is unavailable and the claim is low risk.</li></ol><p>A reference provides background; it does not imply that the publisher endorses ToolsQuark.</p>`],
      ["Calculator Standards", `<p>Calculator pages should disclose the equation, define variables and units, show a reproducible example, explain rounding, and identify populations or situations where the estimate may fail. Metric and imperial paths are tested against equivalent inputs when both are available.</p>`],
      ["Self-Check Standards", `<p>Original self-checks are labeled as original and non-validated. Pages disclose the number of items, 1-to-4 scoring, total range, editorial result bands, and the meaning of dimension bars. They must not borrow the name, scoring thresholds, or authority of a validated instrument without actually implementing and licensing it appropriately.</p>`],
      ["Testing And Release", `<p>Generated pages are checked for valid JavaScript, canonical URLs, JSON-LD parsing, responsive overflow, reference attributes, and representative results. Interactive self-checks are completed through the result state before release.</p>`],
      ["Updates And Corrections", `<p>Pages display a last-updated date. A material formula, threshold, source, safety, or labeling change should update that date and regenerate the published page. Report reproducible problems through <a href="https://github.com/danazhong8/toolsquark/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a>.</p>`],
      ["Clinical Review Status", `<p>ToolsQuark does not currently claim universal clinician review. If a qualified reviewer is added in the future, the site should identify the person, credentials, review scope, and review date rather than using an anonymous badge.</p>`]
    ]
  },
  {
    file: "privacy.html",
    title: "Privacy Policy | ToolsQuark",
    description: "Understand how ToolsQuark processes calculator inputs locally, uses aggregate Vercel Web Analytics, handles external links, and avoids account-based tracking.",
    h1: "Privacy Policy",
    intro: "How browser-side inputs, analytics, and external links are handled.",
    type: "WebPage",
    sections: [
      ["Local Tool Processing", `<p>Calculator values and self-check answers are processed by JavaScript in your browser. ToolsQuark does not require an account and does not intentionally transmit those entered values or individual answers to its own database.</p>`],
      ["Analytics", `<p>ToolsQuark uses Vercel Web Analytics to understand aggregate page traffic and basic tool-use events. Custom events identify the tool being used; they are not designed to include individual answers, scores, body measurements, dates, or other calculator inputs.</p><p>Infrastructure providers may process limited technical information needed to deliver and measure the site under their own policies.</p>`],
      ["External Links", `<p>Reference links and the public GitHub repository lead to third-party websites. Those sites may collect information under their own privacy policies. Opening an external link is separate from using a local ToolsQuark calculation.</p>`],
      ["Data Choices", `<p>You can use the tools without entering a name or email address. Browser controls, content blockers, and network settings may affect analytics or external resources without preventing the core local calculations from working.</p>`],
      ["Changes And Questions", `<p>Material changes to this policy will update the date shown on this page. Privacy or implementation concerns can be reported through <a href="https://github.com/danazhong8/toolsquark/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a>.</p>`]
    ]
  },
  {
    file: "terms.html",
    title: "Terms of Use | ToolsQuark",
    description: "Review the educational purpose, acceptable use, no-warranty terms, professional-care limits, and intellectual-property terms for ToolsQuark.",
    h1: "Terms of Use",
    intro: "The conditions that apply when using ToolsQuark pages and calculations.",
    type: "WebPage",
    sections: [
      ["Educational Use", `<p>ToolsQuark provides general calculators and self-reflection tools for informational and educational use. Results are estimates or editorial groupings and are not medical, mental health, nutrition, legal, financial, or other professional advice.</p>`],
      ["No Diagnosis Or Emergency Service", `<p>The site cannot diagnose, rule out, monitor, or treat a condition and is not an emergency service. Seek qualified or urgent local support when a situation requires professional assessment or immediate help.</p>`],
      ["Your Responsibility", `<p>You are responsible for checking inputs, reviewing assumptions, and deciding whether a tool is appropriate for your situation. Do not use ToolsQuark as the sole basis for high-stakes decisions.</p>`],
      ["Availability And Accuracy", `<p>We work to document formulas and correct reproducible errors, but the site is provided without a guarantee of uninterrupted availability, completeness, fitness for a particular purpose, or error-free results.</p>`],
      ["Acceptable Use", `<p>Do not misuse the site to disrupt service, bypass security, scrape at a harmful rate, misrepresent results as professional advice, or violate applicable law or third-party rights.</p>`],
      ["Intellectual Property And Sources", `<p>ToolsQuark page design, original copy, and code are subject to the rights stated in the project and repository. Linked publications and trademarks remain the property of their respective owners.</p>`],
      ["Changes", `<p>These terms may change as the site evolves. Continued use after an update means the current terms apply.</p>`]
    ]
  }
];

function esc(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function render(page) {
  const canonical = `${site}/${page.file}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": page.type,
      name: page.h1,
      url: canonical,
      description: page.description,
      isPartOf: { "@type": "WebSite", name: "ToolsQuark", url: `${site}/` },
      about: { "@type": "Organization", name: "ToolsQuark", url: `${site}/` },
      dateModified: "2026-06-21"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${site}/` },
        { "@type": "ListItem", position: 2, name: page.h1, item: canonical }
      ]
    }
  ];
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="canonical" href="${canonical}">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
<script type="application/ld+json">
${JSON.stringify(schema, null, 2)}
</script>
<script>window.va=window.va||function(){(window.vaq=window.vaq||[]).push(arguments);};</script>
<script defer src="/_vercel/insights/script.js"></script>
<style>
:root{--primary:#0f172a;--accent:#2563eb;--muted:#64748b;--bg:#f8fafc;--line:#e2e8f0}*{box-sizing:border-box;margin:0;padding:0}body{font-family:Inter,system-ui,sans-serif;background:var(--bg);color:var(--primary);line-height:1.7}.topbar{background:#fff;border-bottom:1px solid var(--line)}.topbar-inner{max-width:1120px;margin:auto;padding:15px 20px;display:flex;align-items:center;justify-content:space-between;gap:20px}.brand{font-size:21px;font-weight:850;color:var(--accent);text-decoration:none}.nav{display:flex;gap:18px;flex-wrap:wrap}.nav a{font-size:14px;font-weight:750;color:#475569;text-decoration:none}.container{max-width:1120px;margin:0 auto;padding:32px 20px 70px}.breadcrumb{font-size:13px;color:var(--muted);margin-bottom:22px}.breadcrumb a{color:var(--accent);font-weight:700;text-decoration:none}.hero{max-width:850px;padding:18px 0 34px;border-bottom:1px solid var(--line)}.hero h1{font-size:42px;line-height:1.15;margin-bottom:12px;letter-spacing:0}.hero p{font-size:18px;color:#475569}.updated{margin-top:14px;font-size:13px;color:var(--muted);font-weight:700}.content{max-width:850px}.section{padding:30px 0;border-bottom:1px solid var(--line)}.section h2{font-size:22px;margin-bottom:12px;letter-spacing:0}.section p,.section li{color:#475569;font-size:16px}.section p+p{margin-top:12px}.section ol,.section ul{padding-left:24px;display:grid;gap:8px}.section a{color:var(--accent);font-weight:700}.trust-links{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:34px}.trust-link{background:#fff;border:1px solid var(--line);border-radius:8px;padding:18px;color:inherit;text-decoration:none}.trust-link strong{display:block;margin-bottom:4px}.trust-link span{font-size:14px;color:var(--muted)}footer{border-top:1px solid var(--line);padding:30px 20px;text-align:center;color:var(--muted);font-size:13px}footer a{color:#475569;font-weight:700;text-decoration:none;margin:0 9px}@media(max-width:720px){.topbar-inner{align-items:flex-start;flex-direction:column}.nav{gap:12px}.container{padding-top:22px}.hero h1{font-size:32px}.hero p{font-size:16px}.trust-links{grid-template-columns:1fr}}
</style>
</head>
<body>
<header class="topbar"><div class="topbar-inner"><a class="brand" href="index.html">ToolsQuark</a><nav class="nav" aria-label="Primary"><a href="health.html">Health</a><a href="mental-health.html">Mental Health</a><a href="lifestyle.html">Lifestyle</a></nav></div></header>
<main class="container">
  <div class="breadcrumb"><a href="index.html">Home</a> &gt; <span>${esc(page.h1)}</span></div>
  <header class="hero"><h1>${esc(page.h1)}</h1><p>${esc(page.intro)}</p><div class="updated">Last updated: ${updated}</div></header>
  <div class="content">${page.sections.map(([title, body]) => `<section class="section"><h2>${esc(title)}</h2>${body}</section>`).join("")}</div>
  <nav class="trust-links" aria-label="Trust and policy pages">
    <a class="trust-link" href="about.html"><strong>About</strong><span>Purpose, ownership, and corrections</span></a>
    <a class="trust-link" href="editorial-policy.html"><strong>Editorial Policy</strong><span>Sources, testing, and updates</span></a>
    <a class="trust-link" href="privacy.html"><strong>Privacy</strong><span>Local inputs and analytics</span></a>
  </nav>
</main>
<footer><div><a href="about.html">About</a><a href="editorial-policy.html">Editorial Policy</a><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a></div><p style="margin-top:12px;">&copy; 2026 ToolsQuark. All rights reserved.</p></footer>
</body>
</html>
`;
}

for (const page of pages) {
  fs.writeFileSync(path.join(root, page.file), render(page), "utf8");
  console.log(`Rendered ${page.file}`);
}
