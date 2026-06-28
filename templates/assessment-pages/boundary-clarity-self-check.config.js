const { createEmotionalConnectionConfig, references } = require("./emotional-connection-factory");

module.exports = createEmotionalConnectionConfig({
  key: "boundary-clarity",
  slug: "boundary-clarity-self-check",
  title: "Boundary Clarity Self-Check | Requests, Limits, And Follow-Through",
  description: "Review how clearly you notice, state, negotiate, and follow through on boundaries in one relationship.",
  h1: "Boundary Clarity Self-Check",
  hero: "Review whether a boundary is clear enough to notice, state, negotiate, and follow through in one important relationship.",
  shareDescription: "A private 30-day self-check for boundary clarity, requests, negotiation, and follow-through.",
  socialFile: "boundary-clarity-self-check.png",
  socialAccent: "#2563eb",
  dimensions: [
    { key: "signal", label: "Boundary Signal", definition: "Noticing the feeling or pattern that suggests a limit is needed." },
    { key: "wording", label: "Clear Wording", definition: "Turning a limit into a sentence another person can understand." },
    { key: "negotiation", label: "Negotiation Room", definition: "Separating the boundary from one rigid strategy when alternatives are possible." },
    { key: "followthrough", label: "Follow-Through", definition: "Knowing what you will do if the boundary is ignored or repeated." }
  ],
  items: [
    ["signal-1", "signal", "During the past 30 days, how often did you realize a boundary was needed only after resentment built?"],
    ["signal-2", "signal", "During the past 30 days, how often did you dismiss an early discomfort signal as too small to mention?"],
    ["signal-3", "signal", "During the past 30 days, how often was it hard to tell what kind of boundary was needed?"],
    ["wording-1", "wording", "During the past 30 days, how often did you explain around a boundary without stating the actual limit?"],
    ["wording-2", "wording", "During the past 30 days, how often was your boundary too vague for the other person to act on?"],
    ["wording-3", "wording", "During the past 30 days, how often did a simple boundary turn into a long defense?"],
    ["negotiation-1", "negotiation", "During the past 30 days, how often did you treat one preferred solution as the only possible boundary?"],
    ["negotiation-2", "negotiation", "During the past 30 days, how often was it hard to offer an alternative while still protecting the limit?"],
    ["negotiation-3", "negotiation", "During the past 30 days, how often did fear of being rigid make you abandon the boundary entirely?"],
    ["followthrough-1", "followthrough", "During the past 30 days, how often did you state a boundary without knowing what you would do next?"],
    ["followthrough-2", "followthrough", "During the past 30 days, how often did the same boundary repeat because the follow-through was unclear?"],
    ["followthrough-3", "followthrough", "During the past 30 days, how often did you keep negotiating after your stated limit had already been crossed?"]
  ],
  protectiveQuestions: [
    { id: "boundary-plain-language", label: "Plain language", question: "During the past 30 days, how often could you state a boundary in one or two clear sentences?" },
    { id: "boundary-next-step", label: "Known next step", question: "During the past 30 days, how often did you know what action would follow if the boundary was ignored?" }
  ],
  profileTitles: ["Mostly Clear Boundaries", "Mixed Boundary Clarity", "Frequent Boundary Confusion"],
  profileDescriptions: ["Boundary clarity issues appeared mostly occasionally in the relationship you considered.", "Some boundaries were clear while others became vague, overexplained, or hard to follow through.", "Boundary signals, wording, negotiation, or follow-through were often unclear."],
  profileInsights: [
    ["Keep naming the signal early.", "Use concise wording before adding explanation."],
    ["Choose one recurring boundary and rewrite it as a request plus next step.", "Separate the limit from the preferred strategy."],
    ["Start with a smaller lower-risk boundary.", "Prioritize safety and outside support when boundary-setting creates fear or retaliation."]
  ],
  dimensionGuidance: {
    signal: "Name the early signal before resentment becomes the only clue.",
    wording: "Write the limit in one sentence before explaining it.",
    negotiation: "List one alternative that still protects the core limit.",
    followthrough: "Decide the next action before the boundary is tested again."
  },
  references: [references.support, references.responsiveness],
  related: [
    { href: "https://toolsquark.com/tools/emotional-boundaries-self-check.html", title: "Emotional Boundaries Self-Check", description: "Review emotional limits, guilt pressure, and consistency.", action: "Review Boundaries" },
    { href: "https://toolsquark.com/tools/relationship-check-in-planner.html", title: "Relationship Check-In Planner", description: "Turn one boundary or request into a short check-in.", action: "Plan Check-In" }
  ],
  faqQuestion: "What makes a boundary clear?",
  faqAnswer: "A clear boundary names the limit, the request or action, and what will happen next if the pattern repeats.",
  validationLimit: "It cannot determine whether another person will respect a boundary.",
  limitsBody: "<p>Boundary clarity is not the same as safety. If stating limits leads to threats, retaliation, monitoring, or fear, prioritize trusted support over another conversation.</p>",
  actionBody: "<p>Pick one repeating boundary and write it as: what I can do, what I cannot do, and what I will do next if the pattern continues.</p>"
});
