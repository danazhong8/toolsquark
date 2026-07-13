module.exports = {
  categoryHref: "lifestyle.html",
  categoryLabel: "Lifestyle Tools",
  slug: "nap-duration-calculator",
  title: "Nap Duration Calculator | Short Nap Or Full Cycle",
  description: "Choose a nap duration from available time, desired alertness, and bedtime distance. Compare short naps and longer recovery naps.",
  h1: "Nap Duration Calculator",
  hero: "Pick a practical nap length from your available time, how soon bedtime is, and whether you need quick alertness or deeper recovery.",
  heroHighlights: ["Short nap planning", "Bedtime distance check", "Wake buffer included"],
  schemaName: "Privacy-First Nap Duration Calculator",
  schemaDescription: "A browser-side nap duration planner for choosing a short nap or longer recovery nap with transparent assumptions.",
  lastUpdated: "July 13, 2026",
  buttonText: "Plan Nap Duration",
  resultUnit: "minutes",
  resultStatus: "Suggested Nap",
  gaugeLabels: ["Short", "Cycle", "Long"],
  insightTitle: "Nap Planning Note",
  shareResult: true,
  dynamicNextSteps: true,
  controlsHtml: `
        <div class="input-row">
            <div class="input-group">
                <label for="input_available">Available Time</label>
                <div class="input-wrapper"><input type="number" id="input_available" value="30" min="10" max="180" step="5"><span class="unit-badge">min</span></div>
            </div>
            <div class="input-group">
                <label for="input_bedtime_distance">Hours Until Bedtime</label>
                <div class="input-wrapper"><input type="number" id="input_bedtime_distance" value="7" min="1" max="18" step="0.5"><span class="unit-badge">hours</span></div>
            </div>
        </div>
        <div class="input-group">
            <label for="input_goal">Nap Goal</label>
            <div class="input-wrapper">
                <select id="input_goal">
                    <option value="alert">Quick alertness</option>
                    <option value="recovery">Deeper recovery</option>
                    <option value="avoid">Avoid bedtime disruption</option>
                </select>
            </div>
        </div>`,
  relatedTitle: "Sleep Planning Tools",
  related: [
    { href: "https://toolsquark.com/tools/sleep-calculator.html", title: "Sleep Schedule Calculator", description: "Plan the main sleep window after choosing a nap.", action: "Plan Sleep" },
    { href: "https://toolsquark.com/tools/sleep-debt-calculator.html", title: "Sleep Debt Calculator", description: "Estimate whether a nap is compensating for a larger weekly deficit.", action: "Estimate Debt" },
    { href: "https://toolsquark.com/tools/caffeine-cutoff-calculator.html", title: "Caffeine Cutoff Calculator", description: "Avoid stacking late caffeine with late naps.", action: "Set Cutoff" }
  ],
  references: [
    { title: "Healthy Sleep Habits", publisher: "National Heart, Lung, and Blood Institute", href: "https://www.nhlbi.nih.gov/health/sleep-deprivation/healthy-sleep-habits" }
  ],
  faq: [
    { question: "How long should a power nap be?", answer: "Many people use a short 10-30 minute nap for alertness because it is less likely to create heavy grogginess than a long partial sleep cycle." },
    { question: "When should I avoid a long nap?", answer: "A long or late nap can make bedtime harder for some people. If bedtime is close, this calculator favors a shorter nap or no late recovery nap." },
    { question: "Is a 90 minute nap always better?", answer: "No. A longer nap may help recovery when you have enough time and bedtime is far away, but it can also produce grogginess or delay nighttime sleep." }
  ],
  contentSections: [
    { title: "What This Calculator Does", body: `<p>This tool chooses a practical nap length from your available time, bedtime distance, and goal. It separates quick alertness from deeper recovery because those are different use cases.</p>` },
    { title: "Planning Rules", body: `<div class="formula-box">Quick alertness: 10-30 minutes<br>Deeper recovery: about 90 minutes when time and bedtime distance allow<br>Late-day protection: shorter naps when bedtime is close</div>` },
    { title: "Worked Example", body: `<p>If you have 30 minutes and bedtime is 7 hours away, the tool usually suggests a 20 minute nap plus a wake-up buffer. If you have 120 minutes and bedtime is far away, it may suggest a longer recovery nap.</p>` },
    { title: "Use The Result", body: `<p>Set an alarm for the nap itself and leave a wake-up buffer afterward. If naps repeatedly become long or urgent, check nighttime sleep duration and consistency.</p>` }
  ],
  methodology: "This planner uses editorial nap-duration rules: 10-30 minutes for alertness, about 90 minutes for a longer recovery opportunity, and shorter naps when bedtime is close.",
  disclaimer: "This tool is for general sleep planning. Persistent daytime sleepiness, unsafe drowsiness, or sudden sleep attacks should be discussed with a qualified professional.",
  script: `
function calculateNow() {
    const available = parseFloat(document.getElementById('input_available').value);
    const bedtimeDistance = parseFloat(document.getElementById('input_bedtime_distance').value);
    const goal = document.getElementById('input_goal').value;
    if (isNaN(available) || isNaN(bedtimeDistance) || available < 10 || available > 180 || bedtimeDistance < 1 || bedtimeDistance > 18) {
        alert('Please enter available time from 10 to 180 minutes and bedtime distance from 1 to 18 hours.');
        return;
    }
    let nap = Math.min(20, available - 5);
    let status = 'Short Alertness Nap';
    let suggestion = 'Keep the nap short and leave a few minutes to fully wake before important tasks.';
    if (goal === 'recovery' && available >= 105 && bedtimeDistance >= 6) {
        nap = 90;
        status = 'Longer Recovery Nap';
        suggestion = 'Use this only when bedtime is far enough away and you can leave a wake-up buffer afterward.';
    } else if (bedtimeDistance < 4 || goal === 'avoid') {
        nap = Math.min(15, available - 5);
        status = 'Bedtime-Protective Nap';
        suggestion = 'Because bedtime is relatively close or disruption is a concern, keep the nap brief and avoid extending it.';
    } else if (available >= 35) {
        nap = 25;
    }
    nap = Math.max(10, Math.round(nap / 5) * 5);
    const percent = Math.min(95, Math.max(5, nap / 90 * 90));
    document.getElementById('result-area').style.display = 'block';
    document.getElementById('calc-output').innerText = nap;
    document.getElementById('calc-output').style.color = 'var(--accent)';
    document.getElementById('calc-status').innerText = status;
    document.getElementById('calc-status').style.color = 'var(--accent)';
    document.getElementById('calc-desc').innerText = 'Suggested nap length is ' + nap + ' minutes. Leave at least 5-15 extra minutes after the alarm before demanding tasks.';
    document.getElementById('calc-suggestion').innerText = suggestion;
    document.getElementById('gauge-pointer').style.left = percent + '%';
    setNextStepRecommendations([
        { label: 'Sleep Schedule Calculator', href: 'https://toolsquark.com/tools/sleep-calculator.html', reason: 'Protect the main sleep window after planning a nap.', action: 'Plan Sleep' },
        { label: 'Sleep Debt Calculator', href: 'https://toolsquark.com/tools/sleep-debt-calculator.html', reason: 'Check whether repeated naps reflect a larger sleep deficit.', action: 'Estimate Debt' }
    ]);
    document.getElementById('result-area').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}`
};
