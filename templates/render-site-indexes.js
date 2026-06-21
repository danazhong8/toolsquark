const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const site = "https://toolsquark.com";
const lastmod = "2026-06-21";
const reviewedDate = "June 21, 2026";

const groups = {
  health: {
    file: "health.html",
    title: "Free Online Health Calculators & Body Trackers | ToolsQuark",
    description: "Discover private health calculators for BMI, TDEE, body fat, hydration, nutrition, pregnancy, cycle tracking, and sleep patterns.",
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
      },
      {
        title: "Sleep Health",
        tools: [
          ["sleep-quality-assessment", "Sleep Pattern Self-Check", "Review sleep initiation, continuity, restoration, and daytime impact.", "Review Sleep"]
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
          ["stress-index-test", "Stress Pattern Self-Check", "Review overload, control strain, reactivity, and daily-life impact.", "Review Stress", true],
          ["anxiety-hyperarousal-assessment", "Anxiety & High-Alert Pattern", "Review physical alertness, persistent worry, sensitivity, and recovery.", "Review Alertness"],
          ["cognitive-overthinking-test", "Overthinking Pattern Self-Check", "Review repetitive thinking, decision loops, threat projection, and action displacement.", "Review Thought Loops"]
        ]
      },
      {
        title: "Work & Cognitive Pacing",
        tools: [
          ["occupational-burnout-level-test", "Occupational Burnout Pattern", "Review work exhaustion, mental distance, efficacy, and recovery interference.", "Review Work Strain"],
          ["focus-attention-diagnostic", "Focus & Attention Pattern", "Review distractibility, task initiation, sustained attention, and organization.", "Review Focus"]
        ]
      },
      {
        title: "Social Connection",
        tools: [
          ["social-anxiety-test", "Social Anxiety Pattern Self-Check", "Review anticipated evaluation, avoidance, self-monitoring, and post-event review.", "Review Social Fear"],
          ["loneliness-level-test", "Connection & Loneliness Pattern", "Review emotional connection, support access, belonging, and withdrawal barriers.", "Review Connection"]
        ]
      }
    ]
  },
  lifestyle: {
    file: "lifestyle.html",
    title: "Lifestyle Calculators & Behavior Self-Checks | ToolsQuark",
    description: "Use private lifestyle tools for sleep planning, steps, procrastination, follow-through, smartphone use, and social media habits.",
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
          ["age-calculator", "Age Calculator", "Calculate exact chronological age in years, months, and days.", "Calculate Age"]
        ]
      },
      {
        title: "Execution & Discipline",
        tools: [
          ["procrastination-test", "Procrastination Pattern Self-Check", "Review initiation, avoidance, short-term reward pull, and perfectionistic delay.", "Review Delay", true],
          ["self-discipline-test", "Follow-Through Pattern Self-Check", "Review starting friction, consistency, immediate impulses, and restarting.", "Review Follow-Through"]
        ]
      },
      {
        title: "Movement & Digital Habits",
        tools: [
          ["daily-steps-goal-calculator", "Daily Steps Goal Calculator", "Build a progressive step target plan from your current baseline.", "Plan Steps"],
          ["steps-to-calories-converter", "Steps to Calories Converter", "Estimate active calories from step count and body weight.", "Convert Steps"],
          ["smartphone-addiction-test", "Smartphone Use Pattern Self-Check", "Review automatic checking, stopping control, cue reactivity, and displacement.", "Review Phone Use"],
          ["social-media-addiction-index", "Social Media Use Pattern Self-Check", "Review feed capture, stopping control, social evaluation, and displacement.", "Review Social Media"]
        ]
      }
    ]
  }
};

const allTools = Object.values(groups).flatMap((group) =>
  group.sections.flatMap((section) => section.tools.map((tool) => tool[0]))
);

const allToolRecords = Object.values(groups).flatMap((group) =>
  group.sections.flatMap((section) => section.tools.map((tool) => ({
    slug: tool[0],
    name: tool[1],
    description: tool[2],
    category: group.categoryLabel,
    section: section.title
  })))
);

