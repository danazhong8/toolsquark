module.exports = {
  slug: "tdee-calculator",
  title: "Free Accurate TDEE Calculator | Total Daily Energy Expenditure | ToolsQuark",
  description: "Calculate your Total Daily Energy Expenditure (TDEE) accurately with our free calorie calculator. Supports Metric & Imperial systems with smart activity pacing multipliers.",
  h1: "TDEE Calculator",
  hero: "Estimate the calories your body burns in a full day by combining resting metabolism with your usual activity level.",
  schemaName: "Privacy-First TDEE Calculator",
  schemaDescription: "An interactive, client-side total daily energy expenditure calculator using the Mifflin-St Jeor equation and activity multipliers.",
  buttonText: "Calculate TDEE",
  resultUnit: "kcal/day",
  resultStatus: "Maintenance Energy",
  gaugeLabels: ["Sedentary", "Moderate", "Athletic"],
  insightTitle: "Calorie Goal Plan",
  controlsHtml: `
        <div class="unit-switcher">
            <div class="unit-tab active" id="tab-metric" onclick="switchUnit('metric')">Metric Units (kg/cm)</div>
            <div class="unit-tab" id="tab-imperial" onclick="switchUnit('imperial')">Imperial Units (lbs/ft-in)</div>
        </div>
        <div id="inputs-container"></div>`,
  relatedTitle: "Refine Your Nutrition Plan",
  related: [
    {
      href: "https://www.toolsquark.com/tools/bmr-calculator.html",
      title: "BMR Calculator",
      description: "Isolate your resting metabolic baseline before activity is added.",
      action: "Calculate BMR"
    },
    {
      href: "https://www.toolsquark.com/tools/macro-calculator.html",
      title: "Macro Calculator",
      description: "Turn your calorie result into protein, carbohydrates, and fat targets.",
      action: "Split Macros"
    }
  ],
  faq: [
    {
      question: "What does TDEE mean?",
      answer: "TDEE means Total Daily Energy Expenditure. It estimates how many calories you burn in a full day after resting metabolism and your usual activity level are included."
    },
    {
      question: "How is TDEE calculated?",
      answer: "This calculator estimates BMR with the Mifflin-St Jeor equation, then multiplies it by an activity factor such as sedentary, lightly active, moderately active, very active, or extra active."
    },
    {
      question: "How should I use TDEE for weight change?",
      answer: "Eating near TDEE tends to support maintenance. A moderate deficit can support gradual fat loss, while a modest surplus can support muscle gain when paired with resistance training."
    }
  ],
  methodology: "This tool calculates BMR with the Mifflin-St Jeor equation, converts imperial inputs when needed, and applies standard activity multipliers from 1.2 to 1.9.",
  disclaimer: "TDEE is an educational estimate, not medical advice. Consult a qualified clinician or registered dietitian before making aggressive calorie changes.",
  script: `
let currentUnit = 'metric';
function renderInputs() {
    const container = document.getElementById('inputs-container');
    const baseInputs = \`
        <div class="input-row">
            <div class="input-group">
                <label for="input_gender">Gender</label>
                <div class="input-wrapper">
                    <select id="input_gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
            </div>
            <div class="input-group">
                <label for="input_age">Age</label>
                <div class="input-wrapper">
                    <input type="number" id="input_age" placeholder="e.g. 28" min="10" max="120">
                    <span class="unit-badge">yrs</span>
                </div>
            </div>
        </div>\`;
    const activityInput = \`
        <div class="input-group">
            <label for="input_activity">Activity Level</label>
            <div class="input-wrapper">
                <select id="input_activity">
                    <option value="1.2">Sedentary (little or no exercise)</option>
                    <option value="1.375">Lightly active (exercise 1-3 times/week)</option>
                    <option value="1.55" selected>Moderately active (exercise 3-5 times/week)</option>
                    <option value="1.725">Very active (hard exercise 6-7 times/week)</option>
                    <option value="1.9">Extra active (physical job or intense training)</option>
                </select>
            </div>
        </div>\`;
    if (currentUnit === 'metric') {
        container.innerHTML = baseInputs + \`
            <div class="input-row">
                <div class="input-group">
                    <label for="input_weight">Your Weight</label>
                    <div class="input-wrapper">
                        <input type="number" id="input_weight" placeholder="e.g. 70" step="any">
                        <span class="unit-badge">kg</span>
                    </div>
                </div>
                <div class="input-group">
                    <label for="input_height">Your Height</label>
                    <div class="input-wrapper">
                        <input type="number" id="input_height" placeholder="e.g. 175" step="any">
                        <span class="unit-badge">cm</span>
                    </div>
                </div>
            </div>\` + activityInput;
    } else {
        container.innerHTML = baseInputs + \`
            <div class="input-group">
                <label for="input_weight">Your Weight</label>
                <div class="input-wrapper">
                    <input type="number" id="input_weight" placeholder="e.g. 154" step="any">
                    <span class="unit-badge">lbs</span>
                </div>
            </div>
            <div class="input-row">
                <div class="input-group">
                    <label for="input_ft">Height (Feet)</label>
                    <div class="input-wrapper">
                        <input type="number" id="input_ft" placeholder="e.g. 5">
                        <span class="unit-badge">ft</span>
                    </div>
                </div>
                <div class="input-group">
                    <label for="input_in">Height (Inches)</label>
                    <div class="input-wrapper">
                        <input type="number" id="input_in" placeholder="e.g. 9">
                        <span class="unit-badge">in</span>
                    </div>
                </div>
            </div>\` + activityInput;
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
    const age = parseInt(document.getElementById('input_age').value, 10);
    const activityMulti = parseFloat(document.getElementById('input_activity').value);
    if (isNaN(age) || age < 10 || age > 120) {
        alert('Please input a valid age.');
        return;
    }
    let weightKg = 0;
    let heightCm = 0;
    if (currentUnit === 'metric') {
        const weight = parseFloat(document.getElementById('input_weight').value);
        const height = parseFloat(document.getElementById('input_height').value);
        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            alert('Please input valid metric values for weight and height.');
            return;
        }
        weightKg = weight;
        heightCm = height;
    } else {
        const lbs = parseFloat(document.getElementById('input_weight').value);
        const feet = parseFloat(document.getElementById('input_ft').value) || 0;
        const inches = parseFloat(document.getElementById('input_in').value) || 0;
        if (isNaN(lbs) || lbs <= 0 || (feet === 0 && inches === 0)) {
            alert('Please input valid imperial values.');
            return;
        }
        weightKg = lbs * 0.45359237;
        heightCm = ((feet * 12) + inches) * 2.54;
    }
    let bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age);
    bmr += gender === 'male' ? 5 : -161;
    const tdee = Math.round(bmr * activityMulti);
    const lossTarget = Math.max(1200, tdee - 500);
    const gainTarget = tdee + 300;
    const percent = Math.min(95, Math.max(5, ((activityMulti - 1.2) / 0.7) * 90 + 5));
    let color = 'var(--normal)';
    let status = 'Maintenance Energy';
    if (activityMulti <= 1.375) {
        color = 'var(--underweight)';
        status = 'Lower Activity Burn';
    } else if (activityMulti >= 1.725) {
        color = 'var(--overweight)';
        status = 'High Activity Burn';
    }
    document.getElementById('result-area').style.display = 'block';
    document.getElementById('calc-output').innerText = tdee.toLocaleString();
    document.getElementById('calc-output').style.color = color;
    document.getElementById('calc-status').innerText = status;
    document.getElementById('calc-status').style.color = color;
    document.getElementById('calc-desc').innerText = \`Your estimated TDEE is \${tdee.toLocaleString()} kcal/day. This is your approximate maintenance target for your current body metrics and activity level.\`;
    document.getElementById('calc-suggestion').innerText = \`For gradual fat loss, a common starting target is about \${lossTarget.toLocaleString()} kcal/day. For a modest muscle-gain surplus, consider about \${gainTarget.toLocaleString()} kcal/day and track your trend over several weeks.\`;
    document.getElementById('gauge-pointer').style.left = percent + '%';
    document.getElementById('result-area').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
renderInputs();`
};
