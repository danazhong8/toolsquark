const { createEmotionalConnectionConfig, references } = require("./emotional-connection-factory");

module.exports = createEmotionalConnectionConfig({
  key: "felt-understood",
  slug: "felt-understood-self-check",
  title: "Felt Understood In A Relationship Self-Check | ToolsQuark",
  description: "Review attentive listening, accurate understanding, emotional validation, and response fit with a private 12-item original self-check.",
  h1: "Felt Understood In A Relationship Self-Check",
  hero: "Review how often you felt unheard, misunderstood, minimized, or unsupported in one important relationship during the past 30 days.",
  shareDescription: "A private 30-day self-check for attentive listening, accurate understanding, validation, and response fit.",
  socialFile: "felt-understood-relationship-self-check.png",
  socialAccent: "#0369a1",
  dimensions: [
    { key: "attention", label: "Attentive Listening", definition: "Experiencing enough attention for the message to be received." },
    { key: "accuracy", label: "Accurate Understanding", definition: "Feeling that the meaning and context of what was shared were understood." },
    { key: "validation", label: "Emotional Validation", definition: "Having an experience acknowledged without requiring complete agreement." },
    { key: "fit", label: "Response Fit", definition: "Receiving a response that reasonably matches the support or action requested." }
  ],
  items: [
    ["attention-1", "attention", "During the past 30 days, how often did the other person seem distracted while you shared something important?"],
    ["attention-2", "attention", "During the past 30 days, how often did you stop explaining because you did not feel listened to?"],
    ["attention-3", "attention", "During the past 30 days, how often did an important conversation move on before you felt heard?"],
    ["accuracy-1", "accuracy", "During the past 30 days, how often did the other person respond to a different issue from the one you were trying to describe?"],
    ["accuracy-2", "accuracy", "During the past 30 days, how often did you need to repeat the same meaning several times?"],
    ["accuracy-3", "accuracy", "During the past 30 days, how often did assumptions replace questions about your experience?"],
    ["validation-1", "validation", "During the past 30 days, how often did your emotional reaction seem minimized?"],
    ["validation-2", "validation", "During the past 30 days, how often did you feel pressure to justify why something affected you?"],
    ["validation-3", "validation", "During the past 30 days, how often did disagreement make your experience feel invalidated?"],
    ["fit-1", "fit", "During the past 30 days, how often did you receive advice when you wanted listening?"],
    ["fit-2", "fit", "During the past 30 days, how often did the response offered feel unrelated to what you requested?"],
    ["fit-3", "fit", "During the past 30 days, how often did you leave an interaction less clear about whether support was available?" ]
  ],
  protectiveQuestions: [
    { id: "understood-reflection", label: "Accurate reflection", question: "During the past 30 days, how often did the other person reflect back your meaning accurately?" },
    { id: "understood-fit", label: "Support fit", question: "During the past 30 days, how often did you receive the kind of response you had requested?" }
  ],
  profileTitles: ["Mostly Understood Pattern", "Understanding Varies By Interaction", "Frequent Experience Of Not Feeling Understood"],
  profileDescriptions: ["Experiences of being unheard or misunderstood appeared mostly occasionally.", "Feeling understood was inconsistent across attention, accuracy, validation, or response fit.", "Feeling unheard, misunderstood, minimized, or mismatched appeared frequently."],
  profileInsights: [
    ["Notice which conversation conditions currently support accurate understanding.", "Continue naming the response you want before sharing details."],
    ["Identify whether the main gap is attention, accuracy, validation, or response fit.", "Try one conversation with a clear purpose and a request for reflection."],
    ["Use shorter conversations with explicit check-backs rather than repeating everything at once.", "Seek outside support when persistent invalidation or isolation is causing substantial distress."]
  ],
  dimensionGuidance: {
    attention: "Ask for a bounded time with fewer distractions before starting the conversation.",
    accuracy: "Ask the listener to summarize what they think the central point is.",
    validation: "Separate acknowledgment of your experience from agreement about every interpretation.",
    fit: "State whether you want listening, comfort, ideas, action, or simply company."
  },
  references: [references.responsiveness, references.support],
  related: [
    { href: "https://toolsquark.com/tools/emotional-availability-self-check.html", title: "Emotional Availability Self-Check", description: "Review the listening and response side of emotional understanding.", action: "Review Availability" },
    { href: "https://toolsquark.com/tools/emotional-needs-clarity-self-check.html", title: "Emotional Needs Clarity Self-Check", description: "Review whether the needed response is clear before the conversation.", action: "Review Needs" }
  ],
  faqQuestion: "Does feeling misunderstood prove the other person does not care?",
  faqAnswer: "No. Attention, skill, timing, stress, assumptions, capacity, and relationship safety can all affect understanding.",
  validationLimit: "It cannot measure the other person's empathy, care, or intent.",
  limitsBody: "<p>This checklist measures your recent experience, not an objective recording of the other person's behavior. A mismatch can involve expression, listening, timing, capacity, or incompatible expectations.</p>",
  actionBody: "<p>Use the highest dimension to choose one conversation change: reduce distraction, request a summary, ask for acknowledgment before problem-solving, or state the response you want.</p>"
});
