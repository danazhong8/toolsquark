const scales = {
  14: {
    id: "frequency-14d-v1",
    values: [0, 1, 2, 3, 4],
    options: ["Not at all", "On 1-2 days", "On 3-6 days", "On 7-11 days", "On 12-14 days"]
  },
  28: {
    id: "frequency-28d-v1",
    values: [0, 1, 2, 3, 4],
    options: ["Not at all", "On 1-3 days", "On 4-10 days", "On 11-20 days", "On 21-28 days"]
  },
  30: {
    id: "frequency-30d-v1",
    values: [0, 1, 2, 3, 4],
    options: ["Not at all", "On 1-3 days", "On 4-10 days", "On 11-20 days", "On 21-30 days"]
  }
};

function withSkip(options) {
  return [...options, { label: "Prefer not to answer", value: "__skip__" }];
}

function defaultContext(spec) {
  return [
    {
      id: `${spec.key}-setting`,
      label: spec.contextLabel,
      question: spec.contextQuestion,
      options: withSkip(spec.contextOptions)
    },
    {
      id: `${spec.key}-duration`,
      label: "Duration",
      question: "How long has this pattern been noticeable?",
      options: withSkip([
        { label: "Less than 1 month", value: "under-1m" },
        { label: "1-6 months", value: "1-6m" },
        { label: "More than 6 months", value: "over-6m" },
        { label: "It varies too much to say", value: "variable" }
      ])
    },
    {
      id: `${spec.key}-impact`,
      label: "Overall interference",
      question: "How much is this pattern interfering with daily life?",
      options: withSkip([
        { label: "Not noticeably", value: "none" },
        { label: "A little", value: "some" },
        { label: "Substantially", value: "substantial" },
        { label: "It is causing serious practical problems", value: "major" }
      ])
    }
  ];
}

function createV2Config(spec) {
  const responseScale = scales[spec.recallDays];
  if (!responseScale) throw new Error(`Unsupported recall period: ${spec.recallDays}`);
  if (spec.dimensions.length !== 4) throw new Error(`${spec.slug} must define four dimensions.`);
  if (spec.items.length !== 12) throw new Error(`${spec.slug} must define 12 scored items.`);

  const contextQuestions = spec.contextQuestions || defaultContext(spec);
  const impactQuestion = contextQuestions.find((question) => question.id === `${spec.key}-impact`);
  const dimensionList = spec.dimensions.map((dimension) => dimension.label).join(", ");

  return {
    slug: spec.slug,
    title: spec.title,
    description: spec.description,
    h1: spec.h1,
    hero: spec.hero,
    schemaName: spec.schemaName || `ToolsQuark ${spec.h1}`,
    schemaDescription: spec.schemaDescription || spec.description,
    socialImage: `https://toolsquark.com/assets/social/${spec.socialFile}`,
    socialAccent: spec.socialAccent,
    shareDescription: spec.shareDescription,
    lastUpdated: "June 21, 2026",
    timeframe: `Past ${spec.recallDays} days`,
    categoryHref: spec.categoryHref,
    categoryLabel: spec.categoryLabel,
    instrument: {
      type: "original-self-check",
      version: "2.0",
      reviewStatus: "editorial-review",
      intendedAudience: spec.intendedAudience,
      recallPeriodDays: spec.recallDays
    },
    dimensions: spec.dimensions,
    responseScale,
    questions: spec.items.map(([id, dimension, question]) => ({ id, dimension, question })),
    contextQuestions,
    protectiveResponseScale: responseScale,
    protectiveQuestions: spec.protectiveQuestions,
    safetyRules: spec.safetyRules || (impactQuestion ? [{
      questionId: impactQuestion.id,
      values: ["major"],
      title: spec.impactTitle || "Practical impact deserves support",
      message: spec.impactMessage
    }] : []),
    profiles: spec.profiles,
    indicators: spec.dimensions.map(({ key, label }) => ({ key, label })),
    dimensionRelated: spec.dimensionRelated,
    dimensionGuidance: spec.dimensionGuidance,
    references: spec.references,
    relatedTitle: spec.relatedTitle,
    related: spec.related,
    faq: spec.faq,
    contentSections: [
      {
        title: "What Version 2.0 Measures",
        body: `<p>The 12 scored items cover ${dimensionList}. Each dimension is supported by three questions using the same ${spec.recallDays}-day frequency scale.</p><p>Context and protective-factor questions are displayed separately and do not change the core score.</p>`
      },
      {
        title: "How Scoring Works",
        body: `<p>Scored answers use values from 0 to 4 and produce an editorial total from 0 to 48. Dimension labels summarize selected frequency, not medical severity, character, or population standing.</p><div class="note-box">Version 2.0 is original and non-validated. ${spec.validationLimit}</div>`
      },
      { title: spec.limitsTitle || "Important Context And Limits", body: spec.limitsBody },
      { title: "How To Use The Result", body: spec.actionBody }
    ],
    revisionHistory: [
      { version: "2.0", date: "2026-06-21", summary: "Replaced mixed legacy scoring with 12 uniform core items, separate context, protective factors, functioning guidance, and privacy-limited sharing." },
      { version: "1.0", date: spec.versionOneDate || "2026-06-21", summary: `Initial original ${spec.legacyItems || 5}-item editorial checklist.` }
    ],
    methodology: `Version 2.0 is an original 12-item editorial self-check. Four dimensions use three items each and one explicit 0-to-4 frequency scale. Context and protective factors are separate from the scored core. The model is not clinically or psychometrically validated.`,
    disclaimer: spec.disclaimer
  };
}

module.exports = { createV2Config, scales, withSkip };
