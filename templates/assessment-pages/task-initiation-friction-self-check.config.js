const { createV2Config } = require("./v2-assessment-factory");

module.exports = createV2Config({
  key: "taskstart",
  slug: "task-initiation-friction-self-check",
  title: "Task Initiation Friction Self-Check | Why Starting Feels Hard",
  description: "Review task-starting friction, unclear next actions, avoidance, and activation barriers with a private 14-day self-check.",
  h1: "Task Initiation Friction Self-Check",
  hero: "Use this private self-check to review what happens before a task starts: unclear steps, avoidance, activation barriers, and competing pulls.",
  shareDescription: "A private 14-day self-check for task initiation friction and starting barriers.",
  socialFile: "task-initiation-friction-self-check.png",
  socialAccent: "#7c3aed",
  recallDays: 14,
  intendedAudience: "Adults seeking general self-reflection about task starting and follow-through barriers",
  categoryHref: "lifestyle.html",
  categoryLabel: "Lifestyle Tools",
  contextLabel: "Task type",
  contextQuestion: "Which task type did you think about most while answering?",
  contextOptions: [
    { label: "Work or study task", value: "work" },
    { label: "Household or admin task", value: "admin" },
    { label: "Health or routine task", value: "routine" },
    { label: "Creative or personal project", value: "creative" }
  ],
  dimensions: [
    { key: "clarity", label: "Next-Step Clarity", definition: "Whether the first visible action is specific enough to start." },
    { key: "activation", label: "Activation Barrier", definition: "Difficulty moving from intention into physical or digital action." },
    { key: "avoidance", label: "Avoidance Pull", definition: "Emotional discomfort or uncertainty pushing the task away." },
    { key: "competition", label: "Competing Pulls", definition: "Other easier or more rewarding activities capturing the start window." }
  ],
  items: [
    ["clarity-1", "clarity", "During the past 14 days, how often did a task feel too vague to begin?"],
    ["clarity-2", "clarity", "During the past 14 days, how often did you need to decide what the first step was before starting?"],
    ["clarity-3", "clarity", "During the past 14 days, how often did a task stay stuck because the endpoint was unclear?"],
    ["activation-1", "activation", "During the past 14 days, how often did you intend to start but remain unable to take the first visible action?"],
    ["activation-2", "activation", "During the past 14 days, how often did opening the task feel disproportionately hard?"],
    ["activation-3", "activation", "During the past 14 days, how often did you wait until you felt more ready before starting?"],
    ["avoidance-1", "avoidance", "During the past 14 days, how often did discomfort delay the start?"],
    ["avoidance-2", "avoidance", "During the past 14 days, how often did you avoid a task because it might reveal a problem?"],
    ["avoidance-3", "avoidance", "During the past 14 days, how often did perfectionism make a rough first attempt feel unsafe?"],
    ["competition-1", "competition", "During the past 14 days, how often did an easier activity capture the time you meant to start?"],
    ["competition-2", "competition", "During the past 14 days, how often did checking messages happen before the first task step?"],
    ["competition-3", "competition", "During the past 14 days, how often did you start preparing to start instead of starting the task itself?"]
  ],
  protectiveQuestions: [
    { id: "taskstart-first-step", label: "Visible first step", question: "During the past 14 days, how often did you define a first action that could be done in under 10 minutes?" },
    { id: "taskstart-cue", label: "Start cue", question: "During the past 14 days, how often did a clear time, place, or cue help you begin?" }
  ],
  impactMessage: "If starting difficulty is seriously affecting work, school, money, care, health, or safety, consider qualified support to review workload, mood, attention, sleep, and context.",
  profiles: [
    { min: 0, max: 12, title: "Mostly Workable Starts", color: "var(--low)", description: "Task-starting friction appeared mostly occasionally.", insights: ["Keep using visible first steps.", "Notice which cues make starting easier."] },
    { min: 13, max: 30, title: "Repeated Start Friction", color: "var(--mid)", description: "Several start barriers appeared repeatedly.", insights: ["Make the next action smaller and more observable.", "Remove one competing pull during the start window."] },
    { min: 31, max: 48, title: "Frequent Start Barriers", color: "var(--high)", description: "Starting friction appeared often across dimensions.", insights: ["Reduce the task to a 5-minute opening move.", "Consider support if the pattern is broad or impairing."] }
  ],
  dimensionRelated: { clarity: 0, activation: 1, avoidance: 0, competition: 1 },
  dimensionGuidance: {
    clarity: "Write the first visible action, not the whole project.",
    activation: "Use a 5-minute start that counts even if you stop.",
    avoidance: "Name the discomfort and start with a deliberately rough pass.",
    competition: "Remove one easier alternative during the start window."
  },
  references: [
    { title: "The Nature of Procrastination: A Meta-Analytic Review", publisher: "Psychological Bulletin / PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/17201571/" },
    { title: "What Research Has Been Conducted on Procrastination?", publisher: "Frontiers in Psychology / PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/35185729/" }
  ],
  relatedTitle: "Related Execution Tools",
  related: [
    { href: "https://toolsquark.com/tools/procrastination-test.html", title: "Procrastination Pattern Self-Check", description: "Review task delay, avoidance, and reward pull.", action: "Review Delay" },
    { href: "https://toolsquark.com/tools/habit-consistency-calculator.html", title: "Habit Consistency Calculator", description: "Calculate follow-through across a review window.", action: "Check Rate" }
  ],
  faq: [
    { question: "Is task initiation friction the same as procrastination?", answer: "It overlaps, but this page focuses specifically on what happens before a task begins." },
    { question: "What is a good first step?", answer: "A good first step is visible, small, and doable in under 10 minutes without solving the entire task." },
    { question: "Is this an ADHD test?", answer: "No. It is an original educational checklist and cannot diagnose ADHD or any other condition." }
  ],
  validationLimit: "It cannot diagnose ADHD, depression, anxiety, learning differences, burnout, or another cause of task-starting difficulty.",
  limitsBody: `<p>Task initiation can be affected by workload, sleep, mood, attention, unclear requirements, conflict, health, environment, or unrealistic plans. A self-check cannot identify a single cause.</p>`,
  actionBody: `<p>Use the highest dimension to change the start conditions: clarify the first action, reduce activation size, make a rough first pass, or remove one competing pull.</p>`,
  disclaimer: "This educational tool cannot diagnose a condition or evaluate work, school, or medical accommodations."
});
