const { createEmotionalConnectionConfig, references } = require("./emotional-connection-factory");

module.exports = createEmotionalConnectionConfig({
  key: "safe-disclosure",
  slug: "safe-emotional-disclosure-self-check",
  title: "Safe Emotional Disclosure Pattern Self-Check | ToolsQuark",
  description: "Review anticipated safety, clear expression, reception, and post-conversation effects with a private 12-item original self-check.",
  h1: "Safe Emotional Disclosure Pattern Self-Check",
  hero: "Review how often fear, unclear expression, difficult reception, or regret affected emotional disclosure in one important relationship during the past 30 days.",
  shareDescription: "A private 30-day self-check for anticipated safety, clear expression, reception, and post-conversation effects.",
  socialFile: "safe-emotional-disclosure-self-check.png",
  socialAccent: "#b45309",
  dimensions: [
    { key: "anticipation", label: "Anticipated Safety", definition: "Expecting that a bounded disclosure can occur without ridicule, retaliation, or unwanted exposure." },
    { key: "expression", label: "Clear Expression", definition: "Sharing enough context and meaning without being forced to reveal everything." },
    { key: "reception", label: "Reception", definition: "Experiencing attention, respect, and reasonable care after sharing." },
    { key: "aftermath", label: "After-Conversation Impact", definition: "Feeling that boundaries and privacy remain intact after the conversation." }
  ],
  items: [
    ["anticipation-1", "anticipation", "During the past 30 days, how often did you avoid sharing because you expected criticism?"],
    ["anticipation-2", "anticipation", "During the past 30 days, how often did you worry that personal information might be repeated without permission?"],
    ["anticipation-3", "anticipation", "During the past 30 days, how often did you feel you had to hide a meaningful reaction to preserve the relationship?"],
    ["expression-1", "expression", "During the past 30 days, how often did you struggle to explain what you wanted the other person to understand?"],
    ["expression-2", "expression", "During the past 30 days, how often did you share more than you intended because the conversation felt hard to control?"],
    ["expression-3", "expression", "During the past 30 days, how often did hints replace a clear disclosure?"],
    ["reception-1", "reception", "During the past 30 days, how often did a disclosure receive less attention than you expected?"],
    ["reception-2", "reception", "During the past 30 days, how often did the response focus on blame before understanding?"],
    ["reception-3", "reception", "During the past 30 days, how often did you feel pressured to disclose more than you wanted?"],
    ["aftermath-1", "aftermath", "During the past 30 days, how often did you regret sharing because of how the information was later handled?"],
    ["aftermath-2", "aftermath", "During the past 30 days, how often did a disclosure create uncertainty about your privacy?"],
    ["aftermath-3", "aftermath", "During the past 30 days, how often did one difficult disclosure make future openness less likely?" ]
  ],
  protectiveQuestions: [
    { id: "disclosure-boundary", label: "Disclosure boundary", question: "During the past 30 days, how often did you choose how much to share and what to keep private?" },
    { id: "disclosure-consent", label: "Privacy agreement", question: "During the past 30 days, how often did you clarify whether personal information could be shared further?" }
  ],
  profileTitles: ["Mostly Safe And Bounded Disclosure", "Disclosure Safety Is Uneven", "Frequent Barriers To Safe Disclosure"],
  profileDescriptions: ["Barriers to bounded emotional disclosure appeared mostly occasionally.", "Disclosure felt workable in some situations but difficult in others.", "Fear, difficult reception, or post-conversation effects frequently limited safe disclosure."],
  profileInsights: [
    ["Keep using clear boundaries about timing, privacy, and desired response.", "Remember that selective privacy can coexist with closeness."],
    ["Identify whether anticipation, expression, reception, or aftermath is the main barrier.", "Test a smaller disclosure with a clear boundary and purpose."],
    ["Do not increase vulnerability simply to improve a score.", "Use trusted or professional support when disclosure could lead to retaliation, coercion, or loss of safety."]
  ],
  dimensionGuidance: {
    anticipation: "Choose a lower-risk topic and check whether the setting and person feel suitable.",
    expression: "Decide the one point you want understood and the details you prefer to keep private.",
    reception: "State whether you want listening, acknowledgment, advice, or action before sharing.",
    aftermath: "Clarify privacy expectations and notice whether boundaries are respected afterward."
  },
  references: [references.responsiveness, references.connection],
  related: [
    { href: "https://toolsquark.com/tools/emotional-communication-self-check.html", title: "Emotional Communication Self-Check", description: "Review how feelings and needs are expressed.", action: "Review Communication" },
    { href: "https://toolsquark.com/tools/felt-understood-self-check.html", title: "Felt Understood Self-Check", description: "Review attention, understanding, and response fit.", action: "Review Understanding" }
  ],
  faqQuestion: "Is sharing more always healthier?",
  faqAnswer: "No. Healthy disclosure includes choice, timing, privacy, boundaries, and attention to safety.",
  validationLimit: "It cannot determine whether disclosure is safe in a specific situation.",
  limitsBody: "<p>Do not use a score as pressure to disclose. When there is coercion, retaliation, monitoring, or fear of harm, privacy and specialized support may be more appropriate than greater openness.</p>",
  actionBody: "<p>Use the highest dimension to plan one bounded step: assess the setting, choose what to share, state the response wanted, or clarify privacy afterward. Safety takes priority over openness.</p>"
});
