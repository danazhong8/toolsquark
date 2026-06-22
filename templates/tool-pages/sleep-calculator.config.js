module.exports = {
  slug: "sleep-calculator",
  title: "Sleep Schedule Calculator | Bedtime & Wake Time Planner",
  description: "Plan a bedtime or wake time from your target sleep duration and expected time to fall asleep. Private browser-side sleep schedule calculator.",
  h1: "Sleep Schedule Calculator",
  hero: "Plan a realistic bedtime or wake time from the sleep duration you want and the time you usually need to fall asleep.",
  schemaName: "Privacy-First Sleep Schedule Calculator",
  schemaDescription: "A browser-side bedtime and wake-time planner based on target sleep duration and expected sleep latency.",
  lastUpdated: "June 22, 2026",
  categoryHref: "lifestyle.html",
  categoryLabel: "Lifestyle Tools",
  buttonText: "Plan Sleep Schedule",
  resultHtml: `
            <div class="result-val"><span id="calc-output">--:--</span></div>
            <div class="result-status" id="calc-status">Suggested Schedule</div>
            <p class="result-desc" id="calc-desc"></p>
            <div class="suggestion-box">
                <h4>Schedule Check</h4>
                <p id="calc-suggestion"></p>
            </div>`,
  controlsHtml: `
        <div class="input-group">
            <label for="input_direction">What do you want to plan?</label>
            <div class="input-wrapper">
                <select id="input_direction">
                    <option value="bedtime">Bedtime from a required wake time</option>
                    <option value="wake">Wake time from a planned bedtime</option>
                </select>
            </div>
        </div>
        <div class="input-row">
            <div class="input-group">
                <label for="input_time">Required time</label>
                <div class="input-wrapper"><input type="time" id="input_time" value="07:00"></div>
            </div>
            <div class="input-group">
                <label for="input_duration">Target sleep</label>
                <div class="input-wrapper">
                    <input type="number" id="input_duration" value="8" min="4" max="12" step="0.25">
                    <span class="unit-badge">hours</span>
                </div>
            </div>
        </div>
        <div class="input-group">
            <label for="input_latency">Expected time to fall asleep</label>
            <div class="input-wrapper">
                <input type="number" id="input_latency" value="20" min="0" max="180" step="5">
                <span class="unit-badge">minutes</span>
            </div>
        </div>`,
  relatedTitle: "Review Sleep And Recovery",
  related: [
    { href: "https://toolsquark.com/tools/sleep-quality-assessment.html", title: "Sleep Pattern Self-Check", description: "Review sleep continuity, restoration, and daytime impact.", action: "Review Sleep" },
    { href: "https://toolsquark.com/tools/stress-index-test.html", title: "Stress Pattern Self-Check", description: "Review whether current stress patterns may be interfering with recovery.", action: "Review Stress" }
  ],
  references: [
    { title: "About Sleep", publisher: "Centers for Disease Control and Prevention", href: "https://www.cdc.gov/sleep/about/index.html" },
    { title: "Healthy Sleep Habits", publisher: "National Heart, Lung, and Blood Institute", href: "https://www.nhlbi.nih.gov/health/sleep-deprivation/healthy-sleep-habits" }
  ],
  faq: [
    { question: "How does this sleep schedule calculator work?", answer: "It adds your target sleep duration and expected time to fall asleep, then counts backward from a required wake time or forward from a planned bedtime." },
    { question: "Does it use 90-minute sleep cycles?", answer: "No. Sleep cycles vary between people and across the night. The planner prioritizes enough total sleep and a workable schedule instead of promising an ideal cycle boundary." },
    { question: "How much sleep should I enter?", answer: "Use an age-appropriate target and your real experience. The CDC notes that most adults need at least 7 hours, while individual needs and recommendations vary by age." },
    { question: "What should I enter for sleep latency?", answer: "Use the amount of time you typically need to fall asleep, not an ideal value. If it varies, begin with a recent typical estimate and adjust the plan." },
    { question: "Can this calculator diagnose insomnia?", answer: "No. Persistent difficulty sleeping, breathing pauses, loud snoring, or unsafe daytime sleepiness deserves qualified clinical assessment." }
  ],
  contentSections: [
    {
      title: "What This Planner Calculates",
      body: `<p>The planner converts a sleep-duration target into a clock time. It includes the delay you expect between getting into bed and falling asleep.</p><div class="formula-box">Planned time in bed = target sleep + expected sleep latency<br>Bedtime = wake time - planned time in bed<br>Wake time = bedtime + planned time in bed</div>`
    },
    {
      title: "Why Fixed Sleep Cycles Mislead",
      body: `<p>Sleep calculators often optimize around fixed 90-minute blocks. Real sleep cycles are variable, so exact cycle arithmetic can create false precision and may encourage people to shorten adequate sleep.</p><p>A schedule can more reliably support one practical decision: when to allow enough time in bed for a chosen sleep target.</p>`
    },
    {
      title: "Worked Example",
      body: `<p>For a 7:00 AM wake time, 8 hours of target sleep, and 20 minutes to fall asleep, the suggested bedtime is 10:40 PM. That creates 8 hours 20 minutes in bed without claiming that every minute will be spent asleep.</p>`
    },
    {
      title: "How To Calibrate The Schedule",
      body: `<p>Try the schedule for several days, then compare it with actual sleep onset, awakenings, wake-time consistency, and daytime alertness. Adjust in small increments rather than chasing a single perfect bedtime.</p><div class="note-box">A stable wake time and enough total sleep are usually more useful planning anchors than an exact sleep-cycle boundary.</div>`
    },
    {
      title: "When Scheduling Is Not Enough",
      body: `<p>A schedule calculator cannot address persistent insomnia, sleep apnea, circadian rhythm disorders, medication effects, shift-work constraints, or another cause of poor sleep. Seek qualified support when sleep problems persist or impair safety and daily functioning.</p>`
    }
  ],
  methodology: "This tool adds target sleep duration to user-entered sleep latency, then subtracts that interval from a wake time or adds it to a bedtime. It does not predict sleep stages or circadian phase.",
  disclaimer: "Sleep schedules are educational planning aids and cannot diagnose or treat a sleep disorder.",
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
    const direction = document.getElementById('input_direction').value;
    const clock = document.getElementById('input_time').value;
    const duration = parseFloat(document.getElementById('input_duration').value);
    const latency = parseFloat(document.getElementById('input_latency').value);
    if (!clock || isNaN(duration) || duration < 4 || duration > 12 || isNaN(latency) || latency < 0 || latency > 180) {
        alert('Please enter a valid time, 4 to 12 hours of target sleep, and 0 to 180 minutes of sleep latency.');
        return;
    }
    const anchor = parseClock(clock);
    const timeInBed = (duration * 60) + latency;
    const resultMinutes = direction === 'bedtime' ? anchor - timeInBed : anchor + timeInBed;
    const resultLabel = direction === 'bedtime' ? 'Suggested Bedtime' : 'Suggested Wake Time';
    const anchorLabel = direction === 'bedtime' ? 'wake time' : 'bedtime';
    document.getElementById('result-area').style.display = 'block';
    document.getElementById('calc-output').innerText = formatClock(resultMinutes);
    document.getElementById('calc-status').innerText = resultLabel;
    document.getElementById('calc-desc').innerText = 'This allows ' + duration.toFixed(duration % 1 ? 2 : 0) + ' hours of target sleep plus ' + Math.round(latency) + ' minutes to fall asleep before the entered ' + anchorLabel + '.';
    document.getElementById('calc-suggestion').innerText = 'Use this as a starting schedule. Compare it with actual sleep onset and daytime alertness, then adjust gradually.';
    document.getElementById('result-area').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}`
};
