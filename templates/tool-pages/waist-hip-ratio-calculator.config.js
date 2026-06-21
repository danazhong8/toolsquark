module.exports = {
  slug: "waist-hip-ratio-calculator",
  title: "Waist-to-Hip Ratio Calculator | WHO Cutoffs",
  description: "Calculate waist-to-hip ratio with metric or imperial measurements. See WHO central-obesity cutoffs, measurement guidance, limits, and sources.",
  h1: "Waist Hip Ratio Calculator",
  hero: "Compare waist and hip circumference as a screening measure of central body-fat distribution. The calculation runs privately in your browser.",
  schemaName: "Privacy-First Waist Hip Ratio Calculator",
  schemaDescription: "An interactive, client-side waist-to-hip ratio calculator for assessing body fat distribution without data logging.",
  lastUpdated: "June 21, 2026",
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
      href: "https://toolsquark.com/tools/bmi-calculator.html",
      title: "BMI Calculator",
      description: "Compare your waist-to-hip result with a standard height-to-weight baseline.",
      action: "Check BMI"
    },
    {
      href: "https://toolsquark.com/tools/body-fat-calculator.html",
      title: "Body Fat Calculator",
      description: "Estimate body fat percentage using circumference-based measurements.",
      action: "Estimate Body Fat"
    }
  ],
  references: [
    { title: "Waist Circumference and Waist-Hip Ratio: Report of a WHO Expert Consultation", publisher: "World Health Organization", href: "https://www.who.int/publications/i/item/9789241501491" }
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
  contentSections: [
    {
      title: "What WHR Measures",
      body: `<p>Waist-to-hip ratio compares abdominal circumference with hip circumference. A higher ratio indicates that more circumference is concentrated around the waist relative to the hips.</p><p>WHR is a screening marker for central fat distribution. It does not directly measure visceral fat or diagnose cardiovascular or metabolic disease.</p>`
    },
    {
      title: "Formula And WHO Cutoffs",
      body: `<div class="formula-box">WHR = waist circumference / hip circumference</div><p>The units cancel as long as both measurements use the same unit. The WHO report identifies WHR above 0.90 for men and above 0.85 for women as substantially increased metabolic-complication risk cutoffs, while also noting that cut points can vary across populations.</p>`
    },
    {
      title: "How To Measure",
      body: `<ol><li>Stand with feet together and weight evenly distributed.</li><li>Measure the waist at the midpoint between the lowest rib and top of the hip bone after a normal exhale.</li><li>Measure the hips at the widest circumference over the buttocks.</li><li>Keep the tape horizontal and snug without compressing the skin.</li></ol>`
    },
    {
      title: "Worked Example",
      body: `<p>A waist of 84 cm and hips of 100 cm produce 84 / 100 = 0.84. Because this is a ratio, equivalent inch measurements return the same result.</p>`
    },
    {
      title: "Limits And Context",
      body: `<p>Measurement placement, breathing, tape tension, pregnancy, body shape, and population background affect interpretation. Pair WHR with absolute waist circumference, BMI or body composition, blood pressure, laboratory markers, and clinical history when assessing health risk.</p>`
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
            <label for="input_gender">Sex Used For Reference Cutoff</label>
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
            result = { status: 'Below WHO Male Cutoff', color: 'var(--normal)', desc: \`Your WHR is \${whr.toFixed(2)}, below the WHO 0.90 male cutoff for substantially increased metabolic risk.\`, suggestion: 'Treat this as one screening measure and keep measurement technique consistent when tracking change.', percent: Math.min(60, 5 + (whr / 0.90) * 55) };
        } else {
            result = { status: 'At Or Above WHO Male Cutoff', color: 'var(--obese)', desc: \`Your WHR is \${whr.toFixed(2)}, at or above the WHO 0.90 male screening cutoff.\`, suggestion: 'Consider this alongside waist size and other cardiometabolic risk markers with a qualified clinician.', percent: Math.min(95, 65 + (Math.min(whr - 0.90, 0.25) / 0.25) * 30) };
        }
    } else if (whr < 0.85) {
        result = { status: 'Below WHO Female Cutoff', color: 'var(--normal)', desc: \`Your WHR is \${whr.toFixed(2)}, below the WHO 0.85 female cutoff for substantially increased metabolic risk.\`, suggestion: 'Treat this as one screening measure and keep measurement technique consistent when tracking change.', percent: Math.min(60, 5 + (whr / 0.85) * 55) };
    } else {
        result = { status: 'At Or Above WHO Female Cutoff', color: 'var(--obese)', desc: \`Your WHR is \${whr.toFixed(2)}, at or above the WHO 0.85 female screening cutoff.\`, suggestion: 'Consider this alongside waist size and other cardiometabolic risk markers with a qualified clinician.', percent: Math.min(95, 65 + (Math.min(whr - 0.85, 0.25) / 0.25) * 30) };
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
