const frequency30d = {
  id: "frequency-30d-v1",
  values: [0, 1, 2, 3, 4],
  options: ["Not at all", "On 1-3 days", "On 4-10 days", "On 11-20 days", "On 21-30 days"]
};

module.exports = {
  slug: "procrastination-test",
  title: "Procrastination Pattern Self-Check | Task Delay Review",
  description: "Review task initiation, emotional avoidance, short-term reward pull, and perfectionistic delay with a private 12-item self-check.",
  h1: "Procrastination Pattern Self-Check",
  hero: "Review how often task initiation, emotional avoidance, short-term reward pull, and perfectionistic delay affected action during the past 30 days.",
  schemaName: "ToolsQuark Procrastination Pattern Self-Check",
  socialImage: "https://toolsquark.com/assets/social/procrastination-pattern-self-check.png",
  shareDescription: "A private 30-day self-check for task initiation, emotional avoidance, short-term reward pull, and perfectionistic delay.",
  lastUpdated: "June 21, 2026",
  timeframe: "Past 30 days",
  categoryHref: "lifestyle.html",
  categoryLabel: "Lifestyle Tools",
  instrument: {
    type: "original-self-check",
    version: "2.0",
    reviewStatus: "editorial-review",
    intendedAudience: "Adults seeking general self-reflection about recurring task delay",
    recallPeriodDays: 30
  },
  dimensions: [
    { key: "initiation", label: "Task Initiation", definition: "How often starting was delayed after a next action was available." },
    { key: "avoidance", label: "Emotional Avoidance", definition: "How often discomfort redirected behavior away from an intended task." },
    { key: "shortTerm", label: "Short-Term Reward Pull", definition: "How often an immediate reward displaced a longer-term intention." },
    { key: "perfectionism", label: "Perfectionistic Delay", definition: "How often quality concerns delayed drafting, sharing, or finishing." }
  ],
  responseScale: frequency30d,
  questions: [
    { id: "initiation-1", dimension: "initiation", question: "During the past 30 days, how often did you delay the first concrete step after deciding to do a task?" },
    { id: "initiation-2", dimension: "initiation", question: "During the past 30 days, how often did preparation replace actually beginning the task?" },
    { id: "initiation-3", dimension: "initiation", question: "During the past 30 days, how often did you wait for urgency before starting an important task?" },
    { id: "avoidance-1", dimension: "avoidance", question: "During the past 30 days, how often did you switch to an easier task when the intended task felt uncomfortable?" },
    { id: "avoidance-2", dimension: "avoidance", question: "During the past 30 days, how often did you use a distraction to avoid an unpleasant feeling about a task?" },
    { id: "avoidance-3", dimension: "avoidance", question: "During the past 30 days, how often did uncertainty about a task lead you to postpone it?" },
    { id: "short-term-1", dimension: "shortTerm", question: "During the past 30 days, how often did an immediately rewarding activity replace a planned task?" },
    { id: "short-term-2", dimension: "shortTerm", question: "During the past 30 days, how often did an available distraction override your intended schedule?" },
    { id: "short-term-3", dimension: "shortTerm", question: "During the past 30 days, how often did you act as though there would be more time later?" },
    { id: "perfectionism-1", dimension: "perfectionism", question: "During the past 30 days, how often did concern about quality delay a rough first attempt?" },
    { id: "perfectionism-2", dimension: "perfectionism", question: "During the past 30 days, how often did you continue planning instead of producing an imperfect draft?" },
    { id: "perfectionism-3", dimension: "perfectionism", question: "During the past 30 days, how often did concern about evaluation delay finishing a task?" }
  ],
  contextQuestions: [
    {
      id: "delay-domain",
      label: "Most affected area",
      question: "Which area is most affected by delay right now?",
      options: [
        { label: "Work or study", value: "work" },
        { label: "Household or administrative tasks", value: "admin" },
        { label: "Health or personal routines", value: "personal" },
        { label: "Several areas", value: "multiple" },
        { label: "Prefer not to answer", value: "__skip__" }
      ]
    },
    {
      id: "delay-duration",
      label: "Duration",
      question: "How long has this delay pattern been noticeable?",
      options: [
        { label: "Less than 1 month", value: "under-1m" },
        { label: "1-6 months", value: "1-6m" },
        { label: "More than 6 months", value: "over-6m" },
        { label: "It varies by project", value: "variable" },
        { label: "Prefer not to answer", value: "__skip__" }
      ]
    },
    {
      id: "delay-impact",
      label: "Overall interference",
      question: "How much is task delay interfering with daily life?",
      options: [
        { label: "Not noticeably", value: "none" },
        { label: "A little", value: "some" },
        { label: "Substantially", value: "substantial" },
        { label: "It is causing serious practical problems", value: "major" },
        { label: "Prefer not to answer", value: "__skip__" }
      ]
    }
  ],
  protectiveResponseScale: frequency30d,
  protectiveQuestions: [
    { id: "small-start", label: "Small next step", question: "During the past 30 days, how often could you reduce a task to one manageable next step?" },
    { id: "distraction-friction", label: "Distraction control", question: "During the past 30 days, how often did your environment make major distractions harder to access?" }
  ],
  safetyRules: [
    {
      questionId: "delay-impact",
      values: ["major"],
      title: "Practical impact deserves support",
      message: "Serious academic, work, financial, or self-care consequences matter more than the checklist total. Consider qualified support to review workload, mood, attention, learning needs, and other possible contributors."
    }
  ],
  profiles: [
    { min: 0, max: 12, title: "Mostly Occasional Task Delay", color: "var(--low)", description: "Your answers place most delay experiences in the occasional range. Specific projects may still reveal useful friction points.", insights: ["Keep defining the next visible action before stopping work.", "Protect environmental conditions that make starting easier."] },
    { min: 13, max: 30, title: "Context-Dependent Delay Pattern", color: "var(--mid)", description: "Several delay experiences appeared repeatedly, but the main driver may differ across initiation, avoidance, immediate rewards, and quality concerns.", insights: ["Use the highest-frequency dimension to choose one experiment for the next week.", "Make the first work interval deliberately small rather than waiting for motivation."] },
    { min: 31, max: 48, title: "Frequent Delay Across Several Drivers", color: "var(--high)", description: "Many delay experiences appeared on numerous days. Duration and practical consequences are important when deciding what support may help.", insights: ["Reduce task size and immediate distraction access at the same time.", "Consider qualified support when delay causes serious or persistent impairment."] }
  ],
  indicators: [
    { key: "initiation", label: "Task Initiation" },
    { key: "avoidance", label: "Emotional Avoidance" },
    { key: "shortTerm", label: "Short-Term Reward Pull" },
    { key: "perfectionism", label: "Perfectionistic Delay" }
  ],
  dimensionRelated: { initiation: 1, avoidance: 1, shortTerm: 0, perfectionism: 0 },
  dimensionGuidance: {
    initiation: "Define the first visible action and work on it for ten minutes before deciding whether to continue.",
    avoidance: "Name the feeling that appears before delay, then make the next action small enough to do while that feeling is present.",
    shortTerm: "Move the easiest immediate reward out of reach until one short work interval is complete.",
    perfectionism: "Separate producing from evaluating by creating a deliberately rough first pass before quality review."
  },
  references: [
    { title: "What Research Has Been Conducted on Procrastination?", publisher: "Frontiers in Psychology / PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/35185729/" },
    { title: "The Nature of Procrastination: A Meta-Analytic and Theoretical Review", publisher: "Psychological Bulletin / PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/17201571/" }
  ],
  related: [
    { href: "https://toolsquark.com/tools/self-discipline-test.html", title: "Self-Discipline Self-Check", description: "Review consistency and long-term goal alignment.", action: "Review Follow-Through" },
    { href: "https://toolsquark.com/tools/focus-attention-diagnostic.html", title: "Focus And Attention Self-Check", description: "Review attention stability and task initiation friction.", action: "Review Focus" }
  ],
  faq: [
    { question: "Is procrastination the same as laziness?", answer: "No single checklist can establish a cause. Delay can reflect task discomfort, ambiguity, quality concerns, competing rewards, workload, mood, attention, learning needs, or other factors." },
    { question: "Is this a validated procrastination scale?", answer: "No. It is an original ToolsQuark educational self-check with editorial result patterns." },
    { question: "Why are context questions not scored?", answer: "Duration, life area, and practical consequences help interpret delay but are not the same as how often a specific behavior occurred." }
  ],
  contentSections: [
    { title: "What Version 2.0 Measures", body: `<p>The 12 scored items cover task initiation, emotional avoidance, short-term reward pull, and perfectionistic delay. Each dimension is supported by three questions using the same 30-day frequency scale.</p><p>Context and protective-factor questions are shown separately and do not change the core result.</p>` },
    { title: "How Scoring Works", body: `<p>Scored answers use values from 0 to 4 and produce an editorial total from 0 to 48. Dimension labels summarize selected frequency, not character, motivation, diagnosis, or population standing.</p><div class="note-box">Version 2.0 is original and non-validated. It cannot diagnose ADHD, depression, anxiety, or an executive-function disorder.</div>` },
    { title: "Different Delay Patterns Need Different Responses", body: `<p>Starting friction may respond to a smaller first action. Emotional avoidance may require working briefly while discomfort is present. Immediate reward pull may respond to environmental friction. Perfectionistic delay may respond to separating drafting from evaluation.</p>` },
    { title: "When To Seek Support", body: `<p>Qualified support may help when delay causes persistent academic, work, financial, relationship, or self-care consequences. A fuller assessment can consider workload, sleep, mood, attention, learning needs, and environmental barriers.</p>` }
  ],
  revisionHistory: [
    { version: "2.0", date: "2026-06-21", summary: "Replaced mixed five-item scoring with 12 uniform core items, separate context, protective factors, and practical-impact guidance." },
    { version: "1.0", date: "2026-06-21", summary: "Initial original five-item editorial checklist." }
  ],
  methodology: "Version 2.0 is an original 12-item editorial self-check. Four dimensions use three items each and one explicit 0-to-4 frequency scale. Context and protective factors are separate from the scored core. The model is not clinically or psychometrically validated.",
  disclaimer: "This tool is educational and cannot diagnose a condition or determine why delay occurs. Seek qualified support when delay causes serious or persistent impairment."
};
