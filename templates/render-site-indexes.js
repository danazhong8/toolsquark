const fs = require("fs");
const path = require("path");
const guides = require("./guide-page-data");

const root = path.resolve(__dirname, "..");
const site = "https://toolsquark.com";
const lastmod = "2026-07-27";
const pageLastmods = {
  "tools/bmr-calculator.html": "2026-09-28",
  "tools/tdee-calculator.html": "2026-09-28",
  "tools/body-fat-calculator.html": "2026-09-28",
  "tools/water-intake-calculator.html": "2026-10-10",
  "tools/due-date-calculator.html": "2026-10-10",
  "tools/walking-time-to-steps-calculator.html": "2026-10-10"
};
const reviewedDate = "July 27, 2026";

const groups = {
  health: {
    file: "health.html",
    title: "Free Online Health Calculators & Body Trackers | ToolsQuark",
    description: "Discover private health calculators for body metrics, energy needs, nutrition planning, age, pregnancy, and cycle tracking.",
    h1: "Data-Driven Health Calculators",
    intro: "Decode body metrics with private, browser-side tools built for fast, practical health planning.",
    categoryLabel: "Health Tools",
    guide: [
      ["Choose The Right Starting Point", "Use BMI or waist ratios for broad screening, BMR/TDEE for energy planning, and body-fat or lean-mass formulas for rough composition context. No single number describes overall health."],
      ["How Results Should Be Used", "Each calculator discloses its formula, assumptions, example, limits, and sources. Treat results as starting estimates and use professional guidance for pregnancy, symptoms, medical diets, or other high-stakes decisions."]
    ],
    chooser: [
      ["You need a quick body-size screen", "Start with Metric & Imperial BMI Calculator", "tools/bmi-calculator.html"],
      ["You want maintenance calories", "Start with TDEE Calculator", "tools/tdee-calculator.html"],
      ["You need an intake target", "Start with Daily Calorie Goal Calculator", "tools/calorie-calculator.html"],
      ["You already have calories and need macros", "Start with Macro Calculator", "tools/macro-calculator.html"],
      ["You are comparing body metrics", "Read BMI vs Body Fat vs Waist", "guides/bmi-vs-body-fat-vs-waist.html"]
    ],
    sections: [
      {
        title: "Weight & Body Composition",
        tools: [
          ["bmi-calculator", "BMI Calculator", "Check metric or imperial adult BMI with formula, category, limits, and next-step context.", "Check BMI"],
          ["body-fat-calculator", "Body Fat Calculator", "Estimate body fat percentage using circumference measurements.", "Estimate Fat %"],
          ["lean-body-mass-calculator", "Lean Body Mass Calculator", "Estimate non-fat body mass from height, weight, and sex profile.", "Check Lean Mass"],
          ["weight-trend-smoothing-calculator", "Weight Trend Smoothing Calculator", "Compare weekly average weights to reduce daily scale noise.", "Smooth Trend"],
          ["weekly-weight-change-rate-calculator", "Weekly Weight Change Rate", "Convert a multi-day weight trend into lb/week or kg/week.", "Check Rate"],
          ["waist-to-height-ratio-calculator", "Waist-to-Height Ratio", "Screen central fat distribution by comparing waist with height.", "Check WHtR"],
          ["waist-hip-ratio-calculator", "Waist Hip Ratio", "Compare waist and hip measurements for body fat distribution context.", "Check WHR"],
          ["healthy-weight-range-calculator", "Healthy Weight Range", "Estimate a BMI-based adult weight range from height.", "Find Range"]
        ]
      },
      {
        title: "Energy & Nutrition Planning",
        tools: [
          ["tdee-calculator", "TDEE Calculator", "Estimate maintenance calories from Mifflin-St Jeor BMR and activity level.", "Calculate TDEE", true],
          ["bmr-calculator", "BMR Calculator", "Estimate resting calories with the Mifflin-St Jeor equation before activity is added.", "Calculate BMR"],
          ["maintenance-calorie-calibration-calculator", "Maintenance Calorie Calibration", "Adjust estimated maintenance calories from recent intake and weight trend.", "Calibrate TDEE"],
          ["calorie-calculator", "Daily Calorie Goal Calculator", "Apply a visible maintenance, deficit, or surplus adjustment to estimated energy.", "Plan Calories"],
          ["calorie-deficit-percentage-calculator", "Calorie Deficit Percentage", "Compare planned intake with maintenance calories as a percentage.", "Check Deficit"],
          ["calorie-deficit-timeline-calculator", "Calorie Deficit Timeline", "Estimate a simplified weight-change timeline from target deficit.", "Estimate Timeline"],
          ["macro-calculator", "Custom Macro Calculator", "Distribute an existing calorie target across adjustable macro inputs.", "Split Macros"],
          ["protein-calculator", "Protein Calculator", "Find a realistic protein range for training and recovery goals.", "Set Protein"],
          ["protein-per-meal-calculator", "Protein Per Meal Calculator", "Split a daily protein target across meals or snacks.", "Split Protein"],
          ["water-intake-calculator", "Water Intake Calculator", "Estimate a disclosed hydration planning range from weight and activity.", "Plan Hydration"]
        ]
      },
      {
        title: "Dates & Life Stage",
        tools: [
          ["age-calculator", "Age Calculator", "Calculate chronological age with calendar-aware date handling.", "Calculate Age"],
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
    chooser: [
      ["Current demands feel too heavy", "Start with Stress Pattern Self-Check", "tools/stress-index-test.html"],
      ["Worry, tension, or alertness keeps returning", "Start with Anxiety & High-Alert Pattern", "tools/anxiety-hyperarousal-assessment.html"],
      ["Thought loops delay decisions or action", "Start with Overthinking Pattern Self-Check", "tools/cognitive-overthinking-test.html"],
      ["Social situations trigger fear or replay", "Start with Social Anxiety Pattern Self-Check", "tools/social-anxiety-test.html"],
      ["You want to compare stress and anxiety", "Read Stress vs Anxiety Patterns", "guides/stress-vs-anxiety-patterns.html"]
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
    chooser: [
      ["You need a bedtime or wake-time plan", "Start with Sleep Schedule Calculator", "tools/sleep-calculator.html"],
      ["You sleep enough but still feel tired", "Start with Sleep Pattern Self-Check", "tools/sleep-quality-assessment.html"],
      ["You want a gradual walking target", "Start with Daily Steps Goal Calculator", "tools/daily-steps-goal-calculator.html"],
      ["Phone or feed use is displacing priorities", "Compare Smartphone and Social Media tools", "guides/smartphone-use-vs-social-media-use.html"],
      ["Tasks are delayed despite intention", "Start with Procrastination Pattern Self-Check", "tools/procrastination-test.html"]
    ],
    sections: [
      {
        title: "Sleep & Recovery",
        tools: [
          ["sleep-calculator", "Sleep Schedule Calculator", "Plan a bedtime or wake time from sleep duration and expected sleep latency.", "Plan Sleep", true],
          ["sleep-debt-calculator", "Sleep Debt Calculator", "Estimate your weekly sleep deficit from target and recent average sleep.", "Estimate Debt"],
          ["sleep-opportunity-calculator", "Sleep Opportunity Calculator", "Compare time in bed with estimated available sleep time.", "Check Opportunity"],
          ["sleep-efficiency-calculator", "Sleep Efficiency Calculator", "Compare time asleep with time in bed and identify a practical next step.", "Check Efficiency"],
          ["sleep-inertia-calculator", "Sleep Inertia Calculator", "Estimate wake grogginess risk and plan a practical morning buffer.", "Estimate Grogginess"],
          ["nap-duration-calculator", "Nap Duration Calculator", "Choose a short nap or longer recovery nap from available time and bedtime distance.", "Plan Nap"],
          ["sleep-consistency-calculator", "Sleep Consistency Calculator", "Estimate bedtime and wake-time variability from your weekly timing range.", "Check Timing"],
          ["screen-free-bedtime-planner", "Screen-Free Bedtime Planner", "Build a small phone-free wind-down window before bedtime.", "Plan Wind-Down"],
          ["caffeine-cutoff-calculator", "Caffeine Cutoff Calculator", "Estimate when to stop caffeine before a planned bedtime.", "Set Cutoff"],
          ["caffeine-half-life-calculator", "Caffeine Half Life Calculator", "Estimate caffeine remaining after coffee, tea, energy drinks, or pre-workout.", "Estimate Remaining"],
          ["sleep-quality-assessment", "Sleep Pattern Self-Check", "Review sleep initiation, continuity, restoration, and daytime impact.", "Review Sleep"]
        ]
      },
      {
        title: "Movement Planning",
        tools: [
          ["daily-steps-goal-calculator", "Daily Steps Goal Calculator", "Build a progressive step target plan from your current baseline.", "Plan Steps"],
          ["walking-time-to-steps-calculator", "Walking Time To Steps", "Estimate steps from walking minutes and pace presets.", "Convert Time"],
          ["walking-distance-to-steps-calculator", "Walking Distance To Steps", "Convert miles or kilometers into estimated walking steps.", "Convert Distance"],
          ["step-count-to-distance-calculator", "Step Count To Distance", "Convert steps into estimated miles or kilometers using stride length.", "Convert Steps"],
          ["stride-length-calculator", "Stride Length Calculator", "Calculate stride length from a measured distance and step count.", "Find Stride"],
          ["walking-pace-time-calculator", "Walking Pace Time Calculator", "Convert walking distance and pace into total time, or time into pace.", "Plan Walk"],
          ["steps-to-calories-converter", "Steps to Calories Converter", "Estimate walking energy with explicit simplified assumptions.", "Estimate Energy"],
          ["exercise-calories-to-steps-calculator", "Exercise Calories To Steps", "Convert exercise calories into a rough walking step equivalent.", "Convert Calories"],
          ["running-pace-calculator", "Running Pace Calculator", "Convert distance and finish time into pace per kilometer or mile.", "Calculate Pace"]
        ]
      },
      {
        title: "Execution & Follow-Through",
        tools: [
          ["procrastination-test", "Procrastination Pattern Self-Check", "Review initiation, avoidance, short-term reward pull, and perfectionistic delay.", "Review Delay", true],
          ["task-initiation-friction-self-check", "Task Initiation Friction Self-Check", "Review unclear first steps, activation barriers, avoidance, and competing pulls.", "Review Start"],
          ["work-break-planner", "Work Break Planner", "Plan focus blocks, short breaks, and total work session length.", "Plan Breaks"],
          ["sitting-break-calculator", "Sitting Break Calculator", "Plan desk breaks and movement minutes during sitting-heavy days.", "Plan Movement"],
          ["habit-consistency-calculator", "Habit Consistency Calculator", "Calculate follow-through rate from planned and completed days.", "Check Rate"],
          ["habit-restart-planner", "Habit Restart Planner", "Plan a smaller restart after missed habit days.", "Plan Restart"],
          ["self-discipline-test", "Follow-Through Pattern Self-Check", "Review starting friction, consistency, immediate impulses, and restarting.", "Review Follow-Through"]
        ]
      },
      {
        title: "Digital Habits",
        tools: [
          ["smartphone-addiction-test", "Smartphone Use Pattern Self-Check", "Review automatic checking, stopping control, cue reactivity, and displacement.", "Review Phone Use"],
          ["notification-load-self-check", "Notification Load Self-Check", "Review notification interruptions, urgency pressure, recovery, and boundaries.", "Review Alerts"],
          ["social-media-addiction-index", "Social Media Use Pattern Self-Check", "Review feed capture, stopping control, social evaluation, and displacement.", "Review Social Media"]
        ]
      }
    ]
  },
  connection: {
    file: "emotional-connection.html",
    title: "Relationship & Emotional Connection Self-Checks | ToolsQuark",
    description: "Use private relationship self-checks for emotional needs, availability, closeness, feeling understood, support, disclosure, communication, and repair.",
    h1: "Relationship & Emotional Connection Self-Checks",
    intro: "Explore how connection feels in one important relationship with original, private self-checks built for reflection rather than labels.",
    categoryLabel: "Emotional Connection",
    guide: [
      ["Keep One Relationship In Mind", "Answer each self-check about one current partner, friend, family member, or other important relationship. Mixing several relationships can make a pattern harder to interpret."],
      ["Patterns, Not Verdicts", "These original checklists summarize recent experiences. They cannot identify another person's motives, diagnose either person, or decide whether a relationship should continue."]
    ],
    chooser: [
      ["You cannot name what you need", "Start with Emotional Needs Clarity", "tools/emotional-needs-clarity-self-check.html"],
      ["You feel unseen or misread", "Start with Felt Understood Self-Check", "tools/felt-understood-self-check.html"],
      ["Sharing feels risky or uncertain", "Start with Safe Emotional Disclosure", "tools/safe-emotional-disclosure-self-check.html"],
      ["Arguments are hard to repair", "Start with Conflict Repair Pattern", "tools/conflict-repair-self-check.html"],
      ["You need words for a request", "Read How To Identify Emotional Needs", "guides/identify-and-communicate-emotional-needs.html"]
    ],
    sections: [
      {
        title: "Needs & Relational Awareness",
        tools: [
          ["emotional-needs-clarity-self-check", "Emotional Needs Clarity Self-Check", "Review how clearly you notice, name, communicate, and reassess emotional needs.", "Review Needs", true],
          ["emotional-availability-self-check", "Emotional Availability Pattern", "Review presence, responsiveness, openness, and consistency in one relationship.", "Review Availability"],
          ["closeness-distance-pattern-self-check", "Closeness & Distance Pattern", "Review comfort with connection, space, reassurance, and changing relational distance.", "Review Distance"]
        ]
      },
      {
        title: "Support & Understanding",
        tools: [
          ["felt-understood-self-check", "Felt Understood In A Relationship", "Review whether your feelings, meaning, perspective, and changing needs feel understood.", "Review Understanding"],
          ["support-access-self-check", "Relationship Support Access", "Review whether support feels available, askable, usable, and reciprocal.", "Review Support"],
          ["boundary-clarity-self-check", "Boundary Clarity Self-Check", "Review whether limits are clear enough to state, negotiate, and follow through.", "Review Clarity"],
          ["emotional-boundaries-self-check", "Emotional Boundaries Self-Check", "Review limits, guilt pressure, and boundary follow-through.", "Review Boundaries"],
          ["safe-emotional-disclosure-self-check", "Safe Emotional Disclosure Pattern", "Review readiness, response safety, boundaries, and recovery after personal sharing.", "Review Disclosure"]
        ]
      },
      {
        title: "Communication & Repair",
        tools: [
          ["relationship-communication-style-self-check", "Relationship Communication Style", "Review directness, listening, pacing, and repair signals.", "Review Style"],
          ["emotional-communication-self-check", "Emotional Communication Pattern", "Review expression, listening, clarification, and regulation during emotional conversations.", "Review Communication"],
          ["relationship-check-in-planner", "Relationship Check-In Planner", "Plan a short check-in with topic focus, timing, and answerable questions.", "Plan Check-In"],
          ["conflict-repair-self-check", "Conflict Repair Pattern", "Review de-escalation, accountability, reconnection, and follow-through after conflict.", "Review Repair", true]
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
  const themeClass = options.theme ? ` theme-${esc(options.theme)}` : "";
  const metaContent = [
    options.visual ? `<span class="tool-visual visual-${esc(options.visual)}" aria-hidden="true"><span></span><span></span><span></span></span>` : null,
    options.taskTitle ? `<span class="tool-task">${esc(options.taskTitle)}</span>` : null,
    `<span class="tool-name">${esc(name)}</span>`,
    `<span class="tool-desc">${esc(desc)}</span>`,
    options.chips?.length ? `<span class="tool-chips">${options.chips.map((chip) => `<span>${esc(chip)}</span>`).join("")}</span>` : null
  ].filter(Boolean).join("\n                ");
  return `
        <a href="tools/${slug}.html" class="tool-card${popular ? " popular-choice" : ""}${options.taskCard ? " task-card" : ""}${themeClass}" data-tool="${esc(name + " " + desc)}"${analytics}>
            <span class="card-badge ${popular ? "badge-popular" : "badge-time"}">${esc(badge)}</span>
            <div class="tool-meta">
                ${metaContent}
            </div>
            <div class="card-footer"><span>${esc(action)}</span><span class="go-link">&rarr;</span></div>
        </a>`;
}

function baseStyles() {
  return `:root{--primary:#0f172a;--accent:#2563eb;--accent-light:#eff6ff;--text-muted:#64748b;--bg:#f8fafc;--popular:#f59e0b}*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:var(--primary);line-height:1.6}.container{max-width:1050px;margin:40px auto 60px;padding:0 20px}.breadcrumb{font-size:.85rem;color:var(--text-muted);margin-bottom:25px;display:flex;gap:6px}.breadcrumb a{color:var(--accent);text-decoration:none;font-weight:700}.header{margin-bottom:34px}.header h1{font-size:2.8rem;font-weight:850;letter-spacing:0;color:#0f172a;margin-bottom:10px}.header p{color:var(--text-muted);font-size:1.05rem;max-width:760px}.decision-path{padding:28px 0 8px;margin-bottom:14px;border-top:1px solid #cbd5e1}.decision-path h2{font-size:1.28rem;line-height:1.25;margin-bottom:6px}.decision-path>p{font-size:.93rem;color:var(--text-muted);max-width:760px;margin-bottom:18px}.decision-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px}.decision-link{display:block;text-decoration:none;color:inherit;border-top:3px solid #cbd5e1;padding:14px 0 4px}.decision-link:hover,.decision-link:focus-visible{border-color:var(--accent);outline:none}.decision-link span{display:block;color:#475569;font-size:.82rem;font-weight:760;line-height:1.4}.decision-link strong{display:block;color:#1e293b;font-size:.96rem;line-height:1.35;margin-top:5px}.decision-link em{display:block;color:var(--accent);font-style:normal;font-size:.78rem;font-weight:850;margin-top:9px}.sub-category-title{font-size:1.35rem;font-weight:850;margin:42px 0 18px;color:#1e293b;border-left:4px solid var(--accent);padding-left:12px}.tools-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(285px,1fr));gap:22px}.tool-card{background:white;padding:26px;border-radius:20px;border:1px solid #e5e7eb;text-decoration:none;color:inherit;transition:.25s;display:flex;flex-direction:column;justify-content:space-between;position:relative}.tool-card:hover{border-color:var(--accent);box-shadow:0 20px 25px -5px rgba(37,99,235,.06);transform:translateY(-3px)}.popular-choice{border-color:#fbd38d;background:#fffaf0}.card-badge{position:absolute;top:14px;right:18px;font-size:.72rem;font-weight:800;padding:2px 8px;border-radius:6px}.badge-popular{background:#fef3c7;color:#d97706}.badge-time{background:#f1f5f9;color:#475569}.tool-meta{margin:8px 0 12px}.tool-name{font-weight:850;display:block;font-size:1.12rem;color:#1e293b;margin-bottom:6px;padding-right:76px}.tool-desc{font-size:.94rem;color:var(--text-muted);line-height:1.5}.card-footer{margin-top:16px;display:flex;justify-content:space-between;font-size:.85rem;font-weight:800;color:var(--accent)}.go-link{opacity:0;transition:.2s}.tool-card:hover .go-link{opacity:1}.topic-guide{margin-top:64px;padding:32px 0;border-top:1px solid #e2e8f0;border-bottom:1px solid #e2e8f0;display:grid;grid-template-columns:1fr 1fr;gap:36px}.topic-guide h2{font-size:1.2rem;margin-bottom:8px}.topic-guide p{color:var(--text-muted);font-size:.95rem}.topic-guide a{color:var(--accent);font-weight:750}.e-e-a-t-section{margin-top:36px;padding:28px 0}.e-e-a-t-section h2{font-size:1.3rem;font-weight:850;margin-bottom:12px}.e-e-a-t-section p,.disclaimer-box{color:var(--text-muted);font-size:.95rem}.e-e-a-t-section a{color:var(--accent);font-weight:750}.disclaimer-box{font-style:italic;border-left:3px solid #cbd5e1;padding-left:14px;margin-top:14px}footer{margin-top:80px;padding:40px 20px;border-top:1px solid #e2e8f0;text-align:center;color:#64748b}footer a{text-decoration:none;color:inherit;margin:0 10px}@media(max-width:768px){.header h1{font-size:2.2rem}.tools-grid,.topic-guide{grid-template-columns:1fr}.topic-guide{gap:24px}.decision-grid{grid-template-columns:1fr}.e-e-a-t-section{padding:22px 0}}`;
}

function homeRedesignStyles() {
  return `.container{max-width:1280px;margin-top:24px}.tool-card,.e-e-a-t-section{border-radius:8px}.navbar{background:white;border-bottom:1px solid #e2e8f0;position:sticky;top:0;z-index:10}.nav-inner{max-width:1280px;margin:0 auto;padding:14px 20px;display:flex;justify-content:space-between;align-items:center;gap:24px}.logo{font-size:22px;font-weight:850;color:var(--accent);text-decoration:none}.nav-links{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.nav-links a{text-decoration:none;color:#334155;font-weight:800;font-size:13px;padding:8px 10px;border-radius:8px}.nav-links a:hover,.nav-links a:focus-visible{background:#eff6ff;color:#1d4ed8;outline:none}.hero{display:grid;grid-template-columns:minmax(0,1fr) 430px;gap:36px;align-items:center;margin:0 0 24px;padding:18px 0 22px;border-bottom:1px solid #dbe2ea}.hero-copy{max-width:780px}.hero-kicker{color:#047857;font-size:.78rem;font-weight:850;text-transform:uppercase;margin-bottom:10px}.hero h1{font-size:2.9rem;font-weight:850;letter-spacing:0;line-height:1.06;margin-bottom:14px;color:#0f172a}.hero p{color:var(--text-muted);font-size:1.03rem;max-width:720px}.hero-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:14px}.hero-actions a{border:1px solid #cbd5e1;border-radius:8px;padding:9px 12px;text-decoration:none;color:#1e293b;font-weight:800;font-size:.86rem;background:#fff}.hero-actions a:first-child{background:#0f172a;color:#fff;border-color:#0f172a}.hero-actions a:hover,.hero-actions a:focus-visible{border-color:var(--accent);outline:none}.trust-badges{display:flex;gap:8px;margin-top:13px;color:#047857;font-weight:760;font-size:.82rem;flex-wrap:wrap}.trust-badges span{background:#ecfdf5;border:1px solid #bbf7d0;border-radius:8px;padding:6px 9px}.search-wrapper{max-width:740px;margin:20px 0 0;position:relative}.search-input{width:100%;padding:15px 18px;border:2px solid #cbd5e1;border-radius:8px;font-size:16px;background:white;box-shadow:0 12px 26px rgba(15,23,42,.06)}.search-input:focus{border-color:var(--accent);outline:none;box-shadow:0 0 0 4px var(--accent-light)}.search-results{display:none;position:absolute;left:0;right:0;top:calc(100% + 8px);z-index:20;background:white;border:1px solid #cbd5e1;border-radius:8px;box-shadow:0 18px 35px rgba(15,23,42,.14);overflow:hidden}.search-results.is-open{display:block}.search-result{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:2px 18px;padding:13px 16px;border-bottom:1px solid #eef2f7;text-decoration:none;color:inherit}.search-result:last-child{border-bottom:none}.search-result:hover,.search-result:focus-visible{background:#eff6ff;outline:none}.search-result strong{font-size:14px;color:#1e293b}.search-result span{grid-row:1 / 3;grid-column:2;color:var(--accent);font-size:12px;font-weight:800;align-self:center}.search-result small{font-size:12px;color:var(--text-muted)}.search-empty{padding:16px;color:var(--text-muted);font-size:14px}.hero-visual{background:linear-gradient(180deg,#ffffff 0%,#f8fafc 100%);border:1px solid #dbe2ea;border-radius:10px;padding:14px;box-shadow:0 18px 38px rgba(15,23,42,.08);display:grid;gap:10px;position:relative;overflow:hidden}.hero-visual:before{content:"";position:absolute;inset:0;background:linear-gradient(135deg,rgba(37,99,235,.08),rgba(16,185,129,.08) 45%,rgba(124,58,237,.06));pointer-events:none}.hero-visual>*{position:relative}.hero-visual-header small{display:block;color:#7c3aed;font-size:.7rem;font-weight:850;text-transform:uppercase;margin-bottom:4px}.hero-visual-header h2{font-size:1.1rem;line-height:1.2;color:#0f172a;margin-bottom:4px}.hero-visual-header p{font-size:.82rem;line-height:1.4;color:var(--text-muted)}.path-board{display:grid;gap:7px}.path-row{display:grid;grid-template-columns:94px minmax(0,1fr);gap:8px;align-items:stretch;text-decoration:none;color:inherit}.path-label{display:grid;align-content:center;border:1px solid #cbd5e1;background:#fff;border-radius:8px;padding:8px}.path-label strong{font-size:.78rem;line-height:1.18;color:#0f172a}.path-label span{font-size:.68rem;color:#64748b;font-weight:750;margin-top:2px}.path-flow{display:grid;grid-template-columns:1fr 16px 1fr 16px 1fr;gap:4px;align-items:center;border:1px solid #dbe2ea;border-radius:8px;background:rgba(255,255,255,.82);padding:6px}.path-step{min-height:40px;border-radius:7px;padding:5px;background:#f8fafc;border:1px solid #e2e8f0}.path-step b{display:block;font-size:.64rem;color:#2563eb;text-transform:uppercase}.path-step span{display:block;font-size:.69rem;line-height:1.18;color:#334155;margin-top:2px}.path-arrow{color:#94a3b8;text-align:center;font-weight:850}.path-row:hover .path-flow,.path-row:focus-visible .path-flow{border-color:#2563eb;background:#eff6ff;outline:none}.visual-metrics{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px}.visual-metrics span{border:1px solid #bbf7d0;background:#ecfdf5;border-radius:8px;color:#047857;font-size:.7rem;font-weight:800;line-height:1.2;padding:7px}.route-section{padding:16px 0 34px}.route-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}.route-card{display:flex;flex-direction:column;gap:8px;min-height:172px;background:#fff;border:1px solid #dbe2ea;border-radius:8px;padding:18px;text-decoration:none;color:inherit}.route-card:hover,.route-card:focus-visible{border-color:var(--accent);box-shadow:0 16px 30px rgba(37,99,235,.08);outline:none}.route-card small{color:#7c3aed;font-size:.72rem;font-weight:850;text-transform:uppercase}.route-card strong{color:#1e293b;font-size:1rem;line-height:1.25}.route-card span{color:var(--text-muted);font-size:.86rem;line-height:1.45}.route-card em{margin-top:auto;color:var(--accent);font-style:normal;font-size:.8rem;font-weight:850}.format-band{padding:28px 0 32px;border-top:1px solid #cbd5e1}.format-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}.format-item{border-top:3px solid #cbd5e1;padding-top:16px}.format-item h2{font-size:1.05rem;margin-bottom:6px}.format-item p{font-size:.88rem;color:var(--text-muted);line-height:1.55;margin-bottom:10px}.format-item a{font-size:.82rem;color:var(--accent);font-weight:800;text-decoration:none}.format-item:hover{border-color:var(--accent)}.category-band{padding:28px 0 34px;border-top:1px solid #e2e8f0;border-bottom:1px solid #e2e8f0}.section-heading{display:flex;justify-content:space-between;align-items:end;gap:20px;margin-bottom:16px}.section-heading h2{font-size:1.35rem;line-height:1.25}.section-heading p{font-size:.9rem;color:var(--text-muted)}.category-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}.category-link{padding:20px 0;text-decoration:none;color:inherit;border-top:3px solid #cbd5e1}.category-link:hover,.category-link:focus-visible{border-color:var(--accent);outline:none}.category-link span{font-size:1.05rem;font-weight:850;color:#1e293b}.category-link small{margin-left:8px;color:var(--text-muted);font-weight:750}.category-link p{color:var(--text-muted);font-size:.9rem;line-height:1.5;margin:7px 0 12px;max-width:340px}.category-link strong{font-size:.82rem;color:var(--accent)}.popular-section{padding-top:38px}.popular-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px}.popular-grid .tool-card{padding:22px;min-height:220px}.popular-grid .tool-name{font-size:1.03rem}.popular-grid .tool-desc{font-size:.88rem}.directory-section{padding-top:54px}.directory-list{border-bottom:1px solid #cbd5e1}.directory-group{display:grid;grid-template-columns:230px minmax(0,1fr);gap:34px;padding:28px 0;border-top:1px solid #cbd5e1}.directory-intro h3{font-size:1.12rem;line-height:1.3}.directory-intro h3 a{color:#1e293b;text-decoration:none}.directory-intro h3 a:hover,.directory-intro h3 a:focus-visible{color:var(--accent)}.directory-intro p{font-size:.85rem;color:var(--text-muted);line-height:1.55;margin:8px 0 12px}.directory-category-link{font-size:.8rem;color:var(--accent);font-weight:800;text-decoration:none}.directory-topics{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:26px}.directory-topic h4{font-size:.82rem;color:#475569;margin-bottom:9px}.directory-topic ul{list-style:none;display:grid;gap:7px}.directory-topic a{color:#1e293b;text-decoration:none;font-size:.88rem;font-weight:700}.directory-topic a:hover,.directory-topic a:focus-visible{color:var(--accent);text-decoration:underline}.home-guides{margin-top:54px;padding:34px 0;border-top:1px solid #cbd5e1}.home-guides .section-heading a{color:var(--accent);font-weight:800;text-decoration:none}.home-guide-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.home-guide{background:#fff;border:1px solid #dbe2ea;border-radius:8px;padding:20px;text-decoration:none;color:inherit;min-height:180px}.home-guide:hover,.home-guide:focus-visible{border-color:var(--accent);outline:none}.home-guide small{display:block;color:#047857;font-size:.72rem;font-weight:850;text-transform:uppercase}.home-guide strong{display:block;color:#1e293b;font-size:1.02rem;margin-top:7px}.home-guide span{display:block;color:var(--text-muted);font-size:.85rem;line-height:1.55;margin-top:7px}.home-guide em{display:block;color:var(--accent);font-style:normal;font-size:.8rem;font-weight:800;margin-top:12px}.quality-section{margin-top:54px;padding:34px 0;border-top:1px solid #cbd5e1;border-bottom:1px solid #cbd5e1}.quality-intro{max-width:760px;margin-bottom:24px}.quality-intro h2{font-size:1.35rem;margin-bottom:7px}.quality-intro p{font-size:.92rem;color:var(--text-muted)}.quality-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:34px}.quality-item h3{font-size:1rem;margin-bottom:7px}.quality-item p{font-size:.88rem;color:var(--text-muted);line-height:1.6}.quality-item a{color:var(--accent);font-weight:800}.quality-meta{display:flex;gap:12px 24px;flex-wrap:wrap;margin-top:25px;padding-top:18px;border-top:1px solid #e2e8f0;color:#475569;font-size:.78rem;font-weight:750}@media(max-width:1120px){.hero{grid-template-columns:1fr}.hero-visual{max-width:760px}.route-grid,.category-grid,.popular-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.directory-group{grid-template-columns:190px minmax(0,1fr)}}@media(max-width:820px){.directory-group{grid-template-columns:1fr}.directory-intro{max-width:620px}.directory-topics{grid-template-columns:repeat(2,minmax(0,1fr))}.quality-grid{grid-template-columns:1fr;gap:22px}.path-row{grid-template-columns:1fr}.path-flow{grid-template-columns:1fr}.path-arrow{display:none}}@media(max-width:768px){.container{margin-top:20px}.nav-inner{align-items:flex-start;gap:12px;flex-direction:column}.nav-links{gap:6px}.hero{padding-top:4px}.hero h1{font-size:2.15rem}.visual-metrics{grid-template-columns:1fr}.route-grid,.format-grid,.category-grid,.popular-grid,.directory-topics,.home-guide-grid{grid-template-columns:1fr}.section-heading{align-items:flex-start;flex-direction:column;gap:4px}.search-result{grid-template-columns:minmax(0,1fr)}.search-result span{grid-row:auto;grid-column:auto}.popular-grid .tool-card,.home-guide{min-height:0}}`;
}

function homeTaskCardStyles() {
  return `.task-card{--card-accent:#2563eb;--card-tint:#eff6ff;overflow:hidden}.task-card.popular-choice{background:#fff;border-color:#dbe2ea}.task-card:before{content:"";position:absolute;left:0;right:0;top:0;height:4px;background:var(--card-accent)}.theme-body{--card-accent:#2563eb;--card-tint:#eff6ff}.theme-energy{--card-accent:#059669;--card-tint:#ecfdf5}.theme-movement{--card-accent:#0891b2;--card-tint:#ecfeff}.theme-sleep{--card-accent:#4f46e5;--card-tint:#eef2ff}.theme-mental{--card-accent:#7c3aed;--card-tint:#f5f3ff}.theme-connection{--card-accent:#e11d48;--card-tint:#fff1f2}.task-card .card-badge{background:var(--card-tint);color:var(--card-accent)}.tool-visual{width:58px;height:42px;display:grid;grid-template-columns:repeat(3,1fr);align-items:end;gap:4px;margin-bottom:14px}.tool-visual span{display:block;border-radius:6px;background:var(--card-accent);opacity:.9}.tool-visual span:nth-child(1){height:46%}.tool-visual span:nth-child(2){height:78%}.tool-visual span:nth-child(3){height:58%}.visual-walk{align-items:center}.visual-walk span{height:9px;border-radius:999px}.visual-walk span:nth-child(1){width:18px}.visual-walk span:nth-child(2){width:28px}.visual-walk span:nth-child(3){width:38px}.visual-trend span:nth-child(1){height:30%}.visual-trend span:nth-child(2){height:56%}.visual-trend span:nth-child(3){height:88%}.visual-sleep{border-radius:999px;background:var(--card-tint);position:relative;display:block}.visual-sleep span{position:absolute;background:var(--card-accent);border-radius:999px}.visual-sleep span:nth-child(1){width:22px;height:22px;left:9px;top:10px}.visual-sleep span:nth-child(2){width:18px;height:18px;right:8px;bottom:8px;opacity:.35}.visual-sleep span:nth-child(3){width:30px;height:5px;left:14px;bottom:8px}.visual-check span{border-radius:999px}.visual-check span:nth-child(1){height:12px}.visual-check span:nth-child(2){height:24px}.visual-check span:nth-child(3){height:36px}.tool-task{display:block;color:#0f172a;font-size:1.02rem;font-weight:850;line-height:1.25;margin:2px 76px 8px 0}.tool-chips{display:flex;gap:6px;flex-wrap:wrap;margin-top:12px}.tool-chips span{border:1px solid #dbe2ea;background:var(--card-tint);color:#334155;border-radius:8px;padding:4px 7px;font-size:.72rem;font-weight:800;line-height:1.2}.trust-proof{display:grid;grid-template-columns:1.1fr 1fr 1fr 1fr;gap:14px;padding:18px 0 18px}.trust-proof-item{border-top:3px solid #bbf7d0;padding-top:12px}.trust-proof-item strong{display:block;color:#0f172a;font-size:.95rem}.trust-proof-item span{display:block;color:#64748b;font-size:.82rem;line-height:1.45;margin-top:4px}.method-image-panel{display:grid;grid-template-columns:minmax(0,1fr) 220px;gap:20px;align-items:center;margin:0 0 30px;padding:18px;border:1px solid #dbe2ea;background:#fff;border-radius:8px;box-shadow:0 14px 30px rgba(15,23,42,.05)}.method-image-panel img{width:100%;height:auto;border:1px solid #e2e8f0;border-radius:8px;background:#f8fafc}.method-image-panel strong{display:block;color:#0f172a;font-size:1rem;margin-bottom:5px}.method-image-panel span{display:block;color:#64748b;font-size:.86rem;line-height:1.5}.scenario-section{padding:38px 0 16px}.scenario-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}.scenario-card{background:#fff;border:1px solid #dbe2ea;border-radius:8px;padding:18px;color:inherit;text-decoration:none;display:grid;gap:8px;min-height:188px}.scenario-card:hover,.scenario-card:focus-visible{border-color:var(--accent);box-shadow:0 16px 30px rgba(37,99,235,.08);outline:none}.scenario-card small{color:#047857;font-size:.72rem;font-weight:850;text-transform:uppercase}.scenario-card strong{color:#0f172a;font-size:1rem;line-height:1.25}.scenario-card span{color:#64748b;font-size:.86rem;line-height:1.5}.scenario-card em{align-self:end;color:var(--accent);font-style:normal;font-size:.8rem;font-weight:850}.home-guide-grid.expanded{grid-template-columns:repeat(3,minmax(0,1fr))}.guide-visual{display:block;height:46px;border-radius:8px;margin-bottom:12px;background:linear-gradient(135deg,#eff6ff,#ecfdf5);border:1px solid #dbe2ea;position:relative;overflow:hidden}.guide-visual:before{content:"";position:absolute;left:12px;right:12px;bottom:12px;height:4px;background:#2563eb;border-radius:999px}.guide-visual:after{content:"";position:absolute;left:16px;top:12px;width:42%;height:4px;background:#059669;border-radius:999px;box-shadow:38px 10px 0 #0891b2,74px 18px 0 #f59e0b}@media(max-width:980px){.trust-proof,.scenario-grid,.home-guide-grid.expanded{grid-template-columns:repeat(2,minmax(0,1fr))}.method-image-panel{grid-template-columns:1fr}}@media(max-width:768px){.tool-task{margin-right:0}.trust-proof,.scenario-grid,.home-guide-grid.expanded{grid-template-columns:1fr}}`;
}

function homeVisualUpgradeStyles() {
  return `.hero-visual{padding:18px;gap:14px}.hero-visual-header h2{font-size:1.28rem}.path-board{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.path-row{display:grid;grid-template-columns:1fr;gap:10px;align-content:space-between;min-height:166px;padding:13px;border:1px solid #dbe2ea;border-radius:8px;background:rgba(255,255,255,.9);box-shadow:0 12px 24px rgba(15,23,42,.05)}.path-row:hover,.path-row:focus-visible{border-color:#2563eb;background:#fff;box-shadow:0 18px 34px rgba(37,99,235,.12);outline:none}.path-row:hover .path-cta,.path-row:focus-visible .path-cta{color:#1d4ed8}.path-label{border:0;background:transparent;padding:0}.path-label strong{font-size:.95rem}.path-label span{font-size:.75rem}.path-flow{display:block;border:0;background:transparent;padding:0}.path-step{display:none}.path-step:first-child,.path-step:last-child{display:block;min-height:0;border:0;background:transparent;padding:0}.path-step b{font-size:.62rem;color:#64748b}.path-step span{font-size:.78rem;color:#1e293b;font-weight:760}.path-arrow{display:none}.path-cta{font-size:.78rem;font-weight:850;color:#2563eb}.hero-card-visual{height:58px;border-radius:8px;background:linear-gradient(135deg,var(--hero-tint,#eff6ff),#fff);border:1px solid #dbe2ea;position:relative;overflow:hidden}.path-calories{--hero-accent:#059669;--hero-tint:#ecfdf5}.path-walking{--hero-accent:#0891b2;--hero-tint:#ecfeff}.path-weight{--hero-accent:#2563eb;--hero-tint:#eff6ff}.path-sleep{--hero-accent:#4f46e5;--hero-tint:#eef2ff}.hero-card-visual:before{content:"";position:absolute;left:14px;bottom:12px;width:68%;height:6px;border-radius:999px;background:var(--hero-accent,#2563eb);opacity:.85}.hero-card-visual:after{content:"";position:absolute;right:15px;top:12px;width:28px;height:28px;border-radius:999px;border:7px solid var(--hero-accent,#2563eb);opacity:.35}.path-walking .hero-card-visual:before{height:5px;box-shadow:18px -12px 0 -1px var(--hero-accent),38px -2px 0 -1px var(--hero-accent)}.path-weight .hero-card-visual:before{height:4px;transform:rotate(-10deg);transform-origin:left center;box-shadow:22px -10px 0 -1px var(--hero-accent),48px -2px 0 -1px var(--hero-accent)}.path-sleep .hero-card-visual:before{width:44px;height:20px;border-radius:0 0 28px 28px;left:18px;bottom:14px}.path-sleep .hero-card-visual:after{width:18px;height:18px;right:22px;top:14px;border-width:5px}.visual-metrics span{background:#fff;border-color:#dbe2ea;color:#334155}.tool-visual{width:100%;height:76px;display:block;border:1px solid #dbe2ea;border-radius:8px;background:linear-gradient(135deg,var(--card-tint),#fff);position:relative;overflow:hidden;margin-bottom:16px}.tool-visual span{position:absolute;background:var(--card-accent);opacity:.88}.visual-bars span{bottom:14px;width:15px;border-radius:5px 5px 0 0}.visual-bars span:nth-child(1){left:18px;height:24px}.visual-bars span:nth-child(2){left:40px;height:42px}.visual-bars span:nth-child(3){left:62px;height:32px}.visual-bars:after,.visual-trend:after{content:"";position:absolute;right:16px;top:16px;width:40px;height:40px;border-radius:999px;border:8px solid var(--card-accent);opacity:.18}.visual-walk span{height:7px;border-radius:999px;left:18px}.visual-walk span:nth-child(1){top:22px;width:26px}.visual-walk span:nth-child(2){top:34px;width:48px}.visual-walk span:nth-child(3){top:46px;width:70px}.visual-walk:after{content:"";position:absolute;right:18px;bottom:18px;width:44px;height:18px;border-bottom:5px solid var(--card-accent);border-radius:50%;opacity:.32}.visual-trend span{height:5px;border-radius:999px;transform:rotate(-12deg);transform-origin:left center}.visual-trend span:nth-child(1){left:18px;bottom:22px;width:28px}.visual-trend span:nth-child(2){left:42px;bottom:36px;width:34px}.visual-trend span:nth-child(3){left:72px;bottom:50px;width:46px}.visual-sleep{background:linear-gradient(135deg,var(--card-tint),#fff)}.visual-sleep span:nth-child(1){width:42px;height:24px;left:18px;top:29px;border-radius:0 0 26px 26px}.visual-sleep span:nth-child(2){width:20px;height:20px;right:22px;top:18px;opacity:.25}.visual-sleep span:nth-child(3){width:86px;height:5px;left:18px;bottom:16px}.visual-check span{height:6px;border-radius:999px;left:18px}.visual-check span:nth-child(1){top:22px;width:82px}.visual-check span:nth-child(2){top:36px;width:58px}.visual-check span:nth-child(3){top:50px;width:96px}.visual-check:after{content:"";position:absolute;right:20px;top:18px;width:32px;height:32px;border-radius:999px;border:7px solid var(--card-accent);opacity:.22}.tool-name{padding-right:0}.trust-proof-item{display:grid;grid-template-columns:34px minmax(0,1fr);gap:10px;border-top-color:#dbe2ea}.trust-proof-item .proof-icon{grid-column:1;grid-row:1 / 3;width:32px;height:32px;border-radius:8px;background:#ecfdf5;border:1px solid #bbf7d0;position:relative}.trust-proof-item .proof-icon:after{content:"";position:absolute;left:9px;top:9px;width:12px;height:8px;border-left:3px solid #059669;border-bottom:3px solid #059669;transform:rotate(-45deg)}.trust-proof-item strong,.trust-proof-item span{grid-column:2}.method-image-panel{grid-template-columns:minmax(0,1fr) 300px;padding:22px;background:linear-gradient(135deg,#fff,#f8fafc);box-shadow:0 18px 40px rgba(15,23,42,.07)}.method-image-panel div{display:grid;gap:10px}.method-image-panel strong{font-size:1.14rem}.method-image-panel .method-steps{display:grid;gap:8px;margin-top:6px}.method-steps b{display:block;border:1px solid #dbe2ea;background:#fff;border-radius:8px;padding:8px 10px;color:#334155;font-size:.8rem}.scenario-card:before,.route-card:before{content:"";display:block;width:52px;height:38px;border-radius:8px;background:linear-gradient(135deg,#eff6ff,#ecfdf5);border:1px solid #dbe2ea}.home-guide{display:grid;grid-template-rows:auto auto auto 1fr auto}.guide-visual{height:72px}.guide-visual-formula{background:linear-gradient(135deg,#eff6ff,#fff)}.guide-visual-formula:before{height:2px;left:14px;right:14px;top:20px;background:#2563eb;box-shadow:0 14px 0 #94a3b8,0 28px 0 #cbd5e1}.guide-visual-formula:after{left:20px;top:14px;width:12px;height:12px;background:#059669;box-shadow:34px 0 0 #2563eb,68px 0 0 #7c3aed}.guide-visual-compare{background:linear-gradient(90deg,#eff6ff 0 50%,#ecfdf5 50%)}.guide-visual-compare:before{left:50%;top:10px;bottom:10px;width:2px;height:auto;background:#cbd5e1}.guide-visual-compare:after{left:18px;top:18px;width:36px;height:6px;background:#2563eb;box-shadow:0 16px 0 #2563eb,82px 0 0 #059669,82px 16px 0 #059669}.guide-visual-action{background:linear-gradient(135deg,#f8fafc,#ecfeff)}.guide-visual-action:before{left:16px;right:16px;top:34px;height:4px;background:#0891b2}.guide-visual-action:after{left:18px;top:18px;width:12px;height:12px;background:#0891b2;border-radius:999px;box-shadow:48px 12px 0 #2563eb,96px -2px 0 #059669}@media(max-width:980px){.path-board{grid-template-columns:repeat(2,minmax(0,1fr))}.method-image-panel{grid-template-columns:1fr}}@media(max-width:768px){.path-board{grid-template-columns:1fr}.path-row{min-height:0}.tool-visual{height:64px}.trust-proof-item{grid-template-columns:30px minmax(0,1fr)}}`;
}

function homeDirectionalCleanupStyles() {
  return `.hero-card-visual,.scenario-card:before,.route-card:before,.guide-visual,.task-card .tool-visual{display:none}.path-row{position:relative;min-height:138px;padding-left:50px}.path-index{position:absolute;left:14px;top:14px;width:26px;height:26px;border-radius:8px;background:#eff6ff;border:1px solid #bfdbfe;color:#1d4ed8;display:grid;place-items:center;font-size:.72rem;font-weight:900;letter-spacing:0}.path-row:hover .path-index,.path-row:focus-visible .path-index{background:#1d4ed8;border-color:#1d4ed8;color:#fff}.tool-card.task-card{padding-top:24px}.home-guide{grid-template-rows:auto auto 1fr auto}.scenario-card,.route-card{min-height:156px}.home-guide small,.scenario-card small,.route-card small{color:#1d4ed8}.popular-grid .tool-card{min-height:190px}@media(max-width:768px){.path-row{min-height:0;padding-left:46px}}`;
}

function footer() {
  return `<footer><div><a href="guides.html">Guides</a><a href="about.html">About</a><a href="editorial-policy.html">Editorial Policy</a><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a></div><p style="margin-top:18px;font-size:.75rem;">&copy; 2026 ToolsQuark. All rights reserved.</p></footer>`;
}

function renderCategory(group) {
  const sections = group.sections.map((section) => `
    <h2 class="sub-category-title">${esc(section.title)}</h2>
    <div class="tools-grid">${section.tools.map((tool) => renderToolCard(tool, { source: "category-page" })).join("")}
    </div>`).join("");
  const guide = `<section class="topic-guide" aria-label="How to use these tools">${group.guide.map(([title, body]) => `<div><h2>${esc(title)}</h2><p>${esc(body)}</p></div>`).join("")}</section>`;
  const chooser = group.chooser?.length ? `<section class="decision-path" aria-labelledby="decision-path-heading"><h2 id="decision-path-heading">Choose A Starting Point</h2><p>Pick the closest question, then open the smallest useful tool or guide first.</p><div class="decision-grid">${group.chooser.map(([question, answer, href]) => `<a class="decision-link" href="${esc(href)}"><span>${esc(question)}</span><strong>${esc(answer)}</strong><em>Open &rarr;</em></a>`).join("")}</div></section>` : "";

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
${chooser}
${sections}
${guide}
    <section class="e-e-a-t-section">
        <h2>Privacy-First, Evidence-Informed Tools</h2>
        <p>Calculations and assessment scoring run inside your browser, without registration or server-side answer storage. Read how formulas, sources, self-check labels, and corrections are handled in the <a href="editorial-policy.html">Editorial & Methodology Policy</a>.</p>
        <div class="disclaimer-box">These tools provide general wellness information and self-reflection only. They do not replace professional medical, mental health, nutrition, or legal advice.</div>
    </section>
</div>
<script>
document.addEventListener('click', (event) => {
  const toolLink = event.target.closest('[data-tool-slug]');
  if (!toolLink || typeof window.va !== 'function') return;
  window.va('event', {
    name: 'tool_click',
    data: {
      tool: toolLink.dataset.toolSlug,
      source: toolLink.dataset.source || 'category-page',
      category: ${JSON.stringify(group.categoryLabel)}
    }
  });
});
</script>
${footer()}
</body>
</html>
`;
}

function renderHome() {
  const toolBySlug = Object.fromEntries(Object.values(groups).flatMap((group) => group.sections.flatMap((section) => section.tools)).map((tool) => [tool[0], tool]));
  const nearWinTools = [
    "walking-time-to-steps-calculator",
    "walking-pace-time-calculator",
    "tdee-calculator",
    "weight-trend-smoothing-calculator",
    "walking-distance-to-steps-calculator",
    "calorie-deficit-percentage-calculator",
    "sleep-opportunity-calculator",
    "maintenance-calorie-calibration-calculator"
  ].map((slug) => toolBySlug[slug]).filter(Boolean);
  const startingPoints = [
    "bmi-calculator",
    "bmr-calculator",
    "calorie-calculator",
    "tdee-calculator",
    "walking-time-to-steps-calculator",
    "daily-steps-goal-calculator",
    "maintenance-calorie-calibration-calculator",
    "sleep-consistency-calculator",
    "stress-index-test",
    "relationship-check-in-planner"
  ].map((slug) => toolBySlug[slug]).filter(Boolean);
  const taskCardDetails = {
    "bmi-calculator": { taskTitle: "Check your adult body-size range", theme: "body", visual: "trend", chips: ["Metric or imperial", "Category context"] },
    "bmr-calculator": { taskTitle: "Find your resting calorie baseline", theme: "energy", visual: "bars", chips: ["Mifflin-St Jeor", "Formula shown"] },
    "calorie-calculator": { taskTitle: "Choose a maintenance-first intake target", theme: "energy", visual: "bars", chips: ["Deficit or surplus", "Next-step target"] },
    "tdee-calculator": { taskTitle: "Estimate your daily maintenance calories", theme: "energy", visual: "bars", chips: ["Activity factor", "Planning baseline"] },
    "walking-time-to-steps-calculator": { taskTitle: "Turn walking minutes into step estimates", theme: "movement", visual: "walk", chips: ["10-60 minutes", "Pace presets"] },
    "daily-steps-goal-calculator": { taskTitle: "Build a realistic step goal", theme: "movement", visual: "walk", chips: ["Baseline first", "Gradual plan"] },
    "maintenance-calorie-calibration-calculator": { taskTitle: "Calibrate calories against real trend data", theme: "energy", visual: "trend", chips: ["Trend check", "Adjustment logic"] },
    "sleep-consistency-calculator": { taskTitle: "See how steady your sleep timing is", theme: "sleep", visual: "sleep", chips: ["Bed/wake range", "Routine signal"] },
    "stress-index-test": { taskTitle: "Map your current stress pattern", theme: "mental", visual: "check", chips: ["Private self-check", "Educational limits"] },
    "relationship-check-in-planner": { taskTitle: "Prepare a clearer relationship conversation", theme: "connection", visual: "check", chips: ["Topic focus", "Next words"] }
  };
  const nearWinDetails = {
    "walking-time-to-steps-calculator": { taskTitle: "How many steps is a 30, 45, or 60 minute walk?", theme: "movement", visual: "walk", chips: ["Minutes to steps", "Pace presets"] },
    "walking-pace-time-calculator": { taskTitle: "How long will this walking route take?", theme: "movement", visual: "walk", chips: ["Miles or km", "Pace to time"] },
    "tdee-calculator": { taskTitle: "What are my maintenance calories?", theme: "energy", visual: "bars", chips: ["TDEE", "Activity level"] },
    "weight-trend-smoothing-calculator": { taskTitle: "Is my weight trend actually changing?", theme: "body", visual: "trend", chips: ["Weekly average", "Scale noise"] },
    "walking-distance-to-steps-calculator": { taskTitle: "How many steps is this distance?", theme: "movement", visual: "walk", chips: ["Distance to steps", "Stride context"] },
    "calorie-deficit-percentage-calculator": { taskTitle: "How large is my calorie deficit?", theme: "energy", visual: "bars", chips: ["Maintenance based", "Deficit %"] },
    "sleep-opportunity-calculator": { taskTitle: "How much sleep opportunity do I really have?", theme: "sleep", visual: "sleep", chips: ["Time in bed", "Sleep window"] },
    "maintenance-calorie-calibration-calculator": { taskTitle: "Can my real trend recalibrate maintenance?", theme: "energy", visual: "trend", chips: ["Intake + trend", "Adjustment logic"] }
  };
  const renderStartingPointCard = (tool) => renderToolCard(tool, {
    ...taskCardDetails[tool[0]],
    popular: true,
    badge: "Start here",
    source: "starting-points",
    taskCard: true
  });
  const renderNearWinCard = (tool) => renderToolCard(tool, {
    ...nearWinDetails[tool[0]],
    popular: true,
    badge: "Useful now",
    source: "near-win-home",
    taskCard: true
  });
  const categoryDescriptions = {
    health: "Body metrics, energy, nutrition, age, pregnancy, and cycle tools.",
    mental: "Private self-checks for stress, anxiety, focus, burnout, and connection.",
    lifestyle: "Sleep planning, daily movement, follow-through, and digital habits.",
    connection: "Relationship needs, support, emotional communication, and repair."
  };
  const featuredGuideSlugs = ["mifflin-st-jeor-equation-explained", "tdee-activity-multiplier-explained", "maintenance-calories-vs-calorie-deficit", "bmr-vs-tdee-vs-calorie-goal", "desk-breaks-walking-and-focus-planning", "body-metrics-calorie-planning-tools"];
  const guideVisualType = (slug) => {
    if (slug.includes("vs") || slug.includes("calories-vs")) return "compare";
    if (slug.includes("desk") || slug.includes("planning") || slug.includes("tools")) return "action";
    return "formula";
  };
  const featuredGuides = featuredGuideSlugs
    .map((slug) => guides.find((guide) => guide.slug === slug))
    .filter(Boolean)
    .map((guide) => `<a class="home-guide" href="guides/${guide.slug}.html" data-guide-slug="${guide.slug}"><span class="guide-visual guide-visual-${guideVisualType(guide.slug)}" aria-hidden="true"></span><small>${esc(guide.primaryQuery)}</small><strong>${esc(guide.h1)}</strong><span>${esc(guide.description)}</span><em>Read guide &rarr;</em></a>`)
    .join("");
  const categoryLinks = Object.entries(groups).map(([key, group]) => {
    const toolCount = group.sections.reduce((count, section) => count + section.tools.length, 0);
    return `<a href="${group.file}" class="category-link" data-category="${key}" data-source="category-quick"><span>${esc(group.categoryLabel)}</span><small>${toolCount} tools</small><p>${esc(categoryDescriptions[key])}</p><strong>Browse category &rarr;</strong></a>`;
  }).join("");
  const decisionRoutes = [
    ["Body & energy", "I need a clearer number", "Estimate calories, compare methods, then calibrate against your real trend.", "tools/maintenance-calorie-calibration-calculator.html"],
    ["Sleep & recovery", "I need a steadier routine", "Check timing consistency, sleep debt, and a practical bedtime plan.", "tools/sleep-consistency-calculator.html"],
    ["Digital habits", "I need less mental noise", "Separate normal phone use from overload, notifications, and social media loops.", "tools/notification-load-self-check.html"],
    ["Connection", "I need a better conversation", "Map needs, boundaries, and repair steps before a difficult check-in.", "tools/relationship-check-in-planner.html"]
  ].map(([label, title, body, href]) => `<a class="route-card" href="${href}" data-source="home-route"><small>${esc(label)}</small><strong>${esc(title)}</strong><span>${esc(body)}</span><em>Start here &rarr;</em></a>`).join("");
  const scenarioCards = [
    ["Calories", "I want a clearer calorie number", "Start with TDEE for maintenance, compare BMR context, then calibrate against real weight trend instead of guessing from one formula.", "tools/tdee-calculator.html"],
    ["Walking", "I want to plan steps or a route", "Convert walking minutes, distance, or pace into a practical estimate before choosing a daily step target.", "tools/walking-time-to-steps-calculator.html"],
    ["Weight trend", "I want to know if the scale trend is real", "Compare weekly averages first, then decide whether calorie calibration is justified.", "tools/weight-trend-smoothing-calculator.html"],
    ["Sleep", "I want to know if my schedule allows enough sleep", "Check sleep opportunity, debt, and timing consistency before changing the whole routine.", "tools/sleep-opportunity-calculator.html"],
    ["Focus", "I want less friction starting tasks", "Review task initiation, procrastination patterns, work breaks, and restart planning from one place.", "tools/task-initiation-friction-self-check.html"],
    ["Connection", "I want a better conversation", "Clarify needs, boundaries, emotional disclosure, and repair before opening a sensitive topic.", "tools/relationship-check-in-planner.html"]
  ].map(([label, title, body, href]) => `<a class="scenario-card" href="${href}" data-source="scenario-path"><small>${esc(label)}</small><strong>${esc(title)}</strong><span>${esc(body)}</span><em>Open path &rarr;</em></a>`).join("");
  const heroVisualRoutes = [
    ["path-calories", "Calories", "TDEE, BMR, deficit", "What maintains weight?", "Calories/day", "tools/tdee-calculator.html"],
    ["path-walking", "Walking", "Minutes, steps, pace", "How many steps?", "Step estimate", "tools/walking-time-to-steps-calculator.html"],
    ["path-weight", "Weight trend", "Scale noise, averages", "Is it changing?", "Weekly signal", "tools/weight-trend-smoothing-calculator.html"],
    ["path-sleep", "Sleep timing", "Window, debt, quality", "Enough sleep?", "Sleep window", "tools/sleep-opportunity-calculator.html"]
  ].map(([className, label, sublabel, question, result, href], index) => `<a class="path-row ${className}" href="${href}" data-source="hero-path"><span class="path-index" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span><span class="path-label"><strong>${esc(label)}</strong><span>${esc(sublabel)}</span></span><span class="path-flow"><span class="path-step"><b>Question</b><span>${esc(question)}</span></span><span class="path-arrow">&rarr;</span><span class="path-step"><b>Tool</b><span>${esc(label)}</span></span><span class="path-arrow">&rarr;</span><span class="path-step"><b>Result</b><span>${esc(result)}</span></span></span><span class="path-cta">Open path &rarr;</span></a>`).join("");
  const heroVisual = `<aside class="hero-visual" aria-labelledby="hero-visual-heading"><div class="hero-visual-header"><small>Tool route navigator</small><h2 id="hero-visual-heading">Pick a route, then get a transparent result</h2><p>Four high-intent paths turn the homepage into a practical tool selector instead of decorative symbols.</p></div><div class="path-board">${heroVisualRoutes}</div><div class="visual-metrics"><span>Browser-local inputs</span><span>Method and limits shown</span><span>Educational, not diagnostic</span></div></aside>`;
  const trustProof = `<section class="trust-proof" aria-label="Method and privacy proof"><div class="trust-proof-item"><span class="proof-icon" aria-hidden="true"></span><strong>Method before result</strong><span>Calculator pages show formulas, assumptions, examples, and limits so the number is easier to inspect.</span></div><div class="trust-proof-item"><span class="proof-icon" aria-hidden="true"></span><strong>Private by default</strong><span>Core calculator inputs and self-check answers run in the browser and are not required for an account.</span></div><div class="trust-proof-item"><span class="proof-icon" aria-hidden="true"></span><strong>Educational boundaries</strong><span>Self-checks state that they are original reflection tools, not diagnostic instruments.</span></div><div class="trust-proof-item"><span class="proof-icon" aria-hidden="true"></span><strong>Search-informed upkeep</strong><span>Homepage paths and tool snippets are adjusted from Search Console visibility and click data.</span></div></section>`;
  const methodImagePanel = `<section class="method-image-panel" aria-label="ToolsQuark method visual"><img src="assets/visual-guides/home-trust-map.png" alt="Visual map showing ToolsQuark inputs, method, result, and next step workflow." loading="lazy" width="1400" height="620"><div><strong>From question to usable result</strong><span>A visual map of how ToolsQuark moves from user input to disclosed method, explainable result, and a practical next step.</span><span class="method-steps"><b>Your question</b><b>Local input</b><b>Transparent method</b><b>Shareable result</b></span></div></section>`;
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
<title>Practical Calculators & Private Self-Checks | ToolsQuark</title>
<meta name="description" content="Use practical calculators and private self-checks for maintenance calories, walking steps, sleep timing, body metrics, stress, habits, and relationships.">
<meta property="og:type" content="website">
<meta property="og:site_name" content="ToolsQuark">
<meta property="og:title" content="Practical Calculators & Private Self-Checks">
<meta property="og:description" content="Transparent browser-local tools for maintenance calories, walking steps, sleep timing, body metrics, stress, habits, and relationships.">
<meta property="og:url" content="${site}/">
<meta name="twitter:card" content="summary">
<script type="application/ld+json">
${JSON.stringify([
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site}/#website`,
    name: "ToolsQuark",
    url: `${site}/`,
    description: "A privacy-focused knowledge platform combining transparent health calculators, original educational self-checks, and evidence-informed decision guides.",
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
    name: "Health Calculators, Original Self-Checks, and Decision Guides",
    url: `${site}/`,
    description: "A free collection of transparent calculators, browser-local self-checks, and practical guides for choosing and interpreting them.",
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
    name: "ToolsQuark calculator and self-check directory",
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
<style>${baseStyles()}${homeRedesignStyles()}${homeTaskCardStyles()}${homeVisualUpgradeStyles()}${homeDirectionalCleanupStyles()}</style>
</head>
<body>
<nav class="navbar"><div class="nav-inner"><a href="index.html" class="logo">ToolsQuark</a><div class="nav-links"><a href="health.html">Calculators</a><a href="mental-health.html">Self-Checks</a><a href="lifestyle.html">Sleep &amp; Habits</a><a href="emotional-connection.html">Relationships</a><a href="guides.html">Guides</a></div></div></nav>
<div class="container">
    <header class="hero"><div class="hero-copy"><p class="hero-kicker">Private tools for health, habits, sleep, and relationships</p><h1>Practical Calculators & Self-Checks For Daily Decisions</h1><p>Estimate maintenance calories, walking steps, sleep timing, body metrics, stress patterns, and relationship next steps with transparent browser-local tools.</p><div class="search-wrapper" id="searchWrapper"><input type="search" id="searchInput" class="search-input" placeholder="Search TDEE, walking steps, weight trend, sleep, stress..." autocomplete="off" aria-label="Search ToolsQuark calculators and self-checks" aria-controls="searchResults" aria-expanded="false"><div class="search-results" id="searchResults" role="region" aria-label="Calculator and self-check search results" aria-live="polite"></div></div><div class="hero-actions"><a href="tools/tdee-calculator.html">Plan calories</a><a href="tools/walking-time-to-steps-calculator.html">Estimate walking steps</a><a href="tools/sleep-opportunity-calculator.html">Check sleep timing</a><a href="mental-health.html">Try a self-check</a></div><div class="trust-badges"><span>Formulas disclosed</span><span>Runs in your browser</span><span>Educational, not diagnostic</span><span>Updated from search data</span></div></div>${heroVisual}</header>
    ${trustProof}
    ${methodImagePanel}
    <section class="route-section" aria-labelledby="route-heading"><div class="section-heading"><h2 id="route-heading">Start With The Question You Actually Have</h2><p>Choose a route when you do not know the exact tool name yet.</p></div><div class="route-grid">${decisionRoutes}</div></section>
    <section class="popular-section" aria-labelledby="useful-now-heading"><div class="section-heading"><h2 id="useful-now-heading">Useful Now: High-Intent Calculators</h2><p>Pages with early search visibility, promoted here so visitors and Google can reach them faster.</p></div><div class="popular-grid">${nearWinTools.map(renderNearWinCard).join("")}</div></section>
    <section class="scenario-section" aria-labelledby="scenario-heading"><div class="section-heading"><h2 id="scenario-heading">Choose By Situation, Not By Tool Name</h2><p>Use these paths when the directory feels too broad.</p></div><div class="scenario-grid">${scenarioCards}</div></section>
    <section class="popular-section" aria-labelledby="popular-heading"><div class="section-heading"><h2 id="popular-heading">High-Intent Tools To Start With</h2><p>Fast entry points for the body metrics, calorie, sleep, movement, and self-check questions people search most often.</p></div><div class="popular-grid">${startingPoints.map(renderStartingPointCard).join("")}</div></section>
    <section class="format-band" aria-label="Ways to use ToolsQuark"><div class="format-grid"><div class="format-item"><h2>Calculate</h2><p>Use disclosed formulas and assumptions for body metrics, nutrition, sleep, movement, and dates.</p><a href="health.html">Browse calculators &rarr;</a></div><div class="format-item"><h2>Reflect</h2><p>Review recent patterns with original browser-local self-checks that state their limits.</p><a href="mental-health.html">Browse self-checks &rarr;</a></div><div class="format-item"><h2>Understand</h2><p>Compare similar methods and turn results into a smaller, more useful next step.</p><a href="guides.html">Read decision guides &rarr;</a></div></div></section>
    <section class="category-band" aria-labelledby="category-heading"><div class="section-heading"><h2 id="category-heading">Browse By Category</h2><p>Choose a focused collection or search every tool above.</p></div><div class="category-grid">${categoryLinks}</div></section>
    <section class="home-guides" aria-labelledby="guide-heading"><div class="section-heading"><h2 id="guide-heading">Guides That Support Current Tool Paths</h2><p><a href="guides.html">Browse all ${guides.length} decision guides &rarr;</a></p></div><div class="home-guide-grid expanded">${featuredGuides}</div></section>
    <section class="directory-section" aria-labelledby="directory-heading"><div class="section-heading"><h2 id="directory-heading">Explore Calculators & Self-Checks By Topic</h2><p>Open any interactive experience directly from the complete directory.</p></div><div class="directory-list">${directoryGroups}</div></section>
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
  if(toolLink){const toolData={source:toolLink.dataset.source||'unknown',tool:toolLink.dataset.toolSlug};trackHomepageEvent('tool_click',toolData);trackHomepageEvent('homepage_tool_open',{source:toolData.source,slug:toolData.tool});return;}
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
    ...Object.values(groups).map((group) => group.file),
    "guides.html",
    ...guides.map((guide) => `guides/${guide.slug}.html`),
    "about.html",
    "editorial-policy.html",
    "privacy.html",
    "terms.html",
    ...allTools.map((slug) => `tools/${slug}.html`)
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${site}/${url}</loc><lastmod>${pageLastmods[url] || lastmod}</lastmod></url>`).join("\n")}
</urlset>
`;
}

fs.writeFileSync(path.join(root, "index.html"), renderHome(), "utf8");
for (const group of Object.values(groups)) {
  fs.writeFileSync(path.join(root, group.file), renderCategory(group), "utf8");
}
fs.writeFileSync(path.join(root, "sitemap.xml"), renderSitemap(), "utf8");
console.log("Rendered index.html, category pages, and sitemap.xml");
