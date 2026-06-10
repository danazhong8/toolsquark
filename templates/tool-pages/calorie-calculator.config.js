module.exports = {
  slug: "calorie-calculator",
  title: "Free Accurate Calorie Calculator | Daily Energy & TDEE | ToolsQuark",
  description: "Calculate your daily calorie needs instantly with our free online calculator. Supports Metric and Imperial systems, accounting for your true activity level with 100% data privacy.",
  h1: "Calorie Calculator",
  hero: "Estimate your daily calorie needs with the Mifflin-St Jeor equation. Everything runs locally in your browser, with no account and no server-side health data storage.",
  schemaName: "Privacy-First Calorie Calculator",
  schemaDescription: "An interactive, client-side calorie and TDEE calculator using the Mifflin-St Jeor equation without data logging.",
  buttonText: "Calculate Calorie Needs",
  resultUnit: "kcal/day",
  resultStatus: "Maintenance Calories",
  gaugeLabels: ["1500", "2200", "2800+"],
  insightTitle: "Actionable Health Insight",
  controlsHtml: `
        <div class="unit-switcher">
            <div class="unit-tab active" id="tab-metric" onclick="switchUnit('metric')">Metric Units (kg/cm)</div>
            <div class="unit-tab" id="tab-imperial" onclick="switchUnit('imperial')">Imperial Units (lbs/ft-in)</div>
        </div>
        <div id="inputs-container"></div>`,
  relatedTitle: "Optimize Your Body Metrics Further",
  related: [
    {
      href: "https://www.toolsquark.com/tools/bmi-calculator.html",
      title: "BMI Calculator",
      description: "Check your standard height-to-weight baseline before setting a weight goal.",
      action: "Check BMI Ratio"
    },
    {
      href: "https://www.toolsquark.com/tools/macro-calculator.html",
      title: "Macro Calculator",
      description: "Turn your calorie target into protein, carbs, and fat ranges for a practical meal plan.",
      action: "Split Macros"
    }
  ],
  faq: [
    {
      question: "What formula does this calorie calculator use?",
      answer: "This calculator estimates basal metabolic rate with the Mifflin-St Jeor equation, then multiplies that baseline by your selected activity level. For men, BMR = 10 x weight(kg) + 6.25 x height(cm) - 5 x age + 5. For women, BMR = 10 x weight(kg) + 6.25 x height(cm) - 5 x age - 161."
    },
    {
      question: "How should I use the result for weight loss?",
      answer: "The result is an estimated maintenance calorie target. For gradual weight loss, many adults use a moderate deficit of about 300 to 500 kcal per day. Avoid aggressive restriction without professional guidance, especially if you have a medical condition, are pregnant, or have a history of disordered eating."
    },
    {
      question: "Why does activity level change my calorie target so much?",
      answer: "Daily movement, training volume, and physically demanding work can add substantial energy expenditure above your resting needs. Choose the activity level that best matches your average week rather than your most active day."
    }
  ],
  methodology: "This tool uses the Mifflin-St Jeor equation for basal metabolic rate and standard activity multipliers for estimated total daily energy expenditure.",
  disclaimer: "These calculations are educational estimates, not medical advice, diagnosis, or treatment. Consult a qualified clinician or registered dietitian for personal nutrition guidance.",
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
                    <option value="1.55">Moderately active (exercise 3-5 times/week)</option>
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
    let result = { status: '', color: '', desc: '', suggestion: '', percent: 0 };
    if (tdee < 1500) {
        result = { status: 'Lower Energy Target', color: 'var(--underweight)', desc: \`Your estimated maintenance target is \${tdee.toLocaleString()} kcal/day. This is on the lower end of the adult energy range and should be interpreted carefully.\`, suggestion: 'Make sure your calorie target still supports essential nutrition. Avoid dropping far below your estimated BMR without professional guidance.', percent: Math.max(5, (tdee / 1500) * 30) };
    } else if (tdee <= 2200) {
        result = { status: 'Standard Maintenance Range', color: 'var(--normal)', desc: \`Your estimated maintenance target is \${tdee.toLocaleString()} kcal/day based on your body metrics and activity level.\`, suggestion: 'Use this as a baseline. For gradual weight loss, consider a modest deficit; for muscle gain, consider a modest surplus paired with resistance training.', percent: 30 + ((tdee - 1500) / 700) * 35 };
    } else if (tdee <= 2800) {
        result = { status: 'Higher Active Burn', color: 'var(--overweight)', desc: \`Your estimated maintenance target is \${tdee.toLocaleString()} kcal/day, suggesting higher activity, larger body size, or both.\`, suggestion: 'Prioritize protein, fiber-rich carbohydrates, hydration, and consistent training recovery if you are sustaining this level of energy output.', percent: 65 + ((tdee - 2200) / 600) * 20 };
    } else {
        result = { status: 'Very High Energy Output', color: 'var(--obese)', desc: \`Your estimated maintenance target is \${tdee.toLocaleString()} kcal/day, which is a high daily energy requirement.\`, suggestion: 'High energy needs benefit from planned meals rather than guesswork. Consider splitting intake across the day and monitoring real-world weight trends.', percent: Math.min(95, 85 + (Math.min(tdee - 2800, 1000) / 1000) * 10) };
    }
    document.getElementById('result-area').style.display = 'block';
    document.getElementById('calc-output').innerText = tdee.toLocaleString();
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
