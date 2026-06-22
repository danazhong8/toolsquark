const { createEmotionalConnectionConfig, references } = require("./emotional-connection-factory");

module.exports = createEmotionalConnectionConfig({
  key: "conflict-repair",
  slug: "conflict-repair-self-check",
  title: "Conflict Repair Pattern Self-Check | ToolsQuark",
  description: "Review de-escalation, accountability, reconnection, and learning after conflict with a private 12-item original self-check.",
  h1: "Conflict Repair Pattern Self-Check",
  hero: "Review how often de-escalation, accountability, reconnection, or learning after conflict became difficult in one important relationship during the past 30 days.",
  shareDescription: "A private 30-day self-check for de-escalation, accountability, reconnection, and learning after conflict.",
  socialFile: "conflict-repair-pattern-self-check.png",
  socialAccent: "#c2410c",
  dimensions: [
    { key: "deescalation", label: "De-Escalation", definition: "Reducing intensity without abandoning the issue or using silence as punishment." },
    { key: "accountability", label: "Accountability", definition: "Acknowledging specific impact and personal contribution without demanding immediate absolution." },
    { key: "reconnection", label: "Reconnection", definition: "Restoring workable contact and emotional safety after a rupture." },
    { key: "learning", label: "Repair Learning", definition: "Turning repeated conflict into a concrete change, boundary, or prevention plan." }
  ],
  items: [
    ["deescalation-1", "deescalation", "During the past 30 days, how often did conflict continue after either person was no longer communicating clearly?"],
    ["deescalation-2", "deescalation", "During the past 30 days, how often did taking space happen without a clear plan to return?"],
    ["deescalation-3", "deescalation", "During the past 30 days, how often did attempts to calm the situation feel like avoiding the issue entirely?"],
    ["accountability-1", "accountability", "During the past 30 days, how often did explanations replace acknowledgment of impact?"],
    ["accountability-2", "accountability", "During the past 30 days, how often did an apology remain broad without naming the specific behavior?"],
    ["accountability-3", "accountability", "During the past 30 days, how often did responsibility shift back to the other person's reaction?"],
    ["reconnection-1", "reconnection", "During the past 30 days, how often did normal contact resume while emotional tension remained unaddressed?"],
    ["reconnection-2", "reconnection", "During the past 30 days, how often was it unclear whether the conflict was actually resolved?"],
    ["reconnection-3", "reconnection", "During the past 30 days, how often did fear of restarting conflict prevent a repair conversation?"],
    ["learning-1", "learning", "During the past 30 days, how often did the same conflict return without a change in plan?"],
    ["learning-2", "learning", "During the past 30 days, how often did an agreed change remain too vague to follow?"],
    ["learning-3", "learning", "During the past 30 days, how often did a repair focus on ending discomfort rather than preventing the same rupture?" ]
  ],
  protectiveQuestions: [
    { id: "repair-return", label: "Return after pause", question: "During the past 30 days, how often did a pause include a clear time to return to the issue?" },
    { id: "repair-change", label: "Specific change", question: "During the past 30 days, how often did a repair end with one specific change or boundary?" }
  ],
  profileTitles: ["Mostly Workable Repair Pattern", "Repair Is Inconsistent", "Frequent Barriers To Repair"],
  profileDescriptions: ["Barriers to de-escalation, accountability, reconnection, and learning appeared mostly occasionally.", "Repair worked in some situations but repeated barriers remained in one or more areas.", "Conflict often remained escalated, unresolved, or unchanged across recent interactions."],
  profileInsights: [
    ["Keep using clear pauses, specific accountability, and observable follow-through.", "Notice which repair actions restore trust rather than only ending tension."],
    ["Focus on the highest repair stage instead of reopening the entire conflict.", "Choose one specific action, owner, and time for follow-through."],
    ["Use structured or facilitated conversations when the same rupture repeats.", "Prioritize safety and specialized support when conflict includes threats, coercion, retaliation, or fear of harm."]
  ],
  dimensionGuidance: {
    deescalation: "Pause with a clear reason and a specific time to return.",
    accountability: "Name the behavior, its likely impact, and the part you can change.",
    reconnection: "Ask what remains unresolved before assuming normal contact means repair.",
    learning: "End with one observable change, boundary, or prevention plan."
  },
  references: [references.responsiveness, references.attachment],
  related: [
    { href: "https://toolsquark.com/tools/emotional-communication-self-check.html", title: "Emotional Communication Self-Check", description: "Review clarity before and during difficult conversations.", action: "Review Communication" },
    { href: "https://toolsquark.com/tools/closeness-distance-pattern-self-check.html", title: "Closeness And Distance Pattern Self-Check", description: "Review withdrawal, pursuit, and reconnection patterns.", action: "Review Closeness" }
  ],
  faqQuestion: "Does repair mean returning to how things were?",
  faqAnswer: "Not necessarily. Repair may involve acknowledgment, changed behavior, a new boundary, reduced contact, or another informed decision.",
  validationLimit: "It cannot determine responsibility, relationship safety, or whether reconciliation is appropriate.",
  limitsBody: "<p>Repair requires enough safety and willingness to engage. A checklist should never be used to pressure reconciliation after coercion, violence, stalking, or repeated boundary violations.</p>",
  actionBody: "<p>Use the highest dimension to choose one repair step: a bounded pause, specific accountability, a reconnection question, or one observable prevention plan. Safety takes priority over reconciliation.</p>"
});
