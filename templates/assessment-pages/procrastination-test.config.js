module.exports = {
  slug: "procrastination-test",
  title: "Procrastination Test | Free Private Self-Check | ToolsQuark",
  description: "Take a private procrastination self-check for emotional avoidance, present bias, perfectionism, and difficulty starting important tasks.",
  h1: "Procrastination Test",
  hero: "Identify whether task delay is driven by emotional avoidance, present bias, perfectionism, or inconsistent execution.",
  schemaName: "Privacy-First Procrastination Test",
  timeframe: "Past 30 days",
  questionDimensions: ["avoidance", "temporal", "perfectionism", "avoidance", "avoidance"],
  dimensionRelated: { avoidance: 1, temporal: 0, perfectionism: 1 },
  dimensionGuidance: {
    avoidance: "Use a ten-minute start: define the first visible action, work only until the timer ends, and decide about continuing afterward.",
    temporal: "Move the easiest immediate reward out of reach until one small work interval is complete.",
    perfectionism: "Create a deliberately rough first version and separate producing from judging; quality review comes in a later pass."
  },
  categoryHref: "lifestyle.html",
  categoryLabel: "Lifestyle Tools",
  questions: [
    { question: "When faced with a demanding task, how do you usually respond first?", options: ["Start immediately", "Plan but pause", "Do easier tasks first", "Delay until pressure spikes"] },
    { question: "How strongly do small immediate rewards override long-term goals?", options: ["Rarely", "Occasionally", "Frequently", "Almost constantly"] },
    { question: "Do you delay launching projects because the first version may not be perfect?", options: ["Never", "Seldom", "Often", "Very often"] },
    { question: "How closely does your actual day match your intended schedule?", options: ["Very closely", "Mostly", "Highly variable", "Rarely matches"] },
    { question: "How often do you tell yourself you will feel more ready tomorrow?", options: ["Almost never", "Occasionally", "Frequently", "Automatically"] }
  ],
  profiles: [
    { min: 5, max: 8, title: "Proactive Execution Pattern", color: "var(--low)", description: "Your answers suggest comparatively strong task initiation and lower vulnerability to emotional avoidance.", indicators: { avoidance: 18, temporal: 22, perfectionism: 20 }, insights: ["Keep using clear task starts and small deadlines.", "Protect momentum by defining the next physical action before stopping work."] },
    { min: 9, max: 14, title: "Fluctuating Action Delay", color: "var(--mid)", description: "You may lose traction when tasks feel vague, unpleasant, or overly large. Structure can reduce launch friction.", indicators: { avoidance: 55, temporal: 62, perfectionism: 50 }, insights: ["Use a 10-minute start rule rather than waiting for motivation.", "Separate rough drafts from final quality review."] },
    { min: 15, max: 20, title: "Chronic Procrastination Pattern", color: "var(--high)", description: "Your responses suggest frequent delay loops that protect short-term mood while increasing longer-term pressure.", indicators: { avoidance: 88, temporal: 90, perfectionism: 82 }, insights: ["Break tasks into tiny visible actions.", "Consider support if procrastination is causing serious academic, work, financial, or emotional impairment."] }
  ],
  indicators: [
    { key: "avoidance", label: "Emotional Avoidance" },
    { key: "temporal", label: "Present Bias" },
    { key: "perfectionism", label: "Perfectionism Gridlock" }
  ],
  related: [
    { href: "https://toolsquark.com/tools/self-discipline-test.html", title: "Self-Discipline Test", description: "Check consistency and long-term goal alignment.", action: "Assess Discipline" },
    { href: "https://toolsquark.com/tools/focus-attention-diagnostic.html", title: "Focus Attention Diagnostic", description: "Review attention stability and task initiation friction.", action: "Check Focus" }
  ],
  faq: [
    { question: "Is procrastination just laziness?", answer: "Usually no. It often reflects emotion regulation, unclear task structure, fear of failure, boredom, or difficulty starting." },
    { question: "Why do deadlines help?", answer: "Deadlines increase urgency and reduce ambiguity, but relying only on crisis pressure can create stress and inconsistent quality." },
    { question: "What is the fastest practical strategy?", answer: "Define the smallest next action and do it for 10 minutes. Starting is often the hardest part of the loop." }
  ],
  methodology: "This self-check uses five four-point items to estimate common procrastination drivers. Scoring is local and intended for self-reflection.",
  disclaimer: "This tool is educational and cannot diagnose ADHD, anxiety, depression, or executive function disorders. Seek qualified support if delay patterns significantly impair life."
};
