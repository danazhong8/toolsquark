const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const http = require("node:http");
const { chromium } = require(process.env.PLAYWRIGHT_MODULE_PATH || "playwright");

const root = path.resolve(__dirname, "..");
const outputDir = process.env.TOOL_SCREENSHOT_DIR;
const slugs = ["water-intake-calculator", "due-date-calculator", "walking-time-to-steps-calculator"];
const expectedTitles = [
  "Water Intake Calculator | Daily Hydration & Fluid Needs | ToolsQuark",
  "Pregnancy Due Date Calculator | LMP Estimate",
  "45 Minute Walk To Steps Calculator | 30-90 Min"
];

function dateBefore(days, today = "2026-10-10") {
  const date = new Date(today + "T12:00:00Z");
  date.setUTCDate(date.getUTCDate() - days);
  return date.toISOString().slice(0, 10);
}

async function main() {
  const server = http.createServer((req, res) => {
    const pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    const file = path.resolve(root, "." + pathname);
    if (!file.startsWith(root + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
      res.writeHead(404).end();
      return;
    }
    res.setHeader("Content-Type", file.endsWith(".html") ? "text/html; charset=utf-8" : "image/png");
    res.end(fs.readFileSync(file));
  });
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  let browser;
  const errors = [];
  let checks = 0;
  try {
    browser = await chromium.launch({ headless: true, ...(process.env.TOOL_BROWSER_CHANNEL ? { channel: process.env.TOOL_BROWSER_CHANNEL } : {}) });
    const context = await browser.newContext({ locale: "en-US", timezoneId: "America/New_York" });
    const origin = `http://127.0.0.1:${server.address().port}`;
    await context.route("**/*", (route) => new URL(route.request().url()).origin === origin ? route.continue() : route.abort());
    if (outputDir) fs.mkdirSync(outputDir, { recursive: true });

    async function open(slug, time = "2026-10-10T16:00:00Z") {
      const page = await context.newPage();
      await page.clock.install({ time: new Date(time) });
      page.on("pageerror", (error) => errors.push(`${slug}: ${error.message}`));
      page.on("dialog", async (dialog) => { await dialog.dismiss(); });
      await page.addInitScript(() => {
        window.toolEvents = [];
        window.addEventListener("toolsquark:tool", (event) => window.toolEvents.push(event.detail));
        Object.defineProperty(navigator, "clipboard", { value: { writeText: async (text) => { window.copiedSummary = text; } }, configurable: true });
      });
      await page.goto(`${origin}/tools/${slug}.html`);
      return page;
    }

    async function text(page, selector, expected) {
      assert.equal((await page.locator(selector).innerText()).trim(), expected);
      checks += 1;
    }

    async function calculate(page) {
      await page.locator(".calc-submit-btn").click();
      await page.evaluate(() => new Promise(requestAnimationFrame));
    }

    async function hidden(page) {
      assert.equal(await page.locator("#result-area").isVisible(), false);
      checks += 1;
    }

    async function copy(page, expected) {
      await page.locator(".share-copy-btn").click();
      await text(page, "#share-copy-status", "Copied");
      const summary = await page.evaluate(() => window.copiedSummary);
      assert.ok(summary.includes(expected));
      assert.ok(summary.includes("https://toolsquark.com/tools/"));
      checks += 2;
    }

    async function safeEvents(page) {
      const events = await page.evaluate(() => window.toolEvents);
      assert.equal(events.filter((event) => event.name === "tool_start").length, 1);
      assert.equal(events.filter((event) => event.name === "tool_complete").length, 1);
      for (const event of events) assert.deepEqual(Object.keys(event.data).sort(), ["tool", "type"]);
      checks += 3;
    }

    const water = await open(slugs[0]);
    await calculate(water);
    await hidden(water);
    assert.ok(!(await water.evaluate(() => window.toolEvents)).some((event) => event.name === "tool_complete"));
    await water.locator("#input_weight").fill("70");
    await water.locator("#input_activity").fill("30");
    await calculate(water);
    await text(water, "#calc-output", "2.80");
    await text(water, "#water-cups", "11.8");
    await text(water, "#water-ounces", "94.7");
    await text(water, "#water-baseline", "2.45 L");
    await text(water, "#water-exercise", "0.35 L");
    assert.equal(await water.locator("#gauge-pointer").count(), 0);
    await copy(water, "not a plain-water prescription");
    await safeEvents(water);
    await water.locator("#tab-imperial").focus();
    await water.keyboard.press("Enter");
    await hidden(water);
    assert.equal(await water.locator("#tab-imperial").getAttribute("aria-pressed"), "true");
    assert.ok(Math.abs(Number(await water.locator("#input_weight").inputValue()) - 154.32) < 0.01);
    assert.equal(await water.locator("#input_activity").inputValue(), "30");
    await calculate(water);
    await text(water, "#calc-output", "2.80");
    await water.locator("#input_gender").selectOption("female");
    await water.locator("#tab-metric").click();
    assert.equal(await water.locator("#input_gender").inputValue(), "female");
    await water.locator("#input_weight").fill("60");
    await water.locator("#input_activity").fill("");
    await calculate(water);
    await text(water, "#calc-output", "1.86");
    await water.locator("#input_activity").fill("-1");
    await calculate(water);
    await hidden(water);
    await water.locator("#input_activity").fill("1441");
    await calculate(water);
    await hidden(water);
    await water.locator("#input_weight").fill("1e309");
    await calculate(water);
    await hidden(water);
    await water.close();

    const due = await open(slugs[1]);
    await due.locator("#input_lmp").fill("2026-01-01");
    await calculate(due);
    await text(due, "#calc-output", "October 8, 2026");
    await text(due, "#due-age", "40 weeks 2 days");
    await text(due, "#due-remaining", "2 days past estimated date");
    await copy(due, "October 8, 2026");
    await safeEvents(due);
    await due.evaluate(() => { navigator.clipboard.writeText = async () => { throw new Error("Clipboard unavailable"); }; });
    await due.locator(".share-copy-btn").click();
    await text(due, "#share-copy-status", "Copy failed");
    for (const [days, trimester] of [[97, "First Trimester"], [98, "Second Trimester"], [195, "Second Trimester"], [196, "Third Trimester"]]) {
      await due.locator("#input_lmp").fill(dateBefore(days));
      await hidden(due);
      await calculate(due);
      await text(due, "#due-trimester", trimester);
    }
    await due.locator("#input_lmp").fill("2026-10-11");
    await calculate(due);
    await hidden(due);
    await due.locator("#input_lmp").fill(dateBefore(309));
    await calculate(due);
    await hidden(due);
    await due.close();
    for (const [time, lmp, expectedDate, age] of [
      ["2024-10-01T16:00:00Z", "2024-01-01", "October 7, 2024", "39 weeks 1 day"],
      ["2026-03-10T16:00:00Z", "2026-01-01", "October 8, 2026", "9 weeks 5 days"]
    ]) {
      const page = await open(slugs[1], time);
      await page.locator("#input_lmp").fill(lmp);
      await calculate(page);
      await text(page, "#calc-output", expectedDate);
      await text(page, "#due-age", age);
      await page.close();
    }

    const walking = await open(slugs[2]);
    for (const [pace, output] of [["110", "4,950"], ["90", "4,050"], ["125", "5,625"]]) {
      await walking.locator("#input_pace").selectOption(pace);
      await calculate(walking);
      await text(walking, "#calc-output", output);
    }
    await walking.locator("#input_pace").selectOption("custom");
    assert.ok(await walking.locator("#input_cadence").isVisible());
    await calculate(walking);
    await hidden(walking);
    await walking.locator("#input_cadence").fill("120");
    await calculate(walking);
    await text(walking, "#calc-output", "5,400");
    await copy(walking, "120 steps per minute");
    await safeEvents(walking);
    for (const minutes of ["0.5", "301", ""]) {
      await walking.locator("#input_minutes").fill(minutes);
      await calculate(walking);
      await hidden(walking);
    }
    await walking.locator("#input_minutes").fill("45");
    await walking.locator("#input_cadence").fill("301");
    await calculate(walking);
    await hidden(walking);
    await walking.close();

    for (const width of [320, 390, 768, 1440]) {
      for (const [index, slug] of slugs.entries()) {
        const page = await open(slug);
        await page.setViewportSize({ width, height: width > 768 ? 960 : 844 });
        assert.equal(await page.title(), expectedTitles[index]);
        const buttonBottom = await page.locator(".calc-submit-btn").evaluate((button) => button.getBoundingClientRect().bottom);
        assert.ok(buttonBottom <= (width > 768 ? 960 : 844), `${slug} at ${width}: initial calculate button below viewport`);
        if (outputDir) await page.screenshot({ path: path.join(outputDir, `${slug}-${width}-input.png`) });
        if (index === 0) {
          await page.locator("#input_weight").fill("70");
          await page.locator("#input_activity").fill("30");
        } else if (index === 1) await page.locator("#input_lmp").fill("2026-07-01");
        else {
          await page.locator("#input_pace").selectOption("custom");
          await page.locator("#input_cadence").fill("120");
        }
        await calculate(page);
        await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 600)));
        const geometry = await page.evaluate(() => ({
          viewport: window.innerWidth,
          width: document.documentElement.scrollWidth,
          output: document.getElementById("calc-output").getBoundingClientRect().toJSON(),
          result: document.getElementById("result-area").getBoundingClientRect().toJSON()
        }));
        assert.ok(geometry.width <= geometry.viewport + 1, `${slug} at ${width}: horizontal overflow ${JSON.stringify(geometry)}`);
        assert.ok(geometry.output.x >= geometry.result.x - 1 && geometry.output.right <= geometry.result.right + 1, `${slug}: result text overflow`);
        assert.ok(await page.locator(".visual-guide-card img").evaluate((img) => img.complete && img.naturalWidth > 0));
        if (outputDir) await page.screenshot({ path: path.join(outputDir, `${slug}-${width}-result.png`) });
        checks += 5;
        await page.close();
      }
    }
    assert.deepEqual(errors, [], "Browser JavaScript errors");
    console.log(`Priority tool regression passed: ${checks} assertions; calculations, units, dates, copy summaries, privacy-safe completion events and 12 responsive cases.`);
  } finally {
    if (browser) await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
