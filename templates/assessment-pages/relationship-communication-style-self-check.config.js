const { createEmotionalConnectionConfig, references } = require("./emotional-connection-factory");

module.exports = createEmotionalConnectionConfig({
  key: "relationship-communication-style",
  slug: "relationship-communication-style-self-check",
  title: "Relationship Communication Style Self-Check | Private Pattern Review",
  description: "Review directness, listening, emotional pacing, and repair signals in one relationship with a private 12-item communication style self-check.",
  h1: "Relationship Communication Style Self-Check",
  hero: "Review how your relationship communication style has shown up recently across directness, listening, emotional pacing, and repair signals.",
  shareDescription: "A private 30-day self-check for directness, listening, emotional pacing, and repair signals in one relationship.",
  socialFile: "relationship-communication-style-self-check.png",
  socialAccent: "#7c3aed",
  dimensions: [
    { key: "directness", label: "Directness", definition: "Saying the main point clearly enough that it can be answered." },
    { key: "listening", label: "Listening Fit", definition: "Checking whether the other person's meaning was understood before responding." },
    { key: "pacing", label: "Emotional Pacing", definition: "Matching conversation timing and intensity to both people's capacity." },
    { key: "repair", label: "Repair Signals", definition: "Using cues that reopen understanding when communication gets tense or unclear." }
  ],
  items: [
    ["directness-1", "directness", "During the past 30 days, how often did your main point stay hidden behind hints?"],
    ["directness-2", "directness", "During the past 30 days, how often did you expect the other person to know what you meant without saying it clearly?"],
    ["directness-3", "directness", "During the past 30 days, how often did a conversation end without a clear request?"],
    ["listening-1", "listening", "During the past 30 days, how often did you prepare your response before checking whether you understood the other person?"],
    ["listening-2", "listening", "During the past 30 days, how often did you respond to the tone more than the meaning?"],
    ["listening-3", "listening", "During the past 30 days, how often was it hard to summarize the other person's view in a way they would recognize?"],
    ["pacing-1", "pacing", "During the past 30 days, how often did an important conversation happen when one person was too activated to continue clearly?"],
    ["pacing-2", "pacing", "During the past 30 days, how often did intensity rise faster than the conversation could handle?"],
    ["pacing-3", "pacing", "During the past 30 days, how often did a pause feel like rejection instead of regulation?"],
    ["repair-1", "repair", "During the past 30 days, how often did neither person name that the conversation had gone off track?"],
    ["repair-2", "repair", "During the past 30 days, how often did a misunderstanding remain uncorrected after you noticed it?"],
    ["repair-3", "repair", "During the past 30 days, how often did embarrassment make it hard to restart more gently?" ]
  ],
  protectiveQuestions: [
    { id: "style-summary", label: "Reflective summary", question: "During the past 30 days, how often did you check understanding before disagreeing?" },
    { id: "style-restart", label: "Gentle restart", question: "During the past 30 days, how often could you restart a tense exchange with a clearer tone or question?" }
  ],
  profileTitles: ["Mostly Flexible Communication Style", "Communication Style Is Mixed", "Frequent Communication Style Friction"],
  profileDescriptions: ["Recent communication style barriers appeared mostly occasionally.", "Communication style worked in some moments and repeatedly strained others.", "Directness, listening, pacing, or repair signals were often difficult in recent conversations."],
  profileInsights: [
    ["Keep using clear requests and repair signals early.", "Notice which pacing choices help both people stay engaged."],
    ["Practice one skill at a time: directness, reflection, pacing, or repair.", "Use a low-stakes conversation to rehearse the highest dimension."],
    ["Slow the conversation before adding more content.", "Consider structured or facilitated support if repeated talks escalate, collapse, or stay unresolved."]
  ],
  dimensionGuidance: {
    directness: "End with one clear question, request, or decision point.",
    listening: "Reflect the other person's meaning before adding your response.",
    pacing: "Check timing and intensity before continuing a difficult topic.",
    repair: "Name the moment communication drifted and restart with one clearer sentence."
  },
  references: [references.responsiveness, references.support],
  related: [
    { href: "https://toolsquark.com/tools/emotional-communication-self-check.html", title: "Emotional Communication Self-Check", description: "Review feeling identification, specificity, ownership, and timing.", action: "Review Communication" },
    { href: "https://toolsquark.com/tools/conflict-repair-self-check.html", title: "Conflict Repair Pattern Self-Check", description: "Review de-escalation, accountability, reconnection, and learning.", action: "Review Repair" }
  ],
  faqQuestion: "Is this a communication style quiz?",
  faqAnswer: "It is a private pattern self-check, not a personality quiz. It summarizes recent communication behaviors rather than assigning a fixed style label.",
  validationLimit: "It cannot identify a permanent communication style or decide who caused a communication problem.",
  limitsBody: "<p>Communication style changes with safety, stress, history, power, fatigue, topic, and the other person's response. The result should be read as a recent pattern, not a fixed identity.</p>",
  actionBody: "<p>Pick the highest dimension and choose one observable behavior for the next conversation: a clearer request, a reflective summary, a capacity check, or a repair restart.</p>"
});
