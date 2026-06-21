module.exports = {
  slug: "self-discipline-test",
  title: "Self-Discipline Self-Check | Habit Follow-Through",
  description: "Take a private self-discipline check covering consistency, impulse friction, habit follow-through, and alignment with long-term goals.",
  h1: "Self-Discipline Self-Check",
  hero: "Assess consistency, impulse control, habit follow-through, and alignment with long-term goals.",
  schemaName: "Privacy-First Self-Discipline Test",
  lastUpdated: "June 21, 2026",
  timeframe: "Past 30 days",
  questionDimensions: ["consistency", "impulse", "consistency", "identity", "identity"],
  dimensionRelated: { consistency: 0, impulse: 0, identity: 1 },
  dimensionGuidance: {
    consistency: "Attach one small behavior to a stable daily cue and make the minimum version easy enough to complete on a low-motivation day.",
    impulse: "Add friction before the tempting action and reduce friction before the intended action by changing what is visible, open, or within reach.",
    identity: "Choose one small daily action that represents the person you want to become; treat repetition as evidence, not a test of willpower."
  },
  references: [
    { title: "Time to Form a Habit: A Systematic Review and Meta-Analysis", publisher: "Healthcare / PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/39685110/" }
  ],
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
  indicators: [{ key: "consistency", label: "Consistency", direction: "protective" }, { key: "impulse", label: "Impulse Friction" }, { key: "identity", label: "Identity Alignment", direction: "protective" }],
  related: [
    { href: "https://toolsquark.com/tools/procrastination-test.html", title: "Procrastination Self-Check", description: "Check task delay and avoidance loops.", action: "Assess Delay" },
    { href: "https://toolsquark.com/tools/focus-attention-diagnostic.html", title: "Focus Self-Check", description: "Evaluate focus and task initiation.", action: "Check Focus" }
  ],
  faq: [
    { question: "Is self-discipline just willpower?", answer: "No. Environment design, habits, sleep, stress, identity, and incentives all shape follow-through." },
    { question: "What is the simplest improvement?", answer: "Make the desired behavior smaller and easier to start, then repeat it consistently." }
  ],
  contentSections: [
    { title: "What This Self-Check Covers", body: `<p>The five questions review goal follow-through, short-term temptation, consistency when motivation drops, self-promises, and alignment between actions and intentions.</p><p>This is an original ToolsQuark checklist. It does not measure a fixed personality trait, moral character, or a clinical impulse-control condition.</p>` },
    { title: "How Scoring Works", body: `<p>Responses are normalized to 1 through 4 points so that higher totals represent more frequent follow-through friction. The total ranges from 5 to 20.</p><ul><li><strong>5-8:</strong> fewer frequent friction signals.</li><li><strong>9-14:</strong> inconsistent follow-through in several areas.</li><li><strong>15-20:</strong> frequent conflict between plans and immediate impulses.</li></ul><div class="note-box">The bands and dimension bars are editorial, not validated trait scores.</div>` },
    { title: "Environment Often Beats Willpower", body: `<p>Sleep, stress, depression, ADHD, pain, caregiving, financial pressure, unclear goals, and an environment full of cues can all affect consistency. Habit formation usually depends on repetition and context, not a single number of days.</p>` },
    { title: "How To Use The Result", body: `<p>Reduce one behavior to a repeatable minimum, attach it to a stable cue, and make the competing action less convenient. Review the system rather than blaming identity. Seek qualified support when impulse or executive-function problems cause substantial harm.</p>` }
  ],
  methodology: "This original five-item checklist scores answers from 1 to 4 after accounting for positively worded items. Total-score bands and consistency, impulse, and alignment indicators are editorial and not clinically validated.",
  disclaimer: "This tool is educational and cannot diagnose clinical executive function, mood, or impulse-control conditions."
};
