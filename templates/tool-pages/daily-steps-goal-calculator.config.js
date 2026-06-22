module.exports = {
  categoryHref: "lifestyle.html",
  categoryLabel: "Lifestyle Tools",
  slug: "daily-steps-goal-calculator",
  title: "Daily Steps Goal Calculator | Progressive Walking Plan",
  description: "Build a gradual step-count plan from your current baseline to a disclosed preset target. Includes assumptions, safety guidance, and research context.",
  h1: "Daily Steps Goal Calculator",
  hero: "Create a progressive step-count goal plan based on your current baseline and primary fitness objective.",
  schemaName: "Privacy-First Daily Steps Goal Calculator",
  schemaDescription: "A browser-side progressive walking plan that moves from a current step baseline toward one of three disclosed preset targets.",
  lastUpdated: "June 21, 2026",
  buttonText: "Generate Step Plan",
  resultHtml: `
            <div class="result-val"><span id="calc-output">0</span><span class="result-unit">steps/day</span></div>
            <div class="result-status" id="calc-status">Step Goal</div>
            <p class="result-desc" id="calc-desc"></p>
            <div class="suggestion-box">
                <h4>Weekly Milestone Plan</h4>
                <div id="plan-timeline-container" class="result-desc" style="text-align:left;margin:0;"></div>
                <p id="calc-suggestion" style="margin-top:12px;"></p>
            </div>`,
  controlsHtml: `
        <div class="input-group">
            <label for="select_goal">Primary Fitness Objective</label>
            <div class="input-wrapper">
                <select id="select_goal">
                    <option value="loss">Weight Loss & Higher Activity</option>
                    <option value="cardio" selected>Cardiovascular Stamina</option>
                    <option value="wellbeing">General Well-being</option>
                </select>
            </div>
        </div>
        <div class="input-row">
            <div class="input-group">
                <label for="input_current_steps">Current Daily Average</label>
                <div class="input-wrapper"><input type="number" id="input_current_steps" placeholder="e.g. 4000" min="500" max="30000" value="4000"><span class="unit-badge">steps</span></div>
            </div>
            <div class="input-group">
                <label for="input_weeks">Plan Duration</label>
                <div class="input-wrapper">
                    <select id="input_weeks">
                        <option value="4">4 weeks</option>
                        <option value="6" selected>6 weeks</option>
                        <option value="8">8 weeks</option>
                    </select>
                </div>
            </div>
        </div>`,
  relatedTitle: "Track Movement Impact",
  related: [
    { href: "https://toolsquark.com/tools/steps-to-calories-converter.html", title: "Steps to Calories Converter", description: "Convert your planned steps into estimated calories.", action: "Estimate Burn" },
    { href: "https://toolsquark.com/tools/water-intake-calculator.html", title: "Water Intake Calculator", description: "Adjust hydration around higher activity volume.", action: "Plan Fluids" }
  ],
  references: [
    { title: "Steps per Day and All-Cause Mortality in Middle-aged Adults", publisher: "JAMA Network Open / PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/34477847/" },
    { title: "Physical Activity Guidelines for Adults", publisher: "Centers for Disease Control and Prevention", href: "https://www.cdc.gov/physical-activity-basics/guidelines/adults.html" }
  ],
  faq: [
    { question: "How fast should I increase daily steps?", answer: "A gradual increase is usually easier to sustain and may reduce joint stress. Many people do best by adding volume over several weeks rather than jumping immediately." },
    { question: "Is 10,000 steps required for health?", answer: "No single number fits everyone. Benefits can begin below 10,000 steps, especially when moving from a low baseline. The best target is one you can build toward consistently." },
    { question: "What if my baseline is already above the goal?", answer: "If your current baseline is above the selected goal, the plan will keep you near your current level rather than reducing your target." }
  ],
  contentSections: [
    {
      title: "What The Planner Does",
      body: `<p>The tool takes your current average daily steps and linearly increases them toward one of three fixed presets: 5,000, 8,500, or 12,000 steps per day. It does not generate a medically personalized target.</p><p>If your baseline already exceeds the preset, the planner maintains the higher baseline rather than recommending a reduction.</p>`
    },
    {
      title: "Planning Formula",
      body: `<div class="formula-box">Week target = baseline + (final target - baseline) x week / plan weeks</div><p>The change is distributed evenly across the selected number of weeks. Real progress does not need to be perfectly linear, and repeating a week can be more appropriate than increasing through pain or fatigue.</p>`
    },
    {
      title: "Worked Example",
      body: `<p>A baseline of 4,000 steps moving toward the 8,500-step preset over 6 weeks increases by 750 steps per week: 4,750 in week 1, 5,500 in week 2, and 8,500 in week 6.</p>`
    },
    {
      title: "Steps Are Not The Whole Activity Picture",
      body: `<p>Step count captures ambulatory movement but not strength training, cycling, swimming, balance work, or exercise intensity. CDC guidance is expressed in minutes of moderate or vigorous activity plus muscle-strengthening work, not a universal step requirement.</p>`
    },
    {
      title: "Safety And Personalization",
      body: `<p>Start from a multi-day baseline and adjust for mobility, footwear, terrain, recovery, health conditions, and current symptoms. New pain, chest discomfort, faintness, or unusual shortness of breath warrants stopping and seeking appropriate guidance.</p>`
    }
  ],
  methodology: "This tool maps goals to step targets of 12,000, 8,500, or 5,000 steps/day and distributes the change linearly across the selected plan duration.",
  disclaimer: "Step goals should be adapted for injury history, mobility limits, medical conditions, footwear, terrain, and recovery needs.",
  script: `
function calculateNow() {
    const goal = document.getElementById('select_goal').value;
    const currentSteps = parseInt(document.getElementById('input_current_steps').value, 10);
    const weeks = parseInt(document.getElementById('input_weeks').value, 10);
    if (isNaN(currentSteps) || currentSteps < 500 || currentSteps > 30000) {
        alert('Please input a realistic baseline average daily step count between 500 and 30000.');
        return;
    }
    const profiles = {
        loss: { target: 12000, status: 'Higher Activity Goal', desc: 'A higher daily movement target designed to support energy expenditure and active weight-management routines.', suggestion: 'Build carefully and pay attention to foot, knee, and hip comfort while increasing total walking volume.' },
        cardio: { target: 8500, status: 'Cardiovascular Stamina Goal', desc: 'A balanced step target for improving daily aerobic workload and reducing sedentary time.', suggestion: 'Use brisk walking intervals when possible to make the same step count more cardiovascularly useful.' },
        wellbeing: { target: 5000, status: 'Well-being Baseline Goal', desc: 'A practical baseline target for reducing sedentary time and supporting general daily mobility.', suggestion: 'Spread steps across the day with short walks after meals or between long sitting blocks.' }
    };
    const profile = profiles[goal] || profiles.cardio;
    const target = Math.max(profile.target, currentSteps);
    const diff = target - currentSteps;
    let timelineHtml = '';
    for (let week = 1; week <= weeks; week++) {
        const weeklyTarget = Math.round(currentSteps + diff * (week / weeks));
        timelineHtml += \`<div style="display:flex;justify-content:space-between;gap:12px;padding:10px 0;border-bottom:1px solid #e2e8f0;"><strong>Week \${week}</strong><span>\${weeklyTarget.toLocaleString()} steps/day</span></div>\`;
    }
    document.getElementById('result-area').style.display = 'block';
    document.getElementById('calc-output').innerText = target.toLocaleString();
    document.getElementById('calc-status').innerText = profile.status;
    document.getElementById('calc-desc').innerText = profile.desc;
    document.getElementById('plan-timeline-container').innerHTML = timelineHtml;
    document.getElementById('calc-suggestion').innerText = profile.suggestion;
    document.getElementById('result-area').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}`
};
