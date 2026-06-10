module.exports = {
  slug: "waist-hip-ratio-calculator",
  title: "Accurate Waist Hip Ratio Calculator | WHR Health Risk Tracker | ToolsQuark",
  description: "Calculate your Waist-to-Hip Ratio (WHR) instantly with our free online calculator. Supports Metric and Imperial systems to evaluate body fat distribution and metabolic health risks with 100% data privacy.",
  h1: "Waist Hip Ratio Calculator",
  hero: "Evaluate your body fat distribution pattern and check for indicators of visceral fat accumulation instantly. This privacy-focused application computes data entirely within your browser.",
  schemaName: "Privacy-First Waist Hip Ratio Calculator",
  schemaDescription: "An interactive, client-side waist-to-hip ratio calculator for assessing body fat distribution without data logging.",
  buttonText: "Calculate Waist-to-Hip Ratio",
  resultUnit: "",
  resultStatus: "Low Risk",
  gaugeLabels: ["Low Risk", "Moderate", "High Risk"],
  insightTitle: "Body Composition Insight",
  controlsHtml: `
        <div class="unit-switcher">
            <div class="unit-tab active" id="tab-metric" onclick="switchUnit('metric')">Metric Units (cm)</div>
            <div class="unit-tab" id="tab-imperial" onclick="switchUnit('imperial')">Imperial Units (inches)</div>
        </div>
        <div id="inputs-container"></div>`,
  relatedTitle: "Compare With Other Body Metrics",
  related: [
    {
      href: "https://www.toolsquark.com/tools/bmi-calculator.html",
      title: "BMI Calculator",
      description: "Compare your waist-to-hip result with a standard height-to-weight baseline.",
      action: "Check BMI"
    },
    {
      href: "https://www.toolsquark.com/tools/body-fat-calculator.html",
      title: "Body Fat Calculator",
      description: "Estimate body fat percentage using circumference-based measurements.",
      action: "Estimate Body Fat"
    }
  ],
  faq: [
    {
      question: "What does waist-to-hip ratio measure?",
      answer: "Waist-to-hip ratio compares abdominal circumference with hip circumference. It is used as a simple indicator of central fat distribution, which can add context beyond body weight or BMI alone."
    },
    {
      question: "What waist-to-hip ratio is considered high risk?",
      answer: "Common public health references flag ratios at or above 0.90 for men and 0.85 for women as elevated central obesity risk. This tool also shows a moderate warning zone before those higher-risk ranges."
    },
    {
      question: "How should I measure waist and hip circumference?",
      answer: "Measure the waist around the midpoint between the lowest rib and the top of the hip bone after a normal exhale. Measure the hips around the widest part of the buttocks, keeping the tape level and snug without compressing skin."
    }
  ],
  methodology: "This tool divides waist circumference by hip circumference and interprets the result using commonly cited sex-specific waist-to-hip risk thresholds.",
  disclaimer: "Waist-to-hip ratio is a screening estimate, not a diagnosis. Consult a qualified clinician for personalized metabolic or cardiovascular risk assessment.",
  script: `
let currentUnit = 'metric';
function renderInputs() {
    const container = document.getElementById('inputs-container');
    const baseInputs = \`
        <div class="input-group">
            <label for="input_gender">Biological Gender</label>
            <div class="input-wrapper">
                <select id="input_gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
        </div>\`;
    if (currentUnit === 'metric') {
        container.innerHTML = baseInputs + \`
            <div class="input-row">
                <div class="input-group">
                    <label for="input_waist">Waist Circumference</label>
                    <div class="input-wrapper">
                        <input type="number" id="input_waist" placeholder="e.g. 85" step="any">
                        <span class="unit-badge">cm</span>
                    </div>
                </div>
                <div class="input-group">
                    <label for="input_hip">Hip Circumference</label>
                    <div class="input-wrapper">
                        <input type="number" id="input_hip" placeholder="e.g. 95" step="any">
                        <span class="unit-badge">cm</span>
                    </div>
                </div>
            </div>\`;
    } else {
        container.innerHTML = baseInputs + \`
            <div class="input-row">
                <div class="input-group">
                    <label for="input_waist">Waist Circumference</label>
                    <div class="input-wrapper">
                        <input type="number" id="input_waist" placeholder="e.g. 33.5" step="any">
                        <span class="unit-badge">inches</span>
                    </div>
                </div>
                <div class="input-group">
                    <label for="input_hip">Hip Circumference</label>
                    <div class="input-wrapper">
                        <input type="number" id="input_hip" placeholder="e.g. 37.4" step="any">
                        <span class="unit-badge">inches</span>
                    </div>
                </div>
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
    const gender = document.getElementById('input_gender').value;
    const waist = parseFloat(document.getElementById('input_waist').value);
    const hip = parseFloat(document.getElementById('input_hip').value);
    if (isNaN(waist) || isNaN(hip) || waist <= 0 || hip <= 0) {
        alert('Please enter valid positive measurements for both waist and hip dimensions.');
        return;
    }
    const whr = waist / hip;
    let result = {};
    if (gender === 'male') {
        if (whr < 0.90) {
            const percent = 5 + (whr / 0.90) * 40;
            result = { status: 'Low Risk Health Profile', color: 'var(--normal)', desc: \`Your calculated Waist-to-Hip Ratio is \${whr.toFixed(2)}. This falls within standard low-risk parameters for male physiology.\`, suggestion: 'This body fat distribution suggests reduced central abdominal risk. Maintain balanced nutrition and steady movement habits.', percent: Math.min(45, percent) };
        } else if (whr <= 0.95) {
            const percent = 45 + ((whr - 0.90) / 0.05) * 30;
            result = { status: 'Moderate Risk Profile', color: 'var(--overweight)', desc: \`Your calculated Waist-to-Hip Ratio is \${whr.toFixed(2)}. This is in the moderate risk warning range for male adults.\`, suggestion: 'This may indicate a shift toward central abdominal weight localization. Cardiovascular routines and nutritional management can help.', percent };
        } else {
            const percent = 75 + (Math.min(whr - 0.95, 0.2) / 0.2) * 20;
            result = { status: 'High Risk Indicator', color: 'var(--obese)', desc: \`Your calculated Waist-to-Hip Ratio is \${whr.toFixed(2)}, indicating central body fat concentration and higher health risk.\`, suggestion: 'Ratios above 0.95 in men are associated with higher metabolic risk. Consider reviewing cardiovascular health indicators with a clinician.', percent: Math.min(95, percent) };
        }
    } else if (whr < 0.80) {
        const percent = 5 + (whr / 0.80) * 40;
        result = { status: 'Low Risk Health Profile', color: 'var(--normal)', desc: \`Your calculated Waist-to-Hip Ratio is \${whr.toFixed(2)}. This is aligned with lower-risk female physiology parameters.\`, suggestion: 'This proportion suggests lower accumulation of central abdominal fat. Continue supporting metabolic health through regular movement.', percent: Math.min(45, percent) };
    } else if (whr <= 0.85) {
        const percent = 45 + ((whr - 0.80) / 0.05) * 30;
        result = { status: 'Moderate Risk Profile', color: 'var(--overweight)', desc: \`Your calculated Waist-to-Hip Ratio is \${whr.toFixed(2)}. This is within the moderate risk range for female adults.\`, suggestion: 'This may indicate early visceral fat shift around the core. Nutrition and consistent activity can help improve the pattern.', percent };
    } else {
        const percent = 75 + (Math.min(whr - 0.85, 0.2) / 0.2) * 20;
        result = { status: 'High Risk Indicator', color: 'var(--obese)', desc: \`Your calculated Waist-to-Hip Ratio is \${whr.toFixed(2)}, pointing toward prominent central abdominal fat density.\`, suggestion: 'WHR above 0.85 for women is linked with increased metabolic vulnerability. Consider clinical or dietitian guidance.', percent: Math.min(95, percent) };
    }
    document.getElementById('result-area').style.display = 'block';
    document.getElementById('calc-output').innerText = whr.toFixed(2);
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
