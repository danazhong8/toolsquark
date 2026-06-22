# Google Search Console Data Loop

This workflow turns 28-day Search Console exports into page-level decisions for the 12 acquisition pages in `seo/core-query-map.json`. The readable ownership table is in `seo/core-query-map.md`; sequential title-test rules are in `seo/ctr-playbook.md`.

## One-Time Setup

1. Verify the `sc-domain:toolsquark.com` Domain property with the DNS TXT value shown by Search Console.
2. Submit `https://toolsquark.com/sitemap.xml` under **Indexing > Sitemaps**.
3. Confirm that the canonical homepage is `https://toolsquark.com/` and that the `www` host redirects to the apex domain.
4. Wait for Search Console to collect enough impressions before treating query absence as a content problem.

Never commit verification tokens, OAuth credentials, Search Console exports, or generated reports.

## 28-Day Export

Preferred input is a Search Analytics API or Looker Studio CSV with these columns:

```text
query,page,clicks,impressions,ctr,position
```

The analyzer also supports per-page exports from the Search Console interface:

1. Open **Performance > Search results**.
2. Select **Last 28 days** and **Web** search.
3. Add an exact Page filter for one core URL.
4. Open the **Queries** table and export CSV.
5. Rename the query CSV to the page slug, for example `bmi-calculator.csv`.
6. Place the 12 files in `seo/gsc/input/`. The directory is ignored by Git.

English and Chinese Search Console column labels are accepted. When the page column is absent, the analyzer infers the page from the filename. Do not replace `seo/gsc/search-analytics-template.csv`; place real exports only in the ignored input directory.

## Generate The Report

```powershell
node scripts/analyze-gsc-export.js seo/gsc/input
```

The ignored report is written to `seo/gsc/reports/gsc-YYYY-MM-DD.md`. A combined export can be analyzed directly:

```powershell
node scripts/analyze-gsc-export.js C:\path\search-analytics.csv
```

Validate the analyzer after changes:

```powershell
node scripts/analyze-gsc-export.js --self-test
node scripts/audit-core-query-map.js
```

## Weekly Review

- Check property messages, Page indexing, Sitemaps, Core Web Vitals, and HTTPS.
- Record 28-day clicks, impressions, CTR, and average position.
- Do not rewrite a page merely because it has no query data. Confirm indexing and internal discovery first.
- Prioritize queries in positions 5-20 with real impressions.
- Test title or description only when a top-10 query meets the impression and position-aware CTR thresholds in `seo/ctr-playbook.md`.
- Preserve the query boundaries in `core-query-map.json` to prevent TDEE, calorie, BMR, macro, and protein pages from competing with each other.
- Compare complete 28-day windows and document every title or description change in `seo/ctr-test-log.csv`.

## Target

- 28-day impressions: 28,000
- 28-day clicks: 2,800
- Site-wide CTR planning target: 10%

CTR depends heavily on query and position. The 10% figure is a business target, not a universal pass/fail threshold for every page.
