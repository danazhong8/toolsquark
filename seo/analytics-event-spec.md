# ToolsQuark Analytics Event Spec

Updated: June 22, 2026

ToolsQuark uses Vercel Web Analytics for aggregate traffic and funnel measurement. Event payloads must never contain calculator inputs, self-check answers, scores, result labels, dates, body measurements, or free-form text.

## Core Funnel

| Event | Trigger | Properties |
| --- | --- | --- |
| `guide_view` | A decision guide loads | `guide`, `source` |
| `guide_tool_click` | A matching-tool link is selected from a guide | `guide`, `tool`, `source` |
| `tool_click` | A tool is selected from the homepage, a category page, or a guide | `tool`, `source`, optional `guide` or `category` |
| `tool_start` | First calculator interaction or assessment start | `tool`, `type` |
| `tool_complete` | A calculator displays a valid result or an assessment reaches its result | `tool`, `type` |

`type` is either `calculator` or `assessment`. Calculator and assessment start/completion events are counted once per page session or reset cycle.

## Guide Attribution

`guide_view.source` is restricted to this allowlist:

- `direct`
- `github`
- `linkedin`
- `x`
- `reddit`
- `newsletter`

Unknown or missing `utm_source` values are stored as `direct`. Raw query strings and arbitrary campaign values are not sent in custom event properties.

## Existing Assessment Events

Assessment-specific events remain available for interaction analysis:

- `assessment_started`
- `assessment_completed`
- `assessment_next_tool`
- `assessment_summary_copied`
- `assessment_test_shared`
- `assessment_result_shared`
- `assessment_result_image_downloaded`
- `assessment_restarted`

The generic `tool_start` and `tool_complete` events are the canonical cross-tool conversion funnel. Assessment-specific events should be used only for assessment feature analysis.

## Recommended Reports

1. Guide conversion: `guide_tool_click / guide_view`, grouped by `guide`.
2. Tool entry: `tool_click`, grouped by `source` and `tool`.
3. Tool completion: `tool_complete / tool_start`, grouped by `tool` and `type`.
4. Guide-to-completion: compare guide tool clicks with downstream completions for the same tool and reporting period.
5. Source quality: compare guide views and guide-to-tool click rate by the allowlisted `source` value.
