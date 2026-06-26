const { createV2Config } = require("./v2-assessment-factory");

module.exports = createV2Config({
  key: "overthinking",
  slug: "cognitive-overthinking-test",
  title: "Overthinking Pattern Self-Check: Review Thought Loops And Action Delay",
  description: "Review repetitive thinking, decision loops, threat projection, and action displacement with a private 14-day overthinking pattern self-check.",
  h1: "Overthinking Pattern Self-Check",
  hero: "Use this private overthinking pattern self-check to review repetitive review, decision loops, imagined negative outcomes, and thinking that replaces action across the past two weeks.",
  shareDescription: "A private 14-day self-check for repetitive thinking, decision loops, threat projection, and action displacement.",
  socialFile: "overthinking-pattern-self-check.png",
  socialAccent: "#7c3aed",
  recallDays: 14,
  intendedAudience: "Adults seeking general self-reflection about recent repetitive thinking patterns",
  contextLabel: "Most affected area",
  contextQuestion: "Which area is most affected by repetitive thinking right now?",
  contextOptions: [
    { label: "Decisions", value: "decisions" },
    { label: "Work or study", value: "work" },
    { label: "Sleep or rest", value: "rest" },
    { label: "Relationships", value: "relationships" }
  ],
  dimensions: [
    { key: "rumination", label: "Repetitive Review", definition: "Repeatedly revisiting past events without gaining useful new information." },
    { key: "decision", label: "Decision Loops", definition: "Continuing to compare options after enough information is available for a next step." },
    { key: "threat", label: "Threat Projection", definition: "Repeatedly imagining negative future outcomes." },
    { key: "action", label: "Action Displacement", definition: "Thinking taking the place of a concrete next action." }
  ],
  items: [
    ["rumination-1", "rumination", "During the past 14 days, how often did you replay a past conversation without finding new information?"],
    ["rumination-2", "rumination", "During the past 14 days, how often did you revisit a past decision after no new evidence appeared?"],
    ["rumination-3", "rumination", "During the past 14 days, how often did an old mistake return to mind while you were trying to focus elsewhere?"],
    ["decision-1", "decision", "During the past 14 days, how often did comparing options delay a decision you were able to make?"],
    ["decision-2", "decision", "During the past 14 days, how often did you seek more certainty after you already had enough information for a next step?"],
    ["decision-3", "decision", "During the past 14 days, how often did you reopen a decision shortly after making it?"],
    ["threat-1", "threat", "During the past 14 days, how often did you imagine a negative outcome before beginning a task?"],
    ["threat-2", "threat", "During the past 14 days, how often did your attention move toward the worst plausible outcome?"],
    ["threat-3", "threat", "During the past 14 days, how often did uncertainty lead you to mentally rehearse possible problems?"],
    ["action-1", "action", "During the past 14 days, how often did thinking about a task replace taking its first concrete step?"],
    ["action-2", "action", "During the past 14 days, how often did planning continue after a workable next action was clear?"],
    ["action-3", "action", "During the past 14 days, how often did mental review use time you intended for action?" ]
  ],
  protectiveQuestions: [
    { id: "attention-shift", label: "Attention shifting", question: "During the past 14 days, how often could you redirect attention after noticing a thought loop?" },
    { id: "uncertain-action", label: "Action with uncertainty", question: "During the past 14 days, how often could you take one useful step without complete certainty?" }
  ],
  impactMessage: "When repetitive thinking seriously disrupts work, sleep, relationships, or self-care, consider qualified support. A fuller assessment can review anxiety, mood, trauma, attention, and current stress without assuming one cause from this checklist.",
  profiles: [
    { min: 0, max: 12, title: "Mostly Occasional Thought Loops", color: "var(--low)", description: "Your answers place most repetitive-thinking experiences in the occasional range.", insights: ["Keep using concrete next actions when uncertainty appears.", "Protect activities that make attention easier to redirect."] },
    { min: 13, max: 30, title: "Recurring Overthinking In Some Areas", color: "var(--mid)", description: "Several thought-loop experiences appeared repeatedly, with the main driver varying by dimension.", insights: ["Choose one loop to interrupt with a written next action.", "Set a short decision boundary before seeking more information."] },
    { min: 31, max: 48, title: "Frequent Thought Loops Across Areas", color: "var(--high)", description: "Many repetitive-thinking experiences appeared on numerous days. Duration and practical interference deserve attention.", insights: ["Consider qualified support when thought loops persist or limit daily life.", "Reduce one loop by shifting from mental review to one observable action."] }
  ],
  dimensionRelated: { rumination: 0, decision: 1, threat: 0, action: 1 },
  dimensionGuidance: {
    rumination: "Write down the one useful lesson available now, then redirect attention instead of reopening the same review.",
    decision: "Define what information is sufficient and set a time when the decision will close.",
    threat: "Separate the most likely outcome from the most feared outcome, then identify one preparation step.",
    action: "Convert the current thought into one visible action that can be completed in ten minutes."
  },
  references: [
    { title: "Anxiety Disorders", publisher: "National Institute of Mental Health", href: "https://www.nimh.nih.gov/health/topics/anxiety-disorders" },
    { title: "Anxiety", publisher: "MedlinePlus", href: "https://medlineplus.gov/anxiety.html" }
  ],
  related: [
    { href: "https://toolsquark.com/tools/anxiety-hyperarousal-assessment.html", title: "Anxiety And High-Alert Pattern", description: "Review whether thought loops occur alongside high-alert responses.", action: "Review Alertness" },
    { href: "https://toolsquark.com/tools/procrastination-test.html", title: "Procrastination Pattern Self-Check", description: "Review whether extended thinking is displacing action.", action: "Review Delay" },
    { href: "https://toolsquark.com/tools/focus-attention-diagnostic.html", title: "Focus And Attention Pattern", description: "Compare thought loops with sustained attention and task organization.", action: "Review Focus" }
  ],
  faq: [
    { question: "Is overthinking a diagnosis?", answer: "No. Repetitive thinking can occur in many situations and conditions, and this original checklist cannot determine a cause." },
    { question: "Is this a validated rumination scale?", answer: "No. It is an original ToolsQuark educational self-check with editorial result patterns." },
    { question: "What is the difference between overthinking and problem solving?", answer: "Problem solving usually produces new information, a decision, or a next action. Overthinking is more likely when the same review continues without progress, rest, or a clearer step." },
    { question: "Can overthinking be related to anxiety?", answer: "Yes. Worry persistence and threat projection can overlap with high-alert or anxiety patterns, but repetitive thinking can also appear with stress, perfectionism, low mood, attention strain, or unresolved decisions." },
    { question: "Why do I keep replaying conversations?", answer: "Conversation replay may be an attempt to find certainty, repair, or social safety. It becomes less useful when no new information appears and the review interrupts rest, work, or relationships." },
    { question: "How can I stop a decision loop?", answer: "Define what information is sufficient, set a decision boundary, and identify one reversible next step. The goal is not perfect certainty; it is a workable action with the information available." },
    { question: "When may support help?", answer: "Consider qualified support when repetitive thinking persists, disrupts sleep or daily responsibilities, or causes substantial distress." }
  ],
  validationLimit: "It cannot diagnose anxiety, depression, OCD, trauma-related conditions, or another cause of repetitive thinking.",
  limitsBody: `<p>Careful analysis is useful when it produces information or action. Repetitive thinking becomes more relevant when it continues without progress, rest, or a decision. Current stress, anxiety, depression, trauma, attention differences, and other factors can overlap.</p><p>This self-check cannot determine why thought loops happen. It is designed to separate rumination, decision loops, threat projection, and action displacement so the next step can be more specific.</p>`,
  actionBody: `<p>Use the most frequent dimension to choose one experiment: close a decision, write one lesson, compare feared and likely outcomes, or take one visible next action. If action displacement is high, pair this page with the Procrastination Pattern Self-Check. If threat projection is high, compare it with the Anxiety And High-Alert Pattern Self-Check.</p><p>Seek qualified support when the pattern remains persistent or impairing.</p>`,
  disclaimer: "This educational tool cannot diagnose a condition or determine why repetitive thinking occurs."
});
