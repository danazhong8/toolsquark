module.exports = {
  slug: "focus-attention-diagnostic",
  title: "Focus & Attention Self-Check | ToolsQuark",
  description: "Take a private focus and attention self-check covering distractibility, task initiation, sustained attention, and frequent task switching.",
  h1: "Focus & Attention Self-Check",
  hero: "Assess concentration stability, distraction sensitivity, task initiation, and cognitive switching friction.",
  schemaName: "Privacy-First Focus Attention Self-Check",
  lastUpdated: "June 21, 2026",
  timeframe: "Past 2 weeks",
  questionDimensions: ["distractibility", "initiation", "switching", "distractibility", "switching"],
  dimensionRelated: { distractibility: 1, initiation: 0, switching: 0 },
  dimensionGuidance: {
    distractibility: "Remove the easiest source of interruption before starting: silence alerts, close extra tabs, and place the phone out of reach.",
    initiation: "Define a first action that takes under five minutes and begin it before trying to plan the whole task.",
    switching: "Keep one visible priority and capture incoming tasks on a separate list instead of changing course immediately."
  },
  references: [
    { title: "Attention-Deficit/Hyperactivity Disorder", publisher: "National Institute of Mental Health", href: "https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd" }
  ],
  questions: [
    { question: "How easily do notifications, sounds, or tabs pull you away from work?", options: ["Rarely", "Sometimes", "Often", "Constantly"] },
    { question: "How difficult is it to start a task even when you know what to do?", options: ["Easy", "Somewhat hard", "Hard", "Very hard"] },
    { question: "How often do you jump between tasks before completing one?", options: ["Rarely", "Sometimes", "Often", "Almost always"] },
    { question: "How long can you usually sustain deep focus?", options: ["60+ minutes", "30-60 minutes", "10-30 minutes", "Under 10 minutes"] },
    { question: "How often does mental clutter make priorities unclear?", options: ["Rarely", "Sometimes", "Often", "Daily"] }
  ],
  profiles: [
    { min: 5, max: 8, title: "Stable Attention Control", color: "var(--low)", description: "Your attention pattern appears comparatively stable and less vulnerable to frequent switching.", indicators: { distractibility: 20, initiation: 22, switching: 24 }, insights: ["Keep protecting deep-work blocks.", "Batch messages to preserve attention depth."] },
    { min: 9, max: 14, title: "Fragmented Focus Pattern", color: "var(--mid)", description: "Your focus may be disrupted by task switching, unclear starts, or environmental noise.", indicators: { distractibility: 60, initiation: 58, switching: 62 }, insights: ["Define one visible next action.", "Use timed focus blocks and remove the easiest distractions before starting."] },
    { min: 15, max: 20, title: "High Attention Friction", color: "var(--high)", description: "Your responses suggest high difficulty sustaining focus or initiating tasks consistently.", indicators: { distractibility: 88, initiation: 84, switching: 90 }, insights: ["External structure may help: timers, checklists, blockers, and body doubling.", "If focus issues are lifelong or impairing, consider professional evaluation."] }
  ],
  indicators: [{ key: "distractibility", label: "Distractibility" }, { key: "initiation", label: "Task Initiation Friction" }, { key: "switching", label: "Task Switching" }],
  related: [
    { href: "https://toolsquark.com/tools/procrastination-test.html", title: "Procrastination Test", description: "Check whether delay loops are affecting task starts.", action: "Assess Delay" },
    { href: "https://toolsquark.com/tools/sleep-quality-assessment.html", title: "Sleep Quality Assessment", description: "Poor sleep can reduce focus stability.", action: "Assess Sleep" }
  ],
  faq: [
    { question: "Does low focus mean ADHD?", answer: "Not necessarily. Sleep, stress, environment, mood, workload, and habits can all affect focus." },
    { question: "What is the fastest focus improvement?", answer: "Remove one major distraction and define the first tiny action before using a timer." }
  ],
  contentSections: [
    {
      title: "What This Self-Check Covers",
      body: `<p>The five questions review distractibility, task initiation, task switching, sustained focus, and priority clarity during the stated timeframe.</p><p>This is an original ToolsQuark checklist. It is not ASRS, a neuropsychological test, or an ADHD diagnostic interview.</p>`
    },
    {
      title: "How Scoring Works",
      body: `<p>Answers are scored from 1 to 4, producing a total from 5 to 20. Higher totals reflect more frequent attention friction in this question set.</p><ul><li><strong>5-8:</strong> fewer frequent focus difficulties.</li><li><strong>9-14:</strong> several recurring attention barriers.</li><li><strong>15-20:</strong> many frequent barriers that may warrant support.</li></ul><div class="note-box">The score bands and dimension bars are editorial, not validated ADHD thresholds.</div>`
    },
    {
      title: "Attention Problems Have Many Causes",
      body: `<p>Sleep loss, anxiety, depression, stress, pain, substances, medication effects, learning differences, and an overloaded environment can all affect attention. ADHD diagnosis also considers childhood history, persistence across settings, functional impairment, and alternative explanations.</p>`
    },
    {
      title: "When To Seek Evaluation",
      body: `<p>Consider qualified evaluation when attention problems are long-standing, occur across settings, or substantially affect school, work, finances, relationships, driving, or safety. Bring concrete examples and a timeline rather than relying on this score alone.</p>`
    }
  ],
  methodology: "This original five-item checklist scores answers from 1 to 4. Total-score bands and distractibility, initiation, and switching indicators are editorial and not clinically validated. Scoring stays in the browser.",
  disclaimer: "This tool is not an ADHD diagnosis or medical assessment. Seek qualified evaluation if symptoms are persistent or impairing."
};
