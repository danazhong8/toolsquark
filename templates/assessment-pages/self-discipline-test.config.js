const { createV2Config } = require("./v2-assessment-factory");

module.exports = createV2Config({
  key: "followthrough",
  slug: "self-discipline-test",
  title: "Follow-Through Pattern Self-Check | Private 30-Day Review",
  description: "Review task initiation, consistency, impulse friction, and recovery after lapses with a private 12-item original self-check.",
  h1: "Follow-Through Pattern Self-Check",
  hero: "Review how often starting friction, inconsistent repetition, immediate impulses, and difficulty restarting affected intended behavior during the past 30 days.",
  shareDescription: "A private 30-day self-check for task initiation, consistency, impulse friction, and recovery after lapses.",
  socialFile: "follow-through-pattern-self-check.png",
  socialAccent: "#16a34a",
  recallDays: 30,
  intendedAudience: "Adults seeking general self-reflection about recent follow-through patterns",
  categoryHref: "lifestyle.html",
  categoryLabel: "Lifestyle Tools",
  contextLabel: "Main goal area",
  contextQuestion: "Which area is most affected by inconsistent follow-through?",
  contextOptions: [
    { label: "Work or study", value: "work" },
    { label: "Health routines", value: "health" },
    { label: "Household or administrative tasks", value: "admin" },
    { label: "Personal projects", value: "personal" }
  ],
  dimensions: [
    { key: "initiation", label: "Starting Friction", definition: "Difficulty beginning an intended behavior after the next action is clear." },
    { key: "consistency", label: "Routine Consistency", definition: "Difficulty repeating an intended behavior across planned occasions." },
    { key: "impulse", label: "Immediate Impulse Friction", definition: "Short-term options displacing a longer-term intention." },
    { key: "restart", label: "Restart After Lapses", definition: "Difficulty resuming after one missed occasion or interruption." }
  ],
  items: [
    ["initiation-1", "initiation", "During the past 30 days, how often did you delay starting after the next action was clear?"],
    ["initiation-2", "initiation", "During the past 30 days, how often did you wait for motivation before beginning an intended behavior?"],
    ["initiation-3", "initiation", "During the past 30 days, how often did setup become a barrier to starting?"],
    ["consistency-1", "consistency", "During the past 30 days, how often did an intended routine stop after only a few repetitions?"],
    ["consistency-2", "consistency", "During the past 30 days, how often did a small schedule change interrupt a planned routine?"],
    ["consistency-3", "consistency", "During the past 30 days, how often did you complete an intended behavior less frequently than planned?"],
    ["impulse-1", "impulse", "During the past 30 days, how often did an immediately rewarding option replace the action you intended?"],
    ["impulse-2", "impulse", "During the past 30 days, how often did an available distraction override a longer-term goal?"],
    ["impulse-3", "impulse", "During the past 30 days, how often did convenience determine your action despite a different plan?"],
    ["restart-1", "restart", "During the past 30 days, how often did one missed occasion lead to several more missed occasions?"],
    ["restart-2", "restart", "During the past 30 days, how often did a lapse make restarting feel harder than the original start?"],
    ["restart-3", "restart", "During the past 30 days, how often did you abandon a routine after an imperfect week?"]
  ],
  protectiveQuestions: [
    { id: "environment-support", label: "Supportive environment", question: "During the past 30 days, how often did your environment make the intended action easier to begin?" },
    { id: "small-restart", label: "Small restart", question: "During the past 30 days, how often could you restart with a smaller version after a lapse?" }
  ],
  impactMessage: "Serious practical consequences deserve attention without framing the problem as a character flaw. Consider qualified support to review workload, mood, sleep, attention, physical health, learning needs, and environmental barriers.",
  profiles: [
    { min: 0, max: 12, title: "Mostly Reliable Follow-Through", color: "var(--low)", description: "Your answers place most follow-through difficulties in the occasional range.", insights: ["Keep the environment and task size that currently support action.", "Continue treating lapses as restart points rather than failures."] },
    { min: 13, max: 30, title: "Context-Dependent Follow-Through", color: "var(--mid)", description: "Several follow-through difficulties appeared repeatedly, with the pattern varying by dimension.", insights: ["Choose one dimension to redesign instead of relying on more willpower.", "Make the intended action easier to begin than the main alternative."] },
    { min: 31, max: 48, title: "Frequent Follow-Through Friction", color: "var(--high)", description: "Many follow-through difficulties appeared on numerous days. Practical context deserves attention.", insights: ["Reduce the target and environmental friction at the same time.", "Consider qualified support when the pattern causes serious impairment."] }
  ],
  dimensionRelated: { initiation: 0, consistency: 1, impulse: 0, restart: 1 },
  dimensionGuidance: {
    initiation: "Reduce setup and define an action that can begin in under two minutes.",
    consistency: "Attach the behavior to one stable cue and use a minimum version for disrupted days.",
    impulse: "Increase the effort required for the strongest immediate alternative until the intended action begins.",
    restart: "Predefine a small restart version so one missed occasion does not become a new default."
  },
  references: [
    { title: "Time to Form a Habit: A Systematic Review and Meta-Analysis", publisher: "Healthcare / PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/39685110/" },
    { title: "Changing Your Habits for Better Health", publisher: "National Institute of Diabetes and Digestive and Kidney Diseases", href: "https://www.niddk.nih.gov/health-information/weight-management/changing-habits-better-health" }
  ],
  related: [
    { href: "https://toolsquark.com/tools/procrastination-test.html", title: "Procrastination Pattern Self-Check", description: "Review emotional and situational drivers of delay.", action: "Review Delay" },
    { href: "https://toolsquark.com/tools/focus-attention-diagnostic.html", title: "Focus And Attention Pattern", description: "Review whether attention friction overlaps with follow-through.", action: "Review Focus" }
  ],
  faq: [
    { question: "Is follow-through a measure of character?", answer: "No. Environment, task design, sleep, stress, health, attention, incentives, and resources all influence behavior." },
    { question: "Is this a validated self-control scale?", answer: "No. It is an original ToolsQuark educational self-check." },
    { question: "Why report restarting separately?", answer: "The ability to resume after a lapse can be more useful than expecting perfect consistency." }
  ],
  validationLimit: "It cannot measure willpower, character, ADHD, depression, or another cause of inconsistent behavior.",
  limitsBody: `<p>Follow-through is shaped by task size, opportunity, environment, fatigue, stress, health, mood, attention, resources, and competing demands. A result should not be interpreted as a moral judgment.</p>`,
  actionBody: `<p>Use the most frequent dimension to redesign one behavior: shrink the start, stabilize the cue, add friction to the main distraction, or define a small restart. Seek support when consequences are serious or persistent.</p>`,
  disclaimer: "This educational tool cannot measure character or diagnose a cause of inconsistent follow-through."
});
