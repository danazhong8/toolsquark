const { createEmotionalConnectionConfig, references } = require("./emotional-connection-factory");

module.exports = createEmotionalConnectionConfig({
  key: "emotional-communication",
  slug: "emotional-communication-self-check",
  title: "Emotional Communication Pattern Self-Check | ToolsQuark",
  description: "Review feeling identification, specific expression, ownership, and conversation timing with a private 12-item original self-check.",
  h1: "Emotional Communication Pattern Self-Check",
  hero: "Review how often identifying feelings, expressing them specifically, owning interpretations, or choosing workable timing became difficult during the past 30 days.",
  shareDescription: "A private 30-day self-check for feeling identification, specific expression, ownership, and workable timing.",
  socialFile: "emotional-communication-pattern-self-check.png",
  socialAccent: "#4338ca",
  dimensions: [
    { key: "identifying", label: "Feeling Identification", definition: "Recognizing the emotional experience before communicating it." },
    { key: "specificity", label: "Specific Expression", definition: "Using concrete observations, feelings, and requests instead of broad accusations." },
    { key: "ownership", label: "Interpretation Ownership", definition: "Distinguishing personal interpretations from observable facts and another person's motives." },
    { key: "timing", label: "Conversation Timing", definition: "Choosing enough capacity, privacy, and time for a meaningful exchange." }
  ],
  items: [
    ["identifying-1", "identifying", "During the past 30 days, how often did you begin an important conversation before knowing what you were feeling?"],
    ["identifying-2", "identifying", "During the past 30 days, how often did anger hide a more specific feeling you noticed only later?"],
    ["identifying-3", "identifying", "During the past 30 days, how often was it difficult to separate emotional reaction from the issue you wanted to discuss?"],
    ["specificity-1", "specificity", "During the past 30 days, how often did an absolute statement replace a concrete example?"],
    ["specificity-2", "specificity", "During the past 30 days, how often did you describe what was wrong without making a clear request?"],
    ["specificity-3", "specificity", "During the past 30 days, how often did your main point get lost among several older issues?"],
    ["ownership-1", "ownership", "During the past 30 days, how often did an interpretation of the other person's motives sound like a confirmed fact?"],
    ["ownership-2", "ownership", "During the past 30 days, how often did blame make it harder to explain your own experience?"],
    ["ownership-3", "ownership", "During the past 30 days, how often was it difficult to acknowledge uncertainty about what the other person meant?"],
    ["timing-1", "timing", "During the past 30 days, how often did an important conversation begin when one person had too little capacity?"],
    ["timing-2", "timing", "During the past 30 days, how often did you delay a conversation until tension had built substantially?"],
    ["timing-3", "timing", "During the past 30 days, how often did a conversation continue after either person was too activated to communicate clearly?" ]
  ],
  protectiveQuestions: [
    { id: "communication-request", label: "Clear request", question: "During the past 30 days, how often did you end an emotional statement with a specific request or question?" },
    { id: "communication-pause", label: "Useful pause", question: "During the past 30 days, how often did you pause and return at an agreed time when communication became unproductive?" }
  ],
  profileTitles: ["Mostly Clear Emotional Communication", "Communication Clarity Varies", "Frequent Emotional Communication Friction"],
  profileDescriptions: ["Barriers to clear emotional communication appeared mostly occasionally.", "Communication was clear in some areas and repeatedly difficult in others.", "Identification, specificity, ownership, or timing was difficult across many recent conversations."],
  profileInsights: [
    ["Keep using concrete examples and specific requests.", "Protect the timing and pauses that make communication workable."],
    ["Practice only the highest dimension in the next low-pressure conversation.", "Keep one issue, feeling, and request in the same conversation."],
    ["Use a short written outline before discussing a repeated issue.", "Consider facilitated or professional support when conversations repeatedly escalate or shut down."]
  ],
  dimensionGuidance: {
    identifying: "Name one primary feeling and the event that brought it up.",
    specificity: "Use one recent observable example and one answerable request.",
    ownership: "Use I interpreted or I worried rather than stating another person's motive as fact.",
    timing: "Ask whether now works and agree on a return time if capacity is low."
  },
  references: [references.responsiveness, references.support],
  related: [
    { href: "https://toolsquark.com/tools/emotional-needs-clarity-self-check.html", title: "Emotional Needs Clarity Self-Check", description: "Clarify the need before choosing the message.", action: "Review Needs" },
    { href: "https://toolsquark.com/tools/conflict-repair-self-check.html", title: "Conflict Repair Pattern Self-Check", description: "Review what happens after communication breaks down.", action: "Review Repair" }
  ],
  faqQuestion: "Does clear communication guarantee agreement?",
  faqAnswer: "No. Clear communication can improve understanding while people still have different needs, limits, or decisions.",
  validationLimit: "It cannot determine who is right in a disagreement or whether agreement is possible.",
  limitsBody: "<p>Communication depends on both expression and reception. Clear wording cannot overcome coercion, lack of safety, incompatible boundaries, or another person's unwillingness to engage.</p>",
  actionBody: "<p>Use one simple structure: observable event, feeling, meaning or need, and specific request. Pause when capacity is low and name when the conversation will resume.</p>"
});
