module.exports = {
  categoryHref: "lifestyle.html",
  categoryLabel: "Lifestyle Tools",
  slug: "sleep-inertia-calculator",
  title: "Sleep Inertia Calculator | Wake Grogginess Estimate",
  description: "Estimate sleep inertia risk from wake time, sleep duration, and recent sleep debt. Plan a gentler wake-up buffer with transparent assumptions.",
  h1: "Sleep Inertia Calculator",
  hero: "Estimate whether a wake-up may feel groggy based on sleep duration, wake timing, and recent sleep debt, then plan a practical buffer before demanding tasks.",
  heroHighlights: ["Wake grogginess estimate", "Sleep debt context", "Morning buffer suggestion"],
  schemaName: "Privacy-First Sleep Inertia Calculator",
  schemaDescription: "A browser-side sleep inertia planning calculator for estimating wake grogginess risk and morning buffer time.",
  lastUpdated: "July 13, 2026",
  buttonText: "Estimate Wake Grogginess",
  resultUnit: "%",
  resultStatus: "Sleep Inertia Risk",
  gaugeLabels: ["Low", "Moderate", "High"],
  insightTitle: "Wake-Up Planning Note",
  shareResult: true,
  dynamicNextSteps: true,
  controlsHtml: `
        <div class="input-row">
            <div class="input-group">
                <label for="input_sleep">Sleep Duration</label>
                <div class="input-wrapper"><input type="number" id="input_sleep" value="6.5" min="0" max="14" step="0.25"><span class="unit-badge">hours</span></div>
            </div>
            <div class="input-group">
                <label for="input_debt">Recent Sleep Debt</label>
                <div class="input-wrapper"><input type="number" id="input_debt" value="6" min="0" max="40" step="0.5"><span class="unit-badge">hours</span></div>
            </div>
        </div>
        <div class="input-row">
            <div class="input-group">
                <label for="input_wake">Wake Timing</label>
                <div class="input-wrapper">
                    <select id="input_wake">
                        <option value="0">Usual wake time</option>
                        <option value="12">Earlier than usual</option>
                        <option value="8">Alarm after a late night</option>
                        <option value="-8">Naturally woke up</option>
                    </select>
                </div>
            </div>
            <div class="input-group">
                <label for="input_task">First Demanding Task</label>
                <div class="input-wrapper">
                    <select id="input_task">
                        <option value="0">More than 60 minutes later</option>
                        <option value="8">Within 30-60 minutes</option>
                        <option value="14">Within 30 minutes</option>
                    </select>
                </div>
            </div>
        </div>`,
  relatedTitle: "Improve The Sleep Plan",
  related: [
    { href: "https://toolsquark.com/tools/sleep-debt-calculator.html", title: "Sleep Debt Calculator", description: "Estimate the recent deficit that may be making mornings harder.", action: "Estimate Debt" },
    { href: "https://toolsquark.com/tools/sleep-calculator.html", title: "Sleep Schedule Calculator", description: "Plan a more realistic bedtime or wake time.", action: "Plan Sleep" },
    { href: "https://toolsquark.com/tools/caffeine-cutoff-calculator.html", title: "Caffeine Cutoff Calculator", description: "Check whether caffeine timing may be disrupting sleep depth.", action: "Set Cutoff" }
  ],
  references: [
    { title: "About Sleep", publisher: "Centers for Disease Control and Prevention", href: "https://www.cdc.gov/sleep/about/index.html" },
    { title: "Healthy Sleep Habits", publisher: "National Heart, Lung, and Blood Institute", href: "https://www.nhlbi.nih.gov/health/sleep-deprivation/healthy-sleep-habits" }
  ],
  faq: [
    { question: "What is sleep inertia?", answer: "Sleep inertia is the groggy, slowed, or disoriented feeling that can happen after waking. It is often stronger after short sleep, accumulated sleep debt, unusual wake timing, or waking from deeper sleep." },
    { question: "Can this calculator tell what sleep stage I woke from?", answer: "No. Without sleep-stage measurement it cannot know the exact stage. It estimates planning risk from practical inputs that commonly affect morning alertness." },
    { question: "How should I use the result?", answer: "Use it to decide whether to add a wake-up buffer before driving, studying, work calls, or other demanding tasks. Persistent severe sleepiness deserves qualified evaluation." }
  ],
  contentSections: [
    { title: "What This Tool Estimates", body: `<p>This calculator estimates wake grogginess risk from sleep duration, recent sleep debt, wake timing, and how soon a demanding task begins. It is built for planning, not diagnosis.</p>` },
    { title: "Formula Used", body: `<div class="formula-box">Risk score = sleep-shortfall points + sleep-debt points + wake-timing points + task-pressure points</div><p>The score is capped at 100%. It is an editorial planning scale, not a validated clinical instrument.</p>` },
    { title: "Worked Example", body: `<p>If you slept 6.5 hours, have 6 hours of recent sleep debt, woke earlier than usual, and need to perform within 30 minutes, the tool will usually suggest a moderate or high wake-up buffer.</p>` },
    { title: "Practical Use", body: `<p>When the result is high, avoid scheduling the hardest task immediately after waking. Add light, consistent cues such as water, bright light, gentle movement, and a longer transition window.</p>` }
  ],
  methodology: "This calculator uses an editorial risk score based on sleep duration below 7 hours, recent sleep debt, unusual wake timing, and immediate task pressure.",
  disclaimer: "This educational tool cannot diagnose sleep disorders, measure sleep stages, or replace professional advice for persistent sleepiness or safety-sensitive work.",
  script: `
function calculateNow() {
    const sleep = parseFloat(document.getElementById('input_sleep').value);
    const debt = parseFloat(document.getElementById('input_debt').value);
    const wake = parseFloat(document.getElementById('input_wake').value);
    const task = parseFloat(document.getElementById('input_task').value);
    if (isNaN(sleep) || isNaN(debt) || sleep < 0 || sleep > 14 || debt < 0 || debt > 40) {
        alert('Please enter a sleep duration between 0 and 14 hours and sleep debt between 0 and 40 hours.');
        return;
    }
    const shortSleep = Math.max(0, 7 - sleep) * 12;
    const debtPoints = Math.min(30, debt * 2.5);
    const score = Math.round(Math.min(100, Math.max(5, shortSleep + debtPoints + wake + task + 12)));
    let status = 'Lower Sleep Inertia Risk';
    let suggestion = 'A normal morning buffer may be enough, but still check real alertness before driving or demanding work.';
    let color = 'var(--normal)';
    let buffer = '15-30 minutes';
    if (score >= 40 && score < 70) {
        status = 'Moderate Sleep Inertia Risk';
        suggestion = 'Plan a slower start and keep the first demanding task at least 30-45 minutes after waking when possible.';
        color = 'var(--overweight)';
        buffer = '30-45 minutes';
    } else if (score >= 70) {
        status = 'Higher Sleep Inertia Risk';
        suggestion = 'Avoid putting safety-sensitive or high-stakes tasks immediately after waking. Review sleep debt and wake timing.';
        color = 'var(--obese)';
        buffer = '45-90 minutes';
    }
    document.getElementById('result-area').style.display = 'block';
    document.getElementById('calc-output').innerText = score;
    document.getElementById('calc-output').style.color = color;
    document.getElementById('calc-status').innerText = status;
    document.getElementById('calc-status').style.color = color;
    document.getElementById('calc-desc').innerText = 'Estimated wake grogginess risk is ' + score + '%. A practical wake-up buffer is about ' + buffer + ' before demanding tasks.';
    document.getElementById('calc-suggestion').innerText = suggestion;
    document.getElementById('gauge-pointer').style.left = score + '%';
    setNextStepRecommendations([
        { label: 'Sleep Debt Calculator', href: 'https://toolsquark.com/tools/sleep-debt-calculator.html', reason: 'Check whether recent short sleep is driving the grogginess estimate.', action: 'Estimate Debt' },
        { label: 'Sleep Schedule Calculator', href: 'https://toolsquark.com/tools/sleep-calculator.html', reason: 'Move bedtime or wake time into a more realistic schedule.', action: 'Plan Sleep' }
    ]);
    document.getElementById('result-area').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}`
};
