module.exports = {
  slug: "macro-calculator",
  title: "Free Accurate Macro Calculator | Diet & Nutrition Planner | ToolsQuark",
  description: "Calculate your optimal daily macronutrients for protein, carbs, and fat based on your body metrics, activity level, and fitness goal.",
  h1: "Macro Calculator",
  hero: "Convert your calorie target into protein, fat, and carbohydrate ranges for fat loss, maintenance, or lean muscle gain. All calculations run locally in your browser.",
  schemaName: "Privacy-First Macro Calculator",
  schemaDescription: "A client-side macronutrient planning calculator using Mifflin-St Jeor calorie estimates and goal-based macro targets.",
  buttonText: "Calculate My Macros",
  resultStatus: "Maintenance",
  gaugeLabels: ["Deficit", "Maintain", "Surplus"],
  insightTitle: "Actionable Nutrition Insight",
  controlsHtml: `
        <div class="unit-switcher">
            <div class="unit-tab active" id="tab-metric" onclick="switchUnit('metric')">Metric Units (kg/cm)</div>
            <div class="unit-tab" id="tab-imperial" onclick="switchUnit('imperial')">Imperial Units (lbs/ft-in)</div>
        </div>
        <div id="inputs-container"></div>`,
  resultHtml: `
            <div class="result-val"><span id="calc-output">0</span> kcal</div>
            <div class="result-status" id="calc-status">Maintenance</div>
            <div class="bmi-gauge-container">
                <div class="bmi-pointer" id="gauge-pointer"></div>
                <div class="bmi-gauge-bar"></div>
                <div class="bmi-labels"><span>Deficit</span><span>Maintain</span><span>Surplus</span></div>
            </div>
            <p class="result-desc" id="calc-desc"></p>
            <div class="macro-grid">
                <div class="macro-pill"><span>Protein</span><strong id="protein-output">0g</strong></div>
                <div class="macro-pill"><span>Fat</span><strong id="fat-output">0g</strong></div>
                <div class="macro-pill"><span>Carbs</span><strong id="carb-output">0g</strong></div>
            </div>
            <div class="suggestion-box">
                <h4>Actionable Nutrition Insight</h4>
                <p id="calc-suggestion"></p>
            </div>`,
  relatedTitle: "Optimize Your Nutrition Further",
  related: [
    {
      href: "https://www.toolsquark.com/tools/calorie-calculator.html",
      title: "Calorie Calculator",
      description: "Estimate your maintenance calorie baseline before choosing a macro split.",
      action: "Calculate Calories"
    },
    {
      href: "https://www.toolsquark.com/tools/protein-calculator.html",
      title: "Protein Calculator",
      description: "Focus specifically on daily protein requirements for training and recovery.",
      action: "Set Protein Goal"
    }
  ],
  faq: [
    {
      question: "How does this macro calculator work?",
      answer: "It first estimates daily energy needs with the Mifflin-St Jeor equation and activity multipliers. It then adjusts calories based on your goal and applies a moderate macro split of 30% protein, 35% fat, and 35% carbohydrates."
    },
    {
      question: "Are these macros exact prescriptions?",
      answer: "No. They are practical planning estimates. Real needs vary with training, digestion, food preferences, adherence, and medical context."
    },
    {
      question: "Should I choose fat loss, maintenance, or muscle gain?",
      answer: "Choose fat loss for a planned calorie deficit, maintenance when you want weight stability, and muscle gain when you are pairing a calorie surplus with progressive resistance training."
    }
  ],
  methodology: "This tool combines Mifflin-St Jeor calorie estimation with standard energy values: protein and carbohydrates provide about 4 kcal per gram, while fat provides about 9 kcal per gram.",
  disclaimer: "These results are educational estimates and not medical nutrition therapy. Consult a qualified clinician or registered dietitian for personal guidance.",
  script: `
let currentUnit = 'metric';
function renderInputs() {
 const container = document.getElementById('inputs-container');
 const base = \`<div class="input-row"><div class="input-group"><label for="input_gender">Gender</label><div class="input-wrapper"><select id="input_gender"><option value="male">Male</option><option value="female">Female</option></select></div></div><div class="input-group"><label for="input_age">Age</label><div class="input-wrapper"><input type="number" id="input_age" placeholder="e.g. 28" min="10" max="120"><span class="unit-badge">yrs</span></div></div></div>\`;
 const activity = \`<div class="input-group"><label for="input_activity">Activity Level</label><div class="input-wrapper"><select id="input_activity"><option value="1.2">Sedentary</option><option value="1.375">Lightly active</option><option value="1.55">Moderately active</option><option value="1.725">Very active</option><option value="1.9">Extra active</option></select></div></div><div class="input-group"><label for="input_goal">Primary Goal</label><div class="input-wrapper"><select id="input_goal"><option value="lose">Fat loss (-500 kcal)</option><option value="maintain" selected>Maintain weight</option><option value="gain">Lean gain (+500 kcal)</option></select></div></div>\`;
 if (currentUnit === 'metric') {
  container.innerHTML = base + \`<div class="input-row"><div class="input-group"><label for="input_weight">Your Weight</label><div class="input-wrapper"><input type="number" id="input_weight" placeholder="e.g. 70" step="any"><span class="unit-badge">kg</span></div></div><div class="input-group"><label for="input_height">Your Height</label><div class="input-wrapper"><input type="number" id="input_height" placeholder="e.g. 175" step="any"><span class="unit-badge">cm</span></div></div></div>\` + activity;
 } else {
  container.innerHTML = base + \`<div class="input-group"><label for="input_weight">Your Weight</label><div class="input-wrapper"><input type="number" id="input_weight" placeholder="e.g. 154" step="any"><span class="unit-badge">lbs</span></div></div><div class="input-row"><div class="input-group"><label for="input_ft">Height (Feet)</label><div class="input-wrapper"><input type="number" id="input_ft" placeholder="e.g. 5"><span class="unit-badge">ft</span></div></div><div class="input-group"><label for="input_in">Height (Inches)</label><div class="input-wrapper"><input type="number" id="input_in" placeholder="e.g. 9"><span class="unit-badge">in</span></div></div></div>\` + activity;
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
 const activity = parseFloat(document.getElementById('input_activity').value);
 const goal = document.getElementById('input_goal').value;
 if (isNaN(age) || age < 10 || age > 120) { alert('Please input a valid age.'); return; }
 let weightKg = 0, heightCm = 0;
 if (currentUnit === 'metric') {
  const w = parseFloat(document.getElementById('input_weight').value);
  const h = parseFloat(document.getElementById('input_height').value);
  if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) { alert('Please input valid metric values.'); return; }
  weightKg = w; heightCm = h;
 } else {
  const lbs = parseFloat(document.getElementById('input_weight').value);
  const ft = parseFloat(document.getElementById('input_ft').value) || 0;
  const inch = parseFloat(document.getElementById('input_in').value) || 0;
  if (isNaN(lbs) || lbs <= 0 || (ft === 0 && inch === 0)) { alert('Please input valid imperial values.'); return; }
  weightKg = lbs * 0.45359237; heightCm = ((ft * 12) + inch) * 2.54;
 }
 let bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age);
 bmr += gender === 'male' ? 5 : -161;
 const tdee = Math.round(bmr * activity);
 let target = tdee;
 let percent = 50, status = 'Weight Maintenance', color = 'var(--normal)', suggestion = 'This macro split is designed for weight stability and consistent meal planning.';
 if (goal === 'lose') {
  target = Math.max(1200, tdee - 500);
  percent = 15; status = 'Fat Loss Deficit'; color = 'var(--underweight)';
  suggestion = 'Prioritize protein and fiber while using this moderate deficit. Avoid aggressive restriction without professional guidance.';
 } else if (goal === 'gain') {
  target = tdee + 500;
  percent = 90; status = 'Lean Muscle Surplus'; color = 'var(--obese)';
  suggestion = 'Pair this surplus with progressive resistance training and adequate sleep to support lean mass gain.';
 }
 const protein = Math.round((target * .30) / 4);
 const fat = Math.round((target * .35) / 9);
 const carbs = Math.round((target * .35) / 4);
 document.getElementById('result-area').style.display = 'block';
 document.getElementById('calc-output').innerText = target.toLocaleString();
 document.getElementById('calc-output').style.color = color;
 document.getElementById('calc-status').innerText = status;
 document.getElementById('calc-status').style.color = color;
 document.getElementById('calc-desc').innerText = \`Daily target: \${target.toLocaleString()} kcal, based on an estimated maintenance need of \${tdee.toLocaleString()} kcal/day.\`;
 document.getElementById('protein-output').innerText = protein + 'g';
 document.getElementById('fat-output').innerText = fat + 'g';
 document.getElementById('carb-output').innerText = carbs + 'g';
 document.getElementById('calc-suggestion').innerText = suggestion;
 document.getElementById('gauge-pointer').style.left = percent + '%';
 document.getElementById('result-area').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
renderInputs();`
};
