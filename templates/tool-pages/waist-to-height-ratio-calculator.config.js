module.exports = {
  slug: "waist-to-height-ratio-calculator",
  title: "Waist-to-Height Ratio Calculator | WHtR Screening",
  description: "Calculate waist-to-height ratio and compare it with the common 0.50 screening boundary. Includes measurement steps, limits, and references.",
  h1: "Waist-to-Height Ratio Calculator",
  hero: "Compare waist circumference against height to evaluate central fat distribution beyond body weight alone.",
  schemaName: "Privacy-First Waist-to-Height Ratio Calculator",
  schemaDescription: "A browser-side waist-to-height ratio calculator with the common waist-below-half-height screening boundary and clear limitations.",
  lastUpdated: "June 21, 2026",
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
    { href: "https://toolsquark.com/tools/bmi-calculator.html", title: "BMI Calculator", description: "Check a standard height-to-weight baseline.", action: "Check BMI" },
    { href: "https://toolsquark.com/tools/waist-hip-ratio-calculator.html", title: "Waist Hip Ratio Calculator", description: "Compare abdominal and hip circumference patterns.", action: "Check WHR" }
  ],
  references: [
    { title: "Waist-to-Height Ratio as an Indicator of Early Health Risk", publisher: "BMJ Open / PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/26975935/" },
    { title: "Identifying and Assessing Central Adiposity", publisher: "National Institute for Health and Care Excellence", href: "https://www.nice.org.uk/guidance/cg189/chapter/Recommendations" }
  ],
  faq: [
    { question: "What is waist-to-height ratio?", answer: "Waist-to-height ratio divides waist circumference by height. It is used as a simple screening marker for central abdominal fat distribution." },
    { question: "What WHtR value is considered elevated?", answer: "A common public health rule of thumb is to keep waist circumference below half of height. Values at or above 0.50 suggest elevated central fat risk." },
    { question: "Is WHtR better than BMI?", answer: "WHtR and BMI measure different things. BMI compares body weight with height, while WHtR focuses on abdominal distribution, so using both can provide better context." }
  ],
  contentSections: [
    {
      title: "What WHtR Measures",
      body: `<p>Waist-to-height ratio compares abdominal circumference with stature. It is a simple screening measure of central adiposity that can add information beyond weight or BMI.</p><p>WHtR does not directly measure visceral fat and cannot diagnose diabetes, cardiovascular disease, or another condition.</p>`
    },
    {
      title: "Formula And Screening Boundary",
      body: `<div class="formula-box">WHtR = waist circumference / height</div><p>Use the same units for waist and height. A widely used public-health message is to keep waist circumference below half of height, corresponding to WHtR below 0.50. Cutoffs are screening conventions and may require different interpretation by age and population.</p>`
    },
    {
      title: "Measurement Steps",
      body: `<ol><li>Measure standing height without shoes.</li><li>Measure waist at the recommended anatomical site after a normal exhale.</li><li>Keep the tape horizontal and snug without compressing skin.</li><li>Repeat the waist measurement and use a consistent site for future comparisons.</li></ol>`
    },
    {
      title: "Worked Example",
      body: `<p>A waist of 82 cm and height of 175 cm produce 82 / 175 = 0.47. Equivalent measurements in inches return the same ratio.</p>`
    },
    {
      title: "Limits And Context",
      body: `<p>Pregnancy, abdominal distension, measurement technique, growth, age, and body shape can affect interpretation. Use WHtR with other information such as blood pressure, glucose, lipids, health history, and qualified clinical assessment when risk matters.</p>`
    }
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
    if (ratio < 0.50) {
        result = { status: 'Below 0.50 Screening Boundary', color: 'var(--normal)', desc: \`Your WHtR is \${ratio.toFixed(2)}, below the common waist-below-half-height screening boundary.\`, suggestion: 'Use this as one screening measure and repeat the waist measurement consistently when tracking change.', percent: Math.min(60, Math.max(5, (ratio / 0.50) * 60)) };
    } else if (ratio < 0.60) {
        result = { status: 'At Or Above 0.50', color: 'var(--overweight)', desc: \`Your WHtR is \${ratio.toFixed(2)}, at or above the common 0.50 screening boundary.\`, suggestion: 'Consider this result alongside blood pressure, lipids, glucose, and other clinical context.', percent: 65 + ((ratio - 0.50) / 0.10) * 20 };
    } else {
        result = { status: 'Higher Central-Adiposity Signal', color: 'var(--obese)', desc: \`Your WHtR is \${ratio.toFixed(2)}, substantially above the common 0.50 screening boundary.\`, suggestion: 'Review the measurement and consider discussing overall cardiometabolic risk with a qualified clinician.', percent: Math.min(95, 85 + (Math.min(ratio - 0.60, 0.20) / 0.20) * 10) };
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
