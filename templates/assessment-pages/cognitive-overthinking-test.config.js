module.exports = {
  slug: "cognitive-overthinking-test",
  title: "Accurate Cognitive Overthinking Test | Rumination Audit | ToolsQuark",
  description: "Evaluate your mental tendencies toward excessive rumination, destructive decision paralysis, and anticipatory catastrophizing using our advanced cognitive tracker.",
  h1: "Cognitive Overthinking Test",
  hero: "Measure rumination, decision loops, and future-focused worry that may keep your mind running without resolution.",
  schemaName: "Privacy-First Cognitive Overthinking Test",
  questions: [
    { question: "How often do you replay conversations long after they ended?", options: ["Rarely", "Sometimes", "Often", "Constantly"] },
    { question: "How often do decisions feel stuck because you keep analyzing every option?", options: ["Rarely", "Sometimes", "Often", "Nearly always"] },
    { question: "How often do you imagine worst-case outcomes before starting something?", options: ["Rarely", "Sometimes", "Often", "Automatically"] },
    { question: "How hard is it to stop thinking once a worry starts?", options: ["Easy", "Somewhat hard", "Hard", "Very hard"] },
    { question: "How often does thinking replace action?", options: ["Rarely", "Sometimes", "Often", "Most of the time"] }
  ],
  profiles: [
    { min: 5, max: 8, title: "Flexible Thinking Pattern", color: "var(--low)", description: "You appear able to think through problems without getting stuck in repetitive loops.", indicators: { rumination: 22, paralysis: 20, catastrophizing: 18 }, insights: ["Keep using action steps to close loops.", "Write down decisions when they are made to avoid reopening them repeatedly."] },
    { min: 9, max: 14, title: "Moderate Rumination Loop", color: "var(--mid)", description: "You may be losing time and energy to repeated analysis, especially when uncertainty is high.", indicators: { rumination: 58, paralysis: 62, catastrophizing: 55 }, insights: ["Use time-boxed decisions.", "Ask: what action would make this 5% clearer?"] },
    { min: 15, max: 20, title: "High Overthinking Load", color: "var(--high)", description: "Your responses suggest overthinking may be interfering with clarity, action, or rest.", indicators: { rumination: 88, paralysis: 86, catastrophizing: 84 }, insights: ["Externalize thoughts on paper instead of processing endlessly in your head.", "If loops feel uncontrollable or distressing, consider qualified mental health support."] }
  ],
  indicators: [{ key: "rumination", label: "Rumination" }, { key: "paralysis", label: "Decision Paralysis" }, { key: "catastrophizing", label: "Catastrophizing" }],
  related: [
    { href: "https://toolsquark.com/tools/anxiety-hyperarousal-assessment.html", title: "Anxiety Assessment", description: "Check whether worry is paired with body-level arousal.", action: "Assess Anxiety" },
    { href: "https://toolsquark.com/tools/focus-attention-diagnostic.html", title: "Focus Diagnostic", description: "Review attention control and task initiation.", action: "Check Focus" }
  ],
  faq: [
    { question: "Is overthinking always bad?", answer: "No. Careful thinking is useful. It becomes a problem when it repeats without progress, rest, or action." },
    { question: "Can this diagnose OCD or anxiety?", answer: "No. This is a self-reflection tool and cannot diagnose clinical conditions." }
  ],
  methodology: "This self-check uses five four-point items covering rumination, decision paralysis, catastrophizing, and action delay.",
  disclaimer: "This tool is educational only. Seek professional care if repetitive thoughts are distressing, intrusive, or impairing."
};
