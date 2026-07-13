module.exports = {
  categoryHref: "lifestyle.html",
  categoryLabel: "Lifestyle Tools",
  slug: "habit-restart-planner",
  title: "Habit Restart Planner | Recover After Missing Days",
  description: "Plan a realistic habit restart after missed days using lapse length, difficulty, and available time. Get a smaller next action and review window.",
  h1: "Habit Restart Planner",
  hero: "Plan a small, realistic restart after missing habit days. Use lapse length, habit difficulty, and available time to choose the next repeatable action.",
  heroHighlights: ["After missed days", "Smaller next action", "Review window included"],
  schemaName: "Privacy-First Habit Restart Planner",
  schemaDescription: "A browser-side habit restart planner that suggests a smaller restart action after a lapse.",
  lastUpdated: "July 13, 2026",
  buttonText: "Plan Restart",
  resultUnit: "",
  resultStatus: "Restart Plan",
  gaugeLabels: ["Small", "Moderate", "Full"],
  insightTitle: "Restart Planning Note",
  shareResult: true,
  dynamicNextSteps: true,
  controlsHtml: `
        <div class="input-row">
            <div class="input-group">
                <label for="input_missed">Missed Days</label>
                <div class="input-wrapper"><input type="number" id="input_missed" value="4" min="0" max="90" step="1"><span class="unit-badge">days</span></div>
            </div>
            <div class="input-group">
                <label for="input_minutes">Available Time Today</label>
                <div class="input-wrapper"><input type="number" id="input_minutes" value="10" min="1" max="180" step="1"><span class="unit-badge">min</span></div>
            </div>
        </div>
        <div class="input-group">
            <label for="input_difficulty">Current Habit Difficulty</label>
            <div class="input-wrapper">
                <select id="input_difficulty">
                    <option value="easy">Feels easy</option>
                    <option value="medium" selected>Feels moderate</option>
                    <option value="hard">Feels hard to restart</option>
                </select>
            </div>
        </div>`,
  relatedTitle: "Follow-Through Tools",
  related: [
    { href: "https://toolsquark.com/tools/habit-consistency-calculator.html", title: "Habit Consistency Calculator", description: "Measure follow-through after the restart window.", action: "Check Rate" },
    { href: "https://toolsquark.com/tools/task-initiation-friction-self-check.html", title: "Task Initiation Friction Self-Check", description: "Review why getting started feels difficult.", action: "Review Start" },
    { href: "https://toolsquark.com/tools/procrastination-test.html", title: "Procrastination Pattern Self-Check", description: "Check whether avoidance patterns are affecting the habit.", action: "Review Delay" }
  ],
  references: [
    { title: "Physical Activity Guidelines for Adults", publisher: "Centers for Disease Control and Prevention", href: "https://www.cdc.gov/physical-activity-basics/guidelines/adults.html" }
  ],
  faq: [
    { question: "What should I do after missing habit days?", answer: "Restart with a smaller action that can be completed today, then review consistency over a short window instead of trying to make up every missed day." },
    { question: "Should I double the habit to catch up?", answer: "Usually not. Catch-up pressure can make the restart feel bigger and easier to avoid. A smaller repeatable action is often more useful." },
    { question: "Is this a motivation test?", answer: "No. It is a planning tool that turns missed days into a smaller next action and a short review window." }
  ],
  contentSections: [
    { title: "What This Planner Does", body: `<p>This planner suggests a restart size from missed days, available time, and perceived difficulty. It focuses on restarting the loop, not judging the lapse.</p>` },
    { title: "Planning Rule", body: `<div class="formula-box">Restart size decreases when missed days, difficulty, or time pressure increase</div><p>The goal is to complete a credible next action today and review consistency soon.</p>` },
    { title: "Worked Example", body: `<p>If you missed 4 days, have 10 minutes, and the habit feels moderate, the planner may suggest a 5-10 minute restart and a 3-day review window.</p>` },
    { title: "Use The Result", body: `<p>Write the restart action as one visible behavior: for example, walk for 8 minutes, open the document for 5 minutes, or prepare tomorrow's cue. Then check consistency after the review window.</p>` }
  ],
  methodology: "This planner uses editorial restart bands based on missed days, perceived difficulty, and available minutes today.",
  disclaimer: "This is a behavior-planning tool, not a mental health assessment or measure of character, discipline, or motivation.",
  script: `
function calculateNow() {
    const missed = parseInt(document.getElementById('input_missed').value, 10);
    const minutes = parseInt(document.getElementById('input_minutes').value, 10);
    const difficulty = document.getElementById('input_difficulty').value;
    if (isNaN(missed) || isNaN(minutes) || missed < 0 || missed > 90 || minutes < 1 || minutes > 180) {
        alert('Please enter missed days from 0 to 90 and available time from 1 to 180 minutes.');
        return;
    }
    let factor = 0.75;
    if (missed >= 7) factor -= 0.25;
    else if (missed >= 3) factor -= 0.15;
    if (difficulty === 'hard') factor -= 0.25;
    if (difficulty === 'easy') factor += 0.1;
    const restartMinutes = Math.max(2, Math.min(minutes, Math.round(minutes * Math.max(0.2, factor))));
    const reviewDays = missed >= 7 || difficulty === 'hard' ? 3 : 7;
    const percent = Math.min(95, Math.max(10, restartMinutes / Math.max(1, minutes) * 90));
    let status = 'Small Restart';
    if (percent >= 60) status = 'Moderate Restart';
    if (percent >= 80) status = 'Near-Full Restart';
    document.getElementById('result-area').style.display = 'block';
    document.getElementById('calc-output').innerText = restartMinutes + ' min';
    document.getElementById('calc-output').style.color = 'var(--accent)';
    document.getElementById('calc-status').innerText = status;
    document.getElementById('calc-status').style.color = 'var(--accent)';
    document.getElementById('calc-desc').innerText = 'Do a ' + restartMinutes + '-minute version today, then review consistency after ' + reviewDays + ' days.';
    document.getElementById('calc-suggestion').innerText = 'Make the action specific and easy to start. Do not spend today trying to repay every missed day.';
    document.getElementById('gauge-pointer').style.left = percent + '%';
    setNextStepRecommendations([
        { label: 'Habit Consistency Calculator', href: 'https://toolsquark.com/tools/habit-consistency-calculator.html', reason: 'Measure the restart window after a few days.', action: 'Check Rate' },
        { label: 'Task Initiation Friction Self-Check', href: 'https://toolsquark.com/tools/task-initiation-friction-self-check.html', reason: 'Review why the first step keeps getting blocked.', action: 'Review Start' }
    ]);
    document.getElementById('result-area').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}`
};
