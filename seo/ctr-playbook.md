# Search Console CTR Optimization Loop

Updated: June 22, 2026

Search Console does not provide a conventional title A/B test. Use sequential 28-day comparisons and change one search-result variable per page.

## Required Export

Export Search results data with:

```text
query,page,clicks,impressions,ctr,position
```

Use a complete 28-day period and Web search type. Place exports in the ignored `seo/gsc/input/` directory, then run:

```powershell
node scripts/analyze-gsc-export.js seo/gsc/input
```

## Opportunity Rules

| Signal | Minimum evidence | Action |
| --- | --- | --- |
| Position 1-3 and CTR below 8% | 50 impressions for the query-page pair | Test one title angle. |
| Position 4-5 and CTR below 5% | 50 impressions | Test title or description, not both. |
| Position 6-10 and CTR below 3% | 50 impressions | Improve query-result promise and check intent match. |
| Position 5-20 | 20 impressions | Strengthen the matching section and internal links before changing the title. |
| No impressions | Confirm indexing, canonical, sitemap, and links | Do not call it a CTR problem. |
| Two pages receive the same query | Meaningful impressions on both | Preserve the intended owner and reduce the competing page's targeting. |

These are prioritization thresholds, not universal Google benchmarks. CTR varies by query, position, device, and search-result layout.

## Test Procedure

1. Select one query-page pair that meets a threshold.
2. Record the existing title, impressions, clicks, CTR, and position in `seo/ctr-test-log.csv`.
3. Choose one title hypothesis from `seo/core-query-map.json` or write a closer match to the observed query.
4. Change only the title or only the meta description.
5. Record the deployment date.
6. Wait for a complete comparable 28-day window unless impressions accumulate much faster.
7. Compare CTR only when average position and query mix remain reasonably similar.
8. Keep, revise, or revert the variant and record the decision.

## Guardrails

- Do not add claims such as accurate, clinical, diagnostic, or scientifically proven unless the page can support them.
- Do not put every secondary query into the title.
- Do not change multiple core pages in the same query cluster during one measurement window.
- Do not use a rising average position as proof that a title change improved CTR.
- Preserve the no-www canonical and the primary query owner defined in the query map.

## Weekly And 28-Day Cadence

Weekly: inspect indexing, sitemap status, HTTPS, manual actions, and sudden page/query changes.

Every 28 days: import query-page data, generate the report, select no more than three title tests, and update the log. The small test limit keeps cause and effect legible.
