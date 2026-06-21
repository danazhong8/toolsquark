const { createV2Config } = require("./v2-assessment-factory");

module.exports = createV2Config({
  key: "workstrain",
  slug: "occupational-burnout-level-test",
  title: "Occupational Burnout Pattern Self-Check | ToolsQuark",
  description: "Review work exhaustion, mental distance, reduced efficacy, and recovery interference with a private 12-item original self-check.",
  h1: "Occupational Burnout Pattern Self-Check",
  hero: "Review how often work exhaustion, mental distance, reduced effectiveness, and recovery difficulty appeared during the past four weeks.",
  shareDescription: "A private 28-day self-check for work exhaustion, mental distance, reduced efficacy, and recovery interference.",
  socialFile: "occupational-burnout-pattern-self-check.png",
  socialAccent: "#d97706",
  recallDays: 28,
  intendedAudience: "Working adults seeking general self-reflection about recent occupational strain",
  contextLabel: "Main work pressure",
  contextQuestion: "Which work condition is contributing most to current strain?",
  contextOptions: [
    { label: "Workload or pace", value: "workload" },
    { label: "Role clarity or control", value: "control" },
    { label: "Conflict or low support", value: "support" },
    { label: "Values or job fit", value: "fit" }
  ],
  dimensions: [
    { key: "exhaustion", label: "Work Exhaustion", definition: "Feeling depleted by occupational demands." },
    { key: "distance", label: "Mental Distance", definition: "Growing detachment or cynicism toward work." },
    { key: "efficacy", label: "Reduced Work Efficacy", definition: "Feeling less able to complete or influence work effectively." },
    { key: "recovery", label: "Recovery Interference", definition: "Work strain continuing into non-work time." }
  ],
  items: [
    ["exhaustion-1", "exhaustion", "During the past 28 days, how often did you feel depleted before the workday ended?"],
    ["exhaustion-2", "exhaustion", "During the past 28 days, how often did beginning work require unusual effort?"],
    ["exhaustion-3", "exhaustion", "During the past 28 days, how often did work leave little energy for non-work responsibilities?"],
    ["distance-1", "distance", "During the past 28 days, how often did you feel emotionally detached from your work?"],
    ["distance-2", "distance", "During the past 28 days, how often did you approach work with more cynicism than usual?"],
    ["distance-3", "distance", "During the past 28 days, how often did the purpose of your work feel difficult to connect with?"],
    ["efficacy-1", "efficacy", "During the past 28 days, how often did you doubt your ability to complete expected work?"],
    ["efficacy-2", "efficacy", "During the past 28 days, how often did effort produce less progress than you expected?"],
    ["efficacy-3", "efficacy", "During the past 28 days, how often did limited control make effective work difficult?"],
    ["recovery-1", "recovery", "During the past 28 days, how often did work concerns remain active after work ended?"],
    ["recovery-2", "recovery", "During the past 28 days, how often did work strain interfere with rest on non-work time?"],
    ["recovery-3", "recovery", "During the past 28 days, how often did you return to work without feeling adequately recovered?"]
  ],
  protectiveQuestions: [
    { id: "work-boundary", label: "Work boundary", question: "During the past 28 days, how often could you disengage from work during non-work time?" },
    { id: "work-influence", label: "Influence and support", question: "During the past 28 days, how often could you influence priorities or obtain useful support at work?" }
  ],
  impactTitle: "Work strain is causing serious consequences",
  impactMessage: "Serious work, health, relationship, or self-care consequences deserve support regardless of the checklist total. Consider discussing workload, control, role clarity, and support with an appropriate workplace contact or qualified health professional.",
  profiles: [
    { min: 0, max: 12, title: "Mostly Occasional Occupational Strain", color: "var(--low)", description: "Your answers place most occupational strain experiences in the occasional range.", insights: ["Keep protecting recovery outside work.", "Maintain the work conditions that support clarity and effectiveness."] },
    { min: 13, max: 30, title: "Recurring Occupational Strain", color: "var(--mid)", description: "Several occupational strain experiences appeared repeatedly, with the pattern varying by dimension.", insights: ["Address one work condition rather than treating recovery as the only solution.", "Clarify one priority, boundary, or source of support."] },
    { min: 31, max: 48, title: "Frequent Strain Across Work Dimensions", color: "var(--high)", description: "Many occupational strain experiences appeared on numerous days. Duration and consequences deserve attention.", insights: ["Consider workplace and professional support when strain persists.", "Prioritize workload, control, role clarity, or conflict alongside recovery."] }
  ],
  dimensionRelated: { exhaustion: 0, distance: 1, efficacy: 1, recovery: 0 },
  dimensionGuidance: {
    exhaustion: "Identify one demand that can be reduced, delayed, delegated, or clarified rather than adding recovery around unchanged overload.",
    distance: "Name the work condition driving detachment and decide whether it needs a boundary, conversation, or role change.",
    efficacy: "Clarify the next priority and the authority, information, or support required to complete it.",
    recovery: "Create a repeatable end-of-work transition that closes open loops before non-work time begins."
  },
  references: [
    { title: "Burn-out as an Occupational Phenomenon", publisher: "World Health Organization", href: "https://www.who.int/standards/classifications/frequently-asked-questions/burn-out-an-occupational-phenomenon" },
    { title: "Stress at Work", publisher: "National Institute for Occupational Safety and Health", href: "https://www.cdc.gov/niosh/stress/about/index.html" }
  ],
  related: [
    { href: "https://toolsquark.com/tools/stress-index-test.html", title: "Stress Pattern Self-Check", description: "Review broader overload, control strain, and daily impact.", action: "Review Stress" },
    { href: "https://toolsquark.com/tools/sleep-quality-assessment.html", title: "Sleep Quality Self-Check", description: "Review whether work strain overlaps with sleep disruption.", action: "Review Sleep" }
  ],
  faq: [
    { question: "Is burnout a medical diagnosis?", answer: "The WHO classifies burn-out as an occupational phenomenon, not a medical condition. Other health conditions can overlap and require assessment." },
    { question: "Is this a validated burnout inventory?", answer: "No. It is an original ToolsQuark checklist and is not the Maslach Burnout Inventory or another validated instrument." },
    { question: "Can time off solve burnout?", answer: "Rest may help, but persistent strain often also involves workload, control, role clarity, support, fairness, or job fit." }
  ],
  validationLimit: "It cannot diagnose depression, anxiety, a sleep condition, or another cause of exhaustion.",
  limitsBody: `<p>This checklist concerns work-related patterns only. Exhaustion can also reflect sleep loss, illness, caregiving, mood, medication effects, or other non-work factors. A fuller assessment is needed when symptoms are broad or persistent.</p>`,
  actionBody: `<p>Use the most frequent dimension to choose one work-focused change and one recovery condition. Seek workplace or professional support when strain persists, affects health, or creates serious practical consequences.</p>`,
  disclaimer: "This educational tool is not a validated burnout inventory and cannot diagnose a medical or mental health condition."
});
