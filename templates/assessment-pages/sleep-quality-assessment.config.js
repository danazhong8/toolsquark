module.exports = {
  slug: "sleep-quality-assessment",
  title: "Sleep Quality Assessment | Interactive Circadian Efficiency Test | ToolsQuark",
  description: "Analyze your sleep architecture, latency, and daytime dysfunction to uncover hidden factors disrupting your biological rest with our interactive evaluation.",
  h1: "Sleep Quality Assessment",
  hero: "Review sleep latency, nighttime awakenings, schedule consistency, and daytime fatigue in a private self-assessment.",
  schemaName: "Privacy-First Sleep Quality Assessment",
  categoryHref: "health.html",
  categoryLabel: "Health Tools",
  questions: [
    { question: "How long does it typically take you to fall asleep after turning off the lights?", options: ["Under 15 minutes", "15-30 minutes", "31-60 minutes", "More than an hour"] },
    { question: "How often do you wake at night and struggle to fall back asleep?", options: ["Rarely or never", "1-2 times a week", "3-4 times a week", "Almost every night"] },
    { question: "How regularly do you wake feeling unrefreshed, stiff, or tired?", options: ["Never", "Occasionally", "Frequently", "Every day"] },
    { question: "Do racing thoughts or worry keep your mind active at bedtime?", options: ["Hardly ever", "Some nights", "Most nights", "Every night"] },
    { question: "How often do you feel groggy or struggle to stay awake during daytime tasks?", options: ["Rarely", "Sometimes", "Often", "Constantly"] },
    { question: "How consistent is your sleep schedule on weekends compared with weekdays?", options: ["Highly consistent", "Slightly varies", "Very erratic", "Completely different"] },
    { question: "Do you experience night sweats, gasping, or restless legs?", options: ["Never", "Rarely", "Sometimes", "Frequently"] },
    { question: "How often do you rely on sleep aids, alcohol, or supplements to fall asleep?", options: ["Never", "A few times a month", "Multiple times a week", "Daily"] },
    { question: "Does poor sleep strongly affect your mood the next day?", options: ["Not really", "Slightly", "Noticeably", "Extremely"] },
    { question: "How often do you use screens in bed while waiting for sleep?", options: ["Never", "Rarely", "Often", "Almost always"] }
  ],
  profiles: [
    { min: 10, max: 16, title: "Optimal Circadian Rhythm", color: "var(--low)", description: "Your sleep pattern appears relatively efficient, with fewer signs of prolonged latency, fragmentation, or daytime dysfunction.", indicators: { architecture: 24, latency: 22, dysfunction: 20 }, insights: ["Protect your consistent wake time.", "Keep screens and work out of bed to preserve the bed-sleep association."] },
    { min: 17, max: 28, title: "Fragmented Rest Pattern", color: "var(--mid)", description: "Your answers suggest moderate sleep disruption. Stress, schedule drift, or bedtime stimulation may be affecting recovery.", indicators: { architecture: 56, latency: 62, dysfunction: 58 }, insights: ["Use a consistent wind-down routine.", "If awake for a long time, leave bed briefly and return when sleepy."] },
    { min: 29, max: 40, title: "Severe Sleep Disruption", color: "var(--high)", description: "Your responses suggest significant sleep disturbance or daytime impact. A clinical sleep evaluation may be worth considering.", indicators: { architecture: 86, latency: 88, dysfunction: 90 }, insights: ["Discuss persistent insomnia, gasping, or severe daytime sleepiness with a clinician.", "Avoid using alcohol as a sleep strategy; it can worsen sleep architecture."] }
  ],
  indicators: [
    { key: "architecture", label: "Sleep Architecture Risk" },
    { key: "latency", label: "Latency & Continuity" },
    { key: "dysfunction", label: "Daytime Dysfunction" }
  ],
  related: [
    { href: "https://www.toolsquark.com/tools/sleep-calculator.html", title: "Sleep Calculator", description: "Plan sleep windows around 90-minute cycles.", action: "Plan Sleep" },
    { href: "https://www.toolsquark.com/tools/stress-index-test.html", title: "Stress Index Test", description: "Check whether stress load may be affecting rest.", action: "Assess Stress" }
  ],
  faq: [
    { question: "Is 8 hours always required?", answer: "No. Many adults do well around 7-9 hours, but sleep quality, consistency, and daytime function matter too." },
    { question: "Should I stay in bed if I cannot sleep?", answer: "If you are awake for a long time, a calm low-light activity away from bed can help avoid associating bed with frustration." },
    { question: "Can this diagnose insomnia or sleep apnea?", answer: "No. This is an educational self-check. Persistent insomnia, gasping, or severe sleepiness should be discussed with a clinician." }
  ],
  methodology: "This self-assessment uses 10 four-point items covering sleep latency, continuity, schedule consistency, symptoms, and daytime impact. Scoring happens locally.",
  disclaimer: "This tool is not a medical diagnosis and does not replace evaluation for insomnia, sleep apnea, restless legs, parasomnias, or other sleep disorders."
};
