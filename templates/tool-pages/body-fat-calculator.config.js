module.exports = {
  slug: "body-fat-calculator",
  title: "Body Fat Calculator | U.S. Navy Circumference Method",
  description: "Estimate adult body fat percentage with the U.S. Navy circumference method. Includes measurement instructions, formula details, limits, and sources.",
  h1: "Body Fat Calculator",
  hero: "Estimate body fat percentage from circumference measurements using the U.S. Navy method, processed privately in your browser.",
  schemaName: "Privacy-First Body Fat Calculator",
  schemaDescription: "A browser-side adult body fat estimate using U.S. Navy circumference equations, with metric and imperial inputs and method limitations.",
  lastUpdated: "June 20, 2026",
  buttonText: "Calculate Body Fat",
  resultUnit: "%",
  resultStatus: "Estimated Body Fat",
  gaugeLabels: ["Lower", "Midrange", "Higher"],
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
  references: [
    { title: "History of the U.S. Navy Body Composition Program", publisher: "Military Medicine / PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/25562863/" },
    { title: "Predicting Percent Body Fat from Circumference Measurements", publisher: "Military Medicine / PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/8437737/" }
  ],
  faq: [
    { question: "What measurements are required?", answer: "Men need height, neck, and waist circumference. Women need height, neck, waist, and hip circumference." },
    { question: "How accurate is the U.S. Navy method?", answer: "It is a field estimate derived from circumference measurements and population equations. Individual error can be meaningful, so it is better for repeatable trend tracking than for treating one decimal result as exact." },
    { question: "Should I use metric or imperial units?", answer: "Either works as long as every measurement matches the selected system. Imperial entries are converted to centimeters before the equations are applied." },
    { question: "Where should I measure?", answer: "Keep the tape horizontal and snug without compressing skin. Measure the neck below the larynx, the waist at the method-specific abdominal site, and for women the hips at the widest point. Repeat each measurement." },
    { question: "Can this replace DEXA or clinical assessment?", answer: "No. Circumference equations infer body composition from body shape. They do not directly image fat or lean tissue and may be less suitable when body proportions differ from the development samples." }
  ],
  contentSections: [
    {
      title: "What The Result Represents",
      body: `<p>This calculator estimates adult body-fat percentage from height and circumference measurements. It uses separate U.S. Navy equations for men and women because the measurement sets and fitted coefficients differ.</p><p>The output is not a direct scan and should not be read as precise to one decimal place, even though a decimal is displayed for consistent tracking.</p>`
    },
    {
      title: "Equations And Variables",
      body: `<div class="formula-box">Men: density = 1.0324 - 0.19077 log<sub>10</sub>(waist - neck) + 0.15456 log<sub>10</sub>(height)<br>Women: density = 1.29579 - 0.35004 log<sub>10</sub>(waist + hip - neck) + 0.22100 log<sub>10</sub>(height)<br>Body fat % = 495 / density - 450</div><p>All equation inputs are centimeters. The tool converts inches before calculation. Log<sub>10</sub> means base-10 logarithm.</p>`
    },
    {
      title: "How To Measure Consistently",
      body: `<ol><li>Use a flexible, non-stretch tape on bare skin when practical.</li><li>Stand relaxed, keep the tape level, and avoid compressing the skin.</li><li>Take two or three readings at each site and repeat any pair that differs noticeably.</li><li>For trend tracking, measure at a similar time and under similar conditions.</li></ol><div class="note-box">A small tape-placement change can shift the estimate. Consistency matters more than chasing a favorable single reading.</div>`
    },
    {
      title: "Worked Example",
      body: `<p>For a man with a 175 cm height, 80 cm waist, and 38 cm neck, the circumference difference is 42 cm. The equation estimates density at about 1.069, which converts to roughly 12.9% body fat.</p>`
    },
    {
      title: "Limits And Appropriate Use",
      body: `<p>The equations were developed from specific military samples and can misestimate people with different body proportions, ages, backgrounds, training histories, or fat distribution. Hydration, breathing, tape tension, and measurement site also affect the result.</p><p>Use this tool for adult educational trend tracking. Pregnancy, edema, major weight change, clinical nutrition decisions, and pediatric assessment require a more appropriate professional method.</p>`
    }
  ],
  methodology: "This tool converts all measurements to centimeters, applies the published sex-specific U.S. Navy circumference equations for body density, and converts density to estimated body-fat percentage. Display is rounded to one decimal place.",
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
    const unitScale = currentUnit === 'imperial' ? 2.54 : 1;
    const heightCm = height * unitScale;
    const neckCm = neck * unitScale;
    const waistCm = waist * unitScale;
    const hipCm = hip * unitScale;
    let bodyFat = 0;
    if (gender === 'male') {
        if (waistCm <= neckCm) { alert('Waist must be greater than neck for the Navy formula.'); return; }
        bodyFat = 495 / (1.0324 - 0.19077 * log10(waistCm - neckCm) + 0.15456 * log10(heightCm)) - 450;
    } else {
        if (isNaN(hip) || hip <= 0) { alert('Please enter a valid hip measurement.'); return; }
        if ((waistCm + hipCm) <= neckCm) { alert('Waist plus hip must be greater than neck for the Navy formula.'); return; }
        bodyFat = 495 / (1.29579 - 0.35004 * log10(waistCm + hipCm - neckCm) + 0.22100 * log10(heightCm)) - 450;
    }
    bodyFat = Math.max(3, Math.min(60, bodyFat));
    const result = { status: 'Circumference-Based Estimate', color: 'var(--accent)', suggestion: 'Repeat the measurements with the same tape placement and conditions. Use the trend alongside waist, strength, energy, and clinical context rather than treating one estimate as a diagnosis.', percent: Math.min(95, Math.max(5, (bodyFat / 50) * 90 + 5)) };
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
