module.exports = {
  slug: "lean-body-mass-calculator",
  title: "Accurate Lean Body Mass Calculator (Boer Formula) | ToolsQuark",
  description: "Calculate your estimated lean body mass using the Boer formula and understand how much of your body weight is non-fat mass.",
  h1: "Lean Body Mass Calculator",
  hero: "Estimate lean body mass, the portion of body weight made up of muscle, bone, organs, water, and other non-fat tissue.",
  schemaName: "Privacy-First Lean Body Mass Calculator",
  buttonText: "Calculate Lean Body Mass",
  resultUnit: "kg",
  resultStatus: "Estimated Lean Mass",
  gaugeLabels: ["Lower", "Typical", "Higher"],
  insightTitle: "Composition Insight",
  controlsHtml: `
        <div class="unit-switcher">
            <div class="unit-tab active" id="tab-metric" onclick="switchUnit('metric')">Metric Units (kg/cm)</div>
            <div class="unit-tab" id="tab-imperial" onclick="switchUnit('imperial')">Imperial Units (lbs/ft-in)</div>
        </div>
        <div id="inputs-container"></div>`,
  relatedTitle: "Complete Your Body Composition Check",
  related: [
    { href: "https://www.toolsquark.com/tools/body-fat-calculator.html", title: "Body Fat Calculator", description: "Estimate fat percentage from body measurements.", action: "Estimate Fat %" },
    { href: "https://www.toolsquark.com/tools/protein-calculator.html", title: "Protein Calculator", description: "Set protein intake based on weight and training goal.", action: "Set Protein" }
  ],
  faq: [
    { question: "What is lean body mass?", answer: "Lean body mass is body weight minus fat mass. It includes muscle, bone, organs, connective tissue, and body water." },
    { question: "What formula does this calculator use?", answer: "This tool uses the Boer formula, a common height- and weight-based estimate for lean body mass in adults." },
    { question: "Is lean body mass the same as muscle mass?", answer: "No. Muscle is only one part of lean body mass. Lean mass also includes organs, bone, water, and other non-fat tissues." }
  ],
  methodology: "This tool uses the Boer equation: male LBM = 0.407 x weight(kg) + 0.267 x height(cm) - 19.2; female LBM = 0.252 x weight(kg) + 0.473 x height(cm) - 48.3.",
  disclaimer: "Lean body mass formulas are estimates and may be less accurate for athletes, older adults, pregnancy, or unusual body proportions.",
  script: `
let currentUnit = 'metric';
function renderInputs() {
    const container = document.getElementById('inputs-container');
    const baseInputs = \`
        <div class="input-group">
            <label for="input_gender">Gender</label>
            <div class="input-wrapper">
                <select id="input_gender"><option value="male">Male</option><option value="female">Female</option></select>
            </div>
        </div>\`;
    if (currentUnit === 'metric') {
        container.innerHTML = baseInputs + \`
            <div class="input-row">
                <div class="input-group"><label for="input_weight">Weight</label><div class="input-wrapper"><input type="number" id="input_weight" placeholder="e.g. 70" step="any"><span class="unit-badge">kg</span></div></div>
                <div class="input-group"><label for="input_height">Height</label><div class="input-wrapper"><input type="number" id="input_height" placeholder="e.g. 175" step="any"><span class="unit-badge">cm</span></div></div>
            </div>\`;
    } else {
        container.innerHTML = baseInputs + \`
            <div class="input-group"><label for="input_weight">Weight</label><div class="input-wrapper"><input type="number" id="input_weight" placeholder="e.g. 154" step="any"><span class="unit-badge">lbs</span></div></div>
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
    const gender = document.getElementById('input_gender').value;
    let weightKg = 0;
    let heightCm = 0;
    if (currentUnit === 'metric') {
        weightKg = parseFloat(document.getElementById('input_weight').value);
        heightCm = parseFloat(document.getElementById('input_height').value);
    } else {
        const lbs = parseFloat(document.getElementById('input_weight').value);
        const ft = parseFloat(document.getElementById('input_ft').value) || 0;
        const inch = parseFloat(document.getElementById('input_in').value) || 0;
        weightKg = lbs * 0.45359237;
        heightCm = ((ft * 12) + inch) * 2.54;
    }
    if (isNaN(weightKg) || isNaN(heightCm) || weightKg <= 0 || heightCm <= 0) {
        alert('Please enter valid height and weight values.');
        return;
    }
    const lbmKg = gender === 'male'
        ? (0.407 * weightKg) + (0.267 * heightCm) - 19.2
        : (0.252 * weightKg) + (0.473 * heightCm) - 48.3;
    const leanPercent = Math.max(0, Math.min(100, (lbmKg / weightKg) * 100));
    const display = currentUnit === 'metric' ? lbmKg : lbmKg * 2.20462;
    const unit = currentUnit === 'metric' ? 'kg' : 'lbs';
    let color = 'var(--normal)';
    if (leanPercent < 65) color = 'var(--overweight)';
    if (leanPercent > 85) color = 'var(--underweight)';
    const percent = Math.min(95, Math.max(5, leanPercent));
    document.getElementById('result-area').style.display = 'block';
    document.getElementById('calc-output').innerText = display.toFixed(1);
    document.querySelector('.result-unit').innerText = unit;
    document.getElementById('calc-output').style.color = color;
    document.getElementById('calc-status').innerText = 'Estimated Lean Mass';
    document.getElementById('calc-status').style.color = color;
    document.getElementById('calc-desc').innerText = \`Your estimated lean body mass is \${display.toFixed(1)} \${unit}, about \${leanPercent.toFixed(1)}% of your current body weight.\`;
    document.getElementById('calc-suggestion').innerText = 'Use this as a directional estimate for nutrition and training context. For higher accuracy, compare with body fat measurements or clinical body composition testing.';
    document.getElementById('gauge-pointer').style.left = percent + '%';
    document.getElementById('result-area').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
renderInputs();`
};
