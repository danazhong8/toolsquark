const frequency14d = {
  id: "frequency-14d-v1",
  values: [0, 1, 2, 3, 4],
  options: ["Not at all", "On 1-2 days", "On 3-6 days", "On 7-11 days", "On 12-14 days"]
};

module.exports = {
  slug: "anxiety-hyperarousal-assessment",
  title: "Anxiety And High-Alert Self-Check: Worry, Tension, and Recovery",
  description: "Review worry persistence, physical alertness, trigger sensitivity, recovery difficulty, and daily impact with a private 12-item self-check.",
  h1: "Anxiety And High-Alert Pattern Self-Check",
  hero: "Use this private anxiety and high-alert self-check to review worry persistence, physical tension, trigger sensitivity, settling difficulty, and daily-life impact across the past two weeks.",
  schemaName: "ToolsQuark Anxiety And High-Alert Pattern Self-Check",
  socialImage: "https://toolsquark.com/assets/social/anxiety-high-alert-self-check.png",
  socialAccent: "#0f766e",
  shareDescription: "A private 14-day self-check for physical alertness, persistent worry, trigger sensitivity, and recovery.",
  lastUpdated: "June 21, 2026",
  timeframe: "Past 14 days",
  instrument: {
    type: "original-self-check",
    version: "2.0",
    reviewStatus: "editorial-review",
    intendedAudience: "Adults seeking general reflection about recent high-alert or worry patterns",
    recallPeriodDays: 14
  },
  dimensions: [
    { key: "alertness", label: "Physical Alertness", definition: "How often the body felt activated without an immediate demand." },
    { key: "worry", label: "Worry Persistence", definition: "How often concern repeated or remained difficult to redirect." },
    { key: "sensitivity", label: "Trigger Sensitivity", definition: "How often ordinary input or uncertainty produced a high-alert response." },
    { key: "impact", label: "Recovery And Impact", definition: "How often alertness was slow to settle or interfered with ordinary life." }
  ],
  responseScale: frequency14d,
  questions: [
    { id: "alertness-1", dimension: "alertness", question: "During the past 14 days, how often did you feel physically keyed up when no immediate response was needed?" },
    { id: "alertness-2", dimension: "alertness", question: "During the past 14 days, how often did you notice your muscles staying tense while you were trying to rest?" },
    { id: "alertness-3", dimension: "alertness", question: "During the past 14 days, how often were you startled more easily than you expected?" },
    { id: "worry-1", dimension: "worry", question: "During the past 14 days, how often did the same concern return when there was no new information?" },
    { id: "worry-2", dimension: "worry", question: "During the past 14 days, how often was it difficult to redirect attention away from a possible problem?" },
    { id: "worry-3", dimension: "worry", question: "During the past 14 days, how often did you anticipate that something would go wrong?" },
    { id: "sensitivity-1", dimension: "sensitivity", question: "During the past 14 days, how often did an ordinary notification pull your attention immediately?" },
    { id: "sensitivity-2", dimension: "sensitivity", question: "During the past 14 days, how often was it difficult to filter background activity around you?" },
    { id: "sensitivity-3", dimension: "sensitivity", question: "During the past 14 days, how often did uncertainty put you on guard?" },
    { id: "impact-1", dimension: "impact", question: "During the past 14 days, how often did it take longer than usual to settle after a stressful moment?" },
    { id: "impact-2", dimension: "impact", question: "During the past 14 days, how often did feeling on alert interfere with rest?" },
    { id: "impact-3", dimension: "impact", question: "During the past 14 days, how often did feeling on alert make routine tasks harder to complete?" }
  ],
  contextQuestions: [
    {
      id: "alert-setting",
      label: "Most noticeable setting",
      question: "Where has this pattern been most noticeable?",
      options: [
        { label: "While resting or trying to sleep", value: "rest" },
        { label: "At work or while studying", value: "work" },
        { label: "In social or crowded settings", value: "social" },
        { label: "Across several settings", value: "multiple" },
        { label: "Prefer not to answer", value: "__skip__" }
      ]
    },
    {
      id: "alert-duration",
      label: "Duration",
      question: "How long has this pattern been noticeable?",
      options: [
        { label: "Less than 2 weeks", value: "under-2w" },
        { label: "2-6 weeks", value: "2-6w" },
        { label: "More than 6 weeks", value: "over-6w" },
        { label: "It varies too much to say", value: "variable" },
        { label: "Prefer not to answer", value: "__skip__" }
      ]
    },
    {
      id: "alert-impact",
      label: "Overall interference",
      question: "How much is this pattern interfering with daily life?",
      options: [
        { label: "Not noticeably", value: "none" },
        { label: "A little", value: "some" },
        { label: "Substantially", value: "substantial" },
        { label: "I am struggling with basic responsibilities", value: "unable" },
        { label: "Prefer not to answer", value: "__skip__" }
      ]
    }
  ],
  protectiveResponseScale: frequency14d,
  protectiveQuestions: [
    { id: "settling-routine", label: "Settling routine", question: "During the past 14 days, how often did you use a routine that helped your body settle?" },
    { id: "support-access", label: "Access to support", question: "During the past 14 days, how often could you contact someone for support when alertness increased?" }
  ],
  safetyRules: [
    {
      questionId: "alert-impact",
      values: ["unable"],
      title: "Daily functioning needs attention",
      message: "Struggling with basic responsibilities deserves support regardless of the checklist result. Consider contacting a qualified clinician or a trusted person who can help you access care. Seek urgent local help for severe breathing difficulty, chest pain, fainting, or if you may be unable to stay safe."
    }
  ],
  profiles: [
    { min: 0, max: 12, title: "Mostly Occasional High-Alert Responses", color: "var(--low)", description: "Your answers place most high-alert experiences in the occasional range. Recent context, duration, and functional impact still matter.", insights: ["Keep the routines that help you settle after pressure.", "Reassess after a meaningful change rather than repeating the check today."] },
    { min: 13, max: 30, title: "Mixed High-Alert Pattern", color: "var(--mid)", description: "Several alertness or worry experiences appeared repeatedly, with a pattern that may vary by dimension and setting.", insights: ["Start with the most frequent dimension and one realistic adjustment.", "Reduce stacked stimulation during one predictable part of the day."] },
    { min: 31, max: 48, title: "Frequent High-Alert Responses", color: "var(--high)", description: "Many high-alert experiences appeared on numerous days. Duration and interference are especially important when deciding what support may help.", insights: ["Consider qualified assessment when this pattern persists or limits daily life.", "Protect basic rest and reduce avoidable stimulation while arranging support."] }
  ],
  indicators: [
    { key: "alertness", label: "Physical Alertness" },
    { key: "worry", label: "Worry Persistence" },
    { key: "sensitivity", label: "Trigger Sensitivity" },
    { key: "impact", label: "Recovery And Impact" }
  ],
  dimensionRelated: { alertness: 0, worry: 0, sensitivity: 1, impact: 1 },
  dimensionGuidance: {
    alertness: "Use a brief settling routine after a trigger and discuss persistent or unexplained physical symptoms with a qualified clinician.",
    worry: "Write down one concern and one available action, then set a specific time to revisit concerns that cannot be acted on now.",
    sensitivity: "Reduce stacked input for one daily block by silencing nonessential alerts or choosing a lower-stimulation setting.",
    impact: "Prioritize basic routines and seek qualified support when alertness repeatedly interferes with sleep, work, relationships, or self-care."
  },
  references: [
    { title: "Anxiety Disorders", publisher: "National Institute of Mental Health", href: "https://www.nimh.nih.gov/health/topics/anxiety-disorders" },
    { title: "Generalized Anxiety Disorder", publisher: "MedlinePlus", href: "https://medlineplus.gov/anxiety.html" }
  ],
  related: [
    { href: "https://toolsquark.com/tools/stress-index-test.html", title: "Stress Pattern Self-Check", description: "Compare high-alert responses with recent overload and control strain.", action: "Review Stress" },
    { href: "https://toolsquark.com/tools/cognitive-overthinking-test.html", title: "Overthinking Pattern Self-Check", description: "Review whether worry is becoming repetitive mental rehearsal.", action: "Review Thought Loops" },
    { href: "https://toolsquark.com/tools/sleep-quality-assessment.html", title: "Sleep Quality Self-Check", description: "Review whether alertness is occurring alongside sleep disruption.", action: "Review Sleep" }
  ],
  faq: [
    { question: "Is this a validated anxiety screener?", answer: "No. It is an original ToolsQuark educational self-check and is not GAD-7, a trauma assessment, or another validated instrument." },
    { question: "Does a frequent result mean I have an anxiety disorder?", answer: "No. Sleep loss, pain, medication effects, acute stress, trauma reminders, medical conditions, and other factors can overlap with these experiences." },
    { question: "What is the difference between anxiety and stress?", answer: "Stress often follows identifiable pressure or overload. Anxiety or high-alert patterns may include persistent worry, sensitivity to uncertainty, and body activation that continues even when a specific demand is not present." },
    { question: "Why do I feel physically tense when nothing is happening?", answer: "Physical alertness can be influenced by stress, sleep loss, stimulants, pain, medical issues, trauma reminders, or worry loops. This self-check can show a pattern, but it cannot identify a medical cause." },
    { question: "Can poor sleep make high-alert feelings worse?", answer: "Yes. Sleep disruption can increase tension, sensitivity, worry, and difficulty settling. If rest is affected, compare this result with the Sleep Pattern Self-Check." },
    { question: "Is overthinking part of anxiety?", answer: "It can overlap. Persistent worry may show up as repeated mental rehearsal, decision loops, or threat projection, but overthinking can also appear without a broader high-alert pattern." },
    { question: "When should I seek professional support?", answer: "Consider qualified support when the pattern persists, intensifies, or interferes with daily life. Use urgent local help for immediate safety concerns or severe physical symptoms." }
  ],
  contentSections: [
    { title: "What Version 2.0 Measures", body: `<p>The 12 scored items cover physical alertness, worry persistence, trigger sensitivity, and recovery or daily-life impact. Each dimension uses three questions with the same 14-day frequency scale.</p><p>Context and protective-factor answers are displayed separately and do not change the core score.</p>` },
    { title: "How Scoring Works", body: `<p>Scored answers use values from 0 to 4 and produce an editorial total from 0 to 48. Dimension labels describe selected frequency, not medical severity or population standing.</p><div class="note-box">Version 2.0 is original and non-validated. It cannot diagnose an anxiety disorder, trauma-related condition, or medical cause.</div>` },
    { title: "How To Read High-Alert Patterns", body: `<p>If physical alertness is highest, begin with body cues, sleep, stimulants, and settling routines. If worry persistence is highest, review whether concerns are actionable or becoming repeated mental rehearsal. If trigger sensitivity is highest, reduce one predictable source of stacked input.</p>` },
    { title: "Important Overlap And Limits", body: `<p>High-alert experiences can overlap with sleep loss, pain, stimulants, medication effects, acute stress, trauma reminders, and medical conditions. New, severe, or unexplained physical symptoms require appropriate medical assessment rather than interpretation through this page.</p>` },
    { title: "Urgent Support", body: `<p>Seek urgent local help for severe breathing difficulty, chest pain, fainting, feeling unable to stay safe, or thoughts of harming yourself or someone else.</p>` }
  ],
  revisionHistory: [
    { version: "2.0", date: "2026-06-21", summary: "Replaced mixed five-item scoring with 12 uniform core items, separate context, protective factors, and functioning guidance." },
    { version: "1.0", date: "2026-06-21", summary: "Initial original five-item editorial checklist." }
  ],
  methodology: "Version 2.0 is an original 12-item editorial self-check. Four dimensions use three items each and one explicit 0-to-4 frequency scale. Context and protective factors are separate from the scored core. The model is not clinically or psychometrically validated.",
  disclaimer: "This educational tool cannot diagnose or treat anxiety or another condition. Seek appropriate support for persistent, intense, impairing, or urgent symptoms."
};
