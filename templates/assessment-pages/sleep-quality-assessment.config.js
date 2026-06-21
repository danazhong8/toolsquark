const { createV2Config, withSkip } = require("./v2-assessment-factory");

module.exports = createV2Config({
  key: "sleep",
  slug: "sleep-quality-assessment",
  title: "Sleep Pattern Self-Check | Private 28-Day Review",
  description: "Review sleep initiation, continuity, restorative quality, and daytime impact with a private 12-item original self-check.",
  h1: "Sleep Pattern Self-Check",
  hero: "Review how often difficulty falling asleep, interrupted sleep, unrefreshing sleep, and daytime effects appeared during the past four weeks.",
  shareDescription: "A private 28-day self-check for sleep initiation, continuity, restorative quality, and daytime impact.",
  socialFile: "sleep-pattern-self-check.png",
  socialAccent: "#2563eb",
  recallDays: 28,
  legacyItems: 10,
  intendedAudience: "Adults seeking general self-reflection about recent sleep patterns",
  categoryHref: "health.html",
  categoryLabel: "Health Tools",
  dimensions: [
    { key: "initiation", label: "Sleep Initiation", definition: "Difficulty transitioning from intended bedtime to sleep." },
    { key: "continuity", label: "Sleep Continuity", definition: "Sleep being interrupted or ending earlier than intended." },
    { key: "restoration", label: "Restorative Quality", definition: "Sleep not producing the expected sense of restoration." },
    { key: "daytime", label: "Daytime Impact", definition: "Sleep patterns affecting alertness, concentration, or emotional regulation." }
  ],
  items: [
    ["initiation-1", "initiation", "During the past 28 days, how often did falling asleep take longer than you intended?"],
    ["initiation-2", "initiation", "During the past 28 days, how often did mental alertness delay sleep?"],
    ["initiation-3", "initiation", "During the past 28 days, how often did you remain awake after turning off the light to sleep?"],
    ["continuity-1", "continuity", "During the past 28 days how often was returning to sleep difficult after a nighttime awakening?"],
    ["continuity-2", "continuity", "During the past 28 days, how often did sleep end earlier than you intended?"],
    ["continuity-3", "continuity", "During the past 28 days, how often did repeated awakenings make sleep feel fragmented?"],
    ["restoration-1", "restoration", "During the past 28 days, how often did you wake without feeling restored?"],
    ["restoration-2", "restoration", "During the past 28 days, how often did sleep feel lighter than you needed?"],
    ["restoration-3", "restoration", "During the past 28 days, how often did your sleep schedule make rest feel insufficient?"],
    ["daytime-1", "daytime", "During the past 28 days, how often did sleepiness interfere with a routine daytime task?"],
    ["daytime-2", "daytime", "During the past 28 days, how often did poor sleep make concentration more difficult?"],
    ["daytime-3", "daytime", "During the past 28 days, how often did poor sleep reduce your patience during the day?"]
  ],
  contextQuestions: [
    {
      id: "sleep-duration",
      label: "Typical sleep duration",
      question: "About how much sleep do you usually get in a 24-hour period?",
      options: withSkip([
        { label: "Less than 5 hours", value: "under-5" },
        { label: "5 to under 7 hours", value: "5-7" },
        { label: "7 to 9 hours", value: "7-9" },
        { label: "More than 9 hours", value: "over-9" }
      ])
    },
    {
      id: "sleep-impact",
      label: "Overall interference",
      question: "How much is this sleep pattern interfering with daily life?",
      options: withSkip([
        { label: "Not noticeably", value: "none" },
        { label: "A little", value: "some" },
        { label: "Substantially", value: "substantial" },
        { label: "It is creating serious safety or functioning problems", value: "major" }
      ])
    },
    {
      id: "sleep-safety",
      label: "Symptoms needing assessment",
      question: "Which additional sleep-related concern applies most closely?",
      options: withSkip([
        { label: "None of these", value: "none" },
        { label: "Observed breathing pauses or gasping", value: "breathing" },
        { label: "Severe sleepiness during safety-sensitive tasks", value: "sleepiness" },
        { label: "Both concerns", value: "both" }
      ])
    }
  ],
  protectiveQuestions: [
    { id: "wake-time", label: "Consistent wake time", question: "During the past 28 days, how often did you wake at roughly the intended time?" },
    { id: "wind-down", label: "Wind-down routine", question: "During the past 28 days, how often did you use a repeatable routine before sleep?" }
  ],
  safetyRules: [
    { questionId: "sleep-impact", values: ["major"], title: "Sleep is creating serious consequences", message: "Serious safety or functioning problems deserve medical assessment regardless of the checklist result. Avoid driving or operating equipment when dangerously sleepy." },
    { questionId: "sleep-safety", values: ["breathing", "sleepiness", "both"], title: "These symptoms need appropriate assessment", message: "Observed breathing pauses, gasping, or severe sleepiness during safety-sensitive tasks can require prompt medical evaluation. This page cannot assess sleep apnea or immediate driving safety." }
  ],
  profiles: [
    { min: 0, max: 12, title: "Mostly Occasional Sleep Disruption", color: "var(--low)", description: "Your answers place most sleep difficulties in the occasional range.", insights: ["Keep the timing and routines that currently support sleep.", "Review changes over weeks rather than retesting after one night."] },
    { min: 13, max: 30, title: "Recurring Sleep Disruption", color: "var(--mid)", description: "Several sleep difficulties appeared repeatedly, with the pattern varying by dimension.", insights: ["Start with one timing or environment condition rather than chasing a perfect score.", "Review daytime impact alongside nighttime frequency."] },
    { min: 31, max: 48, title: "Frequent Sleep Disruption Across Areas", color: "var(--high)", description: "Many sleep difficulties appeared on numerous days. Duration, daytime consequences, and safety symptoms deserve attention.", insights: ["Consider qualified assessment when sleep problems persist.", "Treat breathing concerns or safety-sensitive sleepiness as more important than the total."] }
  ],
  dimensionRelated: { initiation: 0, continuity: 0, restoration: 1, daytime: 1 },
  dimensionGuidance: {
    initiation: "Keep a stable wind-down window and discuss persistent difficulty falling asleep with a qualified clinician.",
    continuity: "Track repeated awakenings over time and review environmental, medical, medication, or substance contributors with appropriate support.",
    restoration: "Compare time asleep, schedule regularity, breathing symptoms, and daytime function instead of relying on duration alone.",
    daytime: "Protect safety first and seek assessment when sleepiness or concentration problems interfere with routine tasks."
  },
  references: [
    { title: "About Sleep", publisher: "Centers for Disease Control and Prevention", href: "https://www.cdc.gov/sleep/about/index.html" },
    { title: "Sleep Deprivation and Deficiency", publisher: "National Heart, Lung, and Blood Institute", href: "https://www.nhlbi.nih.gov/health/sleep-deprivation" }
  ],
  related: [
    { href: "https://toolsquark.com/tools/stress-index-test.html", title: "Stress Pattern Self-Check", description: "Review whether overload or reactivity overlaps with sleep disruption.", action: "Review Stress" },
    { href: "https://toolsquark.com/tools/anxiety-hyperarousal-assessment.html", title: "Anxiety And High-Alert Pattern", description: "Review whether high-alert responses are affecting rest.", action: "Review Alertness" }
  ],
  faq: [
    { question: "Is this a validated sleep questionnaire?", answer: "No. It is an original ToolsQuark educational self-check and is not the Pittsburgh Sleep Quality Index." },
    { question: "Can this diagnose insomnia or sleep apnea?", answer: "No. Diagnosis requires appropriate clinical assessment, and breathing pauses or severe daytime sleepiness deserve medical attention." },
    { question: "Is sleep duration the same as sleep quality?", answer: "No. Timing, continuity, restoration, breathing, and daytime function also matter." }
  ],
  validationLimit: "It cannot diagnose insomnia, sleep apnea, circadian disorders, or another sleep condition.",
  limitsTitle: "Symptoms That Need More Than A Checklist",
  limitsBody: `<p>Breathing pauses, gasping, severe daytime sleepiness, near-miss accidents, persistent insomnia, or other concerning symptoms require appropriate medical assessment. Avoid driving or operating equipment when dangerously sleepy.</p>`,
  actionBody: `<p>Use the most frequent dimension to choose one practical change, then observe the pattern over time. Seek qualified assessment when difficulties persist, cause daytime impairment, or include breathing or safety concerns.</p>`,
  disclaimer: "This educational tool cannot diagnose a sleep disorder or determine whether it is safe to drive."
});
