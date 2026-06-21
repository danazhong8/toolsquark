module.exports = {
  slug: "procrastination-test",
  title: "Procrastination Self-Check | Task Delay Patterns",
  description: "Take a private procrastination self-check for emotional avoidance, present bias, perfectionism, and difficulty starting important tasks.",
  h1: "Procrastination Self-Check",
  hero: "Identify whether task delay is driven by emotional avoidance, present bias, perfectionism, or inconsistent execution.",
  schemaName: "Privacy-First Procrastination Test",
  lastUpdated: "June 21, 2026",
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
  references: [
    { title: "What Research Has Been Conducted on Procrastination?", publisher: "Frontiers in Psychology / PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/35185729/" }
  ],
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
    { href: "https://toolsquark.com/tools/self-discipline-test.html", title: "Self-Discipline Self-Check", description: "Check consistency and long-term goal alignment.", action: "Review Follow-Through" },
    { href: "https://toolsquark.com/tools/focus-attention-diagnostic.html", title: "Focus & Attention Self-Check", description: "Review attention stability and task initiation friction.", action: "Check Focus" }
  ],
  faq: [
    { question: "Is procrastination just laziness?", answer: "Usually no. It often reflects emotion regulation, unclear task structure, fear of failure, boredom, or difficulty starting." },
    { question: "Why do deadlines help?", answer: "Deadlines increase urgency and reduce ambiguity, but relying only on crisis pressure can create stress and inconsistent quality." },
    { question: "What is the fastest practical strategy?", answer: "Define the smallest next action and do it for 10 minutes. Starting is often the hardest part of the loop." }
  ],
  contentSections: [
    { title: "What This Self-Check Covers", body: `<p>The five questions review task initiation, preference for immediate rewards, perfectionistic delay, plan follow-through, and waiting to feel ready.</p><p>This is an original ToolsQuark checklist. It is not a validated procrastination scale and does not measure laziness, character, or worth.</p>` },
    { title: "How Scoring Works", body: `<p>Answers are scored from 1 to 4, producing a total from 5 to 20. Higher totals represent more frequent delay patterns in this set.</p><ul><li><strong>5-8:</strong> fewer frequent delay signals.</li><li><strong>9-14:</strong> several recurring delay patterns.</li><li><strong>15-20:</strong> many frequent patterns causing pressure.</li></ul><div class="note-box">The bands and driver bars are editorial and not diagnostic thresholds.</div>` },
    { title: "Delay Can Have Different Causes", body: `<p>Task ambiguity, fear of failure, boredom, low energy, competing demands, anxiety, depression, ADHD, learning differences, and unrealistic workload can all produce delay. The most useful intervention depends on the cause.</p>` },
    { title: "How To Use The Result", body: `<p>Choose one answer to test for a week: shrink the first action, remove an immediate distraction, separate drafting from editing, or make the plan smaller. Seek qualified support when delay creates serious academic, work, financial, or emotional harm.</p>` }
  ],
  methodology: "This original five-item checklist scores answers from 1 to 4. Total-score bands and avoidance, present-bias, and perfectionism indicators are editorial and not clinically validated.",
  disclaimer: "This tool is educational and cannot diagnose ADHD, anxiety, depression, or executive function disorders. Seek qualified support if delay patterns significantly impair life."
};
