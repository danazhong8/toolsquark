# Original Self-Check P0 Audit

Audit date: June 21, 2026  
Scope: 12 files in `templates/assessment-pages`

## P1 Pilot Progress

On June 21, 2026, Stress Pattern, Anxiety and High-Alert Pattern, and Procrastination Pattern were migrated to the version 2.0 contract. Each now has 12 scored items across four dimensions, one shared frequency scale, three separate context questions, two separately reported protective factors, functioning guidance, and revision history.

The executable audit moved these three pages to zero blockers and zero warnings. The site baseline decreased from 52 blockers and 33 warnings to 41 blockers and 20 warnings. The original figures below remain as the P0 snapshot for comparison.

## Executive Findings

- Ten of 12 self-checks have only five scored questions.
- Eleven of 12 report at least one dimension supported by fewer than three questions.
- Every self-check uses multiple answer scales while converting every answer position to the same 1-to-4 score.
- Eight self-checks provide only one general background reference.
- Several questions combine multiple symptoms, behaviors, or directions in one scored item.
- Some names and answers use terms such as `diagnostic`, `addiction`, `explosive`, or `constantly drowning` that overstate what an original, non-validated checklist can establish.
- Current score bands are disclosed as editorial, which is a good safeguard, but the visual precision of totals and dimension bars remains stronger than the underlying item structure.

## Page-Level Baseline

| Self-check | Items | Dimension counts | Priority | Main P1 issue |
| --- | ---: | --- | --- | --- |
| Anxiety & Hyperarousal | 5 | 3 / 1 / 1 | Critical | Sensory overload and worry each rely on one item. |
| Cognitive Overthinking | 5 | 2 / 2 / 1 | Critical | Catastrophizing relies on one item; all items use different anchors. |
| Focus & Attention | 5 | 2 / 1 / 2 | Critical | Task initiation relies on one item; `diagnostic` remains in the URL/config identity. |
| Loneliness | 5 | 2 / 2 / 1 | Critical | Belonging relies on one item; support and isolation overlap. |
| Occupational Burnout | 5 | 3 / 1 / 1 | Critical | Detachment and efficacy each rely on one item. |
| Procrastination | 5 | 3 / 1 / 1 | Critical | Temporal discounting and perfectionism each rely on one item. |
| Self-Discipline | 5 | 2 / 1 / 2 | Critical | Impulse friction relies on one item and wording risks moral judgment. |
| Smartphone Use | 5 | 1 / 2 / 2 | Critical | Checking relies on one item; `addiction` claim is too strong for the method. |
| Social Anxiety | 5 | 2 / 2 / 1 | Critical | Post-event replay relies on one item. |
| Social Media Use | 5 | 2 / 1 / 2 | Critical | Validation seeking relies on one item; `addiction index` overstates the result. |
| Stress Index | 10 | 5 / 3 / 2 | High | Recovery has two items; several items combine symptoms or behaviors. |
| Sleep Quality | 10 | 4 / 3 / 3 | High | Dimension coverage passes the minimum, but ten unique response scales and compound symptom questions weaken the total score. |

## Cross-Site Content Risks

### Dimension Precision

The current renderer calculates and displays a percentage-like bar for every dimension. A bar based on one question can only restate that answer; it is not a stable dimension estimate. Dimension reporting should wait until each dimension has at least three drafted items and two answered items.

### Scale Equivalence

Answer position currently determines points. `Often`, `Very hard`, `Under 10 minutes`, and `Very unsatisfied` can all receive the same score even though they measure different response constructs. P1 should move scored core items to one explicit frequency scale and move duration or context questions outside the total.

### Compound Items

Priority rewrites include:

- Stress: jaw clenching, teeth grinding, or shoulder tension.
- Stress: skipping meals or overeating.
- Stress: digestive issues, fatigue, or headaches.
- Sleep: waking unrefreshed, stiff, or tired.
- Sleep: night sweats, gasping, or restless legs.
- Sleep: sleep aids, alcohol, or supplements.

These alternatives have different meanings and may require different guidance.

### Loaded Or Clinical Language

Priority replacements include:

- `Explosive frustration` -> a neutral frequency anchor.
- `Constantly drowning` -> an explicit day-frequency anchor.
- `Completely unsustainable` -> a concrete functional-impact item.
- `Collapse quickly` -> a neutral description of follow-through.
- `Diagnostic` and `addiction` -> `self-check` or `use pattern` unless future validation supports the stronger term.
- `Allostatic Load` -> `Perceived Load`; the current checklist does not measure biological allostatic load.

## P1 Migration Order

1. Stress Index: establishes the 12-item, multi-dimensional blueprint and compound-item rules.
2. Anxiety & Hyperarousal: establishes sensitive-content and safety-routing rules.
3. Procrastination: establishes behavior-focused context questions and shareable neutral results.
4. Sleep Quality: separates frequency-scored experiences from duration and symptom routing.
5. Remaining eight pages: migrate through the shared configuration contract.

## P0 Exit Criteria

- The full inventory is documented.
- A shared item-writing and scoring standard exists.
- An executable audit reports structural, content, and migration risks.
- Existing production scoring remains unchanged until P1 replaces each assessment as a complete versioned unit.
