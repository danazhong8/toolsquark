# ToolsQuark Google SEO Optimization Plan

Updated: 2026-06-26

This plan replaces the earlier staged checklist direction with a data-led growth plan based on the current ToolsQuark implementation, the core query map, the Search Console CTR loop, and Google Search Central guidance on helpful content, page experience, structured data, canonical discovery, and sitemaps.

## Current Baseline

### Implemented

- Canonical direction is unified to `https://toolsquark.com/`; `www` is treated as the secondary host.
- Sitemap, robots, canonical URLs, and Vercel redirects are in place.
- Homepage theme has been repositioned from a generic tool site to calculators, self-checks, and decision guides.
- 47 tool pages are published: calculators, wellness self-checks, lifestyle tools, and emotional connection self-checks.
- 22 original self-checks use a versioned 12-item, 4-dimension content contract.
- 8 guide pages exist and are linked from matching tool pages.
- Core 12 query ownership exists in `seo/core-query-map.md` and `seo/core-query-map.json`.
- Search Console export workflow, analyzer, and CTR playbook exist under `seo/gsc/`, `scripts/analyze-gsc-export.js`, and `seo/ctr-playbook.md`.
- Privacy, editorial policy, about, methodology, references, and last-updated surfaces are already present.
- Calculator and self-check pages now include visual method guides in the right column.

### Current Risk

- The site has many valid pages but limited proven query-page data, so expansion should be selective.
- Some supporting tools may compete with stronger core tools if titles, internal links, or content sections drift.
- Emotional connection tools are differentiated, but they need topic-hub support and shareable result language to earn links and repeat use.
- Tools are useful, but the site still needs stronger above-the-fold confidence, result interpretation, comparison content, and crawl-priority discipline.

## SEO Strategy

ToolsQuark should not compete head-on with giant generic calculator sites on every high-volume head term. The winning angle is:

> transparent calculators, private self-checks, and decision guides for users who want a useful next step, not just a number or label.

This means each page should own one search intent, disclose method and limits, connect to a matching guide, and create a reason for users to complete, share, or continue to another page.

## Priority System

### P0: Protect Indexing And Query Ownership

Goal: ensure Google can crawl, understand, and assign the right page to the right query.

Actions:

1. Keep the no-www canonical direction stable.
2. Re-submit `https://toolsquark.com/sitemap.xml` after every meaningful URL batch.
3. Run monthly checks for duplicate titles, missing descriptions, broken canonical URLs, and redirect targets.
4. Keep one primary query per core page. Do not stuff related terms into every title.
5. Preserve boundaries between close pages:
   - BMI vs Body Fat vs Healthy Weight Range
   - BMR vs TDEE vs Daily Calorie Goal
   - Sleep Schedule vs Sleep Pattern
   - Stress vs Anxiety
   - Procrastination vs Follow-Through vs Focus
   - Connection & Loneliness vs Relationship Support Access

Success signal:

- All submitted pages are indexed or have a clear reason for exclusion.
- No important query has two internal pages receiving meaningful impressions without an intentional owner.

## P1: Upgrade Core 12 Acquisition Pages

Goal: convert the existing core query map into stronger ranking and CTR candidates.

Core 12 pages:

1. BMI Calculator
2. Body Fat Calculator
3. TDEE Calculator
4. Daily Calorie Goal Calculator
5. Macro Calculator
6. Sleep Schedule Calculator
7. Sleep Pattern Self-Check
8. Stress Pattern Self-Check
9. Anxiety & High-Alert Pattern Self-Check
10. Procrastination Pattern Self-Check
11. Emotional Needs Clarity Self-Check
12. Conflict Repair Self-Check

Page upgrade checklist:

- Add or refine a short answer block immediately below the tool result.
- Add one worked example per calculator and one sample interpretation per self-check.
- Add "When this result is useful" and "When this result is not enough" sections.
- Link to exactly one matching guide and 2-3 nearby tools.
- Keep disclaimers clear but not visually dominant above the main task.
- Add FAQ only when the page can answer the query directly and safely.

Success signal:

- More impressions in positions 5-20.
- CTR improves after title or description tests when average position remains similar.
- Completion events exist for the page, not just visits.

## P2: Build Topic Hubs, Not Just More Tools

Goal: make Google and users understand the site as several focused clusters.

Recommended hubs:

1. Body metrics and nutrition planning
   - BMI, Body Fat, WHtR, WHR, BMR, TDEE, Calorie Goal, Macro, Protein.
2. Sleep and recovery
   - Sleep Schedule, Sleep Debt, Sleep Pattern, Caffeine Cutoff.
3. Focus and behavior change
   - Procrastination, Follow-Through, Focus, Habit Consistency, Smartphone, Social Media.
4. Stress and emotional regulation
   - Stress, Anxiety, Overthinking, Burnout.
5. Emotional connection and relationship repair
   - Emotional Needs, Boundaries, Communication, Availability, Felt Understood, Conflict Repair, Safe Disclosure, Support Access.

