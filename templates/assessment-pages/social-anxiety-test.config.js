const { createV2Config } = require("./v2-assessment-factory");

module.exports = createV2Config({
  key: "socialfear",
  slug: "social-anxiety-test",
  title: "Social Anxiety Pattern Self-Check: Evaluation Fear And Avoidance",
  description: "Review fear of judgment, social avoidance, self-monitoring, and post-event replay with a private 14-day social anxiety pattern self-check.",
  h1: "Social Anxiety Pattern Self-Check",
  hero: "Use this private social anxiety pattern self-check to review fear of judgment, avoidance, self-monitoring, and replaying interactions across the past two weeks.",
  shareDescription: "A private 14-day self-check for anticipated evaluation, avoidance, self-monitoring, and post-event review.",
  socialFile: "social-anxiety-pattern-self-check.png",
  socialAccent: "#7c3aed",
  recallDays: 14,
  intendedAudience: "Adults seeking general self-reflection about recent social fear patterns",
  contextLabel: "Most difficult setting",
  contextQuestion: "Where has social fear been most noticeable?",
  contextOptions: [
    { label: "Groups or meetings", value: "groups" },
    { label: "One-to-one conversations", value: "one-to-one" },
    { label: "Performance or speaking situations", value: "performance" },
    { label: "Unfamiliar people or places", value: "unfamiliar" }
  ],
  dimensions: [
    { key: "evaluation", label: "Anticipated Evaluation", definition: "Expecting negative judgment before or during social situations." },
    { key: "avoidance", label: "Social Avoidance", definition: "Avoiding or leaving situations because of social fear." },
    { key: "monitoring", label: "Self-Monitoring", definition: "Attention being directed toward one's own performance during interaction." },
    { key: "review", label: "Post-Event Review", definition: "Replaying interactions afterward while searching for mistakes." }
  ],
  items: [
    ["evaluation-1", "evaluation", "During the past 14 days, how often did you expect another person to judge you negatively?"],
    ["evaluation-2", "evaluation", "During the past 14 days, how often did fear of appearing awkward increase before an interaction?"],
    ["evaluation-3", "evaluation", "During the past 14 days, how often did you anticipate embarrassment in an ordinary social situation?"],
    ["avoidance-1", "avoidance", "During the past 14 days, how often did social fear lead you to decline an interaction?"],
    ["avoidance-2", "avoidance", "During the past 14 days, how often did you leave a social situation earlier than intended because of discomfort?"],
    ["avoidance-3", "avoidance", "During the past 14 days, how often did you avoid speaking when you had something relevant to contribute?"],
    ["monitoring-1", "monitoring", "During the past 14 days, how often did you monitor how your voice sounded during an interaction?"],
    ["monitoring-2", "monitoring", "During the past 14 days, how often did attention shift toward how you appeared while speaking?"],
    ["monitoring-3", "monitoring", "During the past 14 days, how often did self-monitoring make it harder to follow the conversation?"],
    ["review-1", "review", "During the past 14 days, how often did you replay a social interaction afterward?"],
    ["review-2", "review", "During the past 14 days, how often did you search your memory for a possible social mistake?"],
    ["review-3", "review", "During the past 14 days, how often did concern about a past interaction continue into the next day?"]
  ],
  protectiveQuestions: [
    { id: "stayed-present", label: "Stayed present", question: "During the past 14 days, how often could you remain in an interaction despite some discomfort?" },
    { id: "supportive-contact", label: "Supportive contact", question: "During the past 14 days, how often did you interact with someone who felt relatively safe to be around?" }
  ],
  impactMessage: "When social fear seriously restricts work, study, relationships, health care, or ordinary responsibilities, consider qualified support. Use urgent local help if distress occurs alongside thoughts of self-harm or feeling unable to stay safe.",
  profiles: [
    { min: 0, max: 12, title: "Mostly Occasional Social Fear", color: "var(--low)", description: "Your answers place most social-fear experiences in the occasional range.", insights: ["Keep participating in interactions that feel manageable and meaningful.", "Protect relationships where self-monitoring is lower."] },
    { min: 13, max: 30, title: "Context-Dependent Social Fear", color: "var(--mid)", description: "Several social-fear experiences appeared repeatedly, with the pattern varying by dimension or setting.", insights: ["Choose one manageable interaction instead of avoiding the whole category.", "Direct attention toward the conversation rather than performance monitoring."] },
    { min: 31, max: 48, title: "Frequent Social Fear Across Areas", color: "var(--high)", description: "Many social-fear experiences appeared on numerous days. Avoidance and practical interference deserve attention.", insights: ["Consider qualified support when social fear persistently restricts life.", "Use gradual, supported practice rather than forcing the most difficult situation first."] }
  ],
  dimensionRelated: { evaluation: 0, avoidance: 1, monitoring: 0, review: 1 },
  dimensionGuidance: {
    evaluation: "Write the feared judgment as a prediction, then identify what evidence would actually confirm it.",
    avoidance: "Choose one smaller version of the avoided interaction that is challenging but manageable.",
    monitoring: "Redirect attention to one external detail in the conversation whenever performance monitoring appears.",
    review: "Limit post-event review to one useful observation and one next action before closing it."
  },
  references: [
    { title: "Social Anxiety Disorder: More Than Just Shyness", publisher: "National Institute of Mental Health", href: "https://www.nimh.nih.gov/health/publications/social-anxiety-disorder-more-than-just-shyness" },
    { title: "Social Anxiety", publisher: "National Health Service", href: "https://www.nhs.uk/mental-health/conditions/social-anxiety/" }
  ],
  related: [
    { href: "https://toolsquark.com/tools/anxiety-hyperarousal-assessment.html", title: "Anxiety And High-Alert Pattern", description: "Review whether social fear appears with broader worry, tension, or alertness.", action: "Review Alertness" },
    { href: "https://toolsquark.com/tools/loneliness-level-test.html", title: "Connection And Loneliness Pattern", description: "Review whether social fear is affecting connection or support.", action: "Review Connection" },
    { href: "https://toolsquark.com/tools/cognitive-overthinking-test.html", title: "Overthinking Pattern Self-Check", description: "Review whether post-event replay is part of a broader thought loop.", action: "Review Thought Loops" }
  ],
  faq: [
    { question: "Is social anxiety the same as shyness?", answer: "No. Shyness does not necessarily involve persistent fear, avoidance, distress, or meaningful impairment." },
    { question: "Is this a validated social anxiety screener?", answer: "No. It is an original ToolsQuark educational self-check." },
    { question: "What does fear of evaluation mean?", answer: "Fear of evaluation means expecting negative judgment before, during, or after an interaction. It can show up as worry about sounding awkward, appearing embarrassed, or being judged for ordinary behavior." },
    { question: "Why do I replay conversations after social situations?", answer: "Post-event review can be an attempt to find mistakes or prevent future embarrassment. It becomes less useful when the same interaction is replayed without new information or a clear next step." },
    { question: "Can social anxiety affect connection?", answer: "Yes. Avoidance, self-monitoring, or fear of judgment can reduce chances for support and belonging, even when the person wants connection." },
    { question: "How is this different from general anxiety?", answer: "This page focuses on social settings: evaluation fear, avoidance, self-monitoring, and post-event review. The Anxiety And High-Alert Self-Check covers broader worry, physical alertness, and trigger sensitivity." },
    { question: "When may support help?", answer: "Consider qualified support when social fear persists, causes significant distress, or restricts important parts of life." }
  ],
  validationLimit: "It cannot diagnose social anxiety disorder, autism, trauma-related conditions, or another cause of social discomfort.",
  limitsBody: `<p>Social discomfort can reflect temperament, unfamiliarity, exclusion, trauma, communication differences, culture, autism, mood, or other circumstances. This checklist cannot determine a cause or evaluate every social context.</p><p>The result is most useful when it points to a specific pattern: anticipated judgment, avoidance, self-monitoring, or post-event review.</p>`,
  actionBody: `<p>Use the most frequent dimension to choose one manageable experiment: test a prediction, reduce avoidance gradually, redirect attention outward, or close post-event review. If avoidance is highest, choose a smaller version of one avoided interaction. If review is highest, write one useful observation and then stop the replay.</p><p>Seek qualified support when fear remains persistent or limiting.</p>`,
  disclaimer: "This educational tool cannot diagnose social anxiety disorder or determine why social situations feel difficult."
});
