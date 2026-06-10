module.exports = {
  slug: "social-media-addiction-index",
  title: "Social Media Addiction Index | Algorithmic Capture Assessment | ToolsQuark",
  description: "Assess how digital validation metrics, algorithmic feeds, social validation tracking, and the fear of missing out (FOMO) influence your psychological self-worth.",
  h1: "Social Media Addiction Index",
  hero: "Evaluate feed capture, validation seeking, FOMO, and mood shifts linked to social media use.",
  schemaName: "Privacy-First Social Media Addiction Index",
  categoryHref: "lifestyle.html",
  categoryLabel: "Lifestyle Tools",
  questions: [
    { question: "How often do you open social apps without intending to?", options: ["Rarely", "Sometimes", "Often", "Constantly"] },
    { question: "How much do likes, views, or comments affect your mood?", options: ["Very little", "Somewhat", "A lot", "Strongly"] },
    { question: "How often do you compare your life to what others post?", options: ["Rarely", "Sometimes", "Often", "Almost always"] },
    { question: "How hard is it to stop scrolling once you begin?", options: ["Easy", "Somewhat hard", "Hard", "Very hard"] },
    { question: "How often do you fear missing out when offline?", options: ["Rarely", "Sometimes", "Often", "Almost constantly"] }
  ],
  profiles: [
    { min: 5, max: 8, title: "Low Algorithmic Capture", color: "var(--low)", description: "Your social media use appears comparatively controlled and less tied to self-worth.", indicators: { capture: 22, validation: 20, comparison: 18 }, insights: ["Keep feeds intentional and time-limited.", "Protect offline identity-building activities."] },
    { min: 9, max: 14, title: "Moderate Validation Loop", color: "var(--mid)", description: "Your social media use may be affecting mood, attention, or comparison patterns.", indicators: { capture: 62, validation: 58, comparison: 60 }, insights: ["Hide like counts where possible.", "Replace passive scrolling with intentional check-in windows."] },
    { min: 15, max: 20, title: "High Algorithmic Capture", color: "var(--high)", description: "Your responses suggest feed loops, comparison, or validation seeking may be strongly affecting attention and mood.", indicators: { capture: 90, validation: 86, comparison: 88 }, insights: ["Use blockers or app limits during vulnerable times.", "Consider a short reset period if social media strongly affects self-worth."] }
  ],
  indicators: [{ key: "capture", label: "Feed Capture" }, { key: "validation", label: "Validation Seeking" }, { key: "comparison", label: "Comparison/FOMO" }],
  related: [
    { href: "https://www.toolsquark.com/tools/smartphone-addiction-test.html", title: "Smartphone Addiction Test", description: "Assess broader phone dependency and checking loops.", action: "Assess Phone Use" },
    { href: "https://www.toolsquark.com/tools/self-discipline-test.html", title: "Self-Discipline Test", description: "Check impulse control and habit consistency.", action: "Assess Discipline" }
  ],
  faq: [
    { question: "Is social media always harmful?", answer: "No. It can support connection and learning. Risk rises when use feels compulsive or strongly affects mood, sleep, or self-worth." },
    { question: "What is a practical first step?", answer: "Remove algorithmic feeds from your first and last hour of the day." }
  ],
  methodology: "This self-check uses five four-point items covering feed capture, validation, comparison, scrolling control, and FOMO.",
  disclaimer: "This tool is educational and cannot diagnose behavioral addiction, depression, anxiety, or other mental health conditions."
};