function esc(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function renderToolCard(tool, options = {}) {
  const [slug, name, desc, action, featured] = tool;
  const popular = options.popular || featured;
  const badge = options.badge || (popular ? "Popular" : "1-3 min");
  const analytics = options.source ? ` data-tool-slug="${slug}" data-source="${esc(options.source)}"` : "";
  return `
        <a href="tools/${slug}.html" class="tool-card${popular ? " popular-choice" : ""}" data-tool="${esc(name + " " + desc)}"${analytics}>
            <span class="card-badge ${popular ? "badge-popular" : "badge-time"}">${esc(badge)}</span>
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
  const startingPoints = [
    groups.health.sections[0].tools[0],
    groups.health.sections[0].tools[1],
    groups.health.sections[1].tools[1],
    groups.mental.sections[0].tools[0],
    groups.mental.sections[0].tools[1],
    groups.mental.sections[1].tools[1],
    groups.lifestyle.sections[0].tools[0],
    groups.lifestyle.sections[1].tools[0]
  ];
  const categoryDescriptions = {
    health: "Body metrics, nutrition, activity, cycle, pregnancy, and sleep tools.",
    mental: "Private self-checks for stress, anxiety, focus, burnout, and connection.",
    lifestyle: "Sleep planning, daily movement, follow-through, and digital habits."
  };
  const categoryLinks = Object.entries(groups).map(([key, group]) => {
    const toolCount = group.sections.reduce((count, section) => count + section.tools.length, 0);
    return `<a href="${group.file}" class="category-link" data-category="${key}" data-source="category-quick"><span>${esc(group.categoryLabel)}</span><small>${toolCount} tools</small><p>${esc(categoryDescriptions[key])}</p><strong>Browse category &rarr;</strong></a>`;
  }).join("");
  const directoryGroups = Object.entries(groups).map(([key, group]) => {
    const toolCount = group.sections.reduce((count, section) => count + section.tools.length, 0);
    const topics = group.sections.map((section) => `<div class="directory-topic"><h4>${esc(section.title)}</h4><ul>${section.tools.map((tool) => `<li><a href="tools/${tool[0]}.html" data-tool-slug="${tool[0]}" data-source="directory">${esc(tool[1])}</a></li>`).join("")}</ul></div>`).join("");
    return `<section class="directory-group" aria-labelledby="directory-${key}"><div class="directory-intro"><h3 id="directory-${key}"><a href="${group.file}" data-category="${key}" data-source="directory-heading">${esc(group.categoryLabel)}</a></h3><p>${esc(categoryDescriptions[key])}</p><a href="${group.file}" class="directory-category-link" data-category="${key}" data-source="directory-view-all">View all ${toolCount} tools &rarr;</a></div><div class="directory-topics">${topics}</div></section>`;
  }).join("");
  const searchIndex = JSON.stringify(allToolRecords).replace(/</g, "\\u003c");
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="canonical" href="${site}/">
<title>Free Health Calculators & Wellness Self-Checks | ToolsQuark</title>
<meta name="description" content="Use free BMI, calorie, sleep, body composition, lifestyle, and wellness self-check tools. No registration, with inputs processed in your browser.">
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
    "@type": "CollectionPage",
    name: "Free Health Calculators and Wellness Self-Checks",
    url: `${site}/`,
    description: "A free collection of private health calculators, lifestyle tools, and educational wellness self-checks.",
    mainEntity: { "@id": `${site}/#tool-directory` },
    publisher: { "@id": `${site}/#organization` }
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${site}/#starting-points`,
    name: "Editor-selected ToolsQuark starting points",
    itemListElement: startingPoints.map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: tool[1],
      url: `${site}/tools/${tool[0]}.html`
    }))
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${site}/#tool-directory`,
    name: "ToolsQuark health and wellness tool directory",
    numberOfItems: allToolRecords.length,
    itemListElement: allToolRecords.map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: tool.name,
      url: `${site}/tools/${tool.slug}.html`
    }))
  }
], null, 2)}
</script>
<script>window.va=window.va||function(){(window.vaq=window.vaq||[]).push(arguments);};</script>
<script defer src="/_vercel/insights/script.js"></script>
<style>${baseStyles()}.container{max-width:1280px;margin-top:32px}.tool-card,.e-e-a-t-section{border-radius:8px}.navbar{background:white;padding:15px max(20px,5%);display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #e2e8f0;position:sticky;top:0;z-index:10}.logo{font-size:22px;font-weight:850;color:var(--accent);text-decoration:none}.nav-links{display:flex;gap:24px}.nav-links a{text-decoration:none;color:#4b5563;font-weight:700;font-size:14px}.hero{text-align:center;margin:0 auto 32px;max-width:880px}.hero h1{font-size:2.85rem;font-weight:850;letter-spacing:0;line-height:1.12;margin-bottom:14px;color:#0f172a}.hero p{color:var(--text-muted);font-size:1.05rem;max-width:760px;margin:0 auto}.trust-badges{display:flex;justify-content:center;gap:20px;margin-top:16px;color:#047857;font-weight:750;font-size:.9rem;flex-wrap:wrap}.search-wrapper{max-width:760px;margin:0 auto 34px;position:relative}.search-input{width:100%;padding:16px 20px;border:2px solid #cbd5e1;border-radius:8px;font-size:16px;background:white}.search-input:focus{border-color:var(--accent);outline:none;box-shadow:0 0 0 4px var(--accent-light)}.search-results{display:none;position:absolute;left:0;right:0;top:calc(100% + 8px);z-index:20;background:white;border:1px solid #cbd5e1;border-radius:8px;box-shadow:0 18px 35px rgba(15,23,42,.14);overflow:hidden}.search-results.is-open{display:block}.search-result{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:2px 18px;padding:13px 16px;border-bottom:1px solid #eef2f7;text-decoration:none;color:inherit}.search-result:last-child{border-bottom:none}.search-result:hover,.search-result:focus-visible{background:#eff6ff;outline:none}.search-result strong{font-size:14px;color:#1e293b}.search-result span{grid-row:1 / 3;grid-column:2;color:var(--accent);font-size:12px;font-weight:800;align-self:center}.search-result small{font-size:12px;color:var(--text-muted)}.search-empty{padding:16px;color:var(--text-muted);font-size:14px}.category-band{padding:26px 0 32px;border-top:1px solid #e2e8f0;border-bottom:1px solid #e2e8f0}.section-heading{display:flex;justify-content:space-between;align-items:end;gap:20px;margin-bottom:16px}.section-heading h2{font-size:1.35rem;line-height:1.25}.section-heading p{font-size:.9rem;color:var(--text-muted)}.category-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.category-link{padding:20px 0;text-decoration:none;color:inherit;border-top:3px solid #cbd5e1}.category-link:hover,.category-link:focus-visible{border-color:var(--accent);outline:none}.category-link span{font-size:1.05rem;font-weight:850;color:#1e293b}.category-link small{margin-left:8px;color:var(--text-muted);font-weight:750}.category-link p{color:var(--text-muted);font-size:.9rem;line-height:1.5;margin:7px 0 12px;max-width:340px}.category-link strong{font-size:.82rem;color:var(--accent)}.popular-section{padding-top:36px}.popular-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px}.popular-grid .tool-card{padding:22px;min-height:220px}.popular-grid .tool-name{font-size:1.03rem}.popular-grid .tool-desc{font-size:.88rem}.directory-section{padding-top:54px}.directory-list{border-bottom:1px solid #cbd5e1}.directory-group{display:grid;grid-template-columns:230px minmax(0,1fr);gap:34px;padding:28px 0;border-top:1px solid #cbd5e1}.directory-intro h3{font-size:1.12rem;line-height:1.3}.directory-intro h3 a{color:#1e293b;text-decoration:none}.directory-intro h3 a:hover,.directory-intro h3 a:focus-visible{color:var(--accent)}.directory-intro p{font-size:.85rem;color:var(--text-muted);line-height:1.55;margin:8px 0 12px}.directory-category-link{font-size:.8rem;color:var(--accent);font-weight:800;text-decoration:none}.directory-topics{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:26px}.directory-topic h4{font-size:.82rem;color:#475569;margin-bottom:9px}.directory-topic ul{list-style:none;display:grid;gap:7px}.directory-topic a{color:#1e293b;text-decoration:none;font-size:.88rem;font-weight:700}.directory-topic a:hover,.directory-topic a:focus-visible{color:var(--accent);text-decoration:underline}.quality-section{margin-top:54px;padding:34px 0;border-top:1px solid #cbd5e1;border-bottom:1px solid #cbd5e1}.quality-intro{max-width:760px;margin-bottom:24px}.quality-intro h2{font-size:1.35rem;margin-bottom:7px}.quality-intro p{font-size:.92rem;color:var(--text-muted)}.quality-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:34px}.quality-item h3{font-size:1rem;margin-bottom:7px}.quality-item p{font-size:.88rem;color:var(--text-muted);line-height:1.6}.quality-item a{color:var(--accent);font-weight:800}.quality-meta{display:flex;gap:12px 24px;flex-wrap:wrap;margin-top:25px;padding-top:18px;border-top:1px solid #e2e8f0;color:#475569;font-size:.78rem;font-weight:750}@media(max-width:1050px){.popular-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.directory-group{grid-template-columns:190px minmax(0,1fr)}}@media(max-width:820px){.directory-group{grid-template-columns:1fr}.directory-intro{max-width:620px}.directory-topics{grid-template-columns:repeat(2,minmax(0,1fr))}.quality-grid{grid-template-columns:1fr;gap:22px}}@media(max-width:768px){.container{margin-top:24px}.navbar{align-items:flex-start;gap:12px;flex-direction:column}.nav-links{gap:14px;flex-wrap:wrap}.hero h1{font-size:2.15rem}.category-grid,.popular-grid,.directory-topics{grid-template-columns:1fr}.section-heading{align-items:flex-start;flex-direction:column;gap:4px}.search-result{grid-template-columns:minmax(0,1fr)}.search-result span{grid-row:auto;grid-column:auto}.popular-grid .tool-card{min-height:0}}</style>
</head>
<body>
<nav class="navbar"><a href="index.html" class="logo">ToolsQuark</a><div class="nav-links"><a href="health.html">Health</a><a href="mental-health.html">Mental Health</a><a href="lifestyle.html">Lifestyle</a></div></nav>
<div class="container">
    <header class="hero"><h1>Free Health Calculators & Wellness Self-Checks</h1><p>Private, browser-side tools for body metrics, mental wellness, sleep, habits, and daily health planning.</p><div class="trust-badges"><span>Free to use</span><span>No registration</span><span>Inputs stay in your browser</span></div></header>
    <div class="search-wrapper" id="searchWrapper"><input type="search" id="searchInput" class="search-input" placeholder="Search BMI, burnout, sleep, calories..." autocomplete="off" aria-label="Search all ToolsQuark tools" aria-controls="searchResults" aria-expanded="false"><div class="search-results" id="searchResults" role="region" aria-label="Tool search results" aria-live="polite"></div></div>
    <section class="category-band" aria-labelledby="category-heading"><div class="section-heading"><h2 id="category-heading">Browse By Category</h2><p>Choose a focused collection or search every tool above.</p></div><div class="category-grid">${categoryLinks}</div></section>
    <section class="popular-section" aria-labelledby="popular-heading"><div class="section-heading"><h2 id="popular-heading">Editor-Selected Starting Points</h2><p>A balanced set of practical tools while anonymous usage data is collected.</p></div><div class="popular-grid">${startingPoints.map((tool) => renderToolCard(tool, { popular: true, badge: "Editor pick", source: "starting-points" })).join("")}</div></section>
    <section class="directory-section" aria-labelledby="directory-heading"><div class="section-heading"><h2 id="directory-heading">Explore All Tools By Topic</h2><p>Open any calculator or self-check directly from the complete directory.</p></div><div class="directory-list">${directoryGroups}</div></section>
    <section class="quality-section" aria-labelledby="quality-heading"><div class="quality-intro"><h2 id="quality-heading">How ToolsQuark Builds Trust</h2><p>Every tool is designed to make its purpose, method, limits, and data handling easy to inspect before you rely on a result.</p></div><div class="quality-grid"><div class="quality-item"><h3>Methods And Sources</h3><p>Calculators disclose formulas, assumptions, examples, limitations, and references. Original self-checks disclose scoring and validation status. Read the <a href="editorial-policy.html">Editorial & Methodology Policy</a>.</p></div><div class="quality-item"><h3>Private By Design</h3><p>Core calculations and assessment answers stay in your browser. Homepage discovery events never include search terms, answers, or calculator inputs. Read the <a href="privacy.html">Privacy Policy</a>.</p></div><div class="quality-item"><h3>Review And Corrections</h3><p>Pages include update dates and correction guidance. Learn who maintains the library on the <a href="about.html">About page</a> or report a reproducible issue through GitHub.</p></div></div><div class="quality-meta"><span>Homepage reviewed: ${reviewedDate}</span><span>${allToolRecords.length} published tools</span><span>Educational information, not diagnosis or treatment</span></div></section>
</div>
<script>
const searchTools=${searchIndex};
const searchInput=document.getElementById('searchInput');
const searchResults=document.getElementById('searchResults');
const searchWrapper=document.getElementById('searchWrapper');
let searchTracked=false;
function trackHomepageEvent(name,data){if(typeof window.va==='function'){window.va('event',{name,data});}}
function closeSearch(){searchResults.classList.remove('is-open');searchInput.setAttribute('aria-expanded','false');}
function renderSearchResults(){
  const query=searchInput.value.trim().toLowerCase();
  if(!query){searchResults.innerHTML='';closeSearch();return;}
  if(!searchTracked){trackHomepageEvent('homepage_search_start',{source:'homepage'});searchTracked=true;}
  const matches=searchTools.filter((tool)=>[tool.name,tool.description,tool.category,tool.section].join(' ').toLowerCase().includes(query)).slice(0,8);
  searchResults.innerHTML=matches.length?matches.map((tool)=>'<a class="search-result" href="tools/'+tool.slug+'.html" data-tool-slug="'+tool.slug+'" data-source="search"><strong>'+tool.name+'</strong><small>'+tool.section+' &middot; '+tool.category+'</small><span>Open &rarr;</span></a>').join(''):'<div class="search-empty">No matching tool found. Try a broader term or browse a category.</div>';
  searchResults.classList.add('is-open');
  searchInput.setAttribute('aria-expanded','true');
}
searchInput.addEventListener('input',renderSearchResults);
searchInput.addEventListener('focus',renderSearchResults);
searchInput.addEventListener('keydown',(event)=>{if(event.key==='Escape'){closeSearch();searchInput.blur();}});
document.addEventListener('click',(event)=>{
  if(!searchWrapper.contains(event.target)){closeSearch();}
  const toolLink=event.target.closest('[data-tool-slug]');
  if(toolLink){trackHomepageEvent('homepage_tool_open',{source:toolLink.dataset.source||'unknown',slug:toolLink.dataset.toolSlug});return;}
  const categoryLink=event.target.closest('[data-category]');
  if(categoryLink){trackHomepageEvent('homepage_category_open',{source:categoryLink.dataset.source||'unknown',category:categoryLink.dataset.category});}
});
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
