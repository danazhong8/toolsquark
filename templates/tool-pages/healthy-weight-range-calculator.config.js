module.exports = {
  slug: "healthy-weight-range-calculator",
  title: "Accurate Healthy Weight Range Calculator | ToolsQuark",
  description: "Calculate a healthy adult weight range from your height using standard BMI reference boundaries.",
  h1: "Healthy Weight Range Calculator",
  hero: "Estimate a practical healthy weight range based on your height, using standard adult BMI reference boundaries.",
  schemaName: "Privacy-First Healthy Weight Range Calculator",
  buttonText: "Calculate Healthy Weight Range",
  resultHtml: `
            <div class="result-val"><span id="calc-output">0 - 0</span><span class="result-unit" id="calc-unit">kg</span></div>
            <div class="result-status" id="calc-status">Healthy Range</div>
            <p class="result-desc" id="calc-desc"></p>
            <div class="suggestion-box">
                <h4>Weight Planning Insight</h4>
                <p id="calc-suggestion"></p>
            </div>`,
  controlsHtml: `
        <div class="unit-switcher">
            <div class="unit-tab active" id="tab-metric" onclick="switchUnit('metric')">Metric Units (cm)</div>
            <div class="unit-tab" id="tab-imperial" onclick="switchUnit('imperial')">Imperial Units (ft-in)</div>
        </div>
        <div id="inputs-container"></div>`,
  relatedTitle: "Add More Context",
  related: [
    { href: "https://www.toolsquark.com/tools/bmi-calculator.html", title: "BMI Calculator", description: "Check where your current weight sits on the BMI scale.", action: "Check BMI" },
    { href: "https://www.toolsquark.com/tools/body-fat-calculator.html", title: "Body Fat Calculator", description: "Estimate body composition beyond scale weight.", action: "Estimate Fat %" }
  ],
  faq: [
    { question: "How is healthy weight range calculated?", answer: "This calculator uses the adult BMI reference range of 18.5 to 24.9, then converts those BMI boundaries into weight values for your height." },
    { question: "Is this my ideal weight?", answer: "Not exactly. It is a broad screening range. Muscle mass, frame size, age, pregnancy, and medical context can all affect what weight is appropriate for you." },
    { question: "Does this apply to children?", answer: "No. Children and teenagers should use age- and sex-specific growth charts rather than adult BMI boundaries." }
  ],
  methodology: "Weight range is calculated as BMI x height squared, using BMI 18.5 to 24.9 for adults.",
  disclaimer: "This range is educational and not medical advice. Consult a qualified clinician for personalized weight guidance.",
  script: `
let currentUnit = 'metric';
function renderInputs() {
    const container = document.getElementById('inputs-container');
    if (currentUnit === 'metric') {
        container.innerHTML = \`
            <div class="input-group">
                <label for="input_height">Height</label>
                <div class="input-wrapper"><input type="number" id="input_height" placeholder="e.g. 175" step="any"><span class="unit-badge">cm</span></div>
            </div>\`;
    } else {
        container.innerHTML = \`
            <div class="input-row">
                <div class="input-group"><label for="input_ft">Height (Feet)</label><div class="input-wrapper"><input type="number" id="input_ft" placeholder="e.g. 5"><span class="unit-badge">ft</span></div></div>
                <div class="input-group"><label for="input_in">Height (Inches)</label><div class="input-wrapper"><input type="number" id="input_in" placeholder="e.g. 9"><span class="unit-badge">in</span></div></div>
            </div>\`;
    }
}
function switchUnit(unit) {
    if (currentUnit === unit) return;
    currentUnit = unit;
    document.getElementById('tab-metric').classList.toggle('active', unit === 'metric');
    document.getElementById('tab-imperial').classList.toggle('active', unit === 'imperial');
    document.getElementById('result-area').style.display = 'none';
    renderInputs();
}
function calculateNow() {
    let heightM = 0;
    if (currentUnit === 'metric') {
        const cm = parseFloat(document.getElementById('input_height').value);
        if (isNaN(cm) || cm <= 0) { alert('Please enter a valid height.'); return; }
        heightM = cm / 100;
    } else {
        const ft = parseFloat(document.getElementById('input_ft').value) || 0;
        const inch = parseFloat(document.getElementById('input_in').value) || 0;
        if (ft <= 0 && inch <= 0) { alert('Please enter a valid height.'); return; }
        heightM = ((ft * 12) + inch) * 0.0254;
    }
    const lowKg = 18.5 * heightM * heightM;
    const highKg = 24.9 * heightM * heightM;
    const midKg = 22 * heightM * heightM;
    document.getElementById('result-area').style.display = 'block';
    if (currentUnit === 'metric') {
        document.getElementById('calc-output').innerText = \`\${lowKg.toFixed(1)} - \${highKg.toFixed(1)}\`;
        document.getElementById('calc-unit').innerText = 'kg';
        document.getElementById('calc-desc').innerText = \`For this height, a BMI-based adult healthy range is approximately \${lowKg.toFixed(1)} to \${highKg.toFixed(1)} kg.\`;
        document.getElementById('calc-suggestion').innerText = \`A midpoint reference is around \${midKg.toFixed(1)} kg, but body composition and clinical context matter more than one target number.\`;
    } else {
        const lowLb = lowKg * 2.20462;
        const highLb = highKg * 2.20462;
        const midLb = midKg * 2.20462;
        document.getElementById('calc-output').innerText = \`\${lowLb.toFixed(1)} - \${highLb.toFixed(1)}\`;
        document.getElementById('calc-unit').innerText = 'lbs';
        document.getElementById('calc-desc').innerText = \`For this height, a BMI-based adult healthy range is approximately \${lowLb.toFixed(1)} to \${highLb.toFixed(1)} lbs.\`;
        document.getElementById('calc-suggestion').innerText = \`A midpoint reference is around \${midLb.toFixed(1)} lbs, but body composition and clinical context matter more than one target number.\`;
    }
    document.getElementById('calc-status').innerText = 'BMI 18.5 - 24.9 Reference Range';
    document.getElementById('result-area').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
renderInputs();`
};
