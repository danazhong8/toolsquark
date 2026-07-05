# Zero-Click Improvement Plan - 2026-07-05

## Data Snapshot

Source: Search Console screenshots reviewed on 2026-07-05.

- Last 28 days: 2 clicks, 194 impressions, 1% CTR, average position 68.2.
- Biggest zero-click pages: BMI calculator, BMR calculator, calorie calculator, daily steps goal calculator, cognitive overthinking test.
- Strongest visible query cluster: metric/imperial BMI and Mifflin-St Jeor formula terms.
- Primary issue: Google is discovering pages, but most rankings are still too low for stable clicks. CTR work should therefore be paired with stronger query matching and internal links, not only title rewriting.

## P1 - BMI Query Match

- Make the BMI tool explicitly answer metric and imperial intent above the input tabs.
- Add exact FAQ coverage for metric BMI formula and imperial BMI formula.
- Add a guide link from the BMI page to the metric-vs-imperial formula guide.
- Keep the current title for now and queue a title test instead of changing several signals at once.

## P2 - Internal Path Upgrade

- Route users from BMI to waist-to-height, body fat, TDEE, and calorie planning.
- Route BMR to the Mifflin-St Jeor guide, TDEE, and daily calorie goal calculator.
- Route TDEE to BMR, daily calorie goal, maintenance calibration, and the BMR-vs-TDEE guide.
- Route calorie planning to TDEE, maintenance calibration, weight trend, and the maintenance-vs-deficit guide.
- Move the homepage starting points toward the pages currently earning impressions.

## P3 - CTR Test Rules

Do not launch a live title rewrite every time Search Console shows impressions. Use this threshold:

- Page has at least 100 impressions in a complete 28-day window, or
- Page ranks in average position 5-30 for a target query, or
- Page has more than 50 impressions and 0 clicks across two consecutive windows.

Queued tests are recorded in `seo/ctr-test-log.csv`. Review after the next full 28-day window.

## P4 - Light Distribution

Use low-risk distribution that builds topical clarity without spam:

- Add a GitHub README entry linking to the core calculators and guides.
- Share one educational answer at a time around exact query intent, such as "metric vs imperial BMI formula" or "BMR vs TDEE".
- Link to guides first when answering informational questions; link to calculators when the user clearly needs computation.
- Track any external placements manually in the weekly GSC review notes.

