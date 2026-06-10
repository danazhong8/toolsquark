module.exports = {
  slug: "waist-to-height-ratio-calculator",
  title: "Accurate Waist-to-Height Ratio Calculator (WHtR) | ToolsQuark",
  description: "Calculate your precise Waist-to-Height Ratio (WHtR) to screen central body fat distribution and cardiometabolic health risk.",
  h1: "Waist-to-Height Ratio Calculator",
  hero: "Compare waist circumference against height to evaluate central fat distribution beyond body weight alone.",
  schemaName: "Privacy-First Waist-to-Height Ratio Calculator",
  buttonText: "Calculate Waist-to-Height Ratio",
  resultUnit: "",
  resultStatus: "WHtR Result",
  gaugeLabels: ["Low", "Healthy", "High"],
  insightTitle: "Central Fat Insight",
  controlsHtml: `
        <div class="unit-switcher">
            <div class="unit-tab active" id="tab-metric" onclick="switchUnit('metric')">Metric Units (cm)</div>
            <div class="unit-tab" id="tab-imperial" onclick="switchUnit('imperial')">Imperial Units (inches)</div>
        </div>
        <div id="inputs-container"></div>`,
  relatedTitle: "Compare Your Body Metrics",
  related: [
    { href: "https://www.toolsquark.com/tools/bmi-calculator.html", title: "BMI Calculator", description: "Check a standard height-to-weight baseline.", action: "Check BMI" },
    { href: "https://www.toolsquark.com/tools/waist-hip-ratio-calculator.html", title: "Waist Hip Ratio Calculator", description: "Compare abdominal and hip circumference patterns.", action: "Check WHR" }
  ],
  faq: [
    { question: "What is waist-to-height ratio?", answer: "Waist-to-height ratio divides waist circumference by height. It is used as a simple screening marker for central abdominal fat distribution." },
    { question: "What WHtR value is considered elevated?", answer: "A common public health rule of thumb is to keep waist circumference below half of height. Values at or above 0.50 suggest elevated central fat risk." },
    { question: "Is WHtR better than BMI?", answer: "WHtR and BMI measure different things. BMI compares body weight with height, while WHtR focuses on abdominal distribution, so using both can provide better context." }
  ],
  methodology: "This tool divides waist circumference by height using matching units and interprets the result with common waist-to-height screening ranges.",
  disclaimer: "WHtR is a screening estimate, not a diagnosis. Consult a qualified clinician for personalized health risk assessment.",
  script: `
let currentUnit = 'metric';
function renderInputs() {
    const container = document.getElementById('inputs-container');
    const waistUnit = currentUnit === 'metric' ? 'cm' : 'inches';
    const heightUnit = currentUnit === 'metric' ? 'cm' : 'inches';
    container.innerHTML = \`
        <div class="input-row">
            <div class="input-group">
                <label for="input_waist">Waist Circumference</label>
                <div class="input-wrapper"><input type="number" id="input_waist" placeholder="\${currentUnit === 'metric' ? 'e.g. 82' : 'e.g. 32'}" step="any"><span class="unit-badge">\${waistUnit}</span></div>
            </div>
            <div class="input-group">
                <label for="input_height">Height</label>
                <div class="input-wrapper"><input type="number" id="input_height" placeholder="\${currentUnit === 'metric' ? 'e.g. 175' : 'e.g. 69'}" step="any"><span class="unit-badge">\${heightUnit}</span></div>
            </div>
        </div>\`;
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
    const waist = parseFloat(document.getElementById('input_waist').value);
    const height = parseFloat(document.getElementById('input_height').value);
    if (isNaN(waist) || isNaN(height) || waist <= 0 || height <= 0) {
        alert('Please enter valid waist and height values.');
        return;
    }
    const ratio = waist / height;
    let result = {};
    if (ratio < 0.40) {
        result = { status: 'Lower Central Mass', color: 'var(--underweight)', desc: \`Your WHtR is \${ratio.toFixed(2)}. This is below the commonly targeted central-fat range.\`, suggestion: 'If this reflects low body weight or low energy availability, consider checking BMI and overall nutrition status.', percent: Math.max(5, ratio / 0.40 * 25) };
    } else if (ratio < 0.50) {
        result = { status: 'Healthy Central Range', color: 'var(--normal)', desc: \`Your WHtR is \${ratio.toFixed(2)}. This is generally within the keep-your-waist-below-half-your-height target.\`, suggestion: 'Maintain this pattern with regular movement, strength training, sleep consistency, and balanced nutrition.', percent: 25 + ((ratio - 0.40) / 0.10) * 35 };
    } else if (ratio < 0.60) {
        result = { status: 'Elevated Central Risk', color: 'var(--overweight)', desc: \`Your WHtR is \${ratio.toFixed(2)}, which is above the common 0.50 screening threshold.\`, suggestion: 'This may indicate increased central abdominal fat. Consider combining waist tracking with blood pressure, lipids, glucose, and clinician guidance.', percent: 60 + ((ratio - 0.50) / 0.10) * 25 };
    } else {
        result = { status: 'High Central Risk Indicator', color: 'var(--obese)', desc: \`Your WHtR is \${ratio.toFixed(2)}, which is in a high central-fat screening range.\`, suggestion: 'Review this result with a qualified clinician, especially if other cardiometabolic risk markers are present.', percent: Math.min(95, 85 + (Math.min(ratio - 0.60, 0.20) / 0.20) * 10) };
    }
    document.getElementById('result-area').style.display = 'block';
    document.getElementById('calc-output').innerText = ratio.toFixed(2);
    document.getElementById('calc-output').style.color = result.color;
    document.getElementById('calc-status').innerText = result.status;
    document.getElementById('calc-status').style.color = result.color;
    document.getElementById('calc-desc').innerText = result.desc;
    document.getElementById('calc-suggestion').innerText = result.suggestion;
    document.getElementById('gauge-pointer').style.left = result.percent + '%';
    document.getElementById('result-area').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
renderInputs();`
};
