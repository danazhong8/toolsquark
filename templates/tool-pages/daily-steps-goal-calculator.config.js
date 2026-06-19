module.exports = {
  slug: "daily-steps-goal-calculator",
  title: "Daily Steps Goal Calculator | Quantitative Milestone Planner | ToolsQuark",
  description: "Calculate your recommended target daily step counts and generate a customized, progressive weekly physical activity milestone plan tailored to your lifestyle.",
  h1: "Daily Steps Goal Calculator",
  hero: "Create a progressive step-count goal plan based on your current baseline and primary fitness objective.",
  schemaName: "Privacy-First Daily Steps Goal Calculator",
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
  faq: [
    { question: "How fast should I increase daily steps?", answer: "A gradual increase is usually easier to sustain and may reduce joint stress. Many people do best by adding volume over several weeks rather than jumping immediately." },
    { question: "Is 10,000 steps required for health?", answer: "No single number fits everyone. Benefits can begin below 10,000 steps, especially when moving from a low baseline. The best target is one you can build toward consistently." },
    { question: "What if my baseline is already above the goal?", answer: "If your current baseline is above the selected goal, the plan will keep you near your current level rather than reducing your target." }
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
        const estimatedKcal = Math.round(weeklyTarget * 0.04);
        timelineHtml += \`<div style="display:flex;justify-content:space-between;gap:12px;padding:10px 0;border-bottom:1px solid #e2e8f0;"><strong>Week \${week}</strong><span>\${weeklyTarget.toLocaleString()} steps/day</span><span>~\${estimatedKcal} kcal/day</span></div>\`;
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
