# Search Console Review Queue - 2026-06-28

This queue records the next Search Console review priorities after the guide hub and guide matrix expansion. Use it after a complete 28-day data window; do not rewrite titles before meaningful impressions exist.

## Priority URLs

| Priority | URL | Why Watch It | First Data Question |
|---|---|---|---|
| P1 | `/guides.html` | Rebuilt from a flat list into an intent-based guide hub. | Are non-brand guide and comparison queries appearing? |
| P1 | `/guides/bmr-vs-tdee-vs-calorie-goal.html` | Homepage and guide hub starting point for energy planning. | Does it attract BMR/TDEE comparison impressions and send clicks to TDEE or Calorie Goal? |
| P1 | `/guides/sleep-debt-vs-sleep-quality.html` | New long-tail sleep guide with direct sleep tool links. | Does it earn sleep debt and sleep quality comparison impressions? |
| P1 | `/guides/stress-vs-anxiety-patterns.html` | Main mental wellness comparison guide and homepage guide entry. | Do stress vs anxiety queries appear, and which self-check gets clicks? |
| P1 | `/guides/smartphone-use-vs-social-media-use.html` | Main digital habits guide and homepage guide entry. | Are smartphone/social media comparison queries separated from tool queries? |
| P2 | `/tools/bmr-calculator.html` | Now links to the BMR/RMR/TDEE guide. | Do BMR vs RMR queries belong to the guide instead of the calculator? |
| P2 | `/tools/protein-calculator.html` | Now links to protein distribution guide. | Does the calculator keep protein calculator queries while the guide owns per-meal comparison queries? |
| P2 | `/tools/sleep-debt-calculator.html` | Now links to the sleep debt guide. | Do calculator queries stay on the tool and comparison queries move to the guide? |

## CTR Test Guardrails

- Wait for at least 50 impressions on a query-page pair before logging a CTR test.
- Test only one visible search-result variable at a time: title first, description second.
- Compare complete 28-day windows with similar average position and query mix.
- Record every test in `seo/ctr-test-log.csv`.
- If a page has no impressions, check indexing, canonical, sitemap, and internal links before changing copy.

## Candidate Title Hypotheses

| Page | Control Intent | First Variant To Consider |
|---|---|---|
| `/guides.html` | Calculator and self-check guides | Calculator & Self-Check Guides by Topic |
| `/guides/bmr-vs-tdee-vs-calorie-goal.html` | BMR vs TDEE vs calorie goal | BMR vs TDEE vs Calorie Goal: Which Number To Use |
| `/guides/sleep-debt-vs-sleep-quality.html` | Sleep debt vs sleep quality | Sleep Debt vs Sleep Quality: What To Fix First |
| `/guides/smartphone-use-vs-social-media-use.html` | Smartphone use vs social media use | Smartphone Use vs Social Media Use: Which Pattern Fits? |

## Next Export Command

```powershell
node scripts/analyze-gsc-export.js seo/gsc/input
```

Then review the generated report under `seo/gsc/reports/` and update this queue or `seo/ctr-test-log.csv`.
