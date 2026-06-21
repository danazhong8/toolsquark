const { createV2Config } = require("./v2-assessment-factory");

module.exports = createV2Config({
  key: "socialmedia",
  slug: "social-media-addiction-index",
  title: "Social Media Use Pattern Self-Check | ToolsQuark",
  description: "Review automatic feed use, stopping control, social evaluation, and life displacement with a private 12-item original self-check.",
  h1: "Social Media Use Pattern Self-Check",
  hero: "Review how often automatic feed use, difficulty stopping, social evaluation, and social apps displacing intended activity appeared during the past 30 days.",
  shareDescription: "A private 30-day self-check for feed capture, stopping control, social evaluation, and life displacement.",
  socialFile: "social-media-use-pattern-self-check.png",
  socialAccent: "#7c3aed",
  recallDays: 30,
  intendedAudience: "Adults seeking general self-reflection about recent social media use patterns",
  categoryHref: "lifestyle.html",
  categoryLabel: "Lifestyle Tools",
  contextLabel: "Main social media activity",
  contextQuestion: "Which social media activity is most connected to this pattern?",
  contextOptions: [
    { label: "Short-form or algorithmic feeds", value: "feeds" },
    { label: "Messaging or group activity", value: "messaging" },
    { label: "Posting or checking feedback", value: "posting" },
    { label: "Several activities", value: "multiple" }
  ],
  dimensions: [
    { key: "capture", label: "Automatic Feed Capture", definition: "Opening or continuing social feeds without a prior intention." },
    { key: "control", label: "Stopping Control", definition: "Difficulty ending social media use at the intended time." },
    { key: "evaluation", label: "Social Evaluation", definition: "Mood or self-appraisal being shaped by feedback and comparison." },
    { key: "displacement", label: "Life Displacement", definition: "Social media replacing intended sleep, work, connection, or routines." }
  ],
  items: [
    ["capture-1", "capture", "During the past 30 days, how often did you open a social app without a clear purpose?"],
    ["capture-2", "capture", "During the past 30 days, how often did a feed continue longer than you initially intended?"],
    ["capture-3", "capture", "During the past 30 days, how often did you reopen a social app shortly after closing it?"],
    ["control-1", "control", "During the past 30 days, how often was it difficult to stop after deciding to leave a social app?"],
    ["control-2", "control", "During the past 30 days, how often did one more post become an extended session?"],
    ["control-3", "control", "During the past 30 days, how often did you continue using a social app despite no longer enjoying it?"],
    ["evaluation-1", "evaluation", "During the past 30 days, how often did feedback on a post noticeably affect your mood?"],
    ["evaluation-2", "evaluation", "During the past 30 days, how often did comparing yourself with posts reduce satisfaction with your own life?"],
    ["evaluation-3", "evaluation", "During the past 30 days, how often did concern about missing updates pull you back to a social app?"],
    ["displacement-1", "displacement", "During the past 30 days, how often did social media delay your intended bedtime?"],
    ["displacement-2", "displacement", "During the past 30 days, how often did social media replace time planned for a responsibility?"],
    ["displacement-3", "displacement", "During the past 30 days, how often did social media reduce attention available for an in-person interaction?"]
  ],
  protectiveQuestions: [
    { id: "intentional-entry", label: "Intentional entry", question: "During the past 30 days, how often did you decide your purpose before opening a social app?" },
    { id: "feed-boundary", label: "Feed boundary", question: "During the past 30 days, how often did you use a planned stopping point for social media?" }
  ],
  impactMessage: "Serious sleep, work, relationship, financial, or emotional consequences deserve support regardless of the checklist total. Consider qualified support when social media use remains difficult to control or substantially affects mood and daily life.",
  profiles: [
    { min: 0, max: 12, title: "Mostly Intentional Social Media Use", color: "var(--low)", description: "Your answers place most automatic or disruptive social media experiences in the occasional range.", insights: ["Keep the boundaries that support intentional use.", "Protect online activities that create genuine connection rather than passive capture."] },
    { min: 13, max: 30, title: "Context-Dependent Social Media Capture", color: "var(--mid)", description: "Several social media experiences appeared repeatedly, with the pattern varying by dimension.", insights: ["Change one feed cue or stopping condition before relying on restraint alone.", "Notice whether evaluation or displacement matters more than total time."] },
    { min: 31, max: 48, title: "Frequent Social Media Capture Across Areas", color: "var(--high)", description: "Many social media experiences appeared on numerous days. Practical and emotional consequences deserve attention.", insights: ["Use stronger feed and notification boundaries around the most affected activity.", "Consider support when use remains difficult to control or strongly affects mood."] }
  ],
  dimensionRelated: { capture: 0, control: 0, evaluation: 1, displacement: 1 },
  dimensionGuidance: {
    capture: "Remove automatic entry points and decide the purpose before opening the app.",
    control: "Use an external stopping cue and close the app when the cue occurs.",
    evaluation: "Reduce feedback checking and unfollow comparison-heavy sources that reliably worsen mood.",
    displacement: "Protect the displaced activity first with a feed-free time or location."
  },
  references: [
    { title: "Health Advisory on Social Media Use in Adolescence", publisher: "American Psychological Association", href: "https://www.apa.org/topics/social-media-internet/health-advisory-adolescent-social-media-use" },
    { title: "Social Media and Youth Mental Health", publisher: "U.S. Surgeon General", href: "https://www.hhs.gov/surgeongeneral/priorities/youth-mental-health/social-media/index.html" }
  ],
  related: [
    { href: "https://toolsquark.com/tools/smartphone-addiction-test.html", title: "Smartphone Use Pattern", description: "Review device-level checking, notifications, and displacement across phone activities.", action: "Review Phone Use" },
    { href: "https://toolsquark.com/tools/loneliness-level-test.html", title: "Connection And Loneliness Pattern", description: "Review whether online use is occurring alongside unmet connection needs.", action: "Review Connection" }
  ],
  faq: [
    { question: "Does frequent social media use mean addiction?", answer: "No. Frequency alone does not establish addiction. Control, distress, context, and practical consequences matter." },
    { question: "Is this a validated social media addiction scale?", answer: "No. It is an original ToolsQuark educational self-check." },
    { question: "How is this different from the smartphone self-check?", answer: "This page focuses on feeds, social evaluation, and comparison. The smartphone page covers device-level behavior across phone activities." }
  ],
  validationLimit: "It cannot diagnose behavioral addiction, depression, anxiety, or another cause of difficult social media use.",
  limitsBody: `<p>Social media can support learning, identity, work, and connection. Risk cannot be inferred from time alone. Age, platform design, content, purpose, mood effects, control, and what use displaces all matter.</p>`,
  actionBody: `<p>Use the most frequent dimension to change one feed cue, stopping condition, evaluation habit, or protected activity. Seek support when use remains difficult to control or causes serious consequences.</p>`,
  disclaimer: "This educational tool cannot diagnose social media addiction or determine whether a specific amount of use is harmful."
});
