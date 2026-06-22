const { createEmotionalConnectionConfig, references } = require("./emotional-connection-factory");

module.exports = createEmotionalConnectionConfig({
  key: "availability",
  slug: "emotional-availability-self-check",
  title: "Emotional Availability Pattern Self-Check | ToolsQuark",
  description: "Review emotional awareness, present attention, responsive care, and tolerance for closeness with a private 12-item self-check.",
  h1: "Emotional Availability Pattern Self-Check",
  hero: "Review how often emotional awareness, presence, responsiveness, or tolerance for closeness became difficult in one important relationship during the past 30 days.",
  shareDescription: "A private 30-day self-check for emotional awareness, present attention, responsive care, and tolerance for closeness.",
  socialFile: "emotional-availability-pattern-self-check.png",
  socialAccent: "#0f766e",
  dimensions: [
    { key: "awareness", label: "Emotional Awareness", definition: "Recognizing your own emotional state while contact is happening." },
    { key: "presence", label: "Present Attention", definition: "Remaining mentally and emotionally engaged during meaningful moments." },
    { key: "responsiveness", label: "Responsive Care", definition: "Responding in a way that acknowledges the other person's expressed experience." },
    { key: "tolerance", label: "Closeness Tolerance", definition: "Staying engaged when emotion, vulnerability, or intimacy feels intense." }
  ],
  items: [
    ["awareness-1", "awareness", "During the past 30 days, how often did you disconnect from your feelings during an important interaction?"],
    ["awareness-2", "awareness", "During the past 30 days, how often did you realize only later that an interaction had affected you emotionally?"],
    ["awareness-3", "awareness", "During the past 30 days, how often was it difficult to distinguish your feelings from the other person's feelings?"],
    ["presence-1", "presence", "During the past 30 days, how often did distraction make it hard to stay with an emotional conversation?"],
    ["presence-2", "presence", "During the past 30 days, how often did you mentally prepare a response instead of taking in what was being shared?"],
    ["presence-3", "presence", "During the past 30 days, how often did you shorten meaningful contact because engagement felt demanding?"],
    ["responsiveness-1", "responsiveness", "During the past 30 days, how often did you move to problem-solving before acknowledging the feeling being expressed?"],
    ["responsiveness-2", "responsiveness", "During the past 30 days, how often were you unsure how to show that you cared?"],
    ["responsiveness-3", "responsiveness", "During the past 30 days, how often did your response miss the kind of support the other person requested?"],
    ["tolerance-1", "tolerance", "During the past 30 days, how often did another person's vulnerability make you want to withdraw?"],
    ["tolerance-2", "tolerance", "During the past 30 days, how often did emotional intensity make you withdraw from the interaction?"],
    ["tolerance-3", "tolerance", "During the past 30 days, how often did closeness feel harder to tolerate than routine interaction?" ]
  ],
  protectiveQuestions: [
    { id: "availability-presence", label: "Undivided presence", question: "During the past 30 days, how often did you give meaningful contact your undivided attention?" },
    { id: "availability-checkin", label: "Support check-in", question: "During the past 30 days, how often did you ask what kind of response would be helpful?" }
  ],
  profileTitles: ["Mostly Available Engagement", "Availability Varies By Situation", "Frequent Barriers To Emotional Availability"],
  profileDescriptions: ["Barriers to emotional presence and responsiveness appeared mostly occasionally.", "Availability was uneven, with repeated difficulty in one or more areas.", "Emotional awareness, presence, responsiveness, or closeness tolerance was difficult on many days."],
  profileInsights: [
    ["Protect the habits that help you stay present without overextending yourself.", "Keep checking whether listening or practical help is wanted."],
    ["Choose one dimension to practice during a low-pressure conversation.", "Separate limited capacity from lack of care and communicate that distinction."],
    ["Use shorter, bounded conversations rather than disappearing from emotional contact.", "Consider support when shutdown, fear, or overload repeatedly disrupts important relationships."]
  ],
  dimensionGuidance: {
    awareness: "Name your own feeling before deciding how much of it to share.",
    presence: "Remove one distraction and reflect back one thing you heard before responding.",
    responsiveness: "Ask whether the person wants listening, comfort, ideas, or practical help.",
    tolerance: "Stay for one manageable part of the conversation and agree when to continue."
  },
  references: [references.responsiveness, references.attachment],
  related: [
    { href: "https://toolsquark.com/tools/felt-understood-self-check.html", title: "Felt Understood Self-Check", description: "Review attention and emotional acknowledgment.", action: "Review Understanding" },
    { href: "https://toolsquark.com/tools/closeness-distance-pattern-self-check.html", title: "Closeness And Distance Pattern Self-Check", description: "Review flexibility around intimacy and space.", action: "Review Closeness" }
  ],
  faqQuestion: "Does needing space mean someone is emotionally unavailable?",
  faqAnswer: "No. Healthy availability includes limits, rest, timing, and honest communication about capacity.",
  validationLimit: "It cannot label you or another person as emotionally available or unavailable.",
  limitsBody: "<p>Availability varies with stress, health, safety, neurodivergence, culture, timing, and relationship history. A need for space is not inherently a lack of care.</p>",
  actionBody: "<p>Use the highest dimension to practice one observable behavior: name a feeling, offer undivided attention, ask what support fits, or set a clear time to return to the conversation.</p>"
});
