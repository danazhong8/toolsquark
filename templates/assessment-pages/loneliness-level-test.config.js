module.exports = {
  slug: "loneliness-level-test",
  title: "Loneliness Level Self-Check | ToolsQuark",
  description: "Evaluate your relational depth, emotional isolation parameters, and perceived social support networks using our advanced psychological loneliness metric tracker.",
  h1: "Loneliness Level Assessment",
  hero: "Reflect on emotional connection, social support, and whether your relationships feel available when you need them.",
  schemaName: "Privacy-First Loneliness Level Assessment",
  timeframe: "Past 2 weeks",
  questionDimensions: ["support", "isolation", "belonging", "isolation", "support"],
  questions: [
    { question: "How often do you feel you have someone to talk to honestly?", options: ["Very often", "Sometimes", "Rarely", "Almost never"] },
    { question: "How often do you feel emotionally isolated even around people?", options: ["Rarely", "Sometimes", "Often", "Almost always"] },
    { question: "How satisfied are you with the depth of your close relationships?", options: ["Very satisfied", "Mostly satisfied", "Unsatisfied", "Very unsatisfied"] },
    { question: "How often do you avoid reaching out because you feel like a burden?", options: ["Rarely", "Sometimes", "Often", "Almost always"] },
    { question: "How supported do you feel during difficult weeks?", options: ["Well supported", "Somewhat supported", "Barely supported", "Not supported"] }
  ],
  profiles: [
    { min: 5, max: 8, title: "Connected Support Pattern", color: "var(--low)", description: "Your answers suggest stronger perceived support and more available emotional connection.", indicators: { isolation: 20, support: 82, belonging: 78 }, insights: ["Keep investing in specific relationships.", "Small consistent contact often protects connection better than rare intense catch-ups."] },
    { min: 9, max: 14, title: "Moderate Social Disconnection", color: "var(--mid)", description: "You may have some relationships, but emotional depth or availability may feel inconsistent.", indicators: { isolation: 58, support: 48, belonging: 44 }, insights: ["Reach out with one concrete request instead of waiting for the perfect moment.", "Consider low-pressure recurring contact."] },
    { min: 15, max: 20, title: "High Loneliness Signal", color: "var(--high)", description: "Your responses suggest significant loneliness or low perceived support.", indicators: { isolation: 88, support: 20, belonging: 18 }, insights: ["Persistent loneliness is a real health burden and deserves support.", "Consider community groups, therapy, or structured social routines if isolation feels stuck."] }
  ],
  indicators: [{ key: "isolation", label: "Emotional Isolation" }, { key: "support", label: "Perceived Support", direction: "protective" }, { key: "belonging", label: "Belonging", direction: "protective" }],
  related: [
    { href: "https://toolsquark.com/tools/social-anxiety-test.html", title: "Social Anxiety Test", description: "Check whether fear of judgment affects connection.", action: "Assess Social Anxiety" },
    { href: "https://toolsquark.com/tools/stress-index-test.html", title: "Stress Index Test", description: "Loneliness can increase stress load.", action: "Assess Stress" }
  ],
  faq: [
    { question: "Can I be lonely even with friends?", answer: "Yes. Loneliness is about perceived connection quality, not just the number of people around you." },
    { question: "Is loneliness a mental illness?", answer: "No, but chronic loneliness can affect mood, stress, sleep, and health, and support can help." }
  ],
  methodology: "This self-check uses five four-point items covering perceived support, isolation, belonging, and reach-out barriers.",
  disclaimer: "This is an educational self-reflection tool and not a clinical assessment. Seek professional or community support if loneliness feels persistent or unsafe."
};
