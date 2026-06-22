module.exports = {
  categoryHref: "lifestyle.html",
  categoryLabel: "Lifestyle Tools",
  slug: "steps-to-calories-converter",
  title: "Steps to Calories Calculator | Walking Estimate",
  description: "Estimate walking calories from step count and body weight with a transparent simplified factor. Includes an example, limitations, and source context.",
  h1: "Steps to Calories Converter",
  hero: "Estimate active calories burned from walking steps and body weight, with all calculations handled privately in your browser.",
  schemaName: "Privacy-First Steps to Calories Converter",
  schemaDescription: "A browser-side simplified walking calorie estimate based on step count and body weight, with transparent assumptions and limitations.",
  lastUpdated: "June 21, 2026",
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
    { href: "https://toolsquark.com/tools/daily-steps-goal-calculator.html", title: "Daily Steps Goal Calculator", description: "Create a progressive weekly step target plan.", action: "Plan Steps" },
    { href: "https://toolsquark.com/tools/tdee-calculator.html", title: "TDEE Calculator", description: "Estimate full-day calorie expenditure beyond walking.", action: "Calculate TDEE" }
  ],
  references: [
    { title: "2011 Compendium of Physical Activities", publisher: "Medicine & Science in Sports & Exercise / PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/21681120/" },
    { title: "Physical Activity Guidelines for Adults", publisher: "Centers for Disease Control and Prevention", href: "https://www.cdc.gov/physical-activity-basics/guidelines/adults.html" }
  ],
  faq: [
    { question: "How does this converter estimate calories?", answer: "The calculator uses a practical walking estimate based on step count and body weight. It is intended for directional tracking rather than laboratory-grade energy measurement." },
    { question: "Does body weight affect calories burned?", answer: "Yes. Moving more body mass generally requires more energy, so a heavier person usually burns more calories for the same number of steps." },
    { question: "Why is my fitness tracker result different?", answer: "Trackers may use pace, heart rate, stride length, terrain, and proprietary formulas. This converter uses a simpler transparent estimate." }
  ],
  contentSections: [
    {
      title: "What The Estimate Represents",
      body: `<p>This tool produces a rough active-calorie estimate for walking. It uses only steps and body weight, so it cannot distinguish slow indoor movement from brisk hills or account for stride length and carried load.</p>`
    },
    {
      title: "Simplified Formula",
      body: `<div class="formula-box">Estimated active kcal = steps x weight (kg) x 0.00057</div><p>The coefficient is a planning heuristic chosen to produce a plausible midrange walking estimate. It is not a metabolic-equivalent calculation or a device-calibrated measurement.</p>`
    },
    {
      title: "Worked Example",
      body: `<p>For 10,000 steps at 70 kg, the estimate is 10,000 x 70 x 0.00057 = 399 kcal. Actual expenditure can be materially lower or higher.</p>`
    },
    {
      title: "Why Trackers Differ",
      body: `<p>Wearables may add heart rate, speed, grade, GPS distance, age, sex, and proprietary calibration. Laboratory or Compendium-based estimates use activity intensity and duration rather than step count alone.</p>`
    },
    {
      title: "Appropriate Use",
      body: `<p>Use the result for rough comparison between similar walking days, not to earn back food or calculate a precise calorie deficit. Exercise energy estimates have enough uncertainty that body-weight and performance trends are more useful for long-term planning.</p>`
    }
  ],
  methodology: "Estimated calories = steps x body weight in kg x 0.00057. This is a disclosed simplified walking heuristic, not a laboratory or wearable measurement.",
  disclaimer: "Calories burned are estimates and vary with walking speed, stride length, terrain, fitness level, and device accuracy.",
  script: `
function calculateNow() {
    const steps = parseFloat(document.getElementById('input_steps').value);
    const weight = parseFloat(document.getElementById('input_weight').value);
    if (isNaN(steps) || isNaN(weight) || steps <= 0 || weight <= 0) {
        alert('Please enter valid positive values for steps and weight.');
        return;
    }
    const calories = steps * (weight * 0.00057);
    const result = { status: 'Simplified Walking Estimate', color: 'var(--accent)', desc: \`The simplified estimate is \${calories.toFixed(1)} active kcal for the entered steps and body weight.\`, suggestion: 'Use this for rough comparison between similar days. Pace, grade, stride, terrain, and individual efficiency can move actual expenditure substantially.', percent: Math.min(95, Math.max(5, (calories / 1000) * 90)) };
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
