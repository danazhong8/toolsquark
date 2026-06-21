module.exports = {
  slug: "healthy-weight-range-calculator",
  title: "Healthy Weight Range Calculator | BMI-Based Estimate",
  description: "Estimate the adult BMI healthy-weight screening range for a given height. Includes the formula, example, limitations, and CDC references.",
  h1: "Healthy Weight Range Calculator",
  hero: "Estimate a practical healthy weight range based on your height, using standard adult BMI reference boundaries.",
  schemaName: "Privacy-First Healthy Weight Range Calculator",
  schemaDescription: "A browser-side calculator that converts the CDC adult BMI healthy-weight category into a height-specific weight range.",
  lastUpdated: "June 21, 2026",
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
    { href: "https://toolsquark.com/tools/bmi-calculator.html", title: "BMI Calculator", description: "Check where your current weight sits on the BMI scale.", action: "Check BMI" },
    { href: "https://toolsquark.com/tools/body-fat-calculator.html", title: "Body Fat Calculator", description: "Estimate body composition beyond scale weight.", action: "Estimate Fat %" }
  ],
  references: [
    { title: "Adult BMI Categories", publisher: "Centers for Disease Control and Prevention", href: "https://www.cdc.gov/bmi/adult-calculator/bmi-categories.html" },
    { title: "About Body Mass Index", publisher: "Centers for Disease Control and Prevention", href: "https://www.cdc.gov/bmi/about/index.html" }
  ],
  faq: [
    { question: "How is healthy weight range calculated?", answer: "This calculator uses the adult BMI reference range of 18.5 to 24.9, then converts those BMI boundaries into weight values for your height." },
    { question: "Is this my ideal weight?", answer: "Not exactly. It is a broad screening range. Muscle mass, frame size, age, pregnancy, and medical context can all affect what weight is appropriate for you." },
    { question: "Does this apply to children?", answer: "No. Children and teenagers should use age- and sex-specific growth charts rather than adult BMI boundaries." }
  ],
  contentSections: [
    {
      title: "What The Range Represents",
      body: `<p>This tool reverses the BMI formula to show the weights that correspond to adult BMI values 18.5 through 24.9 at the entered height. The CDC labels that interval the adult healthy-weight category.</p><p>It is a screening range, not an individualized ideal weight. Health and body composition can differ substantially between people at the same height and weight.</p>`
    },
    {
      title: "Formula",
      body: `<div class="formula-box">Lower weight = 18.5 x height (m)<sup>2</sup><br>Upper weight = 24.9 x height (m)<sup>2</sup></div><p>Imperial height is converted to meters before calculation. Metric results are shown in kilograms and imperial results in pounds.</p>`
    },
    {
      title: "Worked Example",
      body: `<p>At 1.75 m tall, the lower boundary is 18.5 x 1.75<sup>2</sup> = 56.7 kg and the upper boundary is 24.9 x 1.75<sup>2</sup> = 76.3 kg. Those numbers describe a BMI category, not a required personal target.</p>`
    },
    {
      title: "How To Add Context",
      body: `<p>BMI does not distinguish muscle from fat or show fat distribution. Waist measurements, body composition, strength, nutrition status, health history, blood pressure, and laboratory markers may all change how a weight is interpreted.</p>`
    },
    {
      title: "Who Should Not Use This Range Alone",
      body: `<p>Standard adult BMI boundaries are not designed for children or teenagers and need caution during pregnancy, in highly muscular people, older adults with low muscle mass, and people with edema, amputation, or illness-related weight change. Use qualified clinical guidance when these factors apply.</p>`
    }
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
