const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const site = "https://toolsquark.com";
const lastmod = "2026-06-21";

const groups = {
  health: {
    file: "health.html",
    title: "Free Online Health Calculators & Body Trackers | ToolsQuark",
    description: "Discover free, private health calculators for BMI, TDEE, body fat, hydration, nutrition, pregnancy, and cycle tracking.",
    h1: "Data-Driven Health Calculators",
    intro: "Decode body metrics with private, browser-side tools built for fast, practical health planning.",
    categoryLabel: "Health Tools",
    guide: [
      ["Choose The Right Starting Point", "Use BMI or waist ratios for broad screening, BMR/TDEE for energy planning, and body-fat or lean-mass formulas for rough composition context. No single number describes overall health."],
      ["How Results Should Be Used", "Each calculator discloses its formula, assumptions, example, limits, and sources. Treat results as starting estimates and use professional guidance for pregnancy, symptoms, medical diets, or other high-stakes decisions."]
    ],
    sections: [
      {
        title: "Weight & Body Composition",
        tools: [
          ["bmi-calculator", "BMI Calculator", "Check the classic height-to-weight baseline for general adult screening.", "Check BMI"],
          ["tdee-calculator", "TDEE Calculator", "Estimate total daily calorie burn from body metrics and activity level.", "Calculate TDEE", true],
          ["bmr-calculator", "BMR Calculator", "Estimate resting calorie needs with the Mifflin-St Jeor equation.", "Calculate BMR"],
          ["body-fat-calculator", "Body Fat Calculator", "Estimate body fat percentage using circumference measurements.", "Estimate Fat %"],
          ["lean-body-mass-calculator", "Lean Body Mass Calculator", "Estimate non-fat body mass from height, weight, and sex profile.", "Check Lean Mass"],
          ["waist-to-height-ratio-calculator", "Waist-to-Height Ratio", "Screen central fat distribution by comparing waist with height.", "Check WHtR"],
          ["waist-hip-ratio-calculator", "Waist Hip Ratio", "Compare waist and hip measurements for body fat distribution context.", "Check WHR"],
          ["healthy-weight-range-calculator", "Healthy Weight Range", "Estimate a BMI-based adult weight range from height.", "Find Range"]
        ]
      },
      {
        title: "Nutrition & Activity",
        tools: [
          ["water-intake-calculator", "Water Intake Calculator", "Estimate daily hydration needs from weight and exercise duration.", "Plan Hydration", true],
          ["calorie-calculator", "Calorie Calculator", "Estimate maintenance calories and practical nutrition targets.", "Plan Calories"],
          ["macro-calculator", "Macro Calculator", "Split calories into protein, carbohydrates, and fat targets.", "Split Macros"],
          ["protein-calculator", "Protein Calculator", "Find a realistic protein range for training and recovery goals.", "Set Protein"],
          ["running-pace-calculator", "Running Pace Calculator", "Convert distance and finish time into pace per kilometer or mile.", "Calculate Pace"]
        ]
      },
      {
        title: "Maternal & Cycle Wellness",
        tools: [
          ["due-date-calculator", "Due Date Calculator", "Estimate due date, gestational age, and trimester from LMP.", "Track Pregnancy"],
          ["period-calculator", "Period Calculator", "Estimate next period, ovulation day, and fertile window.", "Predict Cycle"]
        ]
      }
    ]
  },
  mental: {
    file: "mental-health.html",
    title: "Private Mental Wellness Self-Checks | ToolsQuark",
    description: "Use private educational self-checks for stress, anxiety, burnout, overthinking, focus, loneliness, and social anxiety with transparent scoring.",
    h1: "Private Mental Wellness Self-Checks",
    intro: "Reflect on current patterns with original browser-local checklists that disclose their scoring and limits.",
    categoryLabel: "Mental Health Tools",
    guide: [
      ["Educational, Not Diagnostic", "These are original ToolsQuark checklists, not validated clinical instruments. Scores summarize selected answer frequency and cannot diagnose, rule out, or measure the severity of a condition."],
      ["When A Self-Check Is Not Enough", "Seek qualified support when symptoms persist, intensify, impair daily life, or create safety concerns. Use urgent local help when you may be unable to stay safe."]
    ],
    sections: [
      {
        title: "Mood & Nervous System",
        tools: [
          ["stress-index-test", "Stress Index Test", "Review stress load, tension, and recovery reserve.", "Assess Stress", true],
          ["anxiety-hyperarousal-assessment", "Anxiety & Hyperarousal Self-Check", "Review high-alert body patterns, worry, and sensory load.", "Review Anxiety Signals"],
          ["cognitive-overthinking-test", "Cognitive Overthinking Self-Check", "Identify rumination, decision paralysis, and repetitive worry loops.", "Check Overthinking"]
        ]
      },
      {
        title: "Work & Cognitive Pacing",
        tools: [
          ["occupational-burnout-level-test", "Occupational Burnout Self-Check", "Review work exhaustion, detachment, and perceived efficacy.", "Check Burnout"],
          ["focus-attention-diagnostic", "Focus & Attention Self-Check", "Assess distractibility, task initiation, and attention stability.", "Check Focus"]
        ]
      },
      {
        title: "Social Connection",
        tools: [
          ["social-anxiety-test", "Social Anxiety Self-Check", "Review fear of judgment, avoidance, and post-event replay.", "Review Social Anxiety"],
          ["loneliness-level-test", "Loneliness Self-Check", "Reflect on perceived support, connection depth, and isolation.", "Check Connection"]
        ]
      }
    ]
  },
  lifestyle: {
    file: "lifestyle.html",
    title: "Free Lifestyle Calculators, Habit Trackers & Sleep Planners | ToolsQuark",
    description: "Optimize routine with free lifestyle tools for sleep, steps, procrastination, self-discipline, smartphone use, and social media habits.",
    h1: "Lifestyle Calculators & Habit Self-Checks",
    intro: "Plan sleep, activity, and routines with transparent calculators and private behavior self-checks.",
    categoryLabel: "Lifestyle Tools",
    guide: [
      ["Calculators And Self-Checks", "Date, pace, sleep, and step tools apply disclosed arithmetic or planning heuristics. Habit and digital-use pages are original self-checks with editorial score bands, not personality or addiction diagnoses."],
      ["Build From A Real Baseline", "Use recent behavior rather than an ideal day, change one variable at a time, and judge usefulness by sustainable real-world outcomes instead of chasing a perfect score."]
    ],
    sections: [
      {
        title: "Sleep & Recovery",
        tools: [
          ["sleep-calculator", "Sleep Calculator", "Create a rough duration plan with clear cycle-timing limits.", "Plan Sleep", true],
          ["sleep-quality-assessment", "Sleep Quality Self-Check", "Review sleep latency, awakenings, consistency, and daytime fatigue.", "Review Sleep"],
          ["age-calculator", "Age Calculator", "Calculate exact chronological age in years, months, and days.", "Calculate Age"]
        ]
      },
      {
        title: "Execution & Discipline",
        tools: [
          ["procrastination-test", "Procrastination Self-Check", "Identify task delay, avoidance, and perfectionism loops.", "Check Delay", true],
          ["self-discipline-test", "Self-Discipline Self-Check", "Review consistency, impulse friction, and habit follow-through.", "Review Follow-Through"]
        ]
      },
      {
        title: "Movement & Digital Habits",
        tools: [
          ["daily-steps-goal-calculator", "Daily Steps Goal Calculator", "Build a progressive step target plan from your current baseline.", "Plan Steps"],
          ["steps-to-calories-converter", "Steps to Calories Converter", "Estimate active calories from step count and body weight.", "Convert Steps"],
          ["smartphone-addiction-test", "Smartphone Use Self-Check", "Review automatic checking and phone-use disruption.", "Review Phone Use"],
          ["social-media-addiction-index", "Social Media Use Self-Check", "Review feed capture, validation loops, comparison, and FOMO.", "Review Social Media"]
        ]
      }
    ]
  }
};

