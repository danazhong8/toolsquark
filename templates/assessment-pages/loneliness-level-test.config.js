const { createV2Config } = require("./v2-assessment-factory");

module.exports = createV2Config({
  key: "connection",
  slug: "loneliness-level-test",
  title: "Connection And Loneliness Pattern Self-Check | ToolsQuark",
  description: "Review emotional connection, support access, belonging, and withdrawal barriers with a private 12-item original self-check.",
  h1: "Connection And Loneliness Pattern Self-Check",
  hero: "Review how often emotional disconnection, limited support, low belonging, and barriers to reaching out appeared during the past two weeks.",
  shareDescription: "A private 14-day self-check for emotional connection, support access, belonging, and withdrawal barriers.",
  socialFile: "connection-loneliness-pattern-self-check.png",
  socialAccent: "#0f766e",
  recallDays: 14,
  intendedAudience: "Adults seeking general self-reflection about recent connection and loneliness patterns",
  contextLabel: "Most affected setting",
  contextQuestion: "Where has disconnection been most noticeable?",
  contextOptions: [
    { label: "Close relationships", value: "close" },
    { label: "Work or study", value: "work" },
    { label: "Community or social groups", value: "community" },
    { label: "Across several settings", value: "multiple" }
  ],
  dimensions: [
    { key: "connection", label: "Emotional Connection", definition: "Feeling able to share meaningful experiences with another person." },
    { key: "support", label: "Support Access", definition: "Perceiving that practical or emotional support is available when needed." },
    { key: "belonging", label: "Sense Of Belonging", definition: "Feeling included in valued relationships or groups." },
    { key: "withdrawal", label: "Withdrawal Barriers", definition: "Expectations or hesitation that make reaching out less likely." }
  ],
  items: [
    ["connection-1", "connection", "During the past 14 days, how often did you feel unable to speak honestly with someone you trust?"],
    ["connection-2", "connection", "During the past 14 days, how often did interactions feel less meaningful than you needed?"],
    ["connection-3", "connection", "During the past 14 days, how often did you feel emotionally alone while around other people?"],
    ["support-1", "support", "During the past 14 days, how often did you feel there was no one to contact for support?"],
    ["support-2", "support", "During the past 14 days, how often did you expect to handle a difficult situation without help?"],
    ["support-3", "support", "During the past 14 days, how often did available support feel insufficient for what you were facing?"],
    ["belonging-1", "belonging", "During the past 14 days, how often did you feel outside a group that mattered to you?"],
    ["belonging-2", "belonging", "During the past 14 days, how often did you feel unseen in a place where you spend time?"],
    ["belonging-3", "belonging", "During the past 14 days, how often did you question whether you belonged in a social setting that mattered to you?"],
    ["withdrawal-1", "withdrawal", "During the past 14 days, how often did fear of burdening someone stop you from reaching out?"],
    ["withdrawal-2", "withdrawal", "During the past 14 days, how often did you avoid contact because you expected not to be understood?"],
    ["withdrawal-3", "withdrawal", "During the past 14 days, how often did the effort required to connect feel too high?" ]
  ],
  protectiveQuestions: [
    { id: "meaningful-contact", label: "Meaningful contact", question: "During the past 14 days, how often did an interaction leave you feeling understood?" },
    { id: "active-reachout", label: "Active reach-out", question: "During the past 14 days, how often did you initiate contact with someone you value?" }
  ],
  impactMessage: "Severe or persistent loneliness deserves support regardless of the checklist total. Consider contacting a trusted person, community service, or qualified health professional. Use urgent local help if isolation occurs alongside thoughts of self-harm or feeling unable to stay safe.",
  profiles: [
    { min: 0, max: 12, title: "Mostly Supported Connection Pattern", color: "var(--low)", description: "Your answers place most disconnection experiences in the occasional range.", insights: ["Keep investing in interactions that feel reciprocal and meaningful.", "Protect the relationships or groups that currently support belonging."] },
    { min: 13, max: 30, title: "Uneven Connection And Support", color: "var(--mid)", description: "Several disconnection experiences appeared repeatedly, with the pattern varying by dimension.", insights: ["Choose one low-pressure contact that matches the area of greatest need.", "Separate lack of available support from hesitation to request it."] },
    { min: 31, max: 48, title: "Frequent Disconnection Across Areas", color: "var(--high)", description: "Many disconnection experiences appeared on numerous days. Duration and emotional impact deserve attention.", insights: ["Consider qualified or community support when isolation persists.", "Use one structured point of contact rather than waiting for connection to happen spontaneously."] }
  ],
  dimensionRelated: { connection: 0, support: 0, belonging: 1, withdrawal: 1 },
  dimensionGuidance: {
    connection: "Prioritize one conversation that allows a little more honesty or depth than routine contact.",
    support: "Name one specific kind of help and identify the person or service most able to provide it.",
    belonging: "Return to one repeated group, place, or activity where familiarity can build over time.",
    withdrawal: "Choose a small reach-out that does not require explaining everything at once."
  },
  references: [
    { title: "Social Connectedness", publisher: "Centers for Disease Control and Prevention", href: "https://www.cdc.gov/social-connectedness/about/index.html" },
    { title: "Social Connection", publisher: "World Health Organization", href: "https://www.who.int/news-room/fact-sheets/detail/social-connection" }
  ],
  related: [
    { href: "https://toolsquark.com/tools/social-anxiety-test.html", title: "Social Anxiety Pattern Self-Check", description: "Review whether fear of evaluation is creating a barrier to connection.", action: "Review Social Fear" },
    { href: "https://toolsquark.com/tools/stress-index-test.html", title: "Stress Pattern Self-Check", description: "Review whether overload is reducing capacity for connection.", action: "Review Stress" }
  ],
  faq: [
    { question: "Can loneliness occur around other people?", answer: "Yes. Loneliness concerns the quality and fit of connection, not only the number of people nearby." },
    { question: "Is this a validated loneliness scale?", answer: "No. It is an original ToolsQuark educational self-check." },
    { question: "When may support help?", answer: "Consider support when loneliness persists, strongly affects mood or functioning, or occurs alongside thoughts of self-harm." }
  ],
  validationLimit: "It cannot diagnose depression, social anxiety, or another cause of disconnection.",
  limitsBody: `<p>Loneliness can reflect relationship quality, life transitions, grief, exclusion, health limits, mood, social anxiety, geography, or other circumstances. A checklist cannot determine which factor matters most for one person.</p>`,
  actionBody: `<p>Use the most frequent dimension to choose one small step: deepen one conversation, request specific support, return to a repeated group, or make a low-pressure reach-out. Seek support when isolation remains persistent or painful.</p>`,
  disclaimer: "This educational tool cannot diagnose a condition or measure the quality of every relationship."
});
