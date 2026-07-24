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

## Real-Time API Pull

Browser reading is not reliable for Search Console because the Google UI is heavy, session-bound, and often blocks automation control. Use the Search Analytics API for repeatable reads.

One-time authorization options:

```powershell
$env:GSC_ACCESS_TOKEN="ya29..."
```

Or use a refresh token for repeatable access:

```powershell
$env:GSC_CLIENT_ID="..."
$env:GSC_CLIENT_SECRET="..."
$env:GSC_REFRESH_TOKEN="..."
```

The Google OAuth token must include this readonly scope:

```text
https://www.googleapis.com/auth/webmasters.readonly
```

### Create The OAuth Client

1. Open [Google Cloud Console](https://console.cloud.google.com/).
2. Create or select a project for ToolsQuark analytics.
3. Go to **APIs & Services > Library** and enable **Google Search Console API**.
4. Go to **APIs & Services > OAuth consent screen**.
5. Use **External** if this is a personal Google account, add your own Google account as a test user while the app is in testing, and save.
6. Go to **APIs & Services > Credentials > Create credentials > OAuth client ID**.
7. Choose **Desktop app**.
8. Download the client JSON and save it locally as:

```text
seo/gsc/credentials/oauth-client.json
```

This credentials directory is ignored by Git.

### Generate A Refresh Token

Run:

```powershell
node scripts/gsc-oauth-helper.js --write-env
```

Open the printed Google authorization URL, approve readonly Search Console access, and return to the terminal. The helper writes an ignored local file:

```text
seo/gsc/credentials/gsc-env.ps1
```

Load it before API pulls:

```powershell
. .\seo\gsc\credentials\gsc-env.ps1
```

Then fetch the latest complete 28-day window and generate a report:

```powershell
node scripts/fetch-gsc-api.js
```

Or specify a window:

```powershell
node scripts/fetch-gsc-api.js --start 2026-06-23 --end 2026-07-20
```

The script writes ignored CSV files under `seo/gsc/api/` and an ignored Markdown report under `seo/gsc/reports/`.

Validate the analyzer after changes:

```powershell
node scripts/analyze-gsc-export.js --self-test
node scripts/gsc-oauth-helper.js --self-test
node scripts/fetch-gsc-api.js --self-test
node scripts/audit-core-query-map.js
node scripts/audit-acquisition-paths.js
```

## Weekly Review

- After a sitemap resubmission or priority URL inspection requests, use `seo/gsc/post-submit-monitor-2026-06-28.md` for the day 3, day 7, and day 14 checks.
- After the 2026-06-28 new-tool launch, use `seo/gsc/new-tool-launch-queue-2026-06-28.md` to prioritize indexing and first-query review.
- Check property messages, Page indexing, Sitemaps, Core Web Vitals, and HTTPS.
- Record 28-day clicks, impressions, CTR, and average position.
- Do not rewrite a page merely because it has no query data. Confirm indexing and internal discovery first.
- Prioritize queries in positions 5-20 with real impressions.
- Test title or description only when a top-10 query meets the impression and position-aware CTR thresholds in `seo/ctr-playbook.md`.
- Preserve the query boundaries in `core-query-map.json` to prevent TDEE, calorie, BMR, macro, and protein pages from competing with each other.
- Run the acquisition path audit after changing homepage guides, guide data, tool-guide mappings, or category pages.
- Compare complete 28-day windows and document every title or description change in `seo/ctr-test-log.csv`.

## Target

- 28-day impressions: 28,000
- 28-day clicks: 2,800
- Site-wide CTR planning target: 10%

CTR depends heavily on query and position. The 10% figure is a business target, not a universal pass/fail threshold for every page.
