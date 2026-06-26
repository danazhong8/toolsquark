const { createEmotionalConnectionConfig, references } = require("./emotional-connection-factory");

module.exports = createEmotionalConnectionConfig({
  key: "emotional-boundaries",
  slug: "emotional-boundaries-self-check",
  title: "Emotional Boundaries Self-Check | Private Relationship Review",
  description: "Review emotional boundaries, limits, guilt pressure, and follow-through in one relationship with a private 12-item self-check.",
  h1: "Emotional Boundaries Self-Check",
  hero: "Review how often emotional boundaries, limits, guilt pressure, or follow-through became difficult in one important relationship during the past 30 days.",
  shareDescription: "A private 30-day self-check for emotional boundaries, limits, guilt pressure, and follow-through.",
  socialFile: "emotional-boundaries-self-check.png",
  socialAccent: "#0f766e",
  dimensions: [
    { key: "awareness", label: "Boundary Awareness", definition: "Noticing where emotional capacity, privacy, time, or responsibility has a limit." },
    { key: "expression", label: "Limit Expression", definition: "Stating a boundary clearly enough that another person can understand the request or limit." },
    { key: "pressure", label: "Guilt And Pressure", definition: "Recognizing guilt, obligation, fear, or pressure that makes boundaries harder to hold." },
    { key: "followthrough", label: "Boundary Follow-Through", definition: "Keeping the boundary consistent enough that it becomes usable in real interactions." }
  ],
  items: [
    ["awareness-1", "awareness", "During the past 30 days, how often did you notice a limit only after resentment had already built?"],
    ["awareness-2", "awareness", "During the past 30 days, how often was it hard to tell whether a request was yours to carry?"],
    ["awareness-3", "awareness", "During the past 30 days, how often did you ignore a need for recovery time to avoid disappointing someone?"],
    ["expression-1", "expression", "During the past 30 days, how often did you hint at a limit instead of stating it directly?"],
    ["expression-2", "expression", "During the past 30 days, how often did your boundary include a long explanation because a simple no felt unkind?"],
    ["expression-3", "expression", "During the past 30 days, how often was your request so vague that the other person could not know what needed to change?"],
    ["pressure-1", "pressure", "During the past 30 days, how often did guilt make you agree to something you did not have capacity for?"],
    ["pressure-2", "pressure", "During the past 30 days, how often did fear of conflict make you soften a boundary until it no longer worked?"],
    ["pressure-3", "pressure", "During the past 30 days, how often did someone else's disappointment feel like proof that your limit was wrong?"],
    ["followthrough-1", "followthrough", "During the past 30 days, how often did you reverse a boundary before anything had actually changed?"],
    ["followthrough-2", "followthrough", "During the past 30 days, how often did the same boundary need to be repeated because the consequence was unclear?"],
    ["followthrough-3", "followthrough", "During the past 30 days, how often did keeping a boundary feel harder than the problem the boundary was meant to address?" ]
  ],
  protectiveQuestions: [
    { id: "boundaries-clear-no", label: "Clear no", question: "During the past 30 days, how often could you say no without adding a long defense?" },
    { id: "boundaries-repair", label: "Repair after limit", question: "During the past 30 days, how often could a relationship recover after you stated a limit?" }
  ],
  profileTitles: ["Mostly Workable Boundaries", "Boundary Clarity Varies", "Frequent Boundary Strain"],
  profileDescriptions: ["Boundary strain appeared mostly occasionally in the relationship you considered.", "Some boundaries were workable while others became unclear, guilt-laden, or inconsistent.", "Emotional boundaries were often hard to notice, state, or maintain across recent interactions."],
  profileInsights: [
    ["Keep naming limits early before resentment builds.", "Notice which boundary wording preserves both clarity and connection."],
    ["Choose one recurring boundary and make the request more observable.", "Separate guilt from responsibility before answering a new request."],
    ["Start with smaller, lower-risk limits and track what happens after you state them.", "Prioritize safety and outside support if boundaries trigger threats, retaliation, or fear."]
  ],
  dimensionGuidance: {
    awareness: "Name the limit before choosing whether to explain or negotiate it.",
    expression: "Use one short boundary sentence with a clear request or limit.",
    pressure: "Ask whether guilt is signaling care, fear, habit, or actual responsibility.",
    followthrough: "Decide the next action before the boundary is tested again."
  },
  references: [references.attachment, references.support],
  related: [
    { href: "https://toolsquark.com/tools/safe-emotional-disclosure-self-check.html", title: "Safe Emotional Disclosure Self-Check", description: "Review safety and response patterns around personal sharing.", action: "Review Disclosure" },
    { href: "https://toolsquark.com/tools/emotional-communication-self-check.html", title: "Emotional Communication Self-Check", description: "Review clarity, ownership, and timing in emotional conversations.", action: "Review Communication" }
  ],
  faqQuestion: "Does having boundaries mean being distant?",
  faqAnswer: "No. Boundaries can protect closeness by making capacity, consent, and responsibility clearer.",
  validationLimit: "It cannot determine whether another person is intentionally violating a boundary.",
  limitsBody: "<p>Boundary difficulty can come from unclear wording, stress, fear, dependence, cultural expectations, power differences, or unsafe dynamics. A checklist cannot decide which explanation fits.</p>",
  actionBody: "<p>Choose one recurring limit and write it as a short sentence: what you can do, what you cannot do, and what you will do next if the pattern repeats.</p>"
});
