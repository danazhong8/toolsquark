module.exports = {
  categoryHref: "lifestyle.html",
  categoryLabel: "Lifestyle Tools",
  slug: "caffeine-cutoff-calculator",
  title: "Caffeine Cutoff Calculator | When To Stop Coffee Before Bed",
  description: "Calculate a practical caffeine cutoff time from your bedtime and sensitivity. Estimate when to stop coffee or energy drinks before sleep.",
  h1: "Caffeine Cutoff Calculator",
  hero: "Estimate when to stop caffeine before bedtime based on your planned sleep time and caffeine sensitivity.",
  schemaName: "Privacy-First Caffeine Cutoff Calculator",
  schemaDescription: "A browser-side caffeine cutoff calculator for estimating when to stop caffeine before a planned bedtime.",
  lastUpdated: "June 26, 2026",
  buttonText: "Calculate Caffeine Cutoff",
  resultHtml: `
            <div class="result-val"><span id="calc-output">--:--</span></div>
            <div class="result-status" id="calc-status">Suggested Cutoff</div>
            <p class="result-desc" id="calc-desc"></p>
            <div class="suggestion-box">
                <h4>Sleep Planning Note</h4>
                <p id="calc-suggestion"></p>
            </div>`,
  controlsHtml: `
        <div class="input-row">
            <div class="input-group">
                <label for="input_bedtime">Planned Bedtime</label>
                <div class="input-wrapper"><input type="time" id="input_bedtime" value="22:30"></div>
            </div>
            <div class="input-group">
                <label for="input_sensitivity">Caffeine Sensitivity</label>
                <div class="input-wrapper">
                    <select id="input_sensitivity">
                        <option value="6">Typical sensitivity - 6 hours</option>
                        <option value="8">Sensitive - 8 hours</option>
                        <option value="10">Very sensitive - 10 hours</option>
                        <option value="4">Low sensitivity - 4 hours</option>
                    </select>
                </div>
            </div>
        </div>`,
  relatedTitle: "Improve Sleep Timing",
  related: [
    { href: "https://toolsquark.com/tools/sleep-calculator.html", title: "Sleep Schedule Calculator", description: "Plan bedtime or wake time from a target sleep duration.", action: "Plan Sleep" },
    { href: "https://toolsquark.com/tools/sleep-debt-calculator.html", title: "Sleep Debt Calculator", description: "Estimate recent sleep deficit from target and actual sleep.", action: "Estimate Debt" }
  ],
  references: [
    { title: "Healthy Sleep Habits", publisher: "National Heart, Lung, and Blood Institute", href: "https://www.nhlbi.nih.gov/health/sleep-deprivation/healthy-sleep-habits" },
    { title: "About Sleep", publisher: "Centers for Disease Control and Prevention", href: "https://www.cdc.gov/sleep/about/index.html" }
  ],
  faq: [
    { question: "When should I stop drinking coffee before bed?", answer: "Many people use a 6-hour caffeine cutoff as a starting point, but sensitivity varies. This calculator lets you compare 4, 6, 8, or 10 hours before bedtime." },
    { question: "Does caffeine affect everyone the same way?", answer: "No. Timing, dose, genetics, medication, pregnancy, tolerance, and sleep pressure can all change how caffeine affects sleep." },
    { question: "Does this include tea, soda, and energy drinks?", answer: "Yes. The cutoff idea applies to any meaningful caffeine source, including coffee, tea, cola, energy drinks, pre-workout products, and some medicines." },
    { question: "Can this diagnose a sleep problem?", answer: "No. It is a planning tool. Persistent insomnia, unsafe sleepiness, or breathing-related sleep symptoms deserve qualified evaluation." }
  ],
  contentSections: [
    {
      title: "What The Calculator Does",
      body: `<p>This caffeine cutoff calculator subtracts a selected caffeine-free window from your planned bedtime. The result is a practical latest time to stop caffeine for that day.</p><p>It does not estimate blood caffeine levels or guarantee sleep quality. Use it as a schedule experiment.</p>`
    },
    {
      title: "Cutoff Formula",
      body: `<div class="formula-box">Caffeine cutoff time = planned bedtime - selected caffeine-free window</div><p>The default 6-hour window is a common starting point. Choose a longer window if caffeine tends to delay sleep, fragment sleep, or make sleep feel lighter.</p>`
    },
    {
      title: "Worked Example",
      body: `<p>If bedtime is 10:30 PM and you choose a 6-hour window, the suggested caffeine cutoff is 4:30 PM. With an 8-hour window, the cutoff becomes 2:30 PM.</p>`
    },
    {
      title: "How To Use The Result",
      body: `<p>Try the cutoff for several nights while keeping bedtime, wake time, alcohol, late meals, and screen habits as consistent as possible. If sleep still feels disrupted, test an earlier cutoff or review other sleep factors.</p>`
    }
  ],
  methodology: "This tool subtracts a user-selected caffeine-free window from a planned bedtime and formats the resulting clock time.",
  disclaimer: "Caffeine sensitivity varies. This educational calculator is not medical advice and cannot diagnose or treat sleep disorders.",
  script: `
function parseClock(value) {
    const parts = value.split(':').map(Number);
    return (parts[0] * 60) + parts[1];
}
function formatClock(totalMinutes) {
    const normalized = ((Math.round(totalMinutes) % 1440) + 1440) % 1440;
    const hours = Math.floor(normalized / 60);
    const minutes = normalized % 60;
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHour = hours % 12 || 12;
    return displayHour + ':' + String(minutes).padStart(2, '0') + ' ' + period;
}
function calculateNow() {
    const bedtime = document.getElementById('input_bedtime').value;
    const windowHours = parseFloat(document.getElementById('input_sensitivity').value);
    if (!bedtime || isNaN(windowHours)) {
        alert('Please enter a valid bedtime and cutoff window.');
        return;
    }
    const cutoff = parseClock(bedtime) - (windowHours * 60);
    document.getElementById('result-area').style.display = 'block';
    document.getElementById('calc-output').innerText = formatClock(cutoff);
    document.getElementById('calc-status').innerText = windowHours + '-Hour Caffeine Window';
    document.getElementById('calc-desc').innerText = 'For a ' + formatClock(parseClock(bedtime)) + ' bedtime, this leaves about ' + windowHours + ' hours without caffeine before bed.';
    document.getElementById('calc-suggestion').innerText = 'Treat this as a starting experiment. If sleep is still delayed or light, test a longer window for several nights.';
    document.getElementById('result-area').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}`
};