Actions:

- Convert category pages into true topic hubs with short decision pathways, not only directories.
- Add 2-3 "which tool should I use?" comparison blocks per hub.
- Add guide links above large directories so users do not face a flat list.
- Keep category copy concise and intent-led.

Success signal:

- Category pages start receiving non-brand impressions.
- More tool clicks from homepage/category pages.
- Guide-to-tool click rate increases.

## P3: Expand Guides From 8 To 14-16 With Search Intent Control

Goal: earn long-tail informational impressions without creating thin content.

New guide candidates:

1. BMI, waist ratio, and body fat: which number should you use?
2. TDEE vs calorie goal: why maintenance and intake targets differ.
3. Sleep debt vs sleep quality: when a schedule calculator is not enough.
4. Stress, anxiety, and overthinking: how to separate the patterns.
5. Procrastination vs focus problems vs follow-through habits.
6. Emotional boundaries vs emotional availability.
7. Feeling understood vs getting support in a relationship.
8. Conflict repair scripts: what to review after an argument.

Guide requirements:

- Each guide must link to 2-4 tools and explain which one fits which user question.
- Each guide must include original framing, examples, and boundaries.
- Avoid generic wellness advice that could appear on any site.

Success signal:

- Guides generate impressions for question-form queries.
- Guide pages send users to tools.
- Tools send users back to matching guides after results.

## P4: CTR Optimization Loop

Goal: improve clicks without guessing.

Use the existing `seo/ctr-playbook.md`.

Workflow:

1. Export Search Console data every complete 28-day period.
2. Run `node scripts/analyze-gsc-export.js seo/gsc/input`.
3. Pick no more than three query-page pairs per cycle.
4. Change only one variable: title or meta description.
5. Record every test in `seo/ctr-test-log.csv`.
6. Wait for a comparable window before deciding.

Prioritization:

- Position 1-3 and CTR below 8%: title test.
- Position 4-5 and CTR below 5%: title or description test.
- Position 6-10 and CTR below 3%: improve promise and intent match.
- Position 5-20 with impressions: strengthen sections and internal links before title changes.

Success signal:

- Site-wide 28-day impressions trend toward 28,000.
- Site-wide 28-day clicks trend toward 2,800.
- CTR tests are documented and reversible.

## P5: Tool Engagement And Shareability

Goal: turn pages from passive content into completed useful experiences.

Actions:

- Track tool start, tool complete, result copy/share, related-tool click, and guide click by slug.
- Add shareable result summaries for self-checks without exposing private answers.
- Add "compare this result with" links for calculators.
- For emotional connection tests, add practical reflection prompts that users can save or copy.
- Keep result copy non-diagnostic and non-clinical.

Success signal:

- Tool completion rate can be measured by page.
- Low-completion pages can be redesigned before being judged as SEO failures.
- Share/copy events identify tools with natural distribution potential.

## P6: Add New Tools Selectively

Goal: add search demand without diluting topical authority.

Add tools only when they satisfy at least three conditions:

- The query has a clear task or self-reflection intent.
- The result can be generated with a transparent method.
- The page has a natural guide or hub to link from.
- It does not duplicate an existing page.
- It avoids high-risk diagnosis, treatment, legal, or financial claims.

Recommended next tool directions:

1. Sleep chronotype routine planner
2. Caffeine sensitivity self-check
3. Workout recovery readiness self-check
4. Emotional validation style self-check
5. Relationship apology readiness self-check
6. Personal values clarity self-check
7. Decision fatigue self-check
8. Meeting fatigue calculator or self-check

Avoid for now:

- Broad "depression test" or clinical screening terms.
- High-volume generic calculators already dominated by large incumbents unless there is a strong differentiated angle.
- Personality-label quizzes that cannot show method or boundaries.

## 30-Day Execution Plan

Week 1:

- Verify Search Console sitemap status and page indexing.
- Run core query audit and generated page validation.
- Upgrade 3 core pages: BMI, TDEE, Stress.
- Add completion/click event review for those pages.

Week 2:

- Upgrade 3 more core pages: Sleep Schedule, Anxiety, Procrastination.
- Create one stronger hub section for Mental Health and one for Emotional Connection.
- Prepare two guide drafts from P3.

Week 3:

- Upgrade Emotional Needs and Conflict Repair pages.
- Publish 2-3 new guides.
- Add or refine result share/copy language for 5 self-checks.

Week 4:

- Import Search Console data if enough impressions exist.
- Run CTR opportunity report.
- Launch up to three title/description tests.
- Decide whether any low-value supporting tool should be de-featured from homepage/category surfaces.

## 90-Day Target

- 28-day impressions: 28,000+
- 28-day clicks: 2,800+
- Measurable completion events for all core 12 pages.
- 14-16 guides live.
- At least 5 topic hubs have clear decision pathways.
- No uncontrolled cannibalization among close-intent tools.

## Official Google References

- Helpful, reliable, people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Structured data overview: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- Sitemaps overview: https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
