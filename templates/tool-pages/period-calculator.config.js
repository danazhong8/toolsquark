module.exports = {
  slug: "period-calculator",
  title: "Period Calculator | Cycle & Ovulation Estimate",
  description: "Estimate the next period, ovulation day, and fertile window from average cycle length. Includes assumptions, limits, and guidance for irregular cycles.",
  h1: "Period Calculator",
  hero: "Estimate next period date, ovulation day, and fertile window from your last period start date and average cycle length.",
  schemaName: "Privacy-First Period Calculator",
  schemaDescription: "A browser-side menstrual calendar estimate for the next period, approximate ovulation day, and fertile window, with clear limitations.",
  lastUpdated: "June 21, 2026",
  buttonText: "Calculate Cycle Window",
  resultHtml: `
            <div class="result-val"><span id="calc-output">--</span></div>
            <div class="result-status" id="calc-status">Next Period Estimate</div>
            <div class="bmi-gauge-container">
                <div class="bmi-pointer" id="gauge-pointer"></div>
                <div class="bmi-gauge-bar"></div>
                <div class="bmi-labels"><span>Short</span><span>Typical</span><span>Long</span></div>
            </div>
            <p class="result-desc" id="calc-desc"></p>
            <div class="suggestion-box">
                <h4>Cycle Insight</h4>
                <p id="calc-suggestion"></p>
            </div>`,
  controlsHtml: `
        <div class="input-group">
            <label for="input_lmp">Last Period Start Date</label>
            <div class="input-wrapper">
                <input type="date" id="input_lmp" style="padding-right:14px;">
            </div>
        </div>
        <div class="input-row">
            <div class="input-group">
                <label for="input_cycle">Average Cycle Length</label>
                <div class="input-wrapper"><input type="number" id="input_cycle" placeholder="e.g. 28" min="15" max="50" value="28"><span class="unit-badge">days</span></div>
            </div>
            <div class="input-group">
                <label for="input_period">Bleeding Duration</label>
                <div class="input-wrapper"><input type="number" id="input_period" placeholder="e.g. 5" min="1" max="14" value="5"><span class="unit-badge">days</span></div>
            </div>
        </div>`,
  relatedTitle: "Reproductive & Wellness Tools",
  related: [
    { href: "https://toolsquark.com/tools/due-date-calculator.html", title: "Due Date Calculator", description: "Estimate pregnancy timeline from last menstrual period.", action: "Estimate Due Date" },
    { href: "https://toolsquark.com/tools/stress-index-test.html", title: "Stress Index Test", description: "Stress can affect cycle regularity and symptom patterns.", action: "Assess Stress" }
  ],
  references: [
    { title: "Your Menstrual Cycle", publisher: "Office on Women's Health", href: "https://womenshealth.gov/menstrual-cycle/your-menstrual-cycle" },
    { title: "Trying to Conceive", publisher: "Office on Women's Health", href: "https://womenshealth.gov/pregnancy/you-get-pregnant/trying-conceive" }
  ],
  faq: [
    { question: "When does ovulation usually happen?", answer: "Ovulation often happens about 14 days before the next period starts, but this varies by person and cycle consistency." },
    { question: "What is a normal menstrual cycle length?", answer: "Many adult cycles fall between 21 and 35 days, with bleeding often lasting about 2 to 7 days. Persistent changes deserve clinical attention." },
    { question: "Can this be used as contraception?", answer: "No. Calendar estimates are not reliable birth control. Cycle timing can shift because of stress, illness, travel, medication, and hormonal conditions." }
  ],
  contentSections: [
    {
      title: "What This Calendar Estimates",
      body: `<p>The tool projects one future cycle from the last period start date and an average cycle length. It estimates the next period, an approximate ovulation date, and a six-day fertile window.</p><p>These are calendar estimates. Ovulation can shift even when previous cycles appeared regular, and bleeding is not always a menstrual period.</p>`
    },
    {
      title: "Formula And Variables",
      body: `<div class="formula-box">Next period = last period start + average cycle length<br>Estimated ovulation = next period - 14 days<br>Fertile window = ovulation - 5 days through ovulation + 1 day</div><p>The 14-day luteal-phase assumption is a planning shortcut, not a measurement of ovulation. The entered bleeding duration is shown as cycle context but does not change the predicted ovulation date.</p>`
    },
    {
      title: "Worked Example",
      body: `<p>With an LMP start on June 1 and a 28-day average cycle, the next period is projected for June 29. Ovulation is estimated around June 15, with a fertile window of roughly June 10 through June 16.</p>`
    },
    {
      title: "Why Predictions Move",
      body: `<p>Stress, illness, travel, sleep changes, breastfeeding, perimenopause, medications, weight change, and hormonal conditions can alter cycle length or ovulation timing. Averaging several recent cycles is more informative than relying on one month.</p><div class="note-box">Do not use this calendar alone to prevent pregnancy. If avoiding pregnancy, use a reliable contraceptive method and professional guidance.</div>`
    },
    {
      title: "When To Get Medical Advice",
      body: `<p>Seek qualified care for possible pregnancy, very heavy bleeding, severe pain, bleeding between periods, cycles that change persistently, or periods that stop unexpectedly. Adolescents, postpartum users, and people approaching menopause may need different context.</p>`
    }
  ],
  methodology: "This tool estimates the next period by adding average cycle length to the last period start date, then estimates ovulation as about 14 days before the next period.",
  disclaimer: "Cycle predictions are educational estimates and should not be used as contraception, diagnosis, or fertility treatment guidance. Consult a qualified clinician for irregular bleeding, missed periods, severe pain, or pregnancy concerns.",
  script: `
function formatDate(date) {
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
function addDays(date, days) {
    const next = new Date(date);
    next.setDate(next.getDate() + days);
    return next;
}
function calculateNow() {
    const value = document.getElementById('input_lmp').value;
    const cycle = parseInt(document.getElementById('input_cycle').value, 10);
    const period = parseInt(document.getElementById('input_period').value, 10);
    if (!value || isNaN(cycle) || isNaN(period) || cycle < 15 || cycle > 50 || period < 1 || period > 14 || period >= cycle) {
        alert('Please enter a valid start date, cycle length, and bleeding duration.');
        return;
    }
    const lmp = new Date(value + 'T00:00:00');
    const nextPeriod = addDays(lmp, cycle);
    const ovulation = addDays(nextPeriod, -14);
    const fertileStart = addDays(ovulation, -5);
    const fertileEnd = addDays(ovulation, 1);
    const cleanWindow = cycle - period;
    const percent = Math.min(95, Math.max(5, ((cycle - 21) / 14) * 90 + 5));
    let status = '';
    let color = 'var(--normal)';
    let suggestion = '';
    if (cycle < 25) {
        status = 'Shorter Cycle Pattern';
        color = 'var(--underweight)';
        suggestion = 'Shorter cycles may still be normal for some people, but repeated sudden changes are worth tracking and discussing with a clinician.';
    } else if (cycle <= 32) {
        status = 'Typical Cycle Pattern';
        color = 'var(--normal)';
        suggestion = 'Keep logging actual start dates for a more personalized estimate over the next several cycles.';
    } else {
        status = 'Longer Cycle Pattern';
        color = 'var(--overweight)';
        suggestion = 'Longer or irregular cycles can be influenced by stress, weight change, thyroid issues, PCOS, or other factors. Track patterns over time.';
    }
    document.getElementById('result-area').style.display = 'block';
    document.getElementById('calc-output').innerText = formatDate(nextPeriod);
    document.getElementById('calc-output').style.color = color;
    document.getElementById('calc-status').innerText = status;
    document.getElementById('calc-status').style.color = color;
    document.getElementById('calc-desc').innerText = \`Estimated ovulation date: \${formatDate(ovulation)}. Estimated fertile window: \${formatDate(fertileStart)} to \${formatDate(fertileEnd)}. Estimated non-bleeding window length: \${cleanWindow} days.\`;
    document.getElementById('calc-suggestion').innerText = suggestion;
    document.getElementById('gauge-pointer').style.left = percent + '%';
    document.getElementById('result-area').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}`
};
