module.exports = {
  slug: "stress-index-test",
  title: "Stress Index Test | Free Private Stress Self-Check",
  description: "Take a private stress self-check for tension, overload, irritability, and recovery reserve. Educational browser-side assessment with instant results.",
  h1: "Stress Index Test",
  hero: "Audit your stress load, physical tension, and nervous system recovery capacity with a private browser-side self-assessment.",
  schemaName: "Privacy-First Stress Index Test",
  timeframe: "Past 2 weeks",
  questionDimensions: ["reactivity", "load", "load", "reactivity", "load", "load", "load", "reserve", "reactivity", "reserve"],
  dimensionRelated: { load: 1, reactivity: 0, reserve: 0 },
  dimensionGuidance: {
    load: "List the demands currently using the most capacity, then remove, defer, delegate, or clarify one item instead of trying to recover around an unchanged load.",
    reactivity: "Use a brief pause at the first physical sign of escalation: release muscle tension, slow the exhale, and delay the next response when possible.",
    reserve: "Protect one repeatable recovery block this week and treat sleep, food, movement, and support as capacity maintenance rather than rewards."
  },
  references: [
    { title: "So Stressed Out?", publisher: "National Institute of Mental Health", href: "https://www.nimh.nih.gov/health/publications/so-stressed-out-fact-sheet" },
    { title: "Managing Stress", publisher: "Centers for Disease Control and Prevention", href: "https://www.cdc.gov/mental-health/living-with/index.html" }
  ],
  schemaDescription: "A free browser-side stress self-check that estimates stress load, reactivity, and recovery reserve for educational self-reflection.",
  lastUpdated: "June 20, 2026",
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
      title: "Elevated Stress & Reduced Recovery",
      color: "var(--mid)",
      description: "Your stress load appears elevated. Physical tension, sleep disruption, irritability, or reduced mental bandwidth may be starting to cluster.",
      indicators: { load: 58, reactivity: 64, reserve: 52 },
      insights: ["Schedule decompression windows as real appointments.", "Reduce avoidable stimulants and add simple downshifts such as slow exhale breathing or walking."]
    },
    {
      min: 31,
      max: 40,
      title: "High Stress Load & Low Recovery",
      color: "var(--high)",
      description: "Your answers suggest a high stress burden and reduced recovery reserve. Active restoration, boundary setting, and support may be important.",
      indicators: { load: 88, reactivity: 92, reserve: 21 },
      insights: ["Consider speaking with a qualified professional if distress is persistent or impairing.", "Prioritize sleep, workload boundaries, and immediate nervous-system calming practices."]
    }
  ],
  indicators: [
    { key: "load", label: "Allostatic Load" },
    { key: "reactivity", label: "Stress Reactivity" },
    { key: "reserve", label: "Recovery Reserve", direction: "protective" }
  ],
  relatedTitle: "Related Self-Checks",
  related: [
    { href: "https://toolsquark.com/tools/sleep-quality-assessment.html", title: "Sleep Quality Assessment", description: "Check whether sleep disruption is adding to stress load.", action: "Assess Sleep" },
    { href: "https://toolsquark.com/tools/occupational-burnout-level-test.html", title: "Burnout Level Test", description: "Evaluate work-related fatigue and depletion.", action: "Check Burnout" }
  ],
  faq: [
    { question: "Can I be highly stressed without feeling anxious?", answer: "Yes. Stress can show up physically through tension, fatigue, headaches, appetite shifts, digestive symptoms, or irritability before it feels like anxiety." },
    { question: "What is a quick way to lower stress intensity?", answer: "Slow exhale breathing, a brief walk, reducing sensory input, and pausing caffeine can help shift the body toward parasympathetic recovery." },
    { question: "Is this a diagnosis?", answer: "No. This is a private educational self-check and cannot diagnose anxiety, burnout, trauma, or other clinical conditions." },
    { question: "How often should I retake the stress test?", answer: "You can retake it after a meaningful change in workload, sleep, recovery routines, or life stress. Weekly or monthly check-ins are more useful than repeating it several times in one day." },
    { question: "When should I seek professional support?", answer: "Consider professional support if stress feels persistent, affects sleep or work, causes panic-like symptoms, leads to unsafe thoughts, or makes daily responsibilities difficult to manage." }
  ],
  contentSections: [
    {
      title: "What This Stress Test Measures",
      body: `<p>This self-check samples ten common stress experiences across perceived control, irritability, physical tension, overwhelm, behavior change, and recovery difficulty during the past two weeks.</p><p>It is an editorial educational checklist created for ToolsQuark. It is not the Perceived Stress Scale or another validated clinical instrument, and its custom load, reactivity, and reserve indicators have not been clinically validated.</p>`
    },
    {
      title: "How To Interpret Your Score",
      body: `<p>Each answer contributes 1 to 4 points, producing a total from 10 to 40. Higher totals mean that more high-frequency stress responses were selected; they do not represent a diagnosis or a population percentile.</p><ul><li><strong>10-18:</strong> fewer frequent stress signals in this checklist.</li><li><strong>19-30:</strong> several elevated stress or recovery signals.</li><li><strong>31-40:</strong> many frequent stress responses that merit attention.</li></ul><div class="note-box">The score bands are practical editorial groupings, not validated clinical cutoffs. Look at which answers changed and whether stress is impairing daily life, not just the total.</div>`
    },
    {
      title: "What To Do After The Test",
      body: `<p>Start with one specific lever: reduce or clarify one demand, protect a repeatable sleep window, take a movement break, write down open loops, or contact someone who can provide practical support. Repeating the check after a meaningful change is more informative than retaking it several times in one day.</p><p>Seek qualified support when distress persists, disrupts sleep or work, causes panic-like symptoms, or makes ordinary responsibilities hard to manage. If you may harm yourself or someone else, use local emergency or crisis support now rather than relying on this page.</p>`
    },
    {
      title: "Privacy And Limits",
      body: `<p>Your answers are scored in the browser. This page does not require an account and does not send your individual responses to a server.</p><p>This tool is educational and cannot replace a clinician, therapist, crisis line, or emergency service.</p>`
    }
  ],
  methodology: "This original educational checklist uses 10 four-point items scored from 1 to 4. Total-score bands and dimension indicators are editorial, not clinically validated. All scoring happens locally in your browser.",
  disclaimer: "This tool is for education and self-reflection only. If you feel unsafe, overwhelmed, or persistently distressed, seek help from a qualified health professional or local emergency support."
};
