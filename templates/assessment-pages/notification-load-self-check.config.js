const { createV2Config } = require("./v2-assessment-factory");

module.exports = createV2Config({
  key: "notifications",
  slug: "notification-load-self-check",
  title: "Notification Load Self-Check | Interruptions And Reactivity",
  description: "Review notification overload, interruption frequency, urgency pressure, and recovery difficulty with a private 30-day self-check.",
  h1: "Notification Load Self-Check",
  hero: "Use this private self-check to review whether notifications are interrupting focus, sleep, boundaries, or recovery across the past 30 days.",
  shareDescription: "A private 30-day self-check for notification load, urgency pressure, and recovery difficulty.",
  socialFile: "notification-load-self-check.png",
  socialAccent: "#0f766e",
  recallDays: 30,
  intendedAudience: "Adults seeking general self-reflection about notification interruptions and digital boundaries",
  categoryHref: "lifestyle.html",
  categoryLabel: "Lifestyle Tools",
  contextLabel: "Most affected area",
  contextQuestion: "Where do notifications create the most friction right now?",
  contextOptions: [
    { label: "Work or study focus", value: "focus" },
    { label: "Sleep or evening recovery", value: "sleep" },
    { label: "Relationships or in-person attention", value: "relationships" },
    { label: "General stress or urgency", value: "urgency" }
  ],
  dimensions: [
    { key: "interruptions", label: "Interruptions", definition: "Notifications breaking attention during intended activities." },
    { key: "urgency", label: "Urgency Pressure", definition: "Feeling pulled to respond quickly even when the message is not urgent." },
    { key: "recovery", label: "Recovery Difficulty", definition: "Difficulty returning to the prior task, rest state, or conversation after alerts." },
    { key: "boundaries", label: "Boundary Drift", definition: "Notifications entering sleep, meals, care, work blocks, or personal time." }
  ],
  items: [
    ["interruptions-1", "interruptions", "During the past 30 days, how often did notifications interrupt a task you intended to finish?"],
    ["interruptions-2", "interruptions", "During the past 30 days, how often did alerts split your attention during an intended activity?"],
    ["interruptions-3", "interruptions", "During the past 30 days, how often did a notification start an unplanned app session?"],
    ["urgency-1", "urgency", "During the past 30 days, how often did a message feel urgent before you checked whether it truly was?"],
    ["urgency-2", "urgency", "During the past 30 days, how often did you answer quickly mainly to reduce tension?"],
    ["urgency-3", "urgency", "During the past 30 days, how often did delayed replies make you feel uneasy?"],
    ["recovery-1", "recovery", "During the past 30 days, how often was it hard to return to the prior task after checking an alert?"],
    ["recovery-2", "recovery", "During the past 30 days, how often did one notification change your mood for longer than expected?"],
    ["recovery-3", "recovery", "During the past 30 days, how often did alerts make rest feel less restful?"],
    ["boundaries-1", "boundaries", "During the past 30 days, how often did notifications enter your protected evening time?"],
    ["boundaries-2", "boundaries", "During the past 30 days, how often did alerts interrupt in-person attention?"],
    ["boundaries-3", "boundaries", "During the past 30 days, how often did notifications reach you during a time you wanted protected?"]
  ],
  protectiveQuestions: [
    { id: "notifications-batched", label: "Batched checking", question: "During the past 30 days, how often did you check messages at planned times instead of immediately?" },
    { id: "notifications-muted", label: "Muted nonessential alerts", question: "During the past 30 days, how often were nonessential notifications silenced?" }
  ],
  impactMessage: "If notifications are causing serious work, sleep, safety, relationship, or financial consequences, consider stronger boundaries and appropriate support.",
  profiles: [
    { min: 0, max: 12, title: "Mostly Manageable Notification Load", color: "var(--low)", description: "Notification friction appeared mostly occasionally.", insights: ["Keep the settings that protect your attention.", "Preserve one alert-free block around the most important activity."] },
    { min: 13, max: 30, title: "Noticeable Notification Pressure", color: "var(--mid)", description: "Several notification experiences appeared repeatedly.", insights: ["Turn off one nonessential alert category.", "Batch one message channel instead of relying only on willpower."] },
    { min: 31, max: 48, title: "High Notification Load Across Contexts", color: "var(--high)", description: "Notifications often interrupted focus, boundaries, or recovery.", insights: ["Use stronger default silence settings.", "Protect sleep and high-focus blocks before optimizing smaller settings."] }
  ],
  dimensionRelated: { interruptions: 0, urgency: 1, recovery: 0, boundaries: 1 },
  dimensionGuidance: {
    interruptions: "Disable one alert type that most often starts an unplanned session.",
    urgency: "Define which channels truly require immediate response.",
    recovery: "Add a short return ritual after checking messages.",
    boundaries: "Protect one time or place with do-not-disturb by default."
  },
  references: [
    { title: "Health Advisory on Social Media Use in Adolescence", publisher: "American Psychological Association", href: "https://www.apa.org/topics/social-media-internet/health-advisory-adolescent-social-media-use" },
    { title: "Social Media and Youth Mental Health", publisher: "U.S. Surgeon General", href: "https://www.hhs.gov/surgeongeneral/priorities/youth-mental-health/social-media/index.html" }
  ],
  relatedTitle: "Related Digital Habit Tools",
  related: [
    { href: "https://toolsquark.com/tools/smartphone-addiction-test.html", title: "Smartphone Use Pattern", description: "Review automatic checking and phone-use displacement.", action: "Review Phone Use" },
    { href: "https://toolsquark.com/tools/focus-attention-diagnostic.html", title: "Focus And Attention Pattern", description: "Review attention switching and organization.", action: "Review Focus" }
  ],
  faq: [
    { question: "Is notification overload the same as phone addiction?", answer: "No. Notification load focuses on alerts, urgency pressure, and interruption. Phone-use patterns are broader." },
    { question: "What is the first setting to change?", answer: "Start with the alert category that most often interrupts sleep, focus, or in-person attention." },
    { question: "Is this a validated scale?", answer: "No. It is an original educational self-check, not a clinical instrument." }
  ],
  validationLimit: "It cannot diagnose addiction, ADHD, anxiety, burnout, or another condition.",
  limitsBody: `<p>Some notifications are necessary for caregiving, work, accessibility, safety, or urgent coordination. The goal is not to remove every alert, but to separate essential signals from avoidable interruption.</p>`,
  actionBody: `<p>Use the highest dimension to pick one settings change: mute one category, batch one channel, protect one focus block, or create one do-not-disturb schedule.</p>`,
  disclaimer: "This educational tool cannot diagnose a condition or determine whether a specific app or notification pattern is harmful."
});