const allTools = Object.values(groups).flatMap((group) =>
  group.sections.flatMap((section) => section.tools.map((tool) => tool[0]))
);

function esc(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function renderToolCard(tool) {
  const [slug, name, desc, action, featured] = tool;
  return `
        <a href="tools/${slug}.html" class="tool-card${featured ? " popular-choice" : ""}" data-tool="${esc(name + " " + desc)}">
            <span class="card-badge ${featured ? "badge-popular" : "badge-time"}">${featured ? "Popular" : "1-3 min"}</span>
            <div class="tool-meta">
                <span class="tool-name">${esc(name)}</span>
                <span class="tool-desc">${esc(desc)}</span>
            </div>
            <div class="card-footer"><span>${esc(action)}</span><span class="go-link">&rarr;</span></div>
        </a>`;
}

function baseStyles() {
  return `:root{--primary:#0f172a;--accent:#2563eb;--accent-light:#eff6ff;--text-muted:#64748b;--bg:#f8fafc;--popular:#f59e0b}*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:var(--primary);line-height:1.6}.container{max-width:1050px;margin:40px auto 60px;padding:0 20px}.breadcrumb{font-size:.85rem;color:var(--text-muted);margin-bottom:25px;display:flex;gap:6px}.breadcrumb a{color:var(--accent);text-decoration:none;font-weight:700}.header{margin-bottom:46px}.header h1{font-size:2.8rem;font-weight:850;letter-spacing:0;color:#0f172a;margin-bottom:10px}.header p{color:var(--text-muted);font-size:1.05rem;max-width:760px}.sub-category-title{font-size:1.35rem;font-weight:850;margin:42px 0 18px;color:#1e293b;border-left:4px solid var(--accent);padding-left:12px}.tools-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(285px,1fr));gap:22px}.tool-card{background:white;padding:26px;border-radius:20px;border:1px solid #e5e7eb;text-decoration:none;color:inherit;transition:.25s;display:flex;flex-direction:column;justify-content:space-between;position:relative}.tool-card:hover{border-color:var(--accent);box-shadow:0 20px 25px -5px rgba(37,99,235,.06);transform:translateY(-3px)}.popular-choice{border-color:#fbd38d;background:#fffaf0}.card-badge{position:absolute;top:14px;right:18px;font-size:.72rem;font-weight:800;padding:2px 8px;border-radius:6px}.badge-popular{background:#fef3c7;color:#d97706}.badge-time{background:#f1f5f9;color:#475569}.tool-meta{margin:8px 0 12px}.tool-name{font-weight:850;display:block;font-size:1.12rem;color:#1e293b;margin-bottom:6px;padding-right:76px}.tool-desc{font-size:.94rem;color:var(--text-muted);line-height:1.5}.card-footer{margin-top:16px;display:flex;justify-content:space-between;font-size:.85rem;font-weight:800;color:var(--accent)}.go-link{opacity:0;transition:.2s}.tool-card:hover .go-link{opacity:1}.topic-guide{margin-top:64px;padding:32px 0;border-top:1px solid #e2e8f0;border-bottom:1px solid #e2e8f0;display:grid;grid-template-columns:1fr 1fr;gap:36px}.topic-guide h2{font-size:1.2rem;margin-bottom:8px}.topic-guide p{color:var(--text-muted);font-size:.95rem}.topic-guide a{color:var(--accent);font-weight:750}.e-e-a-t-section{margin-top:36px;padding:28px 0}.e-e-a-t-section h2{font-size:1.3rem;font-weight:850;margin-bottom:12px}.e-e-a-t-section p,.disclaimer-box{color:var(--text-muted);font-size:.95rem}.e-e-a-t-section a{color:var(--accent);font-weight:750}.disclaimer-box{font-style:italic;border-left:3px solid #cbd5e1;padding-left:14px;margin-top:14px}footer{margin-top:80px;padding:40px 20px;border-top:1px solid #e2e8f0;text-align:center;color:#64748b}footer a{text-decoration:none;color:inherit;margin:0 10px}@media(max-width:768px){.header h1{font-size:2.2rem}.tools-grid,.topic-guide{grid-template-columns:1fr}.topic-guide{gap:24px}.e-e-a-t-section{padding:22px 0}}`;
}

function footer() {
  return `<footer><div><a href="about.html">About</a><a href="editorial-policy.html">Editorial Policy</a><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a></div><p style="margin-top:18px;font-size:.75rem;">&copy; 2026 ToolsQuark. All rights reserved.</p></footer>`;
}

function renderCategory(group) {
  const sections = group.sections.map((section) => `
    <h2 class="sub-category-title">${esc(section.title)}</h2>
    <div class="tools-grid">${section.tools.map(renderToolCard).join("")}
    </div>`).join("");
  const guide = `<section class="topic-guide" aria-label="How to use these tools">${group.guide.map(([title, body]) => `<div><h2>${esc(title)}</h2><p>${esc(body)}</p></div>`).join("")}</section>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="canonical" href="${site}/${group.file}">
<title>${esc(group.title)}</title>
<meta name="description" content="${esc(group.description)}">
<script type="application/ld+json">
${JSON.stringify([
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: group.categoryLabel,
    url: `${site}/${group.file}`,
    description: group.description,
    isPartOf: { "@type": "WebSite", name: "ToolsQuark", url: `${site}/` },
    publisher: { "@type": "Organization", name: "ToolsQuark", url: `${site}/` }
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: group.categoryLabel,
    itemListElement: group.sections.flatMap((section) => section.tools).map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: tool[1],
      url: `${site}/tools/${tool[0]}.html`
    }))
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site}/` },
      { "@type": "ListItem", position: 2, name: group.categoryLabel, item: `${site}/${group.file}` }
    ]
  }
], null, 2)}
</script>
<script>window.va=window.va||function(){(window.vaq=window.vaq||[]).push(arguments);};</script>
<script defer src="/_vercel/insights/script.js"></script>
<style>${baseStyles()}.container{max-width:1200px}.tool-card,.e-e-a-t-section{border-radius:8px}</style>
</head>
<body>
<div class="container">
    <div class="breadcrumb"><a href="index.html">Home</a> &gt; <span>${esc(group.categoryLabel)}</span></div>
    <header class="header"><h1>${esc(group.h1)}</h1><p>${esc(group.intro)}</p></header>
