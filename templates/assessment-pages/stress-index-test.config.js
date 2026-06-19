module.exports = {
  slug: "stress-index-test",
  title: "Accurate Stress Index Test | Scientific Nervous System Audit | ToolsQuark",
  description: "Evaluate your overall allostatic load, chronic nervous system reactivity, and emotional burnout risk factors using our advanced diagnostic behavioral metrics.",
  h1: "Stress Index Test",
  hero: "Audit your stress load, physical tension, and nervous system recovery capacity with a private browser-side self-assessment.",
  schemaName: "Privacy-First Stress Index Test",
  questions: [
    { question: "How frequently have you felt upset or agitated because of something unexpected happening?", options: ["Almost never", "Sometimes", "Fairly often", "Very often"] },
    { question: "How often do you feel you lack control over the important responsibilities in your life?", options: ["Never", "Rarely", "Sometimes", "All the time"] },
    { question: "Have you noticed jaw clenching, teeth grinding, or shoulder tension?", options: ["Never notice this", "Rarely", "Frequently", "Almost constantly"] },
    { question: "How easily do minor everyday inconveniences make you feel angry?", options: ["Stay calm", "Slightly annoyed", "Noticeably irritated", "Explosive frustration"] },
    { question: "How regularly do you skip meals or overeat because of emotional pressure?", options: ["Never", "Occasionally", "Often", "Daily stress-eating or restriction"] },
    { question: "Do you experience digestive issues, unexplained fatigue, or tension headaches?", options: ["No", "Rarely", "Frequently", "Chronic daily symptoms"] },
    { question: "How often do you feel overwhelmed by your current duties?", options: ["Never", "Rarely", "Often", "Constantly drowning"] },
    { question: "How successful are you at relaxing during evenings or weekends?", options: ["Highly successful", "Moderately successful", "Struggle to relax", "Almost impossible"] },
    { question: "How often do you snap at family, friends, or coworkers over minor things?", options: ["Never", "Rarely", "Often", "Almost daily"] },
    { question: "Do demands on your time feel like they are increasing while energy reserves shrink?", options: ["No, balanced", "Slightly out of balance", "Yes, noticeably", "Completely unsustainable"] }
  ],
  profiles: [
    {
      min: 10,
      max: 18,
      title: "Regulated Nervous System Baseline",
      color: "var(--low)",
      description: "Your stress responses appear relatively regulated. You still face pressure, but recovery capacity and emotional stability look comparatively strong.",
      indicators: { load: 32, reactivity: 28, reserve: 85 },
      insights: ["Keep protecting recovery routines before stress accumulates.", "Use short breaks and consistent sleep as maintenance, not emergency repair."]
    },
    {
      min: 19,
      max: 30,
      title: "Elevated Tension & Allostatic Plateau",
      color: "var(--mid)",
      description: "Your stress load appears elevated. Physical tension, sleep disruption, irritability, or reduced mental bandwidth may be starting to cluster.",
      indicators: { load: 58, reactivity: 64, reserve: 52 },
      insights: ["Schedule decompression windows as real appointments.", "Reduce avoidable stimulants and add simple downshifts such as slow exhale breathing or walking."]
    },
    {
      min: 31,
      max: 40,
      title: "Allostatic Overload & Sympathetic Exhaustion",
      color: "var(--high)",
      description: "Your answers suggest a high stress burden and reduced recovery reserve. Active restoration, boundary setting, and support may be important.",
      indicators: { load: 88, reactivity: 92, reserve: 21 },
      insights: ["Consider speaking with a qualified professional if distress is persistent or impairing.", "Prioritize sleep, workload boundaries, and immediate nervous-system calming practices."]
    }
  ],
  indicators: [
    { key: "load", label: "Allostatic Load" },
    { key: "reactivity", label: "Stress Reactivity" },
    { key: "reserve", label: "Recovery Reserve" }
  ],
  relatedTitle: "Related Self-Checks",
  related: [
    { href: "https://toolsquark.com/tools/sleep-quality-assessment.html", title: "Sleep Quality Assessment", description: "Check whether sleep disruption is adding to stress load.", action: "Assess Sleep" },
    { href: "https://toolsquark.com/tools/occupational-burnout-level-test.html", title: "Burnout Level Test", description: "Evaluate work-related fatigue and depletion.", action: "Check Burnout" }
  ],
  faq: [
    { question: "Can I be highly stressed without feeling anxious?", answer: "Yes. Stress can show up physically through tension, fatigue, headaches, appetite shifts, digestive symptoms, or irritability before it feels like anxiety." },
    { question: "What is a quick way to lower stress intensity?", answer: "Slow exhale breathing, a brief walk, reducing sensory input, and pausing caffeine can help shift the body toward parasympathetic recovery." },
    { question: "Is this a diagnosis?", answer: "No. This is a private educational self-check and cannot diagnose anxiety, burnout, trauma, or other clinical conditions." }
  ],
  methodology: "This self-assessment uses 10 four-point items to estimate stress load and recovery reserve. All scoring happens locally in your browser.",
  disclaimer: "This tool is for education and self-reflection only. If you feel unsafe, overwhelmed, or persistently distressed, seek help from a qualified health professional or local emergency support."
};
