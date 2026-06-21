module.exports = {
  slug: "anxiety-hyperarousal-assessment",
  title: "Anxiety & Hyperarousal Self-Check | ToolsQuark",
  description: "Take a private anxiety and hyperarousal self-check covering physical tension, persistent worry, sensory overload, and recovery after stress.",
  h1: "Anxiety & Hyperarousal Self-Check",
  hero: "Check whether your nervous system is staying in a high-alert state through physical tension, worry, sensory overload, and recovery difficulty.",
  schemaName: "Privacy-First Anxiety Hyperarousal Assessment",
  lastUpdated: "June 21, 2026",
  timeframe: "Past 2 weeks",
  questionDimensions: ["arousal", "sensory", "worry", "arousal", "arousal"],
  dimensionRelated: { arousal: 0, worry: 0, sensory: 1 },
  dimensionGuidance: {
    arousal: "Try a two-minute downshift after a trigger: relax your jaw and shoulders, then make each exhale slightly longer than the inhale.",
    worry: "Write the worry and one next action down. If no action is possible now, schedule a short time to revisit it instead of reopening it all day.",
    sensory: "Reduce stacked stimulation for one daily block by silencing alerts, lowering background noise, or stepping away from crowded input."
  },
  references: [
    { title: "Anxiety Disorders", publisher: "National Institute of Mental Health", href: "https://www.nimh.nih.gov/health/topics/anxiety-disorders" }
  ],
  questions: [
    { question: "How often do you feel physically on edge even when nothing urgent is happening?", options: ["Rarely", "Sometimes", "Often", "Almost constantly"] },
    { question: "How easily do noise, crowds, messages, or interruptions overload you?", options: ["Not easily", "Occasionally", "Frequently", "Very easily"] },
    { question: "How often does worry keep running after you have already handled the issue?", options: ["Rarely", "Sometimes", "Often", "Almost always"] },
    { question: "How often do you notice tight chest, shallow breathing, or muscle tension?", options: ["Rarely", "Sometimes", "Often", "Daily"] },
    { question: "How hard is it to calm down after a stressful trigger?", options: ["Easy", "Somewhat hard", "Hard", "Very hard"] }
  ],
  profiles: [
    { min: 5, max: 8, title: "Calm Regulation Pattern", color: "var(--low)", description: "Your answers suggest relatively low hyperarousal and better recovery from daily triggers.", indicators: { arousal: 22, worry: 24, sensory: 20 }, insights: ["Keep recovery habits consistent before stress piles up.", "Use short breaks to preserve nervous-system flexibility."] },
    { min: 9, max: 14, title: "Elevated Alert State", color: "var(--mid)", description: "You may be spending more time in a high-alert state than is comfortable, especially around worry, tension, or stimulation.", indicators: { arousal: 60, worry: 58, sensory: 55 }, insights: ["Practice slow exhale breathing after triggers.", "Reduce stacked stimulation when possible, especially before sleep."] },
    { min: 15, max: 20, title: "Persistent High-Alert Pattern", color: "var(--high)", description: "Your responses suggest persistent nervous-system activation that may be draining attention, sleep, and emotional bandwidth.", indicators: { arousal: 88, worry: 84, sensory: 82 }, insights: ["Consider professional support if anxiety is persistent or impairing.", "Prioritize predictable routines, sleep protection, and lower-stimulation recovery windows."] }
  ],
  indicators: [{ key: "arousal", label: "Physical Arousal" }, { key: "worry", label: "Cognitive Worry" }, { key: "sensory", label: "Sensory Load" }],
  related: [
    { href: "https://toolsquark.com/tools/stress-index-test.html", title: "Stress Index Test", description: "Compare anxiety activation with overall stress load.", action: "Assess Stress" },
    { href: "https://toolsquark.com/tools/sleep-quality-assessment.html", title: "Sleep Quality Assessment", description: "Check whether hyperarousal is affecting sleep.", action: "Assess Sleep" }
  ],
  faq: [
    { question: "Is hyperarousal the same as anxiety?", answer: "Not always. Hyperarousal describes a high-alert body state that can accompany anxiety, stress, trauma responses, lack of sleep, or sensory overload." },
    { question: "Can this diagnose an anxiety disorder?", answer: "No. It is a private self-check, not a clinical diagnosis." }
  ],
  contentSections: [
    {
      title: "What This Self-Check Covers",
      body: `<p>The five questions sample physical tension, persistent worry, sensory overload, and difficulty settling after a trigger during the past two weeks.</p><p>This is an original ToolsQuark checklist. It is not GAD-7, another validated anxiety scale, or a trauma assessment.</p>`
    },
    {
      title: "How Scoring Works",
      body: `<p>Each answer contributes 1 to 4 points, for a total from 5 to 20. Higher totals mean that more high-frequency alert-state responses were selected.</p><ul><li><strong>5-8:</strong> fewer frequent signals in this checklist.</li><li><strong>9-14:</strong> several elevated alert-state responses.</li><li><strong>15-20:</strong> many frequent responses worth reviewing.</li></ul><div class="note-box">The score bands and dimension bars are editorial groupings, not clinical cutoffs or population percentiles.</div>`
    },
    {
      title: "How To Use The Result",
      body: `<p>Review the individual answers and the situations in which they occur. Sleep loss, caffeine, pain, medication effects, acute stress, trauma reminders, and medical conditions can overlap with anxiety-like activation.</p><p>If symptoms persist, intensify, or limit daily life, a qualified clinician can assess duration, impairment, medical causes, and whether treatment may help.</p>`
    },
    {
      title: "Urgent Support",
      body: `<p>This page cannot assess immediate safety. Seek urgent local help for severe breathing difficulty, chest pain, fainting, feeling unable to stay safe, or thoughts of harming yourself or someone else.</p>`
    }
  ],
  methodology: "This original five-item checklist scores each answer from 1 to 4. Total-score bands and arousal, worry, and sensory indicators are editorial and not clinically validated. Scoring stays in the browser.",
  disclaimer: "This educational tool cannot diagnose or treat anxiety disorders. Seek qualified support if symptoms are persistent, intense, or impairing."
};
