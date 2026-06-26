module.exports = {
  categoryHref: "lifestyle.html",
  categoryLabel: "Lifestyle Tools",
  slug: "habit-consistency-calculator",
  title: "Habit Consistency Calculator | Weekly Follow-Through Rate",
  description: "Calculate habit consistency from planned and completed days. Estimate weekly or monthly follow-through rate without creating an account.",
  h1: "Habit Consistency Calculator",
  hero: "Calculate your habit consistency rate from planned days and completed days, then choose a realistic next adjustment.",
  schemaName: "Privacy-First Habit Consistency Calculator",
  schemaDescription: "A browser-side habit consistency calculator that estimates completion rate from planned and completed habit days.",
  lastUpdated: "June 26, 2026",
  buttonText: "Calculate Consistency",
  resultUnit: "%",
  resultStatus: "Consistency Rate",
  gaugeLabels: ["Low", "Building", "Stable"],
  insightTitle: "Next Adjustment",
  controlsHtml: `
        <div class="input-row">
            <div class="input-group">
                <label for="input_planned">Planned Habit Days</label>
                <div class="input-wrapper">
                    <input type="number" id="input_planned" value="7" min="1" max="365" step="1">
                    <span class="unit-badge">days</span>
                </div>
            </div>
            <div class="input-group">
                <label for="input_completed">Completed Days</label>
                <div class="input-wrapper">
                    <input type="number" id="input_completed" value="5" min="0" max="365" step="1">
                    <span class="unit-badge">days</span>
                </div>
            </div>
        </div>`,
  relatedTitle: "Understand The Pattern",
  related: [
    { href: "https://toolsquark.com/tools/self-discipline-test.html", title: "Follow-Through Pattern Self-Check", description: "Review consistency, starting friction, and restarting after lapses.", action: "Review Pattern" },
    { href: "https://toolsquark.com/tools/procrastination-test.html", title: "Procrastination Pattern Self-Check", description: "Review task delay and avoidance patterns.", action: "Review Delay" }
  ],
  references: [
    { title: "Physical Activity Guidelines for Adults", publisher: "Centers for Disease Control and Prevention", href: "https://www.cdc.gov/physical-activity-basics/guidelines/adults.html" }
  ],
  faq: [
    { question: "How do I calculate habit consistency?", answer: "Divide completed days by planned days, then multiply by 100. For example, 5 completed days out of 7 planned days equals 71.4% consistency." },
    { question: "Is 100% consistency necessary?", answer: "No. A habit can be useful without being perfect. A repeatable 70-85% routine is often more informative than a short perfect streak that collapses." },
    { question: "What if I completed more days than planned?", answer: "The calculator caps consistency at 100% and treats extra days as a sign that the plan may be easier than expected or that the habit is already well established." }
  ],
  contentSections: [
    {
      title: "What This Calculator Measures",
      body: `<p>This tool calculates the percentage of planned habit days that were completed. It works for weekly, monthly, or custom review windows.</p><p>It does not judge motivation or discipline. It simply turns follow-through into a visible rate.</p>`
    },
    {
      title: "Formula Used",
      body: `<div class="formula-box">Habit consistency = completed days / planned days x 100</div><p>The displayed result is capped at 100% so extra completions do not hide whether the original plan was realistic.</p>`
    },
    {
      title: "Worked Example",
      body: `<p>If you planned 7 walks and completed 5, your consistency rate is 5 / 7 x 100 = 71.4%.</p>`
    },
    {
      title: "How To Use The Result",
      body: `<p>Below 50% often means the habit may be too large, poorly timed, or missing a clear trigger. Around 70-85% suggests the routine is forming. Near 100% may mean the habit is stable or ready for a small progression.</p>`
    }
  ],
  methodology: "This calculator divides completed habit days by planned habit days, multiplies by 100, caps the displayed rate at 100%, and maps the result to editorial planning bands.",
  disclaimer: "Habit consistency is a planning metric, not a measure of character, willpower, or mental health.",
  script: `
function calculateNow() {
    const planned = parseInt(document.getElementById('input_planned').value, 10);
    const completed = parseInt(document.getElementById('input_completed').value, 10);
    if (isNaN(planned) || isNaN(completed) || planned <= 0 || completed < 0 || completed > 365) {
        alert('Please enter valid planned and completed day counts.');
        return;
    }
    const rateRaw = completed / planned * 100;
    const rate = Math.min(100, rateRaw);
    let status = 'Low Consistency';
    let suggestion = 'Make the habit smaller, attach it to a clearer cue, or reduce the planned frequency for the next review window.';
    if (rate >= 50 && rate < 85) {
        status = 'Building Consistency';
        suggestion = 'Keep the plan stable and identify what made completed days easier to repeat.';
    } else if (rate >= 85) {
        status = 'Stable Consistency';
        suggestion = 'The habit appears repeatable. Consider a small progression only if it still feels sustainable.';
    }
    const result = {
        status,
        color: rate >= 85 ? 'var(--normal)' : rate >= 50 ? 'var(--overweight)' : 'var(--obese)',
        desc: completed + ' completed days out of ' + planned + ' planned days equals ' + rate.toFixed(1) + '% consistency.',
        suggestion,
        percent: Math.min(95, Math.max(5, rate))
    };
    document.getElementById('result-area').style.display = 'block';
    document.getElementById('calc-output').innerText = rate.toFixed(1);
    document.getElementById('calc-output').style.color = result.color;
    document.getElementById('calc-status').innerText = result.status;
    document.getElementById('calc-status').style.color = result.color;
    document.getElementById('calc-desc').innerText = result.desc;
    document.getElementById('calc-suggestion').innerText = result.suggestion;
    document.getElementById('gauge-pointer').style.left = result.percent + '%';
    document.getElementById('result-area').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}`
};
