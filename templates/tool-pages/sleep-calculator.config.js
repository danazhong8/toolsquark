module.exports = {
  slug: "sleep-calculator",
  title: "Accurate Sleep Calculator | Optimal Bedtime & Cycle Planner | ToolsQuark",
  description: "Calculate your optimal wake-up times or bedtime schedules based on standard 90-minute human sleep cycles and circadian rhythm alignment.",
  h1: "Sleep Calculator",
  hero: "Convert a target sleep duration into complete 90-minute sleep cycles with a practical falling-asleep allowance.",
  schemaName: "Privacy-First Sleep Cycle Calculator",
  buttonText: "Calculate Sleep Cycles",
  resultUnit: "min",
  resultStatus: "Sleep Window",
  gaugeLabels: ["Short", "Ideal", "Long"],
  insightTitle: "Sleep Strategy",
  controlsHtml: `
        <div class="input-group">
            <label for="input_hours">Target Sleep Duration</label>
            <div class="input-wrapper">
                <input type="number" id="input_hours" step="0.5" min="2" max="16" placeholder="e.g. 7.5">
                <span class="unit-badge">hours</span>
            </div>
        </div>`,
  relatedTitle: "Support Recovery",
  related: [
    { href: "https://www.toolsquark.com/tools/stress-index-test.html", title: "Stress Index Test", description: "Check whether stress load may be affecting sleep quality.", action: "Assess Stress" },
    { href: "https://www.toolsquark.com/tools/water-intake-calculator.html", title: "Water Intake Calculator", description: "Plan daytime hydration without overloading fluid intake before bed.", action: "Check Hydration" }
  ],
  faq: [
    { question: "What is a sleep cycle?", answer: "A complete sleep cycle is often described as lasting roughly 90 minutes and includes light sleep, deeper sleep, and REM stages." },
    { question: "Why can I feel tired after 8 hours?", answer: "You may wake during a deeper stage instead of near the end of a cycle. Cycle timing can help, though sleep quality and consistency matter too." },
    { question: "Does everyone have exactly 90-minute cycles?", answer: "No. Cycle length varies by person, age, sleep pressure, and night timing. This calculator uses 90 minutes as a simple planning estimate." }
  ],
  methodology: "This tool rounds your target sleep duration to the nearest whole 90-minute cycle and adds a 15-minute sleep-latency allowance.",
  disclaimer: "Sleep timing tools are educational and cannot diagnose insomnia, sleep apnea, circadian rhythm disorders, or other sleep conditions.",
  script: `
function calculateNow() {
    const hours = parseFloat(document.getElementById('input_hours').value);
    if (isNaN(hours) || hours <= 0) {
        alert('Please enter a valid target sleep duration.');
        return;
    }
    const targetMinutes = hours * 60;
    let cycles = Math.round((targetMinutes - 15) / 90);
    if (cycles < 1) cycles = 1;
    const finalMinutes = (cycles * 90) + 15;
    let result = {};
    if (finalMinutes < 375) {
        result = { status: 'Restricted Sleep Window', color: 'var(--underweight)', desc: \`Your calculated window is \${finalMinutes} minutes, equal to \${cycles} complete sleep cycle\${cycles === 1 ? '' : 's'} plus a 15-minute falling-asleep allowance.\`, suggestion: 'Avoid relying on short sleep chronically. Keep the room dark, reduce screens before bed, and protect recovery when possible.', percent: Math.max(5, finalMinutes / 375 * 30) };
    } else if (finalMinutes <= 555) {
        result = { status: 'Ideal Sleep Architecture', color: 'var(--normal)', desc: \`Your calculated window is \${finalMinutes} minutes, equal to \${cycles} complete sleep cycles plus a 15-minute falling-asleep allowance.\`, suggestion: 'This is a strong planning range for many adults. Consistent wake time usually matters as much as total duration.', percent: 30 + ((finalMinutes - 375) / 180) * 40 };
    } else {
        result = { status: 'Extended Sleep Window', color: 'var(--overweight)', desc: \`Your calculated window is \${finalMinutes} minutes, equal to \${cycles} complete sleep cycles plus a 15-minute falling-asleep allowance.\`, suggestion: 'Long sleep can help after intense training or sleep debt. If you constantly need more than 9 hours, consider reviewing sleep quality.', percent: Math.min(95, 70 + (Math.min(finalMinutes - 555, 240) / 240) * 25) };
    }
    document.getElementById('result-area').style.display = 'block';
    document.getElementById('calc-output').innerText = finalMinutes.toLocaleString();
    document.getElementById('calc-output').style.color = result.color;
    document.getElementById('calc-status').innerText = result.status;
    document.getElementById('calc-status').style.color = result.color;
    document.getElementById('calc-desc').innerText = result.desc;
    document.getElementById('calc-suggestion').innerText = result.suggestion;
    document.getElementById('gauge-pointer').style.left = result.percent + '%';
    document.getElementById('result-area').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}`
};
