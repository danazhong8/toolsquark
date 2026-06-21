module.exports = {
  slug: "occupational-burnout-level-test",
  title: "Occupational Burnout Self-Check | ToolsQuark",
  description: "Take a private occupational burnout self-check covering work exhaustion, detachment, recovery difficulty, and perceived effectiveness.",
  h1: "Occupational Burnout Self-Check",
  hero: "Reflect on work-related exhaustion, detachment, spillover into personal time, and your current capacity to recover.",
  schemaName: "Privacy-First Occupational Burnout Test",
  lastUpdated: "June 21, 2026",
  timeframe: "Past 4 weeks",
  questionDimensions: ["exhaustion", "detachment", "exhaustion", "efficacy", "exhaustion"],
  dimensionRelated: { exhaustion: 1, detachment: 0, efficacy: 0 },
  dimensionGuidance: {
    exhaustion: "Protect one genuine recovery boundary this week, such as a defined stop time, a meal away from work, or a notification-free evening block.",
    detachment: "Identify the work condition driving the most cynicism and decide whether it needs a boundary, a process change, or a direct conversation.",
    efficacy: "Define the most important achievable outcome for the week and ask for feedback or priority clarification where expectations are unclear."
  },
  references: [
    { title: "Burn-out as an Occupational Phenomenon", publisher: "World Health Organization", href: "https://www.who.int/standards/classifications/frequently-asked-questions/burn-out-an-occupational-phenomenon" }
  ],
  questions: [
    { question: "How often do you feel emotionally drained by work?", options: ["Rarely", "Sometimes", "Often", "Almost daily"] },
    { question: "How often do you feel detached or cynical about your work?", options: ["Rarely", "Sometimes", "Often", "Almost daily"] },
    { question: "How often does work fatigue spill into evenings or weekends?", options: ["Rarely", "Sometimes", "Often", "Almost always"] },
    { question: "How effective do you feel at work lately?", options: ["Very effective", "Mostly effective", "Less effective", "Barely effective"] },
    { question: "How recoverable does your workload feel?", options: ["Very recoverable", "Somewhat", "Hard to recover", "Not recoverable"] }
  ],
  profiles: [
    { min: 5, max: 8, title: "Sustainable Workload Pattern", color: "var(--low)", description: "Your work strain appears relatively manageable with healthier recovery capacity.", indicators: { exhaustion: 22, detachment: 20, efficacy: 80 }, insights: ["Keep recovery boundaries visible.", "Protect the routines that make workload sustainable."] },
    { min: 9, max: 14, title: "Burnout Warning Zone", color: "var(--mid)", description: "Your responses suggest rising exhaustion or reduced recovery from work demands.", indicators: { exhaustion: 62, detachment: 56, efficacy: 48 }, insights: ["Identify one workload pressure that can be renegotiated.", "Add real transitions between work and non-work time."] },
    { min: 15, max: 20, title: "Frequent Burnout Signals", color: "var(--high)", description: "Your answers include frequent work-related depletion, detachment, or reduced effectiveness in this checklist.", indicators: { exhaustion: 90, detachment: 84, efficacy: 22 }, insights: ["Consider discussing workload, leave, role fit, or support with a trusted professional.", "If burnout is affecting health or safety, seek qualified help."] }
  ],
  indicators: [{ key: "exhaustion", label: "Emotional Exhaustion" }, { key: "detachment", label: "Detachment" }, { key: "efficacy", label: "Work Efficacy", direction: "protective" }],
  related: [
    { href: "https://toolsquark.com/tools/stress-index-test.html", title: "Stress Index Test", description: "Compare burnout with broader stress load.", action: "Assess Stress" },
    { href: "https://toolsquark.com/tools/sleep-quality-assessment.html", title: "Sleep Quality Assessment", description: "Burnout and sleep often reinforce each other.", action: "Assess Sleep" }
  ],
  faq: [
    { question: "Is burnout just being tired?", answer: "No. Burnout often combines exhaustion, cynicism or detachment, and reduced professional efficacy." },
    { question: "Can a vacation fix burnout?", answer: "Rest can help, but persistent burnout often requires workload, boundary, role, or support changes." }
  ],
  contentSections: [
    { title: "What This Self-Check Covers", body: `<p>The five questions review work-related exhaustion, cynicism or detachment, spillover into recovery time, perceived effectiveness, and whether workload feels recoverable.</p><p>This is an original ToolsQuark checklist. It is not the Maslach Burnout Inventory or another licensed or validated workplace instrument.</p>` },
    { title: "How Scoring Works", body: `<p>Answers are scored from 1 to 4, producing a total from 5 to 20. Higher totals represent more frequent burnout-related responses in this checklist.</p><ul><li><strong>5-8:</strong> fewer frequent signals.</li><li><strong>9-14:</strong> several warning signals.</li><li><strong>15-20:</strong> many frequent signals needing attention.</li></ul><div class="note-box">These bands and dimension bars are editorial, not validated occupational cutoffs.</div>` },
    { title: "Burnout Is An Occupational Phenomenon", body: `<p>The WHO describes burn-out in ICD-11 as an occupational phenomenon resulting from chronic workplace stress that has not been successfully managed; it is not classified as a medical condition. Similar symptoms can also occur with depression, anxiety, sleep disorders, illness, caregiving strain, or unsafe work.</p>` },
    { title: "What To Do With The Result", body: `<p>Look for changes to workload, control, staffing, role clarity, recovery time, fairness, and support rather than placing the entire burden on personal resilience. Seek professional help when symptoms affect health or functioning, and use workplace or emergency channels for immediate safety risks.</p>` }
  ],
  methodology: "This original five-item checklist scores answers from 1 to 4. Total-score bands and exhaustion, detachment, and efficacy indicators are editorial and not clinically validated. Scoring stays in the browser.",
  disclaimer: "This is not a clinical diagnosis or workplace assessment. Seek professional support if work strain affects health, safety, or functioning."
};
