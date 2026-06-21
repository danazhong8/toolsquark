const { createV2Config } = require("./v2-assessment-factory");

module.exports = createV2Config({
  key: "focus",
  slug: "focus-attention-diagnostic",
  title: "Focus And Attention Pattern Self-Check | ToolsQuark",
  description: "Review distractibility, task initiation, sustained attention, and task organization with a private 12-item original self-check.",
  h1: "Focus And Attention Pattern Self-Check",
  hero: "Review how often distraction, starting friction, attention drift, and task organization difficulties appeared during the past two weeks.",
  shareDescription: "A private 14-day self-check for distractibility, task initiation, sustained attention, and task organization.",
  socialFile: "focus-attention-pattern-self-check.png",
  socialAccent: "#0891b2",
  recallDays: 14,
  intendedAudience: "Adults seeking general self-reflection about recent focus patterns",
  contextLabel: "Most affected setting",
  contextQuestion: "Where has focus difficulty been most noticeable?",
  contextOptions: [
    { label: "Work or study", value: "work" },
    { label: "Household tasks", value: "household" },
    { label: "Conversations or reading", value: "communication" },
    { label: "Across several settings", value: "multiple" }
  ],
  dimensions: [
    { key: "distraction", label: "Distractibility", definition: "Attention being pulled away by external or internal cues." },
    { key: "initiation", label: "Task Initiation", definition: "Difficulty beginning after the next action is known." },
    { key: "sustained", label: "Sustained Attention", definition: "Difficulty remaining with one task for the intended period." },
    { key: "organization", label: "Task Organization", definition: "Difficulty keeping priorities or task state clear." }
  ],
  items: [
    ["distraction-1", "distraction", "During the past 14 days, how often did a notification pull you away from an intended task?"],
    ["distraction-2", "distraction", "During the past 14 days, how often did background activity interrupt your train of thought?"],
    ["distraction-3", "distraction", "During the past 14 days, how often did an unrelated thought redirect your attention?"],
    ["initiation-1", "initiation", "During the past 14 days, how often was it difficult to begin after the next task step was clear?"],
    ["initiation-2", "initiation", "During the past 14 days, how often did you remain inactive while preparing to start?"],
    ["initiation-3", "initiation", "During the past 14 days, how often did a routine task require unusual effort to begin?"],
    ["sustained-1", "sustained", "During the past 14 days, how often did attention drift before the intended work period ended?"],
    ["sustained-2", "sustained", "During the past 14 days, how often did you leave a task before reaching a planned stopping point?"],
    ["sustained-3", "sustained", "During the past 14 days, how often did you need to reread material because attention had moved elsewhere?"],
    ["organization-1", "organization", "During the past 14 days, how often was the next priority unclear?"],
    ["organization-2", "organization", "During the past 14 days, how often did switching tasks make it difficult to remember where you stopped?"],
    ["organization-3", "organization", "During the past 14 days, how often did several open tasks make one next action hard to identify?"]
  ],
  protectiveQuestions: [
    { id: "focus-block", label: "Protected focus time", question: "During the past 14 days, how often did you have a period protected from major interruptions?" },
    { id: "clear-next-step", label: "Clear next step", question: "During the past 14 days, how often was one concrete next action written down before work began?" }
  ],
  impactMessage: "Serious focus-related consequences deserve a fuller assessment. Sleep, stress, mood, workload, medication effects, substance use, medical conditions, learning needs, and ADHD can overlap, so this checklist should not be used to select one explanation.",
  profiles: [
    { min: 0, max: 12, title: "Mostly Occasional Focus Friction", color: "var(--low)", description: "Your answers place most focus difficulties in the occasional range.", insights: ["Keep protecting low-interruption work periods.", "Continue defining one next action before beginning."] },
    { min: 13, max: 30, title: "Context-Dependent Focus Friction", color: "var(--mid)", description: "Several focus difficulties appeared repeatedly, with the pattern varying across dimensions or settings.", insights: ["Change one environmental cue before changing the whole routine.", "Use the highest-frequency dimension to choose one experiment."] },
    { min: 31, max: 48, title: "Frequent Focus Friction Across Areas", color: "var(--high)", description: "Many focus difficulties appeared on numerous days. Duration and practical interference deserve attention.", insights: ["Consider qualified support when focus problems persist or impair daily life.", "Protect sleep and reduce one major interruption while arranging support."] }
  ],
  dimensionRelated: { distraction: 0, initiation: 1, sustained: 0, organization: 1 },
  dimensionGuidance: {
    distraction: "Silence one nonessential cue and keep unrelated capture notes outside the current task.",
    initiation: "Reduce the task to one action that can begin in under two minutes.",
    sustained: "Use a realistic work interval with one visible stopping point and one planned break.",
    organization: "Keep one short active-task list and mark exactly where work stopped before switching."
  },
  references: [
    { title: "Attention-Deficit/Hyperactivity Disorder", publisher: "National Institute of Mental Health", href: "https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd" },
    { title: "About ADHD", publisher: "Centers for Disease Control and Prevention", href: "https://www.cdc.gov/adhd/about/index.html" }
  ],
  related: [
    { href: "https://toolsquark.com/tools/procrastination-test.html", title: "Procrastination Pattern Self-Check", description: "Review whether task delay is occurring alongside focus friction.", action: "Review Delay" },
    { href: "https://toolsquark.com/tools/sleep-quality-assessment.html", title: "Sleep Quality Self-Check", description: "Review whether recent sleep patterns overlap with attention difficulty.", action: "Review Sleep" }
  ],
  faq: [
    { question: "Does frequent focus difficulty mean ADHD?", answer: "No. Many conditions and circumstances can affect focus, and ADHD assessment requires developmental history and impairment across settings." },
    { question: "Is this a diagnostic test?", answer: "No. It is an original educational self-check despite the legacy page URL." },
    { question: "When may support help?", answer: "Consider qualified support when focus difficulties persist across settings or cause meaningful work, study, relationship, or safety problems." }
  ],
  validationLimit: "It cannot diagnose ADHD, a learning difference, a mood condition, or another cause of attention difficulty.",
  limitsBody: `<p>Attention varies with sleep, stress, environment, mood, pain, medication effects, substance use, workload, and medical conditions. ADHD assessment also considers childhood history and patterns across settings, which this page cannot evaluate.</p>`,
  actionBody: `<p>Start with the highest-frequency dimension: remove one cue, shrink the first step, set a realistic focus interval, or externalize task state. Seek qualified support when difficulties remain persistent or impairing.</p>`,
  disclaimer: "This educational tool cannot diagnose ADHD or determine why attention difficulty occurs."
});
