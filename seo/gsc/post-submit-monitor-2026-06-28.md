# Post-Submit Search Console Monitor - 2026-06-28

Use this checklist after the sitemap resubmission and URL inspection requests completed on 2026-06-28. The goal is to confirm discovery and early query direction before making any title or content changes.

## URLs Submitted For Priority Crawling

| URL | Role | Expected First Signal |
|---|---|---|
| `/` | Homepage routing and featured guide entry | Recrawl date updates; homepage queries remain stable. |
| `/guides.html` | Guide hub and topical directory | Indexed status and early guide/category impressions. |
| `/guides/sleep-debt-vs-sleep-quality.html` | New sleep comparison guide | Sleep debt, sleep quality, and tiredness-related impressions. |
| `/guides/bmr-vs-rmr-vs-tdee.html` | New energy terminology guide | BMR/RMR/TDEE comparison impressions. |
| `/guides/protein-per-meal-vs-daily-protein.html` | New protein planning guide | Protein timing and protein per meal impressions. |

## Day 3 Check

- In **Pages**, confirm the submitted URLs are not blocked by `robots.txt`, `noindex`, redirect, duplicate canonical, or server error.
- In **Sitemaps**, confirm the submitted sitemap status is successful or still processing, not failed.
- In URL Inspection, spot-check `guides.html` and one new guide for Google-selected canonical.
- Do not change titles or descriptions yet unless there is a technical indexing problem.

## Day 7 Check

- Open **Performance > Search results** and compare the last 7 days with the previous 7 days.
- Filter by Page for `guides.html` and the three new guide URLs.
- Record whether each page has impressions, even if clicks are still zero.
- If impressions are zero, verify internal links from homepage, guide hub, sitemap, and matching tool pages before rewriting content.

## Day 14 Check

- Export query data for pages with impressions.
- Put CSV files in `seo/gsc/input/` and run:

```powershell
node scripts/analyze-gsc-export.js seo/gsc/input
node scripts/audit-acquisition-paths.js
```

- Only consider a title test when a query-page pair has at least 50 impressions and meets the CTR rules in `seo/ctr-playbook.md`.
- If a page is ranking in positions 5-20, improve supporting sections and internal links before changing the title.

## Notes To Record

| Date | URL | Indexing Status | Impressions | Clicks | Avg Position | Action |
|---|---|---|---:|---:|---:|---|
| 2026-07-01 | `/guides.html` |  |  |  |  |  |
| 2026-07-05 | `/guides.html` |  |  |  |  |  |
| 2026-07-12 | `/guides.html` |  |  |  |  |  |
