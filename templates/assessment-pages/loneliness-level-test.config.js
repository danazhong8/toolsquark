module.exports = {
  slug: "loneliness-level-test",
  title: "Loneliness Level Self-Check | ToolsQuark",
  description: "Take a private loneliness self-check covering emotional isolation, perceived support, relationship depth, and sense of belonging.",
  h1: "Loneliness Self-Check",
  hero: "Reflect on emotional connection, social support, and whether your relationships feel available when you need them.",
  schemaName: "Privacy-First Loneliness Level Assessment",
  lastUpdated: "June 21, 2026",
  timeframe: "Past 2 weeks",
  questionDimensions: ["support", "isolation", "belonging", "isolation", "support"],
  dimensionRelated: { isolation: 0, support: 1, belonging: 0 },
  dimensionGuidance: {
    isolation: "Choose one recurring, low-pressure point of contact this week rather than waiting for a large social event or the perfect mood.",
    support: "Ask one trusted person for something concrete, such as a short call, a walk, or help thinking through a specific problem.",
    belonging: "Look for a repeated group built around a shared activity; familiarity usually grows through regular contact, not one intense interaction."
  },
  references: [
    { title: "Social Connectedness", publisher: "Centers for Disease Control and Prevention", href: "https://www.cdc.gov/social-connectedness/about/index.html" }
  ],
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
  contentSections: [
    { title: "What This Self-Check Covers", body: `<p>The five questions review perceived support, emotional isolation, relationship depth, belonging, and difficulty reaching out.</p><p>This is an original ToolsQuark checklist. It is not the UCLA Loneliness Scale or another validated social-connection measure.</p>` },
    { title: "How Scoring Works", body: `<p>Responses are normalized to 1 through 4 points so that higher totals represent more frequent disconnection signals. The total ranges from 5 to 20.</p><ul><li><strong>5-8:</strong> fewer frequent disconnection signals.</li><li><strong>9-14:</strong> several recurring signals.</li><li><strong>15-20:</strong> many frequent signals worth addressing.</li></ul><div class="note-box">These bands are editorial and are not clinical cutoffs or population percentiles.</div>` },
    { title: "Connection Is More Than Contact Count", body: `<p>Loneliness is a subjective gap between desired and experienced connection. Someone can feel lonely in a crowd, while another person with a small network may feel supported. Culture, grief, relocation, caregiving, disability, discrimination, and mood can shape the experience.</p>` },
    { title: "When To Reach Out", body: `<p>Persistent loneliness that affects sleep, mood, functioning, or safety deserves support from a trusted person, community resource, or qualified professional. Seek urgent local help if isolation is accompanied by thoughts of self-harm or feeling unable to stay safe.</p>` }
  ],
  methodology: "This original five-item checklist scores answers from 1 to 4 after accounting for positively worded items. Total-score bands and isolation, support, and belonging indicators are editorial and not clinically validated.",
  disclaimer: "This is an educational self-reflection tool and not a clinical assessment. Seek professional or community support if loneliness feels persistent or unsafe."
};
