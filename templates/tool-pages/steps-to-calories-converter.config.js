module.exports = {
  slug: "steps-to-calories-converter",
  title: "Steps to Calories Converter | Active Step Count Burn Tool | ToolsQuark",
  description: "Convert your daily walking step counts directly into active calories burned, customized to your body weight parameters.",
  h1: "Steps to Calories Converter",
  hero: "Estimate active calories burned from walking steps and body weight, with all calculations handled privately in your browser.",
  schemaName: "Privacy-First Steps to Calories Converter",
  buttonText: "Calculate Energy Burn",
  resultUnit: "kcal",
  resultStatus: "Estimated Active Burn",
  gaugeLabels: ["Light", "Moderate", "High"],
  insightTitle: "Fitness Insight",
  controlsHtml: `
        <div class="input-row">
            <div class="input-group">
                <label for="input_steps">Daily Steps</label>
                <div class="input-wrapper">
                    <input type="number" id="input_steps" placeholder="e.g. 8500" min="1">
                    <span class="unit-badge">steps</span>
                </div>
            </div>
            <div class="input-group">
                <label for="input_weight">Body Weight</label>
                <div class="input-wrapper">
                    <input type="number" id="input_weight" placeholder="e.g. 70" min="1" step="any">
                    <span class="unit-badge">kg</span>
                </div>
            </div>
        </div>`,
  relatedTitle: "Build A Movement Plan",
  related: [
    { href: "https://www.toolsquark.com/tools/daily-steps-goal-calculator.html", title: "Daily Steps Goal Calculator", description: "Create a progressive weekly step target plan.", action: "Plan Steps" },
    { href: "https://www.toolsquark.com/tools/tdee-calculator.html", title: "TDEE Calculator", description: "Estimate full-day calorie expenditure beyond walking.", action: "Calculate TDEE" }
  ],
  faq: [
    { question: "How does this converter estimate calories?", answer: "The calculator uses a practical walking estimate based on step count and body weight. It is intended for directional tracking rather than laboratory-grade energy measurement." },
    { question: "Does body weight affect calories burned?", answer: "Yes. Moving more body mass generally requires more energy, so a heavier person usually burns more calories for the same number of steps." },
    { question: "Why is my fitness tracker result different?", answer: "Trackers may use pace, heart rate, stride length, terrain, and proprietary formulas. This converter uses a simpler transparent estimate." }
  ],
  methodology: "Estimated calories = steps x body weight in kg x 0.000057, a simplified walking energy estimate for general planning.",
  disclaimer: "Calories burned are estimates and vary with walking speed, stride length, terrain, fitness level, and device accuracy.",
  script: `
function calculateNow() {
    const steps = parseFloat(document.getElementById('input_steps').value);
    const weight = parseFloat(document.getElementById('input_weight').value);
    if (isNaN(steps) || isNaN(weight) || steps <= 0 || weight <= 0) {
        alert('Please enter valid positive values for steps and weight.');
        return;
    }
    const calories = steps * (weight * 0.000057);
    let result = {};
    if (calories < 200) {
        result = { status: 'Light Active Burn', color: 'var(--underweight)', desc: \`Your estimated active burn is \${calories.toFixed(1)} kcal. This reflects light daily movement or a shorter walking session.\`, suggestion: 'For more cardiovascular benefit, gradually increase walking duration or add short brisk intervals.', percent: Math.max(5, calories / 200 * 30) };
    } else if (calories <= 500) {
        result = { status: 'Moderate Metabolic Burn', color: 'var(--normal)', desc: \`Your estimated active burn is \${calories.toFixed(1)} kcal, a meaningful contribution to daily movement and energy balance.\`, suggestion: 'Consistent walking at this level supports metabolic health, circulation, and weight maintenance goals.', percent: 30 + ((calories - 200) / 300) * 40 };
    } else {
        result = { status: 'High Volume Energy Burn', color: 'var(--overweight)', desc: \`Your estimated active burn is \${calories.toFixed(1)} kcal, typical of a high-step or long walking day.\`, suggestion: 'Support higher walking volume with hydration, comfortable footwear, and recovery if your legs or joints feel overloaded.', percent: Math.min(95, 70 + (Math.min(calories - 500, 500) / 500) * 25) };
    }
    document.getElementById('result-area').style.display = 'block';
    document.getElementById('calc-output').innerText = calories.toFixed(1);
    document.getElementById('calc-output').style.color = result.color;
    document.getElementById('calc-status').innerText = result.status;
    document.getElementById('calc-status').style.color = result.color;
    document.getElementById('calc-desc').innerText = result.desc;
    document.getElementById('calc-suggestion').innerText = result.suggestion;
    document.getElementById('gauge-pointer').style.left = result.percent + '%';
    document.getElementById('result-area').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}`
};
