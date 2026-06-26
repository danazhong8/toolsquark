module.exports = {
  categoryHref: "lifestyle.html",
  categoryLabel: "Lifestyle Tools",
  slug: "sleep-debt-calculator",
  title: "Sleep Debt Calculator | Estimate Your Weekly Sleep Deficit",
  description: "Calculate sleep debt from your target sleep, recent average sleep, and number of nights. Estimate your weekly sleep deficit with private browser-side math.",
  h1: "Sleep Debt Calculator",
  hero: "Estimate your recent sleep debt from a target sleep duration, your actual average sleep, and the number of nights you want to review.",
  schemaName: "Privacy-First Sleep Debt Calculator",
  schemaDescription: "A browser-side sleep debt calculator that estimates accumulated sleep deficit from target sleep, actual average sleep, and review period.",
  lastUpdated: "June 26, 2026",
  buttonText: "Calculate Sleep Debt",
  resultHtml: `
            <div class="result-val"><span id="calc-output">0</span><span class="result-unit">hours</span></div>
            <div class="result-status" id="calc-status">Estimated Sleep Debt</div>
            <p class="result-desc" id="calc-desc"></p>
            <div class="suggestion-box">
                <h4>Recovery Planning Note</h4>
                <p id="calc-suggestion"></p>
            </div>`,
  controlsHtml: `
        <div class="input-row">
            <div class="input-group">
                <label for="input_target_sleep">Target Sleep Per Night</label>
                <div class="input-wrapper">
                    <input type="number" id="input_target_sleep" value="8" min="4" max="12" step="0.25">
                    <span class="unit-badge">hours</span>
                </div>
            </div>
            <div class="input-group">
                <label for="input_actual_sleep">Recent Average Sleep</label>
                <div class="input-wrapper">
                    <input type="number" id="input_actual_sleep" value="6.5" min="0" max="14" step="0.25">
                    <span class="unit-badge">hours</span>
                </div>
            </div>
        </div>
        <div class="input-group">
            <label for="input_nights">Review Period</label>
            <div class="input-wrapper">
                <select id="input_nights">
                    <option value="3">Last 3 nights</option>
                    <option value="5">Last 5 nights</option>
                    <option value="7" selected>Last 7 nights</option>
                    <option value="14">Last 14 nights</option>
                </select>
            </div>
        </div>`,
  relatedTitle: "Plan The Next Step",
  related: [
    { href: "https://toolsquark.com/tools/sleep-calculator.html", title: "Sleep Schedule Calculator", description: "Turn a sleep target into a practical bedtime or wake-time plan.", action: "Plan Sleep" },
    { href: "https://toolsquark.com/tools/sleep-quality-assessment.html", title: "Sleep Pattern Self-Check", description: "Review sleep continuity, restoration, and daytime impact.", action: "Review Sleep" }
  ],
  references: [
    { title: "About Sleep", publisher: "Centers for Disease Control and Prevention", href: "https://www.cdc.gov/sleep/about/index.html" },
    { title: "Healthy Sleep Habits", publisher: "National Heart, Lung, and Blood Institute", href: "https://www.nhlbi.nih.gov/health/sleep-deprivation/healthy-sleep-habits" }
  ],
  faq: [
    { question: "What is sleep debt?", answer: "Sleep debt is the gap between how much sleep you aimed to get and how much sleep you actually got over a period of time. This calculator estimates that gap in hours." },
    { question: "How do I calculate weekly sleep debt?", answer: "Subtract your recent average sleep from your target sleep, then multiply the nightly gap by the number of nights. If you slept more than your target, this calculator shows zero debt rather than a negative number." },
    { question: "How much sleep should adults target?", answer: "The CDC notes that most adults need at least 7 hours of sleep per night. Individual needs vary, so use a realistic target that fits your age, health, and daytime functioning." },
    { question: "Can I repay sleep debt in one weekend?", answer: "Extra sleep can help after short restriction, but a large or repeated deficit is usually better addressed by improving the regular schedule rather than relying only on catch-up days." },
    { question: "Can this diagnose a sleep disorder?", answer: "No. This is an educational planning estimate. Persistent insomnia, loud snoring, breathing pauses, unsafe sleepiness, or major daytime impairment deserves qualified evaluation." }
  ],
  contentSections: [
    {
      title: "What This Calculator Estimates",
      body: `<p>This sleep debt calculator estimates the accumulated gap between your target sleep duration and your recent average sleep. It is designed for quick planning, not sleep-stage analysis or diagnosis.</p><p>Use a recent average from a sleep diary, wearable, or honest estimate. A typical week is usually more useful than a single unusually bad night.</p>`
    },
    {
      title: "Sleep Debt Formula",
      body: `<div class="formula-box">Nightly sleep gap = max(0, target sleep - actual average sleep)<br>Total sleep debt = nightly sleep gap x number of nights</div><p>The calculator never reports negative sleep debt. If your average sleep meets or exceeds the target, the result is shown as zero for the selected review period.</p>`
    },
    {
      title: "Worked Example",
      body: `<p>If your target is 8 hours, your recent average is 6.5 hours, and you review 7 nights, the nightly gap is 1.5 hours. The estimated sleep debt is 1.5 x 7 = 10.5 hours.</p>`
    },
    {
      title: "How To Use The Result",
      body: `<p>A small deficit may point to one or two short nights. A larger repeated deficit suggests the regular schedule may need adjustment, such as an earlier wind-down, a more realistic wake time, or fewer late-night obligations.</p><div class="note-box">Treat the number as a planning signal. Sleep quality, timing, awakenings, consistency, and daytime alertness can matter as much as total hours.</div>`
    },
    {
      title: "When Sleep Debt Is Not The Whole Story",
      body: `<p>This tool cannot explain why sleep is short or unrefreshing. Stress, caffeine timing, shift work, caregiving, pain, breathing issues, medication, alcohol, and irregular schedules can all affect sleep. Seek qualified support when sleep problems persist or affect safety.</p>`
    }
  ],
  methodology: "This tool subtracts recent average sleep from target sleep, floors the nightly gap at zero, then multiplies the gap by the selected number of nights.",
  disclaimer: "Sleep debt is an educational estimate, not a diagnosis. It does not evaluate sleep disorders, sleep quality, circadian rhythm, or clinical risk.",
  script: `
function formatHours(value) {
    const hours = Math.floor(value);
    const minutes = Math.round((value - hours) * 60);
    if (minutes === 0) return hours + ' hours';
    return hours + ' hours ' + minutes + ' minutes';
}
function calculateNow() {
    const target = parseFloat(document.getElementById('input_target_sleep').value);
    const actual = parseFloat(document.getElementById('input_actual_sleep').value);
    const nights = parseInt(document.getElementById('input_nights').value, 10);
    if (isNaN(target) || isNaN(actual) || isNaN(nights) || target < 4 || target > 12 || actual < 0 || actual > 14) {
        alert('Please enter a target between 4 and 12 hours and a recent average between 0 and 14 hours.');
        return;
    }
    const nightlyGap = Math.max(0, target - actual);
    const debt = nightlyGap * nights;
    let status = 'No Estimated Sleep Debt';
    let suggestion = 'Your recent average meets the target you entered. Keep checking sleep quality, consistency, and daytime alertness.';
    if (debt > 0 && debt < 5) {
        status = 'Small Estimated Sleep Debt';
        suggestion = 'A small deficit may improve with one or two earlier nights, but keep the regular schedule realistic.';
    } else if (debt < 10 && debt > 0) {
        status = 'Moderate Estimated Sleep Debt';
        suggestion = 'Consider moving bedtime earlier in small steps and protecting wake-time consistency for the next week.';
    } else if (debt >= 10) {
        status = 'Larger Estimated Sleep Debt';
        suggestion = 'A larger repeated gap is usually a schedule-design problem, not just a weekend catch-up problem. Review timing, obligations, caffeine, stress, and recovery.';
    }
    document.getElementById('result-area').style.display = 'block';
    document.getElementById('calc-output').innerText = debt.toFixed(debt % 1 ? 1 : 0);
    document.getElementById('calc-status').innerText = status;
    document.getElementById('calc-desc').innerText = 'Your nightly sleep gap is ' + formatHours(nightlyGap) + ' across ' + nights + ' nights, for an estimated total deficit of ' + formatHours(debt) + '.';
    document.getElementById('calc-suggestion').innerText = suggestion;
    document.getElementById('result-area').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}`
};