${sections}
${guide}
    <section class="e-e-a-t-section">
        <h2>Privacy-First, Evidence-Informed Tools</h2>
        <p>Calculations and assessment scoring run inside your browser, without registration or server-side answer storage. Read how formulas, sources, self-check labels, and corrections are handled in the <a href="editorial-policy.html">Editorial & Methodology Policy</a>.</p>
        <div class="disclaimer-box">These tools provide general wellness information and self-reflection only. They do not replace professional medical, mental health, nutrition, or legal advice.</div>
    </section>
</div>
${footer()}
</body>
</html>
`;
}

function renderHome() {
  const featured = [
    groups.health.sections[0].tools[0],
    groups.health.sections[0].tools[1],
    groups.health.sections[1].tools[1],
    groups.mental.sections[0].tools[0],
    groups.mental.sections[0].tools[1],
    groups.mental.sections[1].tools[1],
    groups.lifestyle.sections[0].tools[0],
    groups.lifestyle.sections[1].tools[0],
    groups.lifestyle.sections[2].tools[0]
  ];
  const categoryLinks = Object.values(groups).map((group) => `<a href="${group.file}" class="view-all-btn">View All ${esc(group.categoryLabel)}</a>`).join("");
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="canonical" href="${site}/">
<title>ToolsQuark | Health Calculators & Wellness Self-Checks</title>
<meta name="description" content="Access privacy-focused health calculators, lifestyle tools, and mental wellness self-checks. No registration, free, and browser-side.">
<script type="application/ld+json">
${JSON.stringify([
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site}/#website`,
    name: "ToolsQuark",
    url: `${site}/`,
    description: "A privacy-focused library of health calculators, lifestyle utilities, and educational wellness self-checks.",
    publisher: { "@id": `${site}/#organization` }
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site}/#organization`,
    name: "ToolsQuark",
    url: `${site}/`,
    sameAs: ["https://github.com/danazhong8/toolsquark"]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "ToolsQuark Tool Library",
    url: `${site}/`,
    applicationCategory: "HealthApplication",
    operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@id": `${site}/#organization` }
  }
], null, 2)}
</script>
<script>window.va=window.va||function(){(window.vaq=window.vaq||[]).push(arguments);};</script>
<script defer src="/_vercel/insights/script.js"></script>
<style>${baseStyles()}.container{max-width:1200px}.tool-card,.e-e-a-t-section{border-radius:8px}.navbar{background:white;padding:15px 5%;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #e2e8f0;position:sticky;top:0;z-index:10}.logo{font-size:22px;font-weight:850;color:var(--accent);text-decoration:none}.nav-links a{margin-left:25px;text-decoration:none;color:#4b5563;font-weight:700;font-size:14px}.hero{text-align:center;margin-bottom:44px}.hero h1{font-size:3.1rem;font-weight:850;letter-spacing:0;margin-bottom:14px;background:linear-gradient(to right,#0f172a,#2563eb);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.trust-badges{display:flex;justify-content:center;gap:20px;margin-top:18px;color:#059669;font-weight:750;font-size:.9rem;flex-wrap:wrap}.search-wrapper{max-width:650px;margin:0 auto 50px}.search-bar-box{display:flex;gap:12px}.search-input{flex:1;padding:16px 20px;border:2px solid #e2e8f0;border-radius:8px;font-size:16px}.search-input:focus{border-color:var(--accent);outline:none;box-shadow:0 0 0 4px var(--accent-light)}.surprise-btn{padding:0 22px;background:white;border:2px solid #e2e8f0;border-radius:8px;font-weight:800;cursor:pointer}.view-all-row{display:flex;gap:12px;flex-wrap:wrap;margin-top:30px}.view-all-btn{display:inline-block;padding:12px 20px;background:white;color:var(--accent);border:2px solid var(--accent);border-radius:8px;font-weight:800;text-decoration:none}@media(max-width:768px){.hero h1{font-size:2.25rem}.search-bar-box{flex-direction:column}.nav-links a{margin-left:12px}}</style>
</head>
<body>
<nav class="navbar"><a href="index.html" class="logo">ToolsQuark</a><div class="nav-links"><a href="health.html">Health</a><a href="mental-health.html">Mental Health</a><a href="lifestyle.html">Lifestyle</a></div></nav>
<div class="container">
    <header class="hero"><h1>Health Calculators & Wellness Self-Checks</h1><p style="color:var(--text-muted);font-size:1.05rem;">Private, browser-side tools for body metrics, mental wellness, sleep, habits, and daily health planning.</p><div class="trust-badges"><span>Free to use</span><span>No registration</span><span>Local inputs</span></div></header>
    <div class="search-wrapper"><div class="search-bar-box"><input type="text" id="searchInput" class="search-input" placeholder="Search BMI, burnout, sleep, calories..." oninput="filterTools()" aria-label="Search tools"><button class="surprise-btn" onclick="goToRandomTool()">Surprise Me</button></div></div>
    <h2 class="sub-category-title">Featured Tools</h2>
    <div class="tools-grid">${featured.map(renderToolCard).join("")}
    </div>
    <div class="view-all-row">${categoryLinks}</div>
    <section class="topic-guide" aria-label="How ToolsQuark works"><div><h2>Transparent Methods</h2><p>Professionalized pages show formulas or scoring, examples, assumptions, limits, sources, and update dates. Original self-checks are explicitly labeled as non-validated.</p></div><div><h2>Accountable Maintenance</h2><p>Read the <a href="editorial-policy.html">Editorial Policy</a> and <a href="about.html">About page</a>, or report reproducible errors through the public GitHub repository.</p></div></section>
</div>
<script>
function filterTools(){const query=document.getElementById('searchInput').value.toLowerCase();document.querySelectorAll('.tool-card').forEach((card)=>{const text=(card.dataset.tool||card.textContent).toLowerCase();card.style.display=text.includes(query)?'flex':'none';});}
function goToRandomTool(){const cards=Array.from(document.querySelectorAll('.tool-card')).filter((card)=>card.style.display!=='none');if(cards.length){window.location.href=cards[Math.floor(Math.random()*cards.length)].getAttribute('href');}}
</script>
${footer()}
</body>
</html>
`;
}

function renderSitemap() {
  const urls = [
    "",
    "health.html",
    "mental-health.html",
    "lifestyle.html",
    "about.html",
    "editorial-policy.html",
    "privacy.html",
    "terms.html",
    ...allTools.map((slug) => `tools/${slug}.html`)
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${site}/${url}</loc><lastmod>${lastmod}</lastmod></url>`).join("\n")}
</urlset>
`;
}

fs.writeFileSync(path.join(root, "index.html"), renderHome(), "utf8");
for (const group of Object.values(groups)) {
  fs.writeFileSync(path.join(root, group.file), renderCategory(group), "utf8");
}
fs.writeFileSync(path.join(root, "sitemap.xml"), renderSitemap(), "utf8");
console.log("Rendered index.html, category pages, and sitemap.xml");
