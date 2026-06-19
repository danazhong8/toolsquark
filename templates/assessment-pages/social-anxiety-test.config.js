module.exports = {
  slug: "social-anxiety-test",
  title: "Accurate Social Anxiety Test | Evaluation & Behavioral Audit | ToolsQuark",
  description: "Evaluate your fear of negative evaluation, safe behaviors, hyper-vigilance in social environments, and post-event cognitive parsing using our interactive tool.",
  h1: "Social Anxiety Test",
  hero: "Reflect on fear of judgment, avoidance, safety behaviors, and post-event replay after social interactions.",
  schemaName: "Privacy-First Social Anxiety Test",
  questions: [
    { question: "How worried are you about being judged in social situations?", options: ["Rarely", "Sometimes", "Often", "Very worried"] },
    { question: "How often do you avoid social events because of anxiety?", options: ["Rarely", "Sometimes", "Often", "Very often"] },
    { question: "How much do you monitor your words, face, or body language while interacting?", options: ["Not much", "Somewhat", "A lot", "Constantly"] },
    { question: "How often do you replay conversations afterward looking for mistakes?", options: ["Rarely", "Sometimes", "Often", "Almost always"] },
    { question: "How hard is it to speak up in groups?", options: ["Easy", "Somewhat hard", "Hard", "Very hard"] }
  ],
  profiles: [
    { min: 5, max: 8, title: "Low Social Fear Pattern", color: "var(--low)", description: "Your answers suggest lower fear of negative evaluation and less social avoidance.", indicators: { judgment: 22, avoidance: 20, replay: 18 }, insights: ["Keep practicing natural social exposure.", "Do not over-review small interactions."] },
    { min: 9, max: 14, title: "Moderate Social Anxiety Pattern", color: "var(--mid)", description: "You may experience notable fear or self-monitoring in some social settings.", indicators: { judgment: 60, avoidance: 55, replay: 62 }, insights: ["Practice small exposures that are challenging but manageable.", "Shift attention outward to the conversation rather than monitoring yourself."] },
    { min: 15, max: 20, title: "High Social Anxiety Signal", color: "var(--high)", description: "Your responses suggest social fear or avoidance may be limiting expression, connection, or participation.", indicators: { judgment: 88, avoidance: 84, replay: 90 }, insights: ["Consider evidence-based support such as CBT if avoidance is impairing life.", "Start with small repeated exposures instead of waiting for confidence."] }
  ],
  indicators: [{ key: "judgment", label: "Fear of Judgment" }, { key: "avoidance", label: "Avoidance" }, { key: "replay", label: "Post-Event Replay" }],
  related: [
    { href: "https://toolsquark.com/tools/loneliness-level-test.html", title: "Loneliness Level Test", description: "Check whether avoidance is affecting connection.", action: "Assess Loneliness" },
    { href: "https://toolsquark.com/tools/anxiety-hyperarousal-assessment.html", title: "Anxiety Assessment", description: "Review physical hyperarousal patterns.", action: "Assess Anxiety" }
  ],
  faq: [
    { question: "Is shyness the same as social anxiety?", answer: "No. Social anxiety involves fear, distress, avoidance, or impairment around social evaluation." },
    { question: "Can this diagnose social anxiety disorder?", answer: "No. It is a private educational self-check, not a clinical diagnosis." }
  ],
  methodology: "This self-check uses five four-point items covering fear of judgment, avoidance, self-monitoring, and post-event processing.",
  disclaimer: "This tool is educational only. Seek qualified mental health support if social fear is persistent, intense, or limiting."
};
