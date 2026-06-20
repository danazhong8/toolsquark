module.exports = {
  slug: "smartphone-addiction-test",
  title: "Smartphone Addiction Test | Private Phone Use Check | ToolsQuark",
  description: "Take a private phone use self-check for compulsive checking, difficulty disconnecting, notification reactivity, and disruption to sleep or work.",
  h1: "Smartphone Addiction Test",
  hero: "Assess compulsive phone checking, screen dependency, notification reactivity, and difficulty disconnecting.",
  schemaName: "Privacy-First Smartphone Addiction Test",
  timeframe: "Past 30 days",
  questionDimensions: ["checking", "dependency", "disruption", "dependency", "disruption"],
  dimensionRelated: { checking: 0, dependency: 0, disruption: 1 },
  dimensionGuidance: {
    checking: "Choose two or three intentional check windows and turn off nonessential alerts between them.",
    dependency: "Practice one short phone-free routine each day, such as a meal, walk, shower, or the first fifteen minutes after waking.",
    disruption: "Remove the phone from the setting it disrupts most, especially the bed, focused work surface, or face-to-face conversations."
  },
  references: [
    { title: "Health Advisory on Social Media Use in Adolescence", publisher: "American Psychological Association", href: "https://www.apa.org/topics/social-media-internet/health-advisory-adolescent-social-media-use" }
  ],
  categoryHref: "lifestyle.html",
  categoryLabel: "Lifestyle Tools",
  questions: [
    { question: "How often do you check your phone without a clear reason?", options: ["Rarely", "Sometimes", "Often", "Constantly"] },
    { question: "How anxious do you feel when your phone is not nearby?", options: ["Not anxious", "Slightly", "Noticeably", "Very anxious"] },
    { question: "How often does phone use delay sleep, work, or responsibilities?", options: ["Rarely", "Sometimes", "Often", "Almost daily"] },
    { question: "How hard is it to stop scrolling once you start?", options: ["Easy", "Somewhat hard", "Hard", "Very hard"] },
    { question: "How often do notifications interrupt conversations or focused work?", options: ["Rarely", "Sometimes", "Often", "Constantly"] }
  ],
  profiles: [
    { min: 5, max: 8, title: "Balanced Phone Use", color: "var(--low)", description: "Your phone use appears relatively controlled and less disruptive to focus or sleep.", indicators: { checking: 22, dependency: 18, disruption: 20 }, insights: ["Keep notification boundaries in place.", "Use phone-free blocks to protect attention."] },
    { min: 9, max: 14, title: "Moderate Digital Dependency", color: "var(--mid)", description: "Your answers suggest phone use may be interrupting focus, rest, or emotional regulation at times.", indicators: { checking: 62, dependency: 55, disruption: 58 }, insights: ["Move distracting apps off the home screen.", "Set a charging location outside the bed area."] },
    { min: 15, max: 20, title: "High Smartphone Dependency", color: "var(--high)", description: "Your responses suggest frequent compulsive checking or difficulty disengaging from your device.", indicators: { checking: 90, dependency: 84, disruption: 88 }, insights: ["Use app limits, grayscale, and notification batching.", "If phone use is harming sleep, work, or relationships, consider structured support."] }
  ],
  indicators: [{ key: "checking", label: "Compulsive Checking" }, { key: "dependency", label: "Dependency" }, { key: "disruption", label: "Life Disruption" }],
  related: [
    { href: "https://toolsquark.com/tools/social-media-addiction-index.html", title: "Social Media Addiction Test", description: "Assess algorithmic feed and validation loops.", action: "Assess Social Media" },
    { href: "https://toolsquark.com/tools/sleep-quality-assessment.html", title: "Sleep Quality Assessment", description: "Check whether phone use is affecting sleep.", action: "Assess Sleep" }
  ],
  faq: [
    { question: "Is frequent phone use always addiction?", answer: "No. The concern is loss of control, distress, and interference with sleep, work, study, or relationships." },
    { question: "What is one practical first step?", answer: "Turn off nonessential notifications and keep the phone away from bed." }
  ],
  methodology: "This self-check uses five four-point items covering checking, dependency, scrolling control, and life disruption.",
  disclaimer: "This tool is educational and cannot diagnose behavioral addiction or mental health conditions."
};
