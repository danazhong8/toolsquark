module.exports = {
  slug: "social-anxiety-test",
  title: "Social Anxiety Self-Check | ToolsQuark",
  description: "Take a private social anxiety self-check covering fear of judgment, avoidance, self-monitoring, and replaying interactions afterward.",
  h1: "Social Anxiety Self-Check",
  hero: "Reflect on fear of judgment, avoidance, safety behaviors, and post-event replay after social interactions.",
  schemaName: "Privacy-First Social Anxiety Test",
  lastUpdated: "June 21, 2026",
  timeframe: "Past 2 weeks",
  questionDimensions: ["judgment", "avoidance", "judgment", "replay", "avoidance"],
  dimensionRelated: { judgment: 1, avoidance: 0, replay: 1 },
  dimensionGuidance: {
    judgment: "During one manageable interaction, move attention toward the other person and the shared task instead of monitoring how you appear.",
    avoidance: "Choose a small, repeatable social step that feels challenging but manageable; repeat it before increasing difficulty.",
    replay: "Limit post-event review to a short written check: what went adequately, what you learned, and whether any action is actually needed."
  },
  references: [
    { title: "Social Anxiety Disorder: More Than Just Shyness", publisher: "National Institute of Mental Health", href: "https://www.nimh.nih.gov/health/publications/social-anxiety-disorder-more-than-just-shyness" }
  ],
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
  contentSections: [
    { title: "What This Self-Check Covers", body: `<p>The five questions review fear of judgment, avoidance, self-monitoring, difficulty speaking in groups, and replaying interactions afterward.</p><p>This is an original ToolsQuark checklist. It is not SPIN, LSAS, MINI, or a diagnostic interview for social anxiety disorder.</p>` },
    { title: "How Scoring Works", body: `<p>Each answer contributes 1 to 4 points, for a total from 5 to 20. Higher totals reflect more frequent social-fear responses in this question set.</p><ul><li><strong>5-8:</strong> fewer frequent social-fear signals.</li><li><strong>9-14:</strong> several recurring signals.</li><li><strong>15-20:</strong> many frequent signals that may be limiting.</li></ul><div class="note-box">The bands and dimension bars are editorial, not validated diagnostic thresholds.</div>` },
    { title: "Shyness, Stress, And Social Anxiety", body: `<p>Temporary nervousness, introversion, unfamiliar settings, communication differences, trauma, depression, and autism-related experiences can overlap with these answers. Clinical assessment considers persistence, distress, avoidance, impairment, and alternative explanations.</p>` },
    { title: "When To Seek Support", body: `<p>Qualified support may help when social fear repeatedly blocks school, work, healthcare, relationships, or ordinary activities. A clinician can discuss evidence-based options without treating this score as a diagnosis.</p>` }
  ],
  methodology: "This original five-item checklist scores answers from 1 to 4. Total-score bands and judgment, avoidance, and replay indicators are editorial and not clinically validated. Scoring stays in the browser.",
  disclaimer: "This tool is educational only. Seek qualified mental health support if social fear is persistent, intense, or limiting."
};
