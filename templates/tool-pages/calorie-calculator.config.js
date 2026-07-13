module.exports = {
  slug: "calorie-calculator",
  title: "Calorie Calculator: Maintenance, Deficit & Surplus",
  description: "Estimate maintenance calories, daily calorie targets, deficits, or surpluses from BMR and activity level. Uses Mifflin-St Jeor with visible adjustments.",
  h1: "Calorie Calculator: Maintenance, Deficit, Surplus",
  hero: "Use this maintenance calorie calculator to estimate resting calories, maintenance calories, and a daily target for fat loss, maintenance, or lean gain with visible percentage adjustments and browser-local inputs.",
  schemaName: "Privacy-First Calorie Calculator",
  schemaDescription: "A browser-side daily calorie goal planner using estimated maintenance energy and an explicit percentage adjustment.",
  lastUpdated: "June 22, 2026",
  buttonText: "Calculate Daily Goal",
  resultUnit: "kcal/day",
  resultStatus: "Daily Goal Target",
  gaugeLabels: ["Loss", "Maintain", "Gain"],
  insightTitle: "Goal And Maintenance Context",
  shareResult: true,
  dynamicNextSteps: true,
  controlsHtml: `
        <div class="unit-switcher">
            <div class="unit-tab active" id="tab-metric" onclick="switchUnit('metric')">Metric Units (kg/cm)</div>
            <div class="unit-tab" id="tab-imperial" onclick="switchUnit('imperial')">Imperial Units (lbs/ft-in)</div>
        </div>
        <div id="inputs-container"></div>`,
  relatedTitle: "Build The Planning Sequence",
  related: [
    {
      href: "https://toolsquark.com/guides/maintenance-calories-vs-calorie-deficit.html",
      title: "Maintenance vs Calorie Deficit",
      description: "Understand when to hold maintenance, when to create a deficit, and how to review the trend.",
      action: "Read Guide"
    },
    {
      href: "https://toolsquark.com/tools/tdee-calculator.html",
      title: "TDEE Calculator",
      description: "Use the maintenance-only view when you do not need a goal adjustment.",
      action: "Estimate TDEE"
    },
    {
      href: "https://toolsquark.com/tools/macro-calculator.html",
      title: "Macro Calculator",
      description: "Distribute this calorie target across adjustable protein, fat, and carbohydrate grams.",
      action: "Split Macros"
    },
    {
      href: "https://toolsquark.com/tools/calorie-deficit-timeline-calculator.html",
      title: "Calorie Deficit Timeline",
      description: "Estimate the time implied by a chosen daily deficit without treating it as a promise.",
      action: "Estimate Timeline"
    },
    {
      href: "https://toolsquark.com/tools/maintenance-calorie-calibration-calculator.html",
      title: "Maintenance Calorie Calibration",
      description: "Compare your planned intake with scale trend to refine the maintenance estimate.",
      action: "Calibrate Intake"
    },
    {
      href: "https://toolsquark.com/tools/weight-trend-smoothing-calculator.html",
      title: "Weight Trend Smoothing",
      description: "Reduce day-to-day weight noise before judging whether a target is working.",
      action: "Smooth Trend"
    }
  ],
  faq: [
    {
      question: "What formula does this calorie calculator use?",
      answer: "This calculator estimates basal metabolic rate with the Mifflin-St Jeor equation, then multiplies that baseline by your selected activity level. For men, BMR = 10 x weight(kg) + 6.25 x height(cm) - 5 x age + 5. For women, BMR = 10 x weight(kg) + 6.25 x height(cm) - 5 x age - 161."
    },
    {
      question: "Is this a resting calorie calculator?",
      answer: "It includes a resting calorie estimate as the first step, but the final result is a daily goal after activity and your selected deficit, maintenance, or surplus adjustment are applied."
    },
    {
      question: "Is this the same as a maintenance calorie calculator?",
      answer: "Maintenance is one option on this page. Choose the 0% goal to use the TDEE-style maintenance estimate without adding a deficit or surplus."
    },
    {
      question: "Can I use this as a calorie maintenance calculator?",
      answer: "Yes. Choose the 0% maintenance option to estimate maintenance calories. Choose a deficit or surplus only when you want a daily target below or above estimated maintenance."
    },
    {
      question: "How should I use the result for weight loss?",
      answer: "Choose a disclosed 10% or 20% reduction from estimated maintenance. Percentage-based options scale with the estimate, but they still require real-world monitoring and may not be appropriate for every person."
    },
    {
      question: "Why does activity level change my calorie target so much?",
      answer: "Daily movement, training volume, and physically demanding work can add substantial energy expenditure above your resting needs. Choose the activity level that best matches your average week rather than your most active day."
    },
    {
      question: "How is this different from the TDEE calculator?",
      answer: "The TDEE page estimates maintenance energy only. This page adds an explicit goal choice and shows the adjustment used to produce a daily planning target."
    },
    {
      question: "How often should I adjust my calorie target?",
      answer: "Use the estimate for two to four weeks, track average body weight and energy, then adjust gradually. Daily scale changes are noisy, so weekly averages are more useful than single weigh-ins."
    },
    {
      question: "Is a 20% deficit always better than a 10% deficit?",
      answer: "No. A larger deficit can be harder to sustain and may affect training, hunger, mood, or adherence. The smallest adjustment that produces a useful trend is usually easier to evaluate."
    },
    {
      question: "Can I use this calculator for muscle gain?",
      answer: "You can use the +5% or +10% options as a starting surplus, but muscle gain also depends on training, protein intake, recovery, and how your body weight changes over several weeks."
    },
    {
      question: "Should I eat the same calorie target every day?",
      answer: "You can, but weekly average intake usually matters more than a perfectly identical day. Some people prefer a consistent target, while others adjust around training, appetite, or schedule."
    },
    {
      question: "What makes this different from a food calorie counter?",
      answer: "This page does not count calories in foods. It estimates a planning target from body metrics, activity level, and a visible goal adjustment so you can decide what intake range to test."
    },
    {
      question: "How do I know if the target is working?",
      answer: "Compare your average intake with a smoothed body-weight trend over two to four weeks. If the trend, hunger, energy, or training response does not match the goal, adjust gradually."
    }
  ],
  references: [
    { title: "A New Predictive Equation for Resting Energy Expenditure", publisher: "The American Journal of Clinical Nutrition / PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/2305711/" },
    { title: "Body Weight Planner", publisher: "National Institute of Diabetes and Digestive and Kidney Diseases", href: "https://www.niddk.nih.gov/bwp" }
  ],
  contentSections: [
    {
      title: "What This Goal Calculator Produces",
      body: `<p>This calorie calculator first estimates resting calories with Mifflin-St Jeor, converts that resting baseline into maintenance calories with an activity multiplier, then applies the goal percentage you select. The result is a planning target, not a prediction of an exact rate of weight change.</p><p>Use it as a maintenance calorie calculator when you choose the 0% option. Use the deficit or surplus options only after you understand the maintenance estimate. This keeps the <a href="https://toolsquark.com/tools/tdee-calculator.html">TDEE calculator</a> focused on energy expenditure while this page supports the next decision: choosing a starting intake target for maintenance, deficit, or surplus planning.</p>`
    },
    {
      title: "How The Target Is Calculated",
      body: `<p>The tool estimates resting calories with Mifflin-St Jeor, applies an activity multiplier, then adjusts that maintenance estimate by the selected percentage.</p><div class="formula-box">Resting calories = Mifflin-St Jeor BMR<br>Maintenance calories = resting calories x activity multiplier<br>Daily goal = maintenance calories x (1 + selected adjustment)</div><p>Available adjustments are -10%, -20%, 0%, +5%, and +10%. The calculation does not promise a specific weekly weight change.</p>`
    },
    {
      title: "Choosing A Goal Option",
      body: `<ul><li><strong>Maintenance:</strong> keeps the estimated TDEE unchanged.</li><li><strong>Gentle fat loss:</strong> applies a 10% reduction.</li><li><strong>Moderate fat loss:</strong> applies a 20% reduction and deserves more caution.</li><li><strong>Lean gain:</strong> applies a 5% increase.</li><li><strong>Higher surplus:</strong> applies a 10% increase.</li></ul><div class="note-box">Choose the smallest adjustment that supports the goal, then calibrate against hunger, energy, training, and multi-week trend.</div>`
    },
    {
      title: "When This Target Is Useful",
      body: `<p>This calculator is most useful when you already want a starting intake target rather than only a maintenance estimate. It makes the adjustment visible, so you can see whether the result comes from maintenance, a deficit, or a surplus.</p><p>It is not a meal plan, medical nutrition prescription, or promise of weekly weight change. Real-world results depend on adherence, food tracking accuracy, water changes, training, sleep, and individual metabolism.</p>`
    },
    {
      title: "Example Calorie Plan",
      body: `<p>If estimated maintenance is 2,000 kcal/day, a gentle 10% deficit produces a 1,800 kcal target. A 5% surplus produces 2,100 kcal. Both remain estimates that should be checked against the real trend.</p>`
    },
    {
      title: "Goal Options Compared",
      body: `<table class="comparison-table"><thead><tr><th>Goal Option</th><th>Adjustment</th><th>Best Fit</th></tr></thead><tbody><tr><td>Gentle fat loss</td><td>About 10% below estimated maintenance.</td><td>When adherence, training, and energy matter more than speed.</td></tr><tr><td>Maintenance</td><td>No planned adjustment from estimated TDEE.</td><td>When you want stability, a diet break, or a baseline check.</td></tr><tr><td>Lean gain</td><td>About 5% above estimated maintenance.</td><td>When training progress matters and rapid weight gain is not desired.</td></tr></tbody></table>`
    },
    {
      title: "Common Planning Scenarios",
      body: `<div class="use-case-grid"><div class="use-case-card"><strong>Starting a cut</strong><span>Begin with a moderate percentage deficit, then evaluate average weight after two to four weeks.</span></div><div class="use-case-card"><strong>Finding maintenance</strong><span>Use the 0% option when you need a baseline before changing intake.</span></div><div class="use-case-card"><strong>Lean gain phase</strong><span>Use a small surplus and compare body-weight trend with training performance.</span></div></div>`
    },
    {
      title: "Where The Estimate Can Miss",
      body: `<p>Activity categories are broad and cannot measure individual movement, training intensity, adaptive changes, or differences in body composition. Food labels and portion estimates also introduce error, so apparent intake and true intake may differ.</p><p>This calculator is intended for generally healthy, non-pregnant adults. Children, teenagers, pregnancy, breastfeeding, recovery from illness, eating-disorder history, and therapeutic diets need professional assessment rather than a generic deficit or surplus.</p>`
    },
    {
      title: "How To Calibrate The Target",
      body: `<p>Use the calculated target as a first test, not a permanent prescription. Keep the target stable long enough to see a trend, then compare average intake, average body weight, gym performance, hunger, sleep, and adherence.</p><p>If weight is changing faster or slower than expected, adjust in small steps rather than rebuilding the plan from scratch. The <a href="https://toolsquark.com/tools/maintenance-calorie-calibration-calculator.html">maintenance calibration</a> and <a href="https://toolsquark.com/tools/weight-trend-smoothing-calculator.html">weight trend</a> tools are designed for this second pass. The <a href="https://toolsquark.com/guides/maintenance-calories-vs-calorie-deficit.html">maintenance vs calorie deficit guide</a> explains when each target makes sense.</p>`
    }
  ],
  methodology: "This tool estimates maintenance energy with Mifflin-St Jeor and a selected activity multiplier, then applies a disclosed goal adjustment of -20%, -10%, 0%, +5%, or +10%.",
  disclaimer: "These calculations are educational estimates, not medical advice, diagnosis, or treatment. Consult a qualified clinician or registered dietitian for personal nutrition guidance.",
  script: `
let currentUnit = 'metric';
function renderInputs() {
    const container = document.getElementById('inputs-container');
    const baseInputs = \`
        <div class="input-row">
            <div class="input-group">
                <label for="input_gender">Sex Used By Equation</label>
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
        </div>
        <div class="input-group">
            <label for="input_goal">Daily Calorie Goal</label>
            <div class="input-wrapper">
                <select id="input_goal">
                    <option value="-0.10">Gentle fat loss (-10%)</option>
                    <option value="-0.20">Moderate fat loss (-20%)</option>
                    <option value="0" selected>Maintain weight (0%)</option>
                    <option value="0.05">Lean gain (+5%)</option>
                    <option value="0.10">Higher surplus (+10%)</option>
                </select>
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
    const goalAdjustment = parseFloat(document.getElementById('input_goal').value);
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
    const target = Math.round(tdee * (1 + goalAdjustment));
    const labels = { '-0.2': 'Moderate Fat-Loss Target', '-0.1': 'Gentle Fat-Loss Target', '0': 'Maintenance Target', '0.05': 'Lean-Gain Target', '0.1': 'Higher-Surplus Target' };
    const status = labels[String(goalAdjustment)] || 'Daily Goal Target';
    const color = goalAdjustment < 0 ? 'var(--underweight)' : goalAdjustment > 0 ? 'var(--overweight)' : 'var(--normal)';
    const percent = 50 + (goalAdjustment * 225);
    document.getElementById('result-area').style.display = 'block';
    document.getElementById('calc-output').innerText = target.toLocaleString();
    document.getElementById('calc-output').style.color = color;
    document.getElementById('calc-status').innerText = status;
    document.getElementById('calc-status').style.color = color;
    document.getElementById('calc-desc').innerText = \`Daily target: \${target.toLocaleString()} kcal, using a \${(goalAdjustment * 100).toFixed(0)}% adjustment from estimated maintenance of \${tdee.toLocaleString()} kcal/day.\`;
    document.getElementById('calc-suggestion').innerText = goalAdjustment === 0 ? 'Use the maintenance estimate as a starting point and compare it with your multi-week trend.' : 'Use the smallest effective adjustment. Recheck average weight, hunger, energy, and training after two to four weeks.';
    document.getElementById('gauge-pointer').style.left = Math.min(95, Math.max(5, percent)) + '%';
    if (goalAdjustment === 0) {
        setNextStepRecommendations([
            { label: 'Maintenance Calorie Calibration', href: 'https://toolsquark.com/tools/maintenance-calorie-calibration-calculator.html', reason: 'Compare this estimate with real intake and weight trend.', action: 'Calibrate' },
            { label: 'Maintenance vs Deficit Guide', href: 'https://toolsquark.com/guides/maintenance-calories-vs-calorie-deficit-which-number.html', reason: 'Decide whether maintenance or a deficit is the right next number.', action: 'Read Guide' }
        ]);
    } else if (goalAdjustment < 0) {
        setNextStepRecommendations([
            { label: 'Weight Trend Smoothing', href: 'https://toolsquark.com/tools/weight-trend-smoothing-calculator.html', reason: 'Use smoothed trend data before judging whether the deficit is working.', action: 'Smooth Trend' },
            { label: 'Macro Calculator', href: 'https://toolsquark.com/tools/macro-calculator.html', reason: 'Turn the calorie target into protein, fat, and carbohydrate grams.', action: 'Split Macros' }
        ]);
    } else {
        setNextStepRecommendations([
            { label: 'Macro Calculator', href: 'https://toolsquark.com/tools/macro-calculator.html', reason: 'Plan protein, fat, and carbohydrates for the surplus target.', action: 'Split Macros' },
            { label: 'Weight Trend Smoothing', href: 'https://toolsquark.com/tools/weight-trend-smoothing-calculator.html', reason: 'Monitor whether the surplus is producing a controlled trend.', action: 'Smooth Trend' }
        ]);
    }
    document.getElementById('result-area').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
renderInputs();`
};
