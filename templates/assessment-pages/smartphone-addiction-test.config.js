const { createV2Config } = require("./v2-assessment-factory");

module.exports = createV2Config({
  key: "phoneuse",
  slug: "smartphone-addiction-test",
  title: "Smartphone Use Pattern Self-Check | Private 30-Day Review",
  description: "Review automatic checking, stopping control, cue reactivity, and device-related displacement with a private 12-item original self-check.",
  h1: "Smartphone Use Pattern Self-Check",
  hero: "Review how often automatic checking, difficulty stopping, notification reactivity, and phone use displacing intended activity appeared during the past 30 days.",
  shareDescription: "A private 30-day self-check for automatic phone checking, stopping control, cue reactivity, and life displacement.",
  socialFile: "smartphone-use-pattern-self-check.png",
  socialAccent: "#0891b2",
  recallDays: 30,
  intendedAudience: "Adults seeking general self-reflection about recent smartphone use patterns",
  categoryHref: "lifestyle.html",
  categoryLabel: "Lifestyle Tools",
  contextLabel: "Most affected area",
  contextQuestion: "Which area is most affected by phone use right now?",
  contextOptions: [
    { label: "Sleep or rest", value: "sleep" },
    { label: "Work or study", value: "work" },
    { label: "In-person time", value: "relationships" },
    { label: "Household or personal routines", value: "routines" }
  ],
  dimensions: [
    { key: "checking", label: "Automatic Checking", definition: "Opening or checking the device without a prior purpose." },
    { key: "control", label: "Stopping Control", definition: "Difficulty ending a phone session at the intended time." },
    { key: "reactivity", label: "Cue Reactivity", definition: "Notifications or device availability rapidly pulling attention." },
    { key: "displacement", label: "Activity Displacement", definition: "Phone use replacing intended sleep, work, interaction, or routines." }
  ],
  items: [
    ["checking-1", "checking", "During the past 30 days, how often did you unlock your phone without a clear purpose?"],
    ["checking-2", "checking", "During the past 30 days, how often did you open the same app shortly after closing it?"],
    ["checking-3", "checking", "During the past 30 days, how often did reaching for your phone happen before you consciously decided to use it?"],
    ["control-1", "control", "During the past 30 days, how often did a phone session continue longer than you intended?"],
    ["control-2", "control", "During the past 30 days, how often was it difficult to put the phone down after deciding to stop?"],
    ["control-3", "control", "During the past 30 days, how often did one more check become an extended session?"],
    ["reactivity-1", "reactivity", "During the past 30 days, how often did a notification interrupt your current task?"],
    ["reactivity-2", "reactivity", "During the past 30 days, how often did the phone being visible pull your attention?"],
    ["reactivity-3", "reactivity", "During the past 30 days, how often did you feel an urge to check after hearing another device?"],
    ["displacement-1", "displacement", "During the past 30 days, how often did phone use delay your intended bedtime?"],
    ["displacement-2", "displacement", "During the past 30 days, how often did phone use replace time planned for a responsibility?"],
    ["displacement-3", "displacement", "During the past 30 days, how often did phone use reduce attention during an in-person interaction?"]
  ],
  protectiveQuestions: [
    { id: "notification-control", label: "Notification control", question: "During the past 30 days, how often were nonessential notifications disabled or silenced?" },
    { id: "phone-free-block", label: "Phone-free block", question: "During the past 30 days, how often did you have a planned period with the phone out of reach?" }
  ],
  impactMessage: "Serious sleep, work, relationship, financial, or safety consequences deserve support regardless of the checklist total. Review the affected activity first and consider qualified support when use feels difficult to control despite repeated attempts.",
  profiles: [
    { min: 0, max: 12, title: "Mostly Intentional Smartphone Use", color: "var(--low)", description: "Your answers place most automatic or disruptive phone-use experiences in the occasional range.", insights: ["Keep the notification and access settings that support intentional use.", "Protect phone-free periods around the activities that matter most."] },
    { min: 13, max: 30, title: "Context-Dependent Phone Capture", color: "var(--mid)", description: "Several phone-use experiences appeared repeatedly, with the pattern varying by dimension.", insights: ["Change one cue or access point before relying on restraint alone.", "Focus on the activity being displaced rather than screen time by itself."] },
    { min: 31, max: 48, title: "Frequent Phone Capture Across Areas", color: "var(--high)", description: "Many phone-use experiences appeared on numerous days. Practical consequences and failed attempts to change deserve attention.", insights: ["Use stronger environmental limits around the most affected activity.", "Consider support when phone use continues to cause serious harm."] }
  ],
  dimensionRelated: { checking: 0, control: 1, reactivity: 0, displacement: 1 },
  dimensionGuidance: {
    checking: "Move the most automatically opened apps away from the home screen and add one deliberate unlock purpose.",
    control: "Choose an external stopping cue and place the phone out of reach when that cue occurs.",
    reactivity: "Disable nonessential notifications and keep the device out of sight during one priority block.",
    displacement: "Protect the displaced activity first with a phone-free location or time boundary."
  },
  references: [
    { title: "Health Advisory on Social Media Use in Adolescence", publisher: "American Psychological Association", href: "https://www.apa.org/topics/social-media-internet/health-advisory-adolescent-social-media-use" },
    { title: "Social Media and Youth Mental Health", publisher: "U.S. Surgeon General", href: "https://www.hhs.gov/surgeongeneral/priorities/youth-mental-health/social-media/index.html" }
  ],
  related: [
    { href: "https://toolsquark.com/tools/social-media-addiction-index.html", title: "Social Media Use Pattern", description: "Review feed capture, social evaluation, and comparison inside social apps.", action: "Review Social Apps" },
    { href: "https://toolsquark.com/tools/sleep-quality-assessment.html", title: "Sleep Pattern Self-Check", description: "Review whether phone use overlaps with recent sleep disruption.", action: "Review Sleep" }
  ],
  faq: [
    { question: "Does frequent phone use mean addiction?", answer: "No. Frequency alone does not establish addiction. Control, distress, displacement, and practical consequences provide more context." },
    { question: "Is this a validated smartphone addiction scale?", answer: "No. It is an original ToolsQuark educational self-check." },
    { question: "Does this test measure social media specifically?", answer: "No. It covers device-level behavior across phone activities. The separate social media self-check focuses on feeds, evaluation, and comparison." }
  ],
  validationLimit: "It cannot diagnose behavioral addiction or determine why phone use is difficult to change.",
  limitsBody: `<p>Work demands, caregiving, navigation, accessibility, social connection, and other necessary uses can increase screen time without implying loss of control. The most useful context is what the phone use is doing and what it displaces.</p>`,
  actionBody: `<p>Use the most frequent dimension to change one cue, stopping condition, or phone-free boundary. Seek support when use repeatedly causes serious harm or remains difficult to control despite sustained attempts.</p>`,
  disclaimer: "This educational tool cannot diagnose smartphone addiction or determine whether a specific amount of screen time is harmful."
});
