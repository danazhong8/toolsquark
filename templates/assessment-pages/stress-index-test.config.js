const frequency14d = {
  id: "frequency-14d-v1",
  values: [0, 1, 2, 3, 4],
  options: ["Not at all", "On 1-2 days", "On 3-6 days", "On 7-11 days", "On 12-14 days"]
};

module.exports = {
  slug: "stress-index-test",
  title: "Stress Pattern Self-Check | Private 14-Day Review",
  description: "Review perceived overload, control strain, stress reactivity, and daily-life impact with a private 12-item original self-check.",
  h1: "Stress Pattern Self-Check",
  hero: "Review how often overload, reduced control, stress reactivity, and day-to-day interference appeared during the past two weeks.",
  schemaName: "ToolsQuark Stress Pattern Self-Check",
  schemaDescription: "A private browser-side 12-item original stress pattern self-check for educational reflection.",
  lastUpdated: "June 21, 2026",
  timeframe: "Past 14 days",
  instrument: {
    type: "original-self-check",
    version: "2.0",
    reviewStatus: "editorial-review",
    intendedAudience: "Adults seeking general self-reflection about recent stress patterns",
    recallPeriodDays: 14
  },
  dimensions: [
    { key: "overload", label: "Perceived Overload", definition: "How often available time or energy felt insufficient for current demands." },
    { key: "control", label: "Control Strain", definition: "How often uncertainty or limited influence made demands harder to manage." },
    { key: "reactivity", label: "Stress Reactivity", definition: "How often activation persisted or reactions felt stronger than intended." },
    { key: "impact", label: "Daily-Life Impact", definition: "How often stress interfered with ordinary tasks, routines, or interactions." }
  ],
  responseScale: frequency14d,
  questions: [
    { id: "overload-1", dimension: "overload", question: "During the past 14 days, how often did important responsibilities exceed the time available for them?" },
    { id: "overload-2", dimension: "overload", question: "During the past 14 days, how often did unfinished responsibilities remain difficult to put out of mind?" },
    { id: "overload-3", dimension: "overload", question: "During the past 14 days, how often did current demands exceed the energy you had available?" },
    { id: "control-1", dimension: "control", question: "During the past 14 days, how often did unexpected changes leave you unsure what to do next?" },
    { id: "control-2", dimension: "control", question: "During the past 14 days, how often did you feel unable to influence an important demand?" },
    { id: "control-3", dimension: "control", question: "During the past 14 days, how often did uncertainty make it difficult to choose a next step?" },
    { id: "reactivity-1", dimension: "reactivity", question: "During the past 14 days, how often did your body remain tense after a stressful moment had passed?" },
    { id: "reactivity-2", dimension: "reactivity", question: "During the past 14 days, how often did a minor interruption trigger a stronger reaction than you intended?" },
    { id: "reactivity-3", dimension: "reactivity", question: "During the past 14 days, how often did it take longer than usual to feel settled after pressure eased?" },
    { id: "impact-1", dimension: "impact", question: "During the past 14 days, how often did stress make ordinary responsibilities harder to complete?" },
    { id: "impact-2", dimension: "impact", question: "During the past 14 days, how often did stress disrupt your usual sleep schedule?" },
    { id: "impact-3", dimension: "impact", question: "During the past 14 days, how often did stress reduce your patience during conversations?" }
  ],
  contextQuestions: [
    {
      id: "stress-source",
      label: "Main source",
      question: "Which area contributed most to your recent stress?",
      options: [
        { label: "Work or study", value: "work" },
        { label: "Relationships or caregiving", value: "relationships" },
        { label: "Health or practical concerns", value: "health-practical" },
        { label: "Several areas at once", value: "multiple" },
        { label: "Prefer not to answer", value: "__skip__" }
      ]
    },
    {
      id: "stress-duration",
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
      id: "stress-impact",
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
    { id: "support-access", label: "Access to support", question: "During the past 14 days, how often could you contact someone for support when pressure increased?" },
    { id: "recovery-action", label: "Recovery time", question: "During the past 14 days, how often did you make time for an activity that helped you recover?" }
  ],
  safetyRules: [
    {
      questionId: "stress-impact",
      values: ["unable"],
      title: "Daily functioning needs attention",
      message: "Difficulty managing basic responsibilities is more important than the checklist total. Consider contacting a qualified health professional or a trusted person who can help you access support. Use urgent local help if you may be unable to stay safe."
    }
  ],
  profiles: [
    { min: 0, max: 12, title: "Mostly Occasional Stress Responses", color: "var(--low)", description: "Your answers place most of these stress experiences in the occasional range. Context and recent changes still matter more than a single result.", insights: ["Protect the routines and support that are currently helping.", "Recheck after a meaningful change rather than repeating the test today."] },
    { min: 13, max: 30, title: "Mixed Stress With Recurring Pressure", color: "var(--mid)", description: "Several stress experiences appeared repeatedly, but the pattern may differ across overload, control, reactivity, and daily impact.", insights: ["Start with the highest-frequency dimension rather than trying to change everything.", "Reduce or clarify one demand before adding another recovery task."] },
    { min: 31, max: 48, title: "Frequent Stress Across Several Areas", color: "var(--high)", description: "Many of these stress experiences appeared on numerous days. Review daily-life interference and duration alongside the dimension pattern.", insights: ["Consider qualified support when the pattern persists or limits ordinary life.", "Prioritize one immediate reduction in demand and one repeatable recovery action."] }
  ],
  indicators: [
    { key: "overload", label: "Perceived Overload" },
    { key: "control", label: "Control Strain" },
    { key: "reactivity", label: "Stress Reactivity" },
    { key: "impact", label: "Daily-Life Impact" }
  ],
  dimensionRelated: { overload: 1, control: 1, reactivity: 0, impact: 0 },
  dimensionGuidance: {
    overload: "List the demands using the most capacity, then remove, defer, delegate, or clarify one item.",
    control: "Separate what can be acted on today from what can only be monitored, then define one next decision.",
    reactivity: "At the first sign of escalation, pause briefly, release muscle tension, and slow the exhale before responding.",
    impact: "Protect basic routines first and seek qualified support when stress repeatedly interferes with sleep, work, relationships, or self-care."
  },
  references: [
    { title: "So Stressed Out?", publisher: "National Institute of Mental Health", href: "https://www.nimh.nih.gov/health/publications/so-stressed-out-fact-sheet" },
    { title: "Managing Stress", publisher: "Centers for Disease Control and Prevention", href: "https://www.cdc.gov/mental-health/living-with/index.html" }
  ],
  relatedTitle: "Related Self-Checks",
  related: [
    { href: "https://toolsquark.com/tools/sleep-quality-assessment.html", title: "Sleep Quality Self-Check", description: "Review whether sleep disruption is adding to recent strain.", action: "Review Sleep" },
    { href: "https://toolsquark.com/tools/occupational-burnout-level-test.html", title: "Occupational Burnout Self-Check", description: "Review work-related exhaustion and detachment patterns.", action: "Review Work Strain" }
  ],
  faq: [
    { question: "Is this a validated stress scale?", answer: "No. It is an original ToolsQuark educational self-check with editorial result patterns, not a validated clinical instrument." },
    { question: "Why are context questions not scored?", answer: "Duration, source, and interference help interpret a pattern but are not interchangeable with symptom frequency. Keeping them separate avoids hiding unlike information inside one total." },
    { question: "When should I seek support?", answer: "Consider qualified support when stress persists, intensifies, interferes with ordinary responsibilities, or makes you feel unable to stay safe." }
  ],
  contentSections: [
    { title: "What Version 2.0 Measures", body: `<p>The 12 scored items cover perceived overload, control strain, stress reactivity, and daily-life impact. Each dimension is supported by three items using the same 14-day frequency scale.</p><p>Three optional context questions and two protective-factor questions are reported separately. They do not silently increase or reduce the core score.</p>` },
    { title: "How Scoring Works", body: `<p>Scored answers use values from 0 to 4 and produce an editorial total from 0 to 48. Dimension labels summarize response frequency, not population standing or medical risk.</p><div class="note-box">The result patterns are editorial groupings. Version 2.0 has not undergone psychometric validation and cannot diagnose a stress-related condition.</div>` },
    { title: "How To Use The Result", body: `<p>Review the dimension with the most frequent experiences, the reported duration, and whether ordinary life is being affected. A practical next step should address either one demand or one recovery condition, not add a long list of new obligations.</p>` },
    { title: "Privacy And Support", body: `<p>Answers and scoring remain in the browser. If stress is making basic responsibilities difficult, seek qualified support regardless of the displayed pattern. Use urgent local help if you may be unable to stay safe.</p>` }
  ],
  revisionHistory: [
    { version: "2.0", date: "2026-06-21", summary: "Replaced mixed 10-item scoring with 12 uniform core items, separate context, protective factors, and functioning guidance." },
    { version: "1.0", date: "2026-06-20", summary: "Initial original 10-item editorial checklist." }
  ],
  methodology: "Version 2.0 is an original 12-item editorial self-check. Four dimensions use three items each and one explicit 0-to-4 frequency scale. Context and protective factors are separate from the scored core. The model is not clinically or psychometrically validated.",
  disclaimer: "This tool is for education and self-reflection only. It cannot diagnose a condition or assess immediate safety."
};
