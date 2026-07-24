module.exports = {
  slug: "bmr-calculator",
  title: "BMR Calculator | Basal Metabolic Rate & Mifflin-St Jeor",
  description: "Calculate BMR, basal metabolic rate, and resting calories with the Mifflin-St Jeor male and female equations. Supports kg/cm and lb/ft-in.",
  h1: "BMR Calculator: Basal Metabolic Rate & Resting Calories",
  hero: "Estimate basal metabolic rate, BMR, and resting calories in metric or imperial units with the Mifflin-St Jeor equation, then see how this baseline connects to TDEE, maintenance calories, and daily calorie goals.",
  heroHighlights: ["Basal metabolic rate focus", "Mifflin-St Jeor formula", "TDEE next step included"],
  schemaName: "Privacy-First BMR Calculator",
  schemaDescription: "A free browser-side Basal Metabolic Rate calculator using the Mifflin-St Jeor equation, metric and imperial inputs, and practical energy-planning context.",
  lastUpdated: "July 24, 2026",
  buttonText: "Calculate BMR",
  resultUnit: "kcal/day",
  resultStatus: "Resting Energy Baseline",
  gaugeLabels: ["Lower", "Standard", "Higher"],
  insightTitle: "Energy Strategy",
  shareResult: true,
  dynamicNextSteps: true,
  controlsHtml: `
        <div class="basal-rate-banner">
            <strong>Basal Metabolic Rate Calculator</strong>
            <span>Use this page when your search question is BMR, basal metabolic rate, metabolic rate at rest, or resting calories. Activity and calorie targets come after this baseline.</span>
        </div>
        <div class="unit-switcher">
            <div class="unit-tab active" id="tab-metric" onclick="switchUnit('metric')">Metric Units (kg/cm)</div>
            <div class="unit-tab" id="tab-imperial" onclick="switchUnit('imperial')">Imperial Units (lbs/ft-in)</div>
        </div>
        <div id="inputs-container"></div>`,
  extraCss: `.basal-rate-banner{display:grid;gap:5px;margin-bottom:14px;padding:14px 16px;border:1px solid #bfdbfe;background:#eff6ff;border-radius:10px;color:#1e3a8a}.basal-rate-banner strong{font-size:15px}.basal-rate-banner span{font-size:13px;line-height:1.5;color:#334155}`,
  relatedTitle: "Turn Baseline Into Daily Targets",
  related: [
    {
      href: "https://toolsquark.com/guides/metabolic-rate-calculator-vs-bmr.html",
      title: "Metabolic Rate vs BMR",
      description: "Understand why metabolic rate calculator searches often lead to BMR, RMR, and TDEE choices.",
      action: "Read Guide"
    },
    {
      href: "https://toolsquark.com/guides/mifflin-st-jeor-equation-explained.html",
      title: "Mifflin-St Jeor Equation Guide",
      description: "See the exact male and female formulas, variables, examples, and limits.",
      action: "Read Guide"
    },
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
    },
    {
      href: "https://toolsquark.com/tools/maintenance-calorie-calibration-calculator.html",
      title: "Maintenance Calorie Calibration",
      description: "Use real trend data to refine the estimate after BMR and TDEE planning.",
      action: "Calibrate"
    }
  ],
  faq: [
    {
      question: "What is BMR?",
      answer: "Basal metabolic rate is an estimate of the energy your body uses at complete rest to maintain vital functions such as breathing, circulation, cellular repair, and brain activity."
    },
    {
      question: "Is this a basal metabolic rate calculator?",
      answer: "Yes. This page is a basal metabolic rate calculator. It estimates BMR, also called resting baseline calories in everyday use, with the Mifflin-St Jeor equation."
    },
    {
      question: "What formula does this BMR calculator use?",
      answer: "This calculator uses the Mifflin-St Jeor equation. For men, BMR = 10 x weight(kg) + 6.25 x height(cm) - 5 x age + 5. For women, BMR = 10 x weight(kg) + 6.25 x height(cm) - 5 x age - 161."
    },
    {
      question: "What is the Mifflin-St Jeor equation for men?",
      answer: "For men, the Mifflin-St Jeor BMR equation is 10 x weight in kilograms + 6.25 x height in centimeters - 5 x age in years + 5."
    },
    {
      question: "What is the Mifflin-St Jeor equation for women?",
      answer: "For women, the Mifflin-St Jeor BMR equation is 10 x weight in kilograms + 6.25 x height in centimeters - 5 x age in years - 161."
    },
    {
      question: "Can I use this as a BMR calculator in kg?",
      answer: "Yes. Choose metric units, enter weight in kilograms and height in centimeters, and the calculator applies the Mifflin-St Jeor equation directly."
    },
    {
      question: "Is a resting calorie calculator the same as a BMR calculator?",
      answer: "In everyday search, people often use resting calorie calculator to mean a BMR or resting-energy estimate. This page estimates BMR, then explains why full daily calories require TDEE."
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
    },
    {
      question: "Why do BMR calculators give different results?",
      answer: "Different calculators may use Mifflin-St Jeor, Harris-Benedict, Katch-McArdle, or different rounding and unit conversions. This page uses Mifflin-St Jeor and explains the exact equation."
    },
    {
      question: "What should I do after calculating BMR?",
      answer: "Use BMR as the resting baseline, then estimate TDEE with activity included. If you need an intake target, use the calorie goal calculator after the TDEE step."
    }
  ],
  references: [
    { title: "A New Predictive Equation for Resting Energy Expenditure", publisher: "The American Journal of Clinical Nutrition / PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/2305711/" },
    { title: "Body Weight Planner", publisher: "National Institute of Diabetes and Digestive and Kidney Diseases", href: "https://www.niddk.nih.gov/bwp" }
  ],
  contentSections: [
    {
      title: "What BMR Measures",
      body: `<p>Basal Metabolic Rate, usually shortened to BMR, estimates the calories your body would use at complete rest to support essential functions such as breathing, circulation, body temperature, organ function, and cellular repair.</p><p>Use this basal metabolic rate calculator when your search question is "how many calories do I burn at rest?" BMR is not the same as your full daily calorie need. It is the resting baseline underneath total daily energy expenditure.</p>`
    },
    {
      title: "Metabolic Rate Calculator vs BMR Calculator",
      body: `<p>People often search for a metabolic rate calculator when they want a BMR estimate, a resting calorie estimate, or a full-day calorie estimate. This page answers the resting baseline question. If you want calories burned across a normal day, use TDEE after BMR.</p><p>In practical terms, BMR is the first step, TDEE is the daily maintenance estimate, and a calorie goal is a later planning decision.</p>`
    },
    {
      title: "BMR Formula",
      body: `<p>This calculator uses the Mifflin-St Jeor equation, a common equation for estimating resting energy needs from weight, height, age, and sex.</p><div class="formula-box">Men: BMR = 10 x weight(kg) + 6.25 x height(cm) - 5 x age + 5<br>Women: BMR = 10 x weight(kg) + 6.25 x height(cm) - 5 x age - 161</div><p>Metric inputs in kilograms and centimeters are used directly. Imperial inputs are converted to kilograms and centimeters before the equation is applied, so the calculation remains formula-consistent across unit systems. The <a href="https://toolsquark.com/guides/mifflin-st-jeor-equation-explained.html">Mifflin-St Jeor equation guide</a> shows the variables and worked examples in more detail.</p>`
    },
    {
      title: "Mifflin-St Jeor Male And Female Equation",
      body: `<p>Search Console shows that users are finding ToolsQuark through very specific Mifflin-St Jeor equation questions. The important detail is the sex-specific constant at the end of the equation: +5 for men and -161 for women.</p><table class="comparison-table"><thead><tr><th>Equation Path</th><th>Formula</th><th>Use Case</th></tr></thead><tbody><tr><td>Men</td><td>10W + 6.25H - 5A + 5</td><td>Adult male BMR estimate from kg, cm, and age.</td></tr><tr><td>Women</td><td>10W + 6.25H - 5A - 161</td><td>Adult female BMR estimate from kg, cm, and age.</td></tr></tbody></table><p>W is weight in kilograms, H is height in centimeters, and A is age in years.</p>`
    },
    {
      title: "How To Use Your Result",
      body: `<ul><li>Use BMR to understand your resting energy baseline.</li><li>Use TDEE to estimate maintenance calories after activity is included.</li><li>Use real-world weight trends to adjust calorie targets over time.</li></ul><div class="note-box">BMR can shift with body size, lean mass, age, hormonal status, illness, sleep, and long periods of dieting. Treat it as an estimate, not a fixed biological number.</div>`
    },
    {
      title: "Example Calculation",
      body: `<p>For a 30-year-old man weighing 80 kg at 180 cm, the Mifflin-St Jeor estimate is 10 x 80 + 6.25 x 180 - 5 x 30 + 5 = 1,780 kcal/day. That is his estimated resting calorie baseline before activity is added.</p><p>For imperial inputs, the calculator first converts pounds to kilograms and feet/inches to centimeters. The displayed result is still a Mifflin-St Jeor BMR estimate, not a separate imperial-only formula.</p>`
    },
    {
      title: "Example Profiles And Interpretation",
      body: `<table class="comparison-table"><thead><tr><th>Profile</th><th>Approximate Meaning</th><th>What To Do Next</th></tr></thead><tbody><tr><td>Lower body size or older age</td><td>BMR may be lower because the equation is strongly influenced by weight, height, and age.</td><td>Use activity and trend data before choosing an intake target.</td></tr><tr><td>Larger body size or taller height</td><td>BMR may be higher because maintaining more tissue generally uses more energy.</td><td>Move to TDEE to include daily movement and training.</td></tr><tr><td>Very muscular or medically complex</td><td>The equation may miss individual metabolism or body composition.</td><td>Use professional assessment or trend-based calibration.</td></tr></tbody></table>`
    },
    {
      title: "When To Use BMR Instead Of TDEE",
      body: `<div class="use-case-grid"><div class="use-case-card"><strong>Formula learning</strong><span>Use BMR when you want to understand the Mifflin-St Jeor baseline before activity is added.</span></div><div class="use-case-card"><strong>Energy sequence</strong><span>Use BMR as step one before calculating maintenance calories with TDEE.</span></div><div class="use-case-card"><strong>Estimate comparison</strong><span>Compare BMR with app or wearable estimates to see what is resting baseline versus total daily burn.</span></div></div>`
    },
    {
      title: "Limits And Appropriate Use",
      body: `<p>The equation predicts resting expenditure from population averages; it does not measure an individual's metabolism. Body composition, illness, medications, endocrine conditions, growth, pregnancy, and prolonged energy restriction can change actual needs.</p><p>Do not use BMR as a minimum-safe intake or a weight-loss prescription. Total daily needs include movement, exercise, and digestion, and medical nutrition decisions require individualized assessment.</p>`
    },
    {
      title: "Why BMR Is Not The Final Calorie Target",
      body: `<p>BMR is the first number in an energy-planning sequence, not the last. Normal daily life adds walking, training, work, fidgeting, digestion, and recovery demands, so total daily energy needs are usually meaningfully higher than BMR.</p><p>After calculating BMR, move to the <a href="https://toolsquark.com/tools/tdee-calculator.html">TDEE calculator</a> for maintenance calories. Only then choose a deficit, maintenance target, surplus, or macro split with the <a href="https://toolsquark.com/tools/calorie-calculator.html">daily calorie goal calculator</a>.</p>`
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
    setNextStepRecommendations([
        { label: 'TDEE Calculator', href: 'https://toolsquark.com/tools/tdee-calculator.html', reason: 'Add activity level to turn resting calories into a maintenance estimate.', action: 'Estimate TDEE' },
        { label: 'Mifflin-St Jeor Examples', href: 'https://toolsquark.com/guides/mifflin-st-jeor-examples-men-women.html', reason: 'Review male and female examples before comparing calculator outputs.', action: 'Read Guide' }
    ]);
    document.getElementById('result-area').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
renderInputs();`
};
