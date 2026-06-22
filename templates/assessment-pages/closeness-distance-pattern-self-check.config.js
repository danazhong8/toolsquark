const { createEmotionalConnectionConfig, references } = require("./emotional-connection-factory");

module.exports = createEmotionalConnectionConfig({
  key: "closeness-distance",
  slug: "closeness-distance-pattern-self-check",
  title: "Closeness And Distance Pattern Self-Check | ToolsQuark",
  description: "Review comfort with closeness, tolerance for distance, autonomy, and relationship flexibility with a private 12-item self-check.",
  h1: "Closeness And Distance Pattern Self-Check",
  hero: "Review how often closeness, temporary distance, autonomy, or changing relationship needs became difficult during the past 30 days.",
  shareDescription: "A private 30-day self-check for comfort with closeness, distance tolerance, autonomy, and relationship flexibility.",
  socialFile: "closeness-distance-pattern-self-check.png",
  socialAccent: "#7c3aed",
  dimensions: [
    { key: "closeness", label: "Closeness Comfort", definition: "Remaining engaged as trust, intimacy, or emotional depth increases." },
    { key: "distance", label: "Distance Tolerance", definition: "Managing temporary unavailability or space without rapid escalation." },
    { key: "autonomy", label: "Personal Autonomy", definition: "Maintaining routines, preferences, and other relationships while staying connected." },
    { key: "flexibility", label: "Relationship Flexibility", definition: "Adjusting closeness and space through communication rather than one fixed response." }
  ],
  items: [
    ["closeness-1", "closeness", "During the past 30 days, how often did increasing emotional closeness make you want to pull back suddenly?"],
    ["closeness-2", "closeness", "During the past 30 days, how often did you avoid sharing something meaningful because it might deepen the relationship?"],
    ["closeness-3", "closeness", "During the past 30 days, how often did affectionate contact feel unexpectedly uncomfortable?"],
    ["distance-1", "distance", "During the past 30 days, how often did a delayed reply quickly feel like a sign that the relationship was in danger?"],
    ["distance-2", "distance", "During the past 30 days, how often did temporary space make it hard to focus on other parts of your day?"],
    ["distance-3", "distance", "During the past 30 days, how often did you seek repeated contact because uncertainty felt difficult to tolerate?"],
    ["autonomy-1", "autonomy", "During the past 30 days, how often did you set aside an important routine mainly to preserve closeness?"],
    ["autonomy-2", "autonomy", "During the past 30 days, how often did a separate interest feel like a threat to connection?"],
    ["autonomy-3", "autonomy", "During the past 30 days, how often was it hard to state a different preference without guilt?"],
    ["flexibility-1", "flexibility", "During the past 30 days, how often did you use the same amount of contact even when circumstances had changed?"],
    ["flexibility-2", "flexibility", "During the past 30 days, how often did your desired amount of contact change abruptly without explanation?"],
    ["flexibility-3", "flexibility", "During the past 30 days, how often was it difficult to negotiate a level of closeness that worked for both people?" ]
  ],
  protectiveQuestions: [
    { id: "distance-plan", label: "Clear return plan", question: "During the past 30 days, how often did you agree on when to reconnect after taking space?" },
    { id: "autonomy-support", label: "Supported autonomy", question: "During the past 30 days, how often did the relationship leave room for separate interests and routines?" }
  ],
  profileTitles: ["Mostly Flexible Closeness Pattern", "Uneven Closeness And Distance", "Frequent Closeness-Distance Strain"],
  profileDescriptions: ["Closeness, space, and autonomy difficulties appeared mostly occasionally.", "One or more closeness-distance patterns repeated often enough to deserve context.", "Closeness, temporary distance, or autonomy was difficult across many recent interactions."],
  profileInsights: [
    ["Keep using clear expectations around contact and space.", "Protect both connection and independent routines."],
    ["Identify whether closeness, distance, autonomy, or flexibility creates the most strain.", "Agree on one concrete signal for space and reconnection."],
    ["Slow rapid shifts between pursuit and withdrawal with a written return plan.", "Consider support when fear, shutdown, or conflict repeatedly controls contact patterns."]
  ],
  dimensionGuidance: {
    closeness: "Choose one small honest disclosure rather than increasing intimacy all at once.",
    distance: "Separate the observable delay from the meaning your mind assigns to it.",
    autonomy: "Keep one routine or preference that supports your identity outside the relationship.",
    flexibility: "Name the amount of contact you can offer now and when that may change."
  },
  references: [references.attachment, references.support],
  related: [
    { href: "https://toolsquark.com/tools/emotional-availability-self-check.html", title: "Emotional Availability Pattern Self-Check", description: "Review presence and responsiveness during closeness.", action: "Review Availability" },
    { href: "https://toolsquark.com/tools/support-access-self-check.html", title: "Support Access Pattern Self-Check", description: "Review whether support can be reached without losing autonomy.", action: "Review Support" }
  ],
  faqQuestion: "Is this an attachment-style test?",
  faqAnswer: "No. It reviews recent closeness and distance experiences without assigning a fixed attachment type.",
  validationLimit: "It cannot identify an attachment style or explain why a closeness-distance pattern occurs.",
  limitsBody: "<p>Contact needs vary across people and situations. High or low contact is not inherently healthy or unhealthy; flexibility, consent, reliability, and the ability to negotiate matter more than one preferred amount.</p>",
  actionBody: "<p>Choose one experiment based on the highest dimension: a small disclosure, a plan for delayed contact, protection of one independent routine, or a direct conversation about changing contact needs.</p>"
});
