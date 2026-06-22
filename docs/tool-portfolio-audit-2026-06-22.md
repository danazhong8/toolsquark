# Tool Portfolio Quality Audit

Audit date: June 22, 2026

Scope: 39 published tool pages. This review evaluates method quality, task usefulness, search-intent separation, content overlap, category fit, and the risk of retaining or removing a URL. It does not claim traffic efficiency because page-level Search Console exports were not available in the repository.

## Decision Rules

- Keep a separate URL when the user question, required inputs, result, and follow-up action are materially different.
- Change direction when a page produces false precision, duplicates another result, or forces an arbitrary preset.
- Merge or redirect only after checking page queries, impressions, clicks, backlinks, and conversion events.
- Do not use word count alone as a quality measure. A concise calculator can be useful when its method and output are clear.

Google references: [Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) and [Consolidate duplicate URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls).

## Changes Implemented

| Tool | Previous issue | New direction |
| --- | --- | --- |
| Calorie Calculator | Returned nearly the same maintenance estimate and advice as TDEE. | Daily Calorie Goal Calculator: estimates maintenance, then applies a disclosed -20%, -10%, 0%, +5%, or +10% goal adjustment. |
| Macro Calculator | Repeated the TDEE calculation and forced a fixed 30/35/35 split. | Custom Macro Calculator: accepts an existing calorie target, calculates protein from body weight, fat from a selected percentage, and carbohydrate from remaining calories. |
| Sleep Calculator | Rounded duration to 90-minute blocks despite variable real sleep cycles. | Sleep Schedule Calculator: plans bedtime or wake time from target sleep and expected sleep latency. |
| Sleep Pattern Self-Check | Listed under Health while its planning companion was in Lifestyle. | Moved to Lifestyle > Sleep & Recovery; its breadcrumb now matches its directory. |
| Running Pace, Daily Steps, Steps To Calories | Lifestyle tools inherited the default Health breadcrumb. | Moved into Lifestyle > Movement Planning with corrected breadcrumbs. |
| Age Calculator | Sat beside sleep tools without a shared task. | Moved to Health > Dates & Life Stage. |

## Portfolio Decisions

### Body Metrics

| Tool | Decision | Distinct job and boundary |
| --- | --- | --- |
| BMI Calculator | Keep as core | Broad adult height-to-weight screening entry point. Does not estimate body composition. |
| Body Fat Calculator | Keep as core | Circumference-based composition estimate; measurement error is disclosed. |
| Lean Body Mass Calculator | Keep, monitor | Estimates non-fat mass for a different query, but depends on a predictive formula. Monitor unique queries before expanding. |
| Waist-to-Height Ratio | Keep as core | Simple central-adiposity screening question with a height-relative result. |
| Waist-to-Hip Ratio | Keep, sharpen | Distinct distribution ratio, although it competes with WHtR. Compare query and click overlap quarterly. |
| Healthy Weight Range | Companion / merge candidate | Inverts the BMI formula. Keep out of featured positions; merge into BMI with a 301 if it earns no distinct queries. |

### Energy And Nutrition

| Tool | Decision | Distinct job and boundary |
| --- | --- | --- |
| BMR Calculator | Keep, monitor | Resting baseline only. Must not present a daily intake goal. |
| TDEE Calculator | Keep as core | Maintenance-energy estimate only. It is the bridge between BMR and goal planning. |
| Daily Calorie Goal Calculator | Keep after direction change | Applies a visible goal adjustment to maintenance and supports calibration. |
| Custom Macro Calculator | Keep after direction change | Distributes an existing calorie target; no longer duplicates TDEE. |
| Protein Calculator | Keep as core | Single-nutrient body-weight calculation with selectable factors. |
| Water Intake Calculator | Keep, monitor | Useful planning heuristic but inherently imprecise. Continue emphasizing range and exceptions. |

### Dates And Reproductive Planning

