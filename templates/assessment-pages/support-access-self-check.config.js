const { createEmotionalConnectionConfig, references } = require("./emotional-connection-factory");

module.exports = createEmotionalConnectionConfig({
  key: "support-access",
  slug: "support-access-self-check",
  title: "Relationship Support Access Self-Check | ToolsQuark",
  description: "Review support availability, help-seeking, support fit, and reliable follow-through with a private 12-item original self-check.",
  h1: "Relationship Support Access Self-Check",
  hero: "Review how often support felt unavailable, difficult to request, poorly matched, or unreliable in one important relationship during the past 30 days.",
  shareDescription: "A private 30-day self-check for support availability, help-seeking, support fit, and reliable follow-through.",
  socialFile: "relationship-support-access-self-check.png",
  socialAccent: "#15803d",
  dimensions: [
    { key: "availability", label: "Perceived Availability", definition: "Believing that some emotional or practical support can be reached when needed." },
    { key: "asking", label: "Help-Seeking", definition: "Making a clear request without excessive delay, apology, or indirect signaling." },
    { key: "fit", label: "Support Fit", definition: "Matching the response to the type and amount of help needed." },
    { key: "followthrough", label: "Reliable Follow-Through", definition: "Experiencing reasonable consistency between offered and delivered support." }
  ],
  items: [
    ["availability-1", "availability", "During the past 30 days, how often did you feel there was no one in this relationship to contact when you needed support?"],
    ["availability-2", "availability", "During the past 30 days, how often did support seem available only when circumstances were easy?"],
    ["availability-3", "availability", "During the past 30 days, how often were you uncertain whether reaching out would be welcome?"],
    ["asking-1", "asking", "During the past 30 days, how often did fear of being a burden stop you from asking for help?"],
    ["asking-2", "asking", "During the past 30 days, how often did you wait until distress was intense before making a request?"],
    ["asking-3", "asking", "During the past 30 days, how often did you signal a need indirectly instead of asking clearly?"],
    ["fit-1", "fit", "During the past 30 days, how often did the support offered fail to match what you needed?"],
    ["fit-2", "fit", "During the past 30 days, how often did the amount of support feel poorly matched to your need?"],
    ["fit-3", "fit", "During the past 30 days, how often was it difficult to explain what kind of help would be useful?"],
    ["followthrough-1", "followthrough", "During the past 30 days, how often did offered support not happen as expected?"],
    ["followthrough-2", "followthrough", "During the past 30 days, how often did you have to repeatedly remind the other person about agreed help?"],
    ["followthrough-3", "followthrough", "During the past 30 days, how often did inconsistent follow-through make future help-seeking less likely?" ]
  ],
  protectiveQuestions: [
    { id: "support-specific", label: "Specific request", question: "During the past 30 days, how often did you ask for a specific kind of support?" },
    { id: "support-alternative", label: "Support alternatives", question: "During the past 30 days, how often could you use another person, service, or resource when this relationship had limited capacity?" }
  ],
  profileTitles: ["Mostly Accessible Support", "Support Access Is Uneven", "Frequent Barriers To Support"],
  profileDescriptions: ["Barriers to obtaining fitting and reliable support appeared mostly occasionally.", "Support was available in some ways but repeated barriers appeared in one or more areas.", "Availability, asking, fit, or follow-through was difficult across many recent situations."],
  profileInsights: [
    ["Keep requests specific and maintain more than one support option.", "Notice the conditions under which follow-through is strongest."],
    ["Separate limited availability from difficulty asking or a mismatch in support type.", "Make one smaller request with a clear time and scope."],
    ["Build a support map that does not depend on one relationship alone.", "Consider professional or community support when practical or emotional needs remain persistently unmet."]
  ],
  dimensionGuidance: {
    availability: "List who or what can offer emotional, practical, informational, or urgent support.",
    asking: "Use one direct sentence that names the request, timing, and acceptable alternatives.",
    fit: "Clarify whether you want listening, company, ideas, action, or a referral.",
    followthrough: "Confirm the smallest realistic commitment and when you will check back."
  },
  references: [references.support, references.connection],
  related: [
    { href: "https://toolsquark.com/tools/emotional-needs-clarity-self-check.html", title: "Emotional Needs Clarity Self-Check", description: "Clarify what kind of support is actually needed.", action: "Review Needs" },
    { href: "https://toolsquark.com/tools/safe-emotional-disclosure-self-check.html", title: "Safe Emotional Disclosure Self-Check", description: "Review barriers to sharing a need openly.", action: "Review Disclosure" }
  ],
  faqQuestion: "Should one person meet every support need?",
  faqAnswer: "No. Different people and services may be suited to emotional, practical, informational, or urgent support.",
  validationLimit: "It cannot determine how much support another person is obligated or able to provide.",
  limitsBody: "<p>Support access depends on capacity, timing, resources, geography, communication, safety, and the type of help requested. Limited capacity in one relationship does not mean support is unavailable everywhere.</p>",
  actionBody: "<p>Choose one next step from the highest dimension: identify an available source, make a smaller direct request, specify the support type, or confirm a realistic follow-through plan.</p>"
});
