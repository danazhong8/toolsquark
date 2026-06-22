const { createV2Config } = require("./v2-assessment-factory");

const references = {
  attachment: { title: "The Relationship Between Adult Attachment and Mental Health: A Meta-Analysis", publisher: "Journal of Personality and Social Psychology", href: "https://pubmed.ncbi.nlm.nih.gov/36201836/" },
  responsiveness: { title: "Perceived Partner Responsiveness and Relationship Well-Being", publisher: "Journal of Sex Research", href: "https://pubmed.ncbi.nlm.nih.gov/31090449/" },
  support: { title: "Relationship Satisfaction: Perceived Support and Attachment", publisher: "Family Relations", href: "https://pubmed.ncbi.nlm.nih.gov/36246206/" },
  connection: { title: "Social Connection", publisher: "World Health Organization", href: "https://www.who.int/news-room/fact-sheets/detail/social-connection" }
};

function createEmotionalConnectionConfig(spec) {
  const related = spec.related;
  const dimensionRelated = Object.fromEntries(spec.dimensions.map((dimension, index) => [dimension.key, index % related.length]));
  return createV2Config({
    ...spec,
    recallDays: 30,
    lastUpdated: "June 22, 2026",
    versionTwoDate: "2026-06-22",
    versionTwoSummary: "Initial 12-item original self-check with four balanced dimensions, separate relationship context, protective factors, functioning guidance, and privacy-limited sharing.",
    revisionHistory: [
      { version: "2.0", date: "2026-06-22", summary: "Initial 12-item original self-check with four balanced dimensions, separate relationship context, protective factors, functioning guidance, and privacy-limited sharing." }
    ],
    categoryHref: "emotional-connection.html",
    categoryLabel: "Emotional Connection",
    intendedAudience: "Adults seeking general self-reflection about patterns in one important current relationship",
    contextLabel: "Relationship context",
    contextQuestion: "Which relationship were you thinking about most often while answering?",
    contextOptions: [
      { label: "Romantic partner", value: "partner" },
      { label: "Close friend", value: "friend" },
      { label: "Family member", value: "family" },
      { label: "Another important relationship", value: "other" }
    ],
    impactTitle: "Relationship impact deserves context",
    impactMessage: "Frequent distress, fear, isolation, or practical disruption deserves attention regardless of the checklist total. Consider a trusted person or qualified professional when the pattern persists. Use urgent local support if you feel unsafe or unable to stay safe.",
    profiles: [
      { min: 0, max: 12, title: spec.profileTitles[0], color: "var(--low)", description: spec.profileDescriptions[0], insights: spec.profileInsights[0] },
      { min: 13, max: 30, title: spec.profileTitles[1], color: "var(--mid)", description: spec.profileDescriptions[1], insights: spec.profileInsights[1] },
      { min: 31, max: 48, title: spec.profileTitles[2], color: "var(--high)", description: spec.profileDescriptions[2], insights: spec.profileInsights[2] }
    ],
    dimensionRelated,
    references: spec.references || [references.connection, references.attachment],
    relatedTitle: "Related Relationship Self-Checks",
    faq: [
      { question: spec.faqQuestion, answer: spec.faqAnswer },
      { question: "Does this score describe the other person?", answer: "No. It summarizes your selected experiences in one relationship and cannot determine another person's motives, traits, or intentions." },
      { question: "Is this a validated relationship scale?", answer: "No. It is an original ToolsQuark educational self-check, not a clinical or psychometric instrument." }
    ],
    validationLimit: `${spec.validationLimit} It cannot determine another person's motives or the overall quality of a relationship.`,
    limitsBody: `${spec.limitsBody}<p>Answering about one specific relationship improves consistency, but context, culture, safety, communication access, stress, and recent events can all affect responses. The result is not a verdict about either person.</p>`,
    disclaimer: spec.disclaimer || "This educational tool cannot diagnose a condition, label another person, or determine whether a relationship should continue."
  });
}

module.exports = { createEmotionalConnectionConfig, references };
