module.exports = {
  slug: "anxiety-hyperarousal-assessment",
  title: "Anxiety & Hyperarousal Self-Check | ToolsQuark",
  description: "Evaluate your somatic anxiety baselines, sensory overload, and chronic sympathetic hyperarousal parameters using our advanced behavioral health tracker.",
  h1: "Anxiety & Hyperarousal Assessment",
  hero: "Check whether your nervous system is staying in a high-alert state through physical tension, worry, sensory overload, and recovery difficulty.",
  schemaName: "Privacy-First Anxiety Hyperarousal Assessment",
  timeframe: "Past 2 weeks",
  questionDimensions: ["arousal", "sensory", "worry", "arousal", "arousal"],
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
  methodology: "This five-item self-check estimates physical arousal, worry, sensory load, and recovery difficulty. Scoring happens locally in your browser.",
  disclaimer: "This educational tool cannot diagnose or treat anxiety disorders. Seek qualified support if symptoms are persistent, intense, or impairing."
};
