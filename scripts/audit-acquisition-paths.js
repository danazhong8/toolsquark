const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const guides = require("../templates/guide-page-data");
const queryMap = JSON.parse(fs.readFileSync(path.join(root, "seo", "core-query-map.json"), "utf8"));

const errors = [];
const guideSlugs = new Set(guides.map((guide) => guide.slug));
const homepageFeaturedGuides = [
  "metric-vs-imperial-bmi-formula",
  "mifflin-st-jeor-equation-explained",
  "bmr-vs-tdee-vs-calorie-goal",
  "maintenance-calories-vs-calorie-deficit"
];
const guideHubHeadings = [
  "Start With These Decision Guides",
  "Body Metrics &amp; Energy Planning",
  "Sleep &amp; Daily Movement",
  "Stress, Anxiety &amp; Follow-Through",
  "Digital Habits",
  "Relationships &amp; Emotional Connection"
];
const supplementalToolGuides = {
  "bmr-calculator": "bmr-vs-rmr-vs-tdee",
  "maintenance-calorie-calibration-calculator": "bmr-vs-tdee-vs-calorie-goal",
  "weight-trend-smoothing-calculator": "bmr-vs-tdee-vs-calorie-goal",
  "protein-calculator": "protein-per-meal-vs-daily-protein",
  "protein-per-meal-calculator": "protein-per-meal-vs-daily-protein",
  "sleep-debt-calculator": "sleep-debt-vs-sleep-quality",
  "sleep-consistency-calculator": "sleep-debt-vs-sleep-quality",
  "sleep-inertia-calculator": "sleep-debt-vs-sleep-quality",
  "nap-duration-calculator": "sleep-schedule-and-sleep-quality",
  "screen-free-bedtime-planner": "sleep-debt-vs-sleep-quality",
  "relationship-check-in-planner": "identify-and-communicate-emotional-needs",
  "notification-load-self-check": "smartphone-use-vs-social-media-use",
  "task-initiation-friction-self-check": "procrastination-vs-follow-through",
  "boundary-clarity-self-check": "identify-and-communicate-emotional-needs",
  "daily-steps-goal-calculator": "how-to-choose-a-realistic-daily-step-goal",
  "walking-time-to-steps-calculator": "how-to-choose-a-realistic-daily-step-goal",
  "walking-distance-to-steps-calculator": "how-to-choose-a-realistic-daily-step-goal",
  "steps-to-calories-converter": "how-to-choose-a-realistic-daily-step-goal",
  "exercise-calories-to-steps-calculator": "how-to-choose-a-realistic-daily-step-goal",
  "habit-restart-planner": "procrastination-vs-follow-through"
};

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function assertIncludes(html, needle, label) {
  if (!html.includes(needle)) errors.push(`${label}: missing ${needle}`);
}

const homepage = read("index.html");
for (const slug of homepageFeaturedGuides) {
  if (!guideSlugs.has(slug)) errors.push(`homepage featured guide is not defined: ${slug}`);
  assertIncludes(homepage, `guides/${slug}.html`, "homepage featured guides");
}

const guideHub = read("guides.html");
for (const heading of guideHubHeadings) assertIncludes(guideHub, heading, "guide hub headings");
for (const guide of guides) assertIncludes(guideHub, `guides/${guide.slug}.html`, "guide hub links");

for (const guide of guides) {
  const html = read(`guides/${guide.slug}.html`);
  for (const [toolSlug] of guide.tools) {
    assertIncludes(html, `../tools/${toolSlug}.html`, `${guide.slug} matching tools`);
  }
  for (const relatedSlug of guide.related) {
    if (!guideSlugs.has(relatedSlug)) errors.push(`${guide.slug}: related guide is missing from data: ${relatedSlug}`);
    assertIncludes(html, `${relatedSlug}.html`, `${guide.slug} related guides`);
  }
}

for (const page of queryMap.pages) {
  const toolHtml = read(page.path.replace(/^\//, ""));
  const guideSlug = path.basename(page.guidePath, ".html");
  assertIncludes(toolHtml, `../guides/${guideSlug}.html`, `${page.path} core matching guide`);
}

for (const [toolSlug, guideSlug] of Object.entries(supplementalToolGuides)) {
  const toolHtml = read(`tools/${toolSlug}.html`);
  assertIncludes(toolHtml, `../guides/${guideSlug}.html`, `${toolSlug} supplemental guide`);
}

if (errors.length) {
  errors.forEach((error) => console.error(`ERROR: ${error}`));
  process.exitCode = 1;
} else {
  console.log(`Acquisition path audit passed: ${homepageFeaturedGuides.length} homepage guides, ${guides.length} guide pages, ${queryMap.pages.length} core tool mappings, and ${Object.keys(supplementalToolGuides).length} supplemental mappings.`);
}
