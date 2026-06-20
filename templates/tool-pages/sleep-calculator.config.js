module.exports = {
  slug: "sleep-calculator",
  title: "Sleep Cycle Calculator | 90-Minute Planning Estimate",
  description: "Turn a target sleep duration into a rough 90-minute-cycle planning window with a 15-minute latency allowance. See limits and sleep guidance.",
  h1: "Sleep Calculator",
  hero: "Convert a target duration into a rough 90-minute-cycle planning window. Real cycles vary, so total sleep, consistency, and sleep quality matter more than exact timing.",
  schemaName: "Privacy-First Sleep Cycle Calculator",
  schemaDescription: "A browser-side sleep planning calculator that rounds a target duration to 90-minute blocks and explains why real sleep cycles vary.",
  lastUpdated: "June 20, 2026",
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
    { href: "https://toolsquark.com/tools/stress-index-test.html", title: "Stress Index Test", description: "Check whether stress load may be affecting sleep quality.", action: "Assess Stress" },
    { href: "https://toolsquark.com/tools/water-intake-calculator.html", title: "Water Intake Calculator", description: "Plan daytime hydration without overloading fluid intake before bed.", action: "Check Hydration" }
  ],
  references: [
    { title: "About Sleep", publisher: "Centers for Disease Control and Prevention", href: "https://www.cdc.gov/sleep/about/index.html" },
    { title: "Sleep Phases and Stages", publisher: "National Heart, Lung, and Blood Institute", href: "https://www.nhlbi.nih.gov/health/sleep/stages-of-sleep" }
  ],
  faq: [
    { question: "What is a sleep cycle?", answer: "During sleep, the brain moves through non-REM and REM stages repeatedly. A cycle is often summarized as about 90 minutes, but the NHLBI notes that cycles typically restart every 80 to 100 minutes and change across the night." },
    { question: "Why can I feel tired after enough time in bed?", answer: "Time in bed is not the same as time asleep. Fragmentation, schedule changes, stress, substances, illness, sleep disorders, and waking from a deeper stage can all affect alertness." },
    { question: "Does everyone have exactly 90-minute cycles?", answer: "No. Cycle length varies between people and across the same night. This calculator uses 90 minutes only as a simple arithmetic planning convention." },
    { question: "How much sleep do adults need?", answer: "The CDC states that adults generally need at least 7 hours, with recommendations varying by age. Individual needs and health circumstances can differ." },
    { question: "Can this calculator diagnose a sleep problem?", answer: "No. Persistent insomnia, loud snoring, breathing pauses, excessive daytime sleepiness, or consistently unrefreshing sleep should be discussed with a qualified clinician." }
  ],
  contentSections: [
    {
      title: "What This Tool Actually Calculates",
      body: `<p>This is a duration-rounding tool. It subtracts a fixed 15-minute falling-asleep allowance from your target, rounds the remainder to the nearest 90-minute block, and then adds the 15 minutes back.</p><p>It does not calculate a bedtime, wake time, circadian phase, or the sleep stages you will experience. It also cannot know your actual sleep latency or awakenings.</p>`
    },
    {
      title: "Formula And Worked Example",
      body: `<div class="formula-box">Cycles = round((target minutes - 15) / 90)<br>Planning window = cycles x 90 + 15 minutes</div><p>For a target of 8 hours, the tool uses (480 - 15) / 90 = 5.17, rounds to 5 blocks, then returns 5 x 90 + 15 = 465 minutes, or 7 hours 45 minutes in bed.</p>`
    },
    {
      title: "Why 90 Minutes Is Only A Shortcut",
      body: `<p>Normal sleep alternates through non-REM and REM stages, but cycles are not identical clockwork units. The NHLBI describes cycles restarting about every 80 to 100 minutes, and more REM sleep generally occurs later in the night.</p><div class="note-box">Do not shorten adequate sleep just to land on a calculated cycle boundary. Consistent timing, enough total sleep, and treatment of sleep problems have stronger practical importance.</div>`
    },
    {
      title: "How To Use The Result",
      body: `<p>Treat the window as one scheduling option, then compare it with how long you actually take to fall asleep and how rested you feel. Protect a stable wake time where possible and allow extra time if you commonly lie awake or wake during the night.</p><p>Start by ensuring the schedule allows the age-appropriate amount of sleep recommended by public-health guidance rather than optimizing around 90-minute arithmetic.</p>`
    },
    {
      title: "When A Calculator Is Not Enough",
      body: `<p>Seek clinical guidance for persistent difficulty falling or staying asleep, loud snoring, witnessed breathing pauses, morning headaches, unsafe sleepiness, or sleep problems that impair daily life. A cycle estimate cannot diagnose insomnia, sleep apnea, circadian disorders, or other conditions.</p>`
    }
  ],
  methodology: "This tool subtracts a fixed 15-minute latency allowance, rounds the remaining target to the nearest 90-minute block, and adds the allowance back. The 90-minute block is a planning convention; real cycles commonly vary.",
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
        result = { status: 'Restricted Sleep Window', color: 'var(--underweight)', desc: \`Your calculated window is \${finalMinutes} minutes, equal to \${cycles} 90-minute planning block\${cycles === 1 ? '' : 's'} plus a 15-minute falling-asleep allowance.\`, suggestion: 'Avoid relying on short sleep chronically. Keep the room dark, reduce screens before bed, and protect recovery when possible.', percent: Math.max(5, finalMinutes / 375 * 30) };
    } else if (finalMinutes <= 555) {
        result = { status: 'Common Adult Planning Window', color: 'var(--normal)', desc: \`Your calculated window is \${finalMinutes} minutes, equal to \${cycles} 90-minute planning blocks plus a 15-minute falling-asleep allowance.\`, suggestion: 'Treat this as a scheduling estimate. Protect enough total sleep and a consistent wake time instead of trying to wake at an exact cycle boundary.', percent: 30 + ((finalMinutes - 375) / 180) * 40 };
    } else {
        result = { status: 'Extended Sleep Window', color: 'var(--overweight)', desc: \`Your calculated window is \${finalMinutes} minutes, equal to \${cycles} 90-minute planning blocks plus a 15-minute falling-asleep allowance.\`, suggestion: 'Long sleep can help after intense training or sleep debt. If you constantly need more than 9 hours, consider reviewing sleep quality.', percent: Math.min(95, 70 + (Math.min(finalMinutes - 555, 240) / 240) * 25) };
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
