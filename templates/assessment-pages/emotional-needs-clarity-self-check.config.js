const { createEmotionalConnectionConfig, references } = require("./emotional-connection-factory");

module.exports = createEmotionalConnectionConfig({
  key: "needs-clarity",
  slug: "emotional-needs-clarity-self-check",
  title: "Emotional Needs Clarity Self-Check | ToolsQuark",
  description: "Review emotional awareness, need naming, clear requests, and need-matched action with a private 12-item original self-check.",
  h1: "Emotional Needs Clarity Self-Check",
  hero: "Review how often it was difficult to notice, name, communicate, or respond to your emotional needs in one important relationship during the past 30 days.",
  shareDescription: "A private 30-day self-check for emotional awareness, need naming, clear requests, and need-matched action.",
  socialFile: "emotional-needs-clarity-self-check.png",
  socialAccent: "#be123c",
  dimensions: [
    { key: "awareness", label: "Emotional Awareness", definition: "Noticing internal signals before they become overwhelming or disappear." },
    { key: "naming", label: "Need Naming", definition: "Identifying the kind of understanding, space, reassurance, or practical help needed." },
    { key: "requesting", label: "Clear Requests", definition: "Turning an internal need into a specific and answerable request." },
    { key: "responding", label: "Need-Matched Action", definition: "Choosing an action that fits the need rather than ignoring or misdirecting it." }
  ],
  items: [
    ["awareness-1", "awareness", "During the past 30 days, how often did you notice emotional strain only after it had become intense?"],
    ["awareness-2", "awareness", "During the past 30 days, how often did you know something felt wrong but could not tell what you were feeling?"],
    ["awareness-3", "awareness", "During the past 30 days, how often did you move past an emotional reaction without pausing to understand it?"],
    ["naming-1", "naming", "During the past 30 days, how often was it hard to identify the main kind of support you needed?"],
    ["naming-2", "naming", "During the past 30 days, how often did several different needs blur together?"],
    ["naming-3", "naming", "During the past 30 days, how often did you use a broad label such as upset without identifying what mattered underneath?"],
    ["requesting-1", "requesting", "During the past 30 days, how often did you hope the other person would know what you needed without being told?"],
    ["requesting-2", "requesting", "During the past 30 days, how often did you hint at a need instead of asking directly?"],
    ["requesting-3", "requesting", "During the past 30 days, how often did you avoid asking because you could not phrase the need clearly?"],
    ["responding-1", "responding", "During the past 30 days, how often did you seek a response that did not actually address the need you were feeling?"],
    ["responding-2", "responding", "During the past 30 days, how often did you dismiss a need as unreasonable before considering a small response to it?"],
    ["responding-3", "responding", "During the past 30 days, how often did you repeat the same coping response even when it was not helping?" ]
  ],
  protectiveQuestions: [
    { id: "needs-pause", label: "Reflective pause", question: "During the past 30 days, how often did you pause long enough to identify what kind of support or space you needed?" },
    { id: "needs-request", label: "Specific request", question: "During the past 30 days, how often did you make a specific request that the other person could clearly answer?" }
  ],
  profileTitles: ["Mostly Clear Need Signals", "Uneven Need Clarity", "Frequent Difficulty Identifying Needs"],
  profileDescriptions: ["Difficulty identifying or communicating emotional needs appeared mostly occasionally.", "Several parts of the need-to-request process were difficult on repeated days.", "Difficulty noticing, naming, or responding to needs appeared frequently across several areas."],
  profileInsights: [
    ["Keep using the language and pauses that currently make needs easier to identify.", "Notice which requests receive a clear yes, no, or alternative."],
    ["Start with the highest dimension rather than trying to fix the whole process.", "Translate one repeated frustration into a feeling, need, and specific request."],
    ["Use a short written check-in before a difficult conversation.", "Consider qualified support when needs remain confusing or relationships feel persistently unsafe or overwhelming."]
  ],
  dimensionGuidance: {
    awareness: "Pause at the first body or mood signal and name the feeling before deciding what to do.",
    naming: "Complete the sentence: I need more or less of ___ right now.",
    requesting: "Make one request that is specific, time-limited, and open to a clear answer.",
    responding: "Check whether the action you are taking actually matches the need you named."
  },
  references: [references.connection, references.responsiveness],
  related: [
    { href: "https://toolsquark.com/tools/emotional-communication-self-check.html", title: "Emotional Communication Self-Check", description: "Review how needs and feelings become words.", action: "Review Communication" },
    { href: "https://toolsquark.com/tools/safe-emotional-disclosure-self-check.html", title: "Safe Emotional Disclosure Self-Check", description: "Review the conditions that support honest sharing.", action: "Review Disclosure" }
  ],
  faqQuestion: "Are emotional needs the same in every relationship?",
  faqAnswer: "No. Needs can change with the relationship, situation, stress level, and available alternatives.",
  validationLimit: "It cannot define the correct amount of closeness, reassurance, or independence for you.",
  limitsBody: "<p>Needs are not commands and identifying a need does not require another person to meet it. Clarity helps separate the internal need from the specific request or strategy used to address it.</p>",
  actionBody: "<p>Use the highest dimension to choose one step: notice an early signal, name the kind of support needed, make one specific request, or test a better-matched response.</p>"
});
