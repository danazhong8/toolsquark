module.exports = {
  slug: "body-fat-calculator",
  title: "Accurate Body Fat Calculator (U.S. Navy Method) | ToolsQuark",
  description: "Estimate your body fat percentage using the U.S. Navy circumference method with metric and imperial measurement support.",
  h1: "Body Fat Calculator",
  hero: "Estimate body fat percentage from circumference measurements using the U.S. Navy method, processed privately in your browser.",
  schemaName: "Privacy-First Body Fat Calculator",
  buttonText: "Calculate Body Fat",
  resultUnit: "%",
  resultStatus: "Estimated Body Fat",
  gaugeLabels: ["Lean", "Fitness", "Higher"],
  insightTitle: "Composition Insight",
  controlsHtml: `
        <div class="unit-switcher">
            <div class="unit-tab active" id="tab-metric" onclick="switchUnit('metric')">Metric Units (cm)</div>
            <div class="unit-tab" id="tab-imperial" onclick="switchUnit('imperial')">Imperial Units (inches)</div>
        </div>
        <div id="inputs-container"></div>`,
  relatedTitle: "Add Context To The Result",
  related: [
    { href: "https://toolsquark.com/tools/lean-body-mass-calculator.html", title: "Lean Body Mass Calculator", description: "Estimate non-fat body mass from height and weight.", action: "Check Lean Mass" },
    { href: "https://toolsquark.com/tools/waist-to-height-ratio-calculator.html", title: "Waist-to-Height Ratio Calculator", description: "Screen central abdominal distribution with waist and height.", action: "Check WHtR" }
  ],
  faq: [
    { question: "What measurements are required?", answer: "Men need height, neck, and waist circumference. Women need height, neck, waist, and hip circumference." },
    { question: "How accurate is the U.S. Navy method?", answer: "It is a practical field estimate based on circumference measurements. It is useful for tracking trends, but it is not as precise as clinical methods such as DEXA." },
    { question: "Should I use metric or imperial units?", answer: "Either works as long as all circumference and height entries use the same unit system selected in the calculator." }
  ],
  methodology: "This tool applies the U.S. Navy circumference equations for body density and converts that density into estimated body fat percentage.",
  disclaimer: "Body fat estimates are educational screening values and can be affected by measurement technique, hydration, and body proportions.",
  script: `
let currentUnit = 'metric';
function renderInputs() {
    const container = document.getElementById('inputs-container');
    const unit = currentUnit === 'metric' ? 'cm' : 'inches';
    container.innerHTML = \`
        <div class="input-group">
            <label for="input_gender">Gender</label>
            <div class="input-wrapper">
                <select id="input_gender" onchange="renderInputs()">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
        </div>
        <div class="input-row">
            <div class="input-group"><label for="input_height">Height</label><div class="input-wrapper"><input type="number" id="input_height" placeholder="\${currentUnit === 'metric' ? 'e.g. 175' : 'e.g. 69'}" step="any"><span class="unit-badge">\${unit}</span></div></div>
            <div class="input-group"><label for="input_neck">Neck</label><div class="input-wrapper"><input type="number" id="input_neck" placeholder="\${currentUnit === 'metric' ? 'e.g. 38' : 'e.g. 15'}" step="any"><span class="unit-badge">\${unit}</span></div></div>
        </div>
        <div class="input-row">
            <div class="input-group"><label for="input_waist">Waist</label><div class="input-wrapper"><input type="number" id="input_waist" placeholder="\${currentUnit === 'metric' ? 'e.g. 85' : 'e.g. 33.5'}" step="any"><span class="unit-badge">\${unit}</span></div></div>
            <div class="input-group" id="hip-group"><label for="input_hip">Hip</label><div class="input-wrapper"><input type="number" id="input_hip" placeholder="\${currentUnit === 'metric' ? 'e.g. 96' : 'e.g. 38'}" step="any"><span class="unit-badge">\${unit}</span></div></div>
        </div>\`;
    const genderSelect = document.getElementById('input_gender');
    const existingGender = genderSelect.dataset.gender || 'male';
    genderSelect.value = existingGender;
    genderSelect.onchange = function() {
        this.dataset.gender = this.value;
        document.getElementById('hip-group').style.display = this.value === 'female' ? 'block' : 'none';
    };
    genderSelect.onchange();
}
function switchUnit(unit) {
    if (currentUnit === unit) return;
    currentUnit = unit;
    document.getElementById('tab-metric').classList.toggle('active', unit === 'metric');
    document.getElementById('tab-imperial').classList.toggle('active', unit === 'imperial');
    document.getElementById('result-area').style.display = 'none';
    renderInputs();
}
function log10(value) {
    return Math.log(value) / Math.LN10;
}
function calculateNow() {
    const gender = document.getElementById('input_gender').value;
    const height = parseFloat(document.getElementById('input_height').value);
    const neck = parseFloat(document.getElementById('input_neck').value);
    const waist = parseFloat(document.getElementById('input_waist').value);
    const hipInput = document.getElementById('input_hip');
    const hip = hipInput ? parseFloat(hipInput.value) : 0;
    if (isNaN(height) || isNaN(neck) || isNaN(waist) || height <= 0 || neck <= 0 || waist <= 0) {
        alert('Please enter valid height, neck, and waist values.');
        return;
    }
    let bodyFat = 0;
    if (gender === 'male') {
        if (waist <= neck) { alert('Waist must be greater than neck for the Navy formula.'); return; }
        bodyFat = 495 / (1.0324 - 0.19077 * log10(waist - neck) + 0.15456 * log10(height)) - 450;
    } else {
        if (isNaN(hip) || hip <= 0) { alert('Please enter a valid hip measurement.'); return; }
        if ((waist + hip) <= neck) { alert('Waist plus hip must be greater than neck for the Navy formula.'); return; }
        bodyFat = 495 / (1.29579 - 0.35004 * log10(waist + hip - neck) + 0.22100 * log10(height)) - 450;
    }
    bodyFat = Math.max(3, Math.min(60, bodyFat));
    let result = {};
    if (bodyFat < 14) {
        result = { status: 'Very Lean Range', color: 'var(--underweight)', suggestion: 'Very lean results may be appropriate for some athletes but can be risky if paired with low energy, poor recovery, or hormonal symptoms.', percent: Math.max(5, bodyFat) };
    } else if (bodyFat < 25) {
        result = { status: 'Fitness / Standard Range', color: 'var(--normal)', suggestion: 'This range is commonly compatible with active health goals. Track long-term trends rather than reacting to one measurement.', percent: 25 + ((bodyFat - 14) / 11) * 35 };
    } else if (bodyFat < 32) {
        result = { status: 'Elevated Fat Range', color: 'var(--overweight)', suggestion: 'Consider pairing gradual nutrition changes with strength training, daily movement, sleep, and waist tracking.', percent: 60 + ((bodyFat - 25) / 7) * 20 };
    } else {
        result = { status: 'High Fat Range', color: 'var(--obese)', suggestion: 'This screening result may justify a broader health review, especially when combined with high waist measurements or metabolic risk markers.', percent: Math.min(95, 80 + ((bodyFat - 32) / 28) * 15) };
    }
    document.getElementById('result-area').style.display = 'block';
    document.getElementById('calc-output').innerText = bodyFat.toFixed(1);
    document.getElementById('calc-output').style.color = result.color;
    document.getElementById('calc-status').innerText = result.status;
    document.getElementById('calc-status').style.color = result.color;
    document.getElementById('calc-desc').innerText = \`Your estimated body fat percentage is \${bodyFat.toFixed(1)}% using the U.S. Navy circumference method.\`;
    document.getElementById('calc-suggestion').innerText = result.suggestion;
    document.getElementById('gauge-pointer').style.left = result.percent + '%';
    document.getElementById('result-area').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
renderInputs();`
};