| Tool | Decision | Distinct job and boundary |
| --- | --- | --- |
| Age Calculator | Keep as supporting utility | Correct, low-risk calendar task. Do not feature as a health recommendation. |
| Due Date Calculator | Keep as core | Specific LMP-based pregnancy date estimate with prenatal limits. |
| Period Calculator | Keep as core | Cycle-date estimate with irregular-cycle and fertility limitations. |

### Sleep And Movement

| Tool | Decision | Distinct job and boundary |
| --- | --- | --- |
| Sleep Schedule Calculator | Keep after direction change | Produces a bedtime or wake time without claiming exact cycle optimization. |
| Sleep Pattern Self-Check | Keep as core | Reviews recent sleep experience and functioning; does not calculate a schedule. |
| Daily Steps Goal Calculator | Keep | Progressive behavior plan from a current baseline. |
| Steps To Calories Converter | Revision candidate | Current coefficient is transparent but simplified. Replace with an intensity/duration range or merge into the steps planner if no distinct demand appears. |
| Running Pace Calculator | Keep | Exact arithmetic conversion with a clear running-specific task. |

### Mental Wellness And Execution

| Tool | Decision | Distinct job and boundary |
| --- | --- | --- |
| Stress Pattern | Keep as core | Perceived overload, control strain, reactivity, and impact. |
| Anxiety & High-Alert Pattern | Keep | Alertness, worry, sensitivity, and recovery; not a stress total. |
| Overthinking Pattern | Keep | Repetitive thought loops and action displacement. |
| Occupational Burnout Pattern | Keep | Work-specific exhaustion, distance, efficacy, and recovery interference. |
| Focus & Attention Pattern | Keep, sharpen | Attention regulation across tasks; avoid drifting into procrastination advice. |
| Social Anxiety Pattern | Keep | Evaluation fear, avoidance, self-monitoring, and post-event review. |
| Connection & Loneliness Pattern | Keep, clarify | Broad social network, belonging, and isolation experience; not one relationship. |
| Procrastination Pattern | Keep as core | Task-specific delay driven by avoidance, reward pull, or perfectionism. |
| Follow-Through Pattern | Keep, sharpen | Consistency and restarting across routines; should not duplicate task-delay questions. |
| Smartphone Use Pattern | Keep | Device-level checking and displacement across phone activities. |
| Social Media Use Pattern | Keep | Feed capture, social evaluation, and comparison inside social platforms. |

### Emotional Connection

| Tool | Decision | Distinct job and boundary |
| --- | --- | --- |
| Emotional Needs Clarity | Keep as category entry | Internal sequence from noticing a need to making a request. |
| Emotional Availability | Keep | User's awareness, presence, responsiveness, and tolerance for closeness. |
| Closeness & Distance Pattern | Keep | Regulation of intimacy, space, autonomy, and changing contact. |
| Felt Understood | Keep | User's experience of attention, accuracy, validation, and response fit. |
| Relationship Support Access | Keep, clarify | Availability, asking, fit, and follow-through in one relationship. |
| Safe Emotional Disclosure | Keep | Safety, boundaries, reception, and aftermath of personal sharing. |
| Emotional Communication | Keep | Identification, specificity, interpretation ownership, and timing. |
| Conflict Repair | Keep as category entry | De-escalation, accountability, reconnection, and learning after conflict. |

## Merge And Removal Gates

Review the following after at least 90 days of comparable Search Console data:

1. Healthy Weight Range versus BMI Calculator.
2. BMR versus TDEE Calculator.
3. Steps To Calories versus Daily Steps Goal Calculator.
4. Waist-to-Hip Ratio versus Waist-to-Height Ratio.
5. Focus & Attention versus Procrastination and Follow-Through.
6. Connection & Loneliness versus Relationship Support Access.

A merge is justified when a candidate has no meaningful unique queries or backlinks, near-zero clicks, and substantial query overlap with the stronger page. Preserve the stronger URL, move genuinely useful content into it, issue a permanent redirect, update internal links, and remove the retired URL from the sitemap.

## Data Needed For The Next Review

Export Search Console page and query data for the last 90 days with clicks, impressions, CTR, and average position. Add homepage and tool completion events by slug. Traffic without successful tool use is not enough to classify a page as effective.
