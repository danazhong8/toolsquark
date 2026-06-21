module.exports = {
  slug: "bmr-calculator",
  title: "BMR Calculator | Estimate Basal Metabolic Rate Calories",
  description: "Calculate BMR with the Mifflin-St Jeor equation using metric or imperial units. Estimate resting calories and understand how BMR differs from TDEE.",
  h1: "BMR Calculator",
  hero: "Discover your basal metabolic rate: the estimated calories your body burns at complete rest to support essential functions.",
  schemaName: "Privacy-First BMR Calculator",
  schemaDescription: "A free browser-side Basal Metabolic Rate calculator using the Mifflin-St Jeor equation, metric and imperial inputs, and practical energy-planning context.",
  lastUpdated: "June 21, 2026",
  buttonText: "Calculate BMR",
  resultUnit: "kcal/day",
  resultStatus: "Resting Energy Baseline",
  gaugeLabels: ["Lower", "Standard", "Higher"],
  insightTitle: "Energy Strategy",
  controlsHtml: `
        <div class="unit-switcher">
            <div class="unit-tab active" id="tab-metric" onclick="switchUnit('metric')">Metric Units (kg/cm)</div>
            <div class="unit-tab" id="tab-imperial" onclick="switchUnit('imperial')">Imperial Units (lbs/ft-in)</div>
        </div>
        <div id="inputs-container"></div>`,
  relatedTitle: "Turn Baseline Into Daily Targets",
  related: [
    {
      href: "https://toolsquark.com/tools/tdee-calculator.html",
      title: "TDEE Calculator",
      description: "Add activity level to your resting baseline and estimate total daily calorie burn.",
      action: "Calculate TDEE"
    },
    {
      href: "https://toolsquark.com/tools/calorie-calculator.html",
      title: "Calorie Calculator",
      description: "Estimate maintenance, deficit, and surplus calories for practical nutrition planning.",
      action: "Plan Calories"
    }
  ],
  faq: [
    {
      question: "What is BMR?",
      answer: "Basal metabolic rate is an estimate of the energy your body uses at complete rest to maintain vital functions such as breathing, circulation, cellular repair, and brain activity."
    },
    {
      question: "What formula does this BMR calculator use?",
      answer: "This calculator uses the Mifflin-St Jeor equation. For men, BMR = 10 x weight(kg) + 6.25 x height(cm) - 5 x age + 5. For women, BMR = 10 x weight(kg) + 6.25 x height(cm) - 5 x age - 161."
    },
    {
      question: "Is BMR the same as daily calories?",
      answer: "No. BMR estimates resting energy only. Your real daily needs are higher once walking, exercise, work, digestion, and normal daily movement are included."
    },
    {
      question: "Why is BMR lower than TDEE?",
      answer: "BMR only estimates calories used at complete rest. TDEE adds normal movement, exercise, daily activity, and digestion, so TDEE is usually higher than BMR."
    },
    {
      question: "Can I eat below my BMR to lose weight?",
      answer: "Eating below BMR is not automatically appropriate or safe. BMR is not a diet target; it is a resting-energy estimate. For weight change, use TDEE and consider professional guidance for large deficits."
    }
  ],
  references: [
    { title: "A New Predictive Equation for Resting Energy Expenditure", publisher: "The American Journal of Clinical Nutrition / PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/2305711/" },
    { title: "Body Weight Planner", publisher: "National Institute of Diabetes and Digestive and Kidney Diseases", href: "https://www.niddk.nih.gov/bwp" }
  ],
  contentSections: [
    {
      title: "What BMR Measures",
      body: `<p>Basal Metabolic Rate estimates the calories your body would use at complete rest to support essential functions such as breathing, circulation, body temperature, organ function, and cellular repair.</p><p>BMR is not the same as your full daily calorie need. It is the resting baseline that sits underneath your total daily energy expenditure.</p>`
    },
    {
      title: "BMR Formula",
      body: `<p>This calculator uses the Mifflin-St Jeor equation, a common equation for estimating resting energy needs from weight, height, age, and sex.</p><div class="formula-box">Men: BMR = 10 x weight(kg) + 6.25 x height(cm) - 5 x age + 5<br>Women: BMR = 10 x weight(kg) + 6.25 x height(cm) - 5 x age - 161</div><p>Imperial inputs are converted to kilograms and centimeters before the equation is applied.</p>`
    },
    {
      title: "How To Use Your Result",
      body: `<ul><li>Use BMR to understand your resting energy baseline.</li><li>Use TDEE to estimate maintenance calories after activity is included.</li><li>Use real-world weight trends to adjust calorie targets over time.</li></ul><div class="note-box">BMR can shift with body size, lean mass, age, hormonal status, illness, sleep, and long periods of dieting. Treat it as an estimate, not a fixed biological number.</div>`
    },
    {
      title: "Example Calculation",
      body: `<p>For a 30-year-old man weighing 80 kg at 180 cm, the Mifflin-St Jeor estimate is 10 x 80 + 6.25 x 180 - 5 x 30 + 5 = 1,780 kcal/day. That is his estimated resting baseline before activity is added.</p>`
    },
    {
      title: "Limits And Appropriate Use",
      body: `<p>The equation predicts resting expenditure from population averages; it does not measure an individual's metabolism. Body composition, illness, medications, endocrine conditions, growth, pregnancy, and prolonged energy restriction can change actual needs.</p><p>Do not use BMR as a minimum-safe intake or a weight-loss prescription. Total daily needs include movement, exercise, and digestion, and medical nutrition decisions require individualized assessment.</p>`
    }
  ],
  methodology: "This tool uses the Mifflin-St Jeor equation with metric conversions for imperial entries. Results are rounded to the nearest whole calorie.",
  disclaimer: "BMR is an educational estimate, not a medical diagnosis or nutrition prescription. Consult a qualified clinician or registered dietitian before making major calorie changes.",
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
            </div>\`;
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
    const age = parseInt(document.getElementById('input_age').value, 10);
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
    const rounded = Math.round(bmr);
    const result = { status: 'Mifflin-St Jeor Estimate', color: 'var(--accent)', desc: \`Your estimated BMR is \${rounded.toLocaleString()} kcal/day. This is a predicted resting baseline, not your total daily calorie need.\`, suggestion: 'Use a TDEE estimate to add activity, then calibrate any nutrition plan against real-world trends and professional guidance when needed.', percent: Math.min(95, Math.max(5, (rounded / 2600) * 90)) };
    document.getElementById('result-area').style.display = 'block';
    document.getElementById('calc-output').innerText = rounded.toLocaleString();
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
