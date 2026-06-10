module.exports = {
  slug: "focus-attention-diagnostic",
  title: "Accurate Focus & Attention Diagnostic | Executive Function Audit | ToolsQuark",
  description: "Evaluate your cognitive control parameters, task initiation friction, and stability when filtering environmental and digital noise using our advanced focus tracker.",
  h1: "Focus & Attention Diagnostic",
  hero: "Assess concentration stability, distraction sensitivity, task initiation, and cognitive switching friction.",
  schemaName: "Privacy-First Focus Attention Diagnostic",
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
  indicators: [{ key: "distractibility", label: "Distractibility" }, { key: "initiation", label: "Task Initiation" }, { key: "switching", label: "Task Switching" }],
  related: [
    { href: "https://www.toolsquark.com/tools/procrastination-test.html", title: "Procrastination Test", description: "Check whether delay loops are affecting task starts.", action: "Assess Delay" },
    { href: "https://www.toolsquark.com/tools/sleep-quality-assessment.html", title: "Sleep Quality Assessment", description: "Poor sleep can reduce focus stability.", action: "Assess Sleep" }
  ],
  faq: [
    { question: "Does low focus mean ADHD?", answer: "Not necessarily. Sleep, stress, environment, mood, workload, and habits can all affect focus." },
    { question: "What is the fastest focus improvement?", answer: "Remove one major distraction and define the first tiny action before using a timer." }
  ],
  methodology: "This self-check uses five four-point items covering distractibility, task initiation, switching, and sustained attention.",
  disclaimer: "This tool is not an ADHD diagnosis or medical assessment. Seek qualified evaluation if symptoms are persistent or impairing."
};
