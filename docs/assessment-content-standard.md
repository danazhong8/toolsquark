# ToolsQuark Original Self-Check Standard

Status: P0 content contract  
Version: 1.0  
Effective: June 21, 2026

## 1. Scope And Claims

This standard applies to every ToolsQuark original self-check. An original self-check is an educational reflection tool, not a validated instrument, diagnosis, risk prediction, population percentile, or substitute for professional assessment.

References can support the relevance of a construct or a general recommendation. They do not validate ToolsQuark questions, score bands, dimensions, or result profiles.

Every page must identify:

- Instrument type: `original-self-check` or `validated-instrument`.
- Version and date last materially reviewed.
- Intended audience and excluded populations or situations.
- Recall period.
- Scored dimensions and what each dimension does and does not represent.
- Scoring method, missing-answer rule, limitations, and review status.

## 2. Assessment Blueprint

An original self-check should contain four distinct layers:

### Scored Core

- Use 12 to 16 scored items in the first production version.
- Define three or four dimensions before drafting questions.
- Assign at least three scored items to every reported dimension.
- Map each item to one primary dimension only.
- Do not report a dimension supported by fewer than two answered items.

### Context Questions

Use two or three optional, non-scored questions to understand duration, setting, or the area of life most affected. Context answers may select guidance but must not silently change severity.

### Protective Factors

Use at least two non-diagnostic protective-factor items when the construct benefits from recovery or support context. Report these separately. Do not hide them inside a reverse-scored risk total.

### Safety Rules

Safety or urgent-support prompts are routing rules, not score multipliers. A safety response must never be summarized as a diagnosis. The interface should show appropriate immediate guidance without waiting for the final score.

## 3. Item-Writing Rules

Each scored item must:

- Ask about one observable experience, behavior, or functional effect.
- Include or inherit one explicit recall period.
- Avoid causal claims such as assuming that a physical symptom was caused by stress.
- Avoid moral labels, diagnostic wording, absolutes, idioms, and emotionally loaded answer labels.
- Avoid combining alternatives with `and` or `or` when endorsement of either alternative could produce different meaning.
- Be understandable without specialist vocabulary.
- Avoid repeating the same behavior with slightly different wording.

Preferred form:

> During the past 14 days, how often did unfinished responsibilities remain difficult to put out of mind?

Avoid:

> Do increasing demands and shrinking energy leave you completely overwhelmed?

Reverse-worded items should be used sparingly. Negation and double negatives are not acceptable substitutes for protective-factor questions.

## 4. Response Scales

All scored core items in one self-check must use the same response construct and anchors. The default 14-day frequency scale is:

| Value | Anchor |
| --- | --- |
| 0 | Not at all |
| 1 | On 1-2 days |
| 2 | On 3-6 days |
| 3 | On 7-11 days |
| 4 | On 12-14 days |

A different recall period may use equivalent, explicit day or event ranges. Intensity, duration, agreement, and frequency answers must not be mixed in one total score.

`Not applicable` and `Prefer not to answer` are missing responses, not zero scores.

## 5. Scoring And Result Language

- Compute dimension summaries only from their declared items.
- Require at least 80% of scored core items and at least two answered items per dimension.
- Do not present a normalized value as a population percentage, probability, or percentile.
- Editorial bands must be labeled descriptive and non-clinical.
- Prefer answer-pattern summaries over a single severity label.
- Explain which response areas contributed most to the result.
- Use neutral profile names such as `frequent overload with limited recovery`.
- Do not use `mild`, `moderate`, `severe`, `addicted`, `disordered`, or `diagnostic` unless a licensed validated instrument and its authorized interpretation explicitly support that term.

Recommended result order:

1. Current answer pattern.
2. Dimension summaries.
3. Functional impact and context.
4. Protective factors.
5. One immediate action and one follow-up action.
6. Limits and support guidance.

## 6. Review And Validation Ladder

An original self-check should progress through these states:

1. `draft`: construct and item blueprint complete.
2. `editorial-review`: wording and scoring reviewed internally.
3. `expert-content-review`: a named qualified reviewer has checked construct coverage and safety language.
4. `user-comprehension-tested`: target users have completed cognitive interviews.
5. `pilot-tested`: item behavior and completion data have been reviewed with consented, privacy-preserving research data.
6. `research-validated`: reliability and validity evidence has been published or made available with methods and sample details.

Only the final state may use a validation claim. A professional content review alone is not psychometric validation.

## 7. Required Configuration Contract

P1 assessment configurations should add:

```js
instrument: {
  type: "original-self-check",
  version: "2.0",
  reviewStatus: "editorial-review",
  intendedAudience: "Adults seeking general self-reflection",
  recallPeriodDays: 14
},
dimensions: [
  { key: "overload", label: "Perceived overload", definition: "..." }
],
responseScale: {
  id: "frequency-14d-v1",
  values: [0, 1, 2, 3, 4]
},
contextQuestions: [],
protectiveQuestions: [],
safetyRules: [],
revisionHistory: []
```

The renderer must keep contextual, protective, and safety responses separate from the scored core.

