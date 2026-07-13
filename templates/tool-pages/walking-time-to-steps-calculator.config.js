module.exports = {
  categoryHref: "lifestyle.html",
  categoryLabel: "Lifestyle Tools",
  slug: "walking-time-to-steps-calculator",
  title: "Walking Time To Steps Calculator | Minutes To Steps Estimate",
  description: "Convert walking minutes to estimated steps using pace presets. Estimate how many steps are in 10, 20, 30, 45, or 60 minutes of walking.",
  h1: "Walking Time To Steps Calculator",
  hero: "Estimate how many steps you may get from a planned walk by entering walking time and choosing an easy, moderate, or brisk pace. Use it for questions like how many steps are in 30 minutes of walking or how long to walk for a step goal.",
  schemaName: "Privacy-First Walking Time To Steps Calculator",
  schemaDescription: "A browser-side calculator that estimates walking steps from walking minutes and pace presets.",
  lastUpdated: "June 26, 2026",
  buttonText: "Estimate Steps",
  resultUnit: "steps",
  resultStatus: "Estimated Steps",
  gaugeLabels: ["Short", "Moderate", "Long"],
  insightTitle: "Walking Plan Note",
  controlsHtml: `
        <div class="input-row">
            <div class="input-group">
                <label for="input_minutes">Walking Time</label>
                <div class="input-wrapper">
                    <input type="number" id="input_minutes" value="30" min="1" max="300" step="1">
                    <span class="unit-badge">min</span>
                </div>
            </div>
            <div class="input-group">
                <label for="input_pace">Walking Pace</label>
                <div class="input-wrapper">
                    <select id="input_pace">
                        <option value="90">Easy - about 90 steps/min</option>
                        <option value="110" selected>Moderate - about 110 steps/min</option>
                        <option value="125">Brisk - about 125 steps/min</option>
                    </select>
                </div>
            </div>
        </div>`,
  relatedTitle: "Use The Estimate",
  related: [
    { href: "https://toolsquark.com/tools/daily-steps-goal-calculator.html", title: "Daily Steps Goal Calculator", description: "Build a progressive step target plan from your baseline.", action: "Plan Steps" },
    { href: "https://toolsquark.com/tools/steps-to-calories-converter.html", title: "Steps To Calories Converter", description: "Turn estimated steps into a rough walking calorie estimate.", action: "Estimate Burn" },
    { href: "https://toolsquark.com/guides/how-to-choose-a-realistic-daily-step-goal.html", title: "Realistic Daily Step Goal Guide", description: "Choose a step goal from your current baseline instead of forcing one universal number.", action: "Read Guide" }
  ],
  references: [
    { title: "Physical Activity Guidelines for Adults", publisher: "Centers for Disease Control and Prevention", href: "https://www.cdc.gov/physical-activity-basics/guidelines/adults.html" }
  ],
  faq: [
    { question: "How many steps are in 30 minutes of walking?", answer: "At the moderate preset of 110 steps per minute, 30 minutes is about 3,300 steps. Your actual count depends on stride length, speed, terrain, and device tracking." },
    { question: "How many steps are in 45 minutes of walking?", answer: "At the moderate preset of 110 steps per minute, 45 minutes is about 4,950 steps. Easy walking would be about 4,050 steps, while brisk walking would be about 5,625 steps." },
    { question: "How long should I walk to get 5,000 steps?", answer: "At the moderate preset, 5,000 steps takes about 45 minutes. At an easy pace it may take closer to 56 minutes, and at a brisk pace it may take about 40 minutes." },
    { question: "Is this more accurate than a pedometer?", answer: "No. A pedometer or wearable can measure your actual steps. This calculator is for planning when you know walking time but not step count." },
    { question: "Which pace should I choose?", answer: "Choose easy for relaxed walking, moderate for purposeful walking, and brisk for faster walking that noticeably raises breathing." }
  ],
  contentSections: [
    {
      title: "What This Calculator Estimates",
      body: `<p>This minutes-to-steps calculator multiplies walking time by a pace preset. It is useful for planning a walk when you want a rough step target before you have wearable data.</p>`
    },
    {
      title: "Formula Used",
      body: `<div class="formula-box">Estimated steps = walking minutes x selected steps per minute</div><p>The presets are simple planning values, not measurements. Actual steps vary with height, stride length, speed, grade, and turns.</p>`
    },
    {
      title: "Worked Example",
      body: `<p>For 30 minutes at the moderate preset, the estimate is 30 x 110 = 3,300 steps. For 60 minutes at the same pace, the estimate is 6,600 steps.</p>`
    },
    {
      title: "Common Walking Time Estimates",
      body: `<table class="comparison-table"><thead><tr><th>Walking Time</th><th>Easy Pace</th><th>Moderate Pace</th><th>Brisk Pace</th></tr></thead><tbody><tr><td>10 minutes</td><td>900 steps</td><td>1,100 steps</td><td>1,250 steps</td></tr><tr><td>20 minutes</td><td>1,800 steps</td><td>2,200 steps</td><td>2,500 steps</td></tr><tr><td>30 minutes</td><td>2,700 steps</td><td>3,300 steps</td><td>3,750 steps</td></tr><tr><td>45 minutes</td><td>4,050 steps</td><td>4,950 steps</td><td>5,625 steps</td></tr><tr><td>60 minutes</td><td>5,400 steps</td><td>6,600 steps</td><td>7,500 steps</td></tr></tbody></table><p>Use the table for quick planning, then compare against your phone or wearable after the walk.</p>`
    },
    {
      title: "How To Calibrate It",
      body: `<p>After a few walks, compare the estimate with your phone or wearable. If the calculator is consistently high or low for your gait, choose a slower or faster preset next time.</p>`
    },
    {
      title: "Turn Minutes Into A Daily Step Plan",
      body: `<p>If your estimate is meant to support a daily step goal, use this calculator for the walk itself and the <a href="https://toolsquark.com/tools/daily-steps-goal-calculator.html">Daily Steps Goal Calculator</a> for the weekly target. That keeps the immediate walk estimate separate from a longer habit plan.</p>`
    }
  ],
  methodology: "This tool multiplies walking minutes by a selected steps-per-minute preset: 90, 110, or 125.",
  disclaimer: "Step estimates vary with stride length, terrain, speed, tracking device, and mobility. This tool is for planning, not measurement.",
  script: `
function calculateNow() {
    const minutes = parseFloat(document.getElementById('input_minutes').value);
    const cadence = parseFloat(document.getElementById('input_pace').value);
    if (isNaN(minutes) || minutes <= 0 || minutes > 300 || isNaN(cadence)) {
        alert('Please enter walking minutes between 1 and 300.');
        return;
    }
    const steps = Math.round(minutes * cadence);
    const result = {
        status: 'Walking Step Estimate',
        color: 'var(--accent)',
        desc: minutes + ' minutes at about ' + cadence + ' steps per minute gives an estimated ' + steps.toLocaleString() + ' steps.',
        suggestion: 'Use this for planning, then compare with a phone or wearable after the walk.',
        percent: Math.min(95, Math.max(5, steps / 10000 * 90))
    };
    document.getElementById('result-area').style.display = 'block';
    document.getElementById('calc-output').innerText = steps.toLocaleString();
    document.getElementById('calc-output').style.color = result.color;
    document.getElementById('calc-status').innerText = result.status;
    document.getElementById('calc-status').style.color = result.color;
    document.getElementById('calc-desc').innerText = result.desc;
    document.getElementById('calc-suggestion').innerText = result.suggestion;
    document.getElementById('gauge-pointer').style.left = result.percent + '%';
    document.getElementById('result-area').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}`
};
