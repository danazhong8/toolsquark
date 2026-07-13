module.exports = {
  categoryHref: "lifestyle.html",
  categoryLabel: "Lifestyle Tools",
  slug: "walking-distance-to-steps-calculator",
  title: "Walking Distance To Steps Calculator | Miles Or Kilometers",
  description: "Convert walking distance to estimated steps using distance, unit, and stride length preset. Useful for miles to steps and kilometers to steps planning.",
  h1: "Walking Distance To Steps Calculator",
  hero: "Estimate steps from a walking distance in miles or kilometers using a stride-length preset or custom stride.",
  heroHighlights: ["Miles or kilometers", "Stride preset or custom", "Step-goal next step"],
  schemaName: "Privacy-First Walking Distance To Steps Calculator",
  schemaDescription: "A browser-side distance to steps calculator for walking plans, using distance and stride length assumptions.",
  lastUpdated: "July 13, 2026",
  buttonText: "Convert Distance To Steps",
  resultUnit: "steps",
  resultStatus: "Estimated Steps",
  gaugeLabels: ["Short", "Moderate", "Long"],
  insightTitle: "Distance Planning Note",
  shareResult: true,
  dynamicNextSteps: true,
  controlsHtml: `
        <div class="input-row">
            <div class="input-group">
                <label for="input_distance">Walking Distance</label>
                <div class="input-wrapper"><input type="number" id="input_distance" value="2" min="0.1" max="100" step="0.1"><span class="unit-badge">distance</span></div>
            </div>
            <div class="input-group">
                <label for="input_unit">Unit</label>
                <div class="input-wrapper">
                    <select id="input_unit">
                        <option value="1609.344">miles</option>
                        <option value="1000">kilometers</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="input-group">
            <label for="input_stride">Stride Length</label>
            <div class="input-wrapper">
                <select id="input_stride">
                    <option value="0.67">Shorter stride - 0.67 m</option>
                    <option value="0.76" selected>Average stride - 0.76 m</option>
                    <option value="0.84">Longer stride - 0.84 m</option>
                    <option value="custom">Custom stride</option>
                </select>
            </div>
        </div>
        <div class="input-group" id="custom_stride_group" style="display:none;">
            <label for="input_custom_stride">Custom Stride Length</label>
            <div class="input-wrapper"><input type="number" id="input_custom_stride" value="0.76" min="0.3" max="1.5" step="0.01"><span class="unit-badge">m</span></div>
        </div>`,
  relatedTitle: "Movement Planning",
  related: [
    { href: "https://toolsquark.com/tools/walking-time-to-steps-calculator.html", title: "Walking Time To Steps", description: "Estimate steps from walking minutes instead of distance.", action: "Convert Time" },
    { href: "https://toolsquark.com/tools/daily-steps-goal-calculator.html", title: "Daily Steps Goal Calculator", description: "Turn a distance estimate into a sustainable daily step plan.", action: "Plan Steps" },
    { href: "https://toolsquark.com/tools/steps-to-calories-converter.html", title: "Steps To Calories Converter", description: "Use estimated steps for a rough walking energy estimate.", action: "Estimate Burn" }
  ],
  references: [
    { title: "Physical Activity Guidelines for Adults", publisher: "Centers for Disease Control and Prevention", href: "https://www.cdc.gov/physical-activity-basics/guidelines/adults.html" }
  ],
  faq: [
    { question: "How many steps are in a mile?", answer: "Using the default 0.76 m stride, one mile is about 2,118 steps. Actual steps vary with height, stride, speed, grade, and turns." },
    { question: "How many steps are in a kilometer?", answer: "Using the default 0.76 m stride, one kilometer is about 1,316 steps." },
    { question: "Is this more accurate than a phone?", answer: "No. A phone or wearable can measure your actual steps. This calculator is for planning when you know distance but not step count." }
  ],
  contentSections: [
    { title: "What This Calculator Estimates", body: `<p>This distance-to-steps calculator divides walking distance by estimated stride length. It is useful for route planning, not measurement.</p>` },
    { title: "Formula Used", body: `<div class="formula-box">Estimated steps = distance in meters / stride length in meters</div><p>Stride length is the main assumption. If you know your measured stride, use the custom option.</p>` },
    { title: "Worked Example", body: `<p>Two miles equals 3,218.7 meters. With a 0.76 m stride, estimated steps are 3,218.7 / 0.76 = about 4,235 steps.</p>` },
    { title: "Common Estimates", body: `<table class="comparison-table"><thead><tr><th>Distance</th><th>Average Stride</th></tr></thead><tbody><tr><td>1 mile</td><td>About 2,118 steps</td></tr><tr><td>2 miles</td><td>About 4,235 steps</td></tr><tr><td>1 km</td><td>About 1,316 steps</td></tr><tr><td>5 km</td><td>About 6,579 steps</td></tr></tbody></table>` }
  ],
  methodology: "This tool converts distance to meters, divides by selected stride length in meters, then rounds to the nearest whole step.",
  disclaimer: "Step estimates vary with stride length, speed, terrain, turns, device placement, and walking pattern.",
  script: `
document.getElementById('input_stride').addEventListener('change', function() {
    document.getElementById('custom_stride_group').style.display = this.value === 'custom' ? 'block' : 'none';
});
function calculateNow() {
    const distance = parseFloat(document.getElementById('input_distance').value);
    const unitMeters = parseFloat(document.getElementById('input_unit').value);
    const strideChoice = document.getElementById('input_stride').value;
    const stride = strideChoice === 'custom' ? parseFloat(document.getElementById('input_custom_stride').value) : parseFloat(strideChoice);
    if (isNaN(distance) || isNaN(unitMeters) || isNaN(stride) || distance <= 0 || stride <= 0) {
        alert('Please enter a valid distance and stride length.');
        return;
    }
    const steps = Math.round((distance * unitMeters) / stride);
    const percent = Math.min(95, Math.max(5, steps / 12000 * 90));
    document.getElementById('result-area').style.display = 'block';
    document.getElementById('calc-output').innerText = steps.toLocaleString();
    document.getElementById('calc-output').style.color = 'var(--accent)';
    document.getElementById('calc-status').innerText = 'Distance-Based Step Estimate';
    document.getElementById('calc-status').style.color = 'var(--accent)';
    document.getElementById('calc-desc').innerText = 'Estimated steps: ' + steps.toLocaleString() + ' using a stride length of ' + stride.toFixed(2) + ' meters.';
    document.getElementById('calc-suggestion').innerText = 'Use this for route planning, then compare with your phone or wearable after walking the route.';
    document.getElementById('gauge-pointer').style.left = percent + '%';
    setNextStepRecommendations([
        { label: 'Daily Steps Goal Calculator', href: 'https://toolsquark.com/tools/daily-steps-goal-calculator.html', reason: 'Turn the route estimate into a repeatable daily step target.', action: 'Plan Steps' },
        { label: 'Walking Time To Steps', href: 'https://toolsquark.com/tools/walking-time-to-steps-calculator.html', reason: 'Estimate steps when you know time instead of distance.', action: 'Convert Time' }
    ]);
    document.getElementById('result-area').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}`
};
