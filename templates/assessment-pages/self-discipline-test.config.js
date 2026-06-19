module.exports = {
  slug: "self-discipline-test",
  title: "Self-Discipline Test | Interactive Volitional Impulsivity Assessment | ToolsQuark",
  description: "Evaluate your willpower consistency, resistance to instant gratification, behavioral habits, and identity alignment with long-term goals using our interactive assessment tool.",
  h1: "Self-Discipline Test",
  hero: "Assess consistency, impulse control, habit follow-through, and alignment with long-term goals.",
  schemaName: "Privacy-First Self-Discipline Test",
  categoryHref: "lifestyle.html",
  categoryLabel: "Lifestyle Tools",
  questions: [
    { question: "How often do you follow through after setting a goal?", options: ["Very often", "Often", "Sometimes", "Rarely"] },
    { question: "How easily do short-term pleasures override your plans?", options: ["Rarely", "Sometimes", "Often", "Very easily"] },
    { question: "How consistent are your habits when motivation drops?", options: ["Very consistent", "Mostly consistent", "Inconsistent", "Collapse quickly"] },
    { question: "How often do you keep promises made to yourself?", options: ["Very often", "Often", "Sometimes", "Rarely"] },
    { question: "How well do your daily actions match the person you want to become?", options: ["Very well", "Mostly", "Somewhat", "Poorly"] }
  ],
  profiles: [
    { min: 5, max: 8, title: "Strong Self-Regulation Pattern", color: "var(--low)", description: "Your answers suggest stronger consistency and better resistance to short-term impulses.", indicators: { consistency: 82, impulse: 20, identity: 78 }, insights: ["Keep goals concrete and habits visible.", "Use your current structure to protect harder goals."] },
    { min: 9, max: 14, title: "Inconsistent Discipline Pattern", color: "var(--mid)", description: "You may follow through in some areas but lose consistency when motivation, stress, or temptation shifts.", indicators: { consistency: 50, impulse: 58, identity: 48 }, insights: ["Reduce reliance on willpower by designing easier defaults.", "Track one habit at a time until it stabilizes."] },
    { min: 15, max: 20, title: "High Impulse Friction", color: "var(--high)", description: "Your answers suggest frequent conflict between immediate comfort and long-term goals.", indicators: { consistency: 24, impulse: 86, identity: 28 }, insights: ["Start with smaller commitments that are hard to fail.", "Remove triggers before relying on discipline in the moment."] }
  ],
  indicators: [{ key: "consistency", label: "Consistency" }, { key: "impulse", label: "Impulse Friction" }, { key: "identity", label: "Identity Alignment" }],
  related: [
    { href: "https://toolsquark.com/tools/procrastination-test.html", title: "Procrastination Test", description: "Check task delay and avoidance loops.", action: "Assess Delay" },
    { href: "https://toolsquark.com/tools/focus-attention-diagnostic.html", title: "Focus Diagnostic", description: "Evaluate focus and task initiation.", action: "Check Focus" }
  ],
  faq: [
    { question: "Is self-discipline just willpower?", answer: "No. Environment design, habits, sleep, stress, identity, and incentives all shape follow-through." },
    { question: "What is the simplest improvement?", answer: "Make the desired behavior smaller and easier to start, then repeat it consistently." }
  ],
  methodology: "This self-check uses five four-point items covering consistency, impulse control, habit follow-through, and identity alignment.",
  disclaimer: "This tool is educational and cannot diagnose clinical executive function, mood, or impulse-control conditions."
};
