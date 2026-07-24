module.exports = {
  slug: "tdee-calculator",
  title: "TDEE Calculator: Maintenance Calories By Activity Level",
  description: "Estimate TDEE and maintenance calories from Mifflin-St Jeor BMR and activity multipliers. Compare sedentary, light, moderate, and very active levels.",
  h1: "TDEE Calculator: Maintenance Calories By Activity Level",
  hero: "Estimate total daily energy expenditure from Mifflin-St Jeor BMR and a clear activity multiplier. Use the result as maintenance calories first, then calibrate before choosing a deficit or surplus.",
  heroHighlights: ["Maintenance calories by activity", "BMR x activity multiplier", "Calibration next step"],
  schemaName: "Privacy-First TDEE Calculator",
  schemaDescription: "A browser-side Total Daily Energy Expenditure calculator focused on estimated maintenance energy and real-world calibration.",
  lastUpdated: "July 24, 2026",
  buttonText: "Calculate TDEE",
  resultUnit: "kcal/day",
  resultStatus: "Maintenance Energy",
  gaugeLabels: ["Sedentary", "Moderate", "Athletic"],
  insightTitle: "Maintenance Calibration",
  shareResult: true,
  dynamicNextSteps: true,
  controlsHtml: `
        <div class="maintenance-estimate-banner">
            <strong>Maintenance calories before diet targets.</strong>
            <span>TDEE is the maintenance estimate. Calculate it first, then move to a calorie goal only if you want a visible deficit, maintenance, or surplus target.</span>
        </div>
        <div class="unit-switcher">
            <div class="unit-tab active" id="tab-metric" onclick="switchUnit('metric')">Metric Units (kg/cm)</div>
            <div class="unit-tab" id="tab-imperial" onclick="switchUnit('imperial')">Imperial Units (lbs/ft-in)</div>
        </div>
        <div id="inputs-container"></div>`,
  extraCss: `.maintenance-estimate-banner{display:grid;gap:5px;margin-bottom:14px;padding:14px 16px;border:1px solid #bfdbfe;background:#eff6ff;border-radius:10px;color:#1e3a8a}.maintenance-estimate-banner strong{font-size:15px}.maintenance-estimate-banner span{font-size:13px;line-height:1.5;color:#334155}`,
  relatedTitle: "Refine Your Nutrition Plan",
  related: [
    {
      href: "https://toolsquark.com/guides/bmr-vs-tdee-vs-calorie-goal.html",
      title: "BMR vs TDEE vs Calorie Goal",
      description: "Choose the right energy number before turning it into an intake target.",
      action: "Read Guide"
    },
    {
      href: "https://toolsquark.com/tools/bmr-calculator.html",
      title: "BMR Calculator",
      description: "Isolate your resting metabolic baseline before activity is added.",
      action: "Calculate BMR"
    },
    {
      href: "https://toolsquark.com/guides/tdee-activity-multiplier-explained.html",
      title: "TDEE Activity Multiplier Guide",
      description: "Choose between sedentary, light, moderate, and very active multipliers with fewer guesswork mistakes.",
      action: "Pick Multiplier"
    },
    {
      href: "https://toolsquark.com/tools/calorie-calculator.html",
      title: "Daily Calorie Goal Calculator",
      description: "Apply a visible deficit, maintenance, or surplus adjustment after estimating TDEE.",
      action: "Plan A Goal"
    },
    {
      href: "https://toolsquark.com/tools/macro-calculator.html",
      title: "Macro Calculator",
      description: "Turn a calorie target into protein, fat, and carbohydrate grams.",
      action: "Split Macros"
    },
    {
      href: "https://toolsquark.com/tools/maintenance-calorie-calibration-calculator.html",
      title: "Maintenance Calorie Calibration",
      description: "Use average intake and weight trend to refine your estimated maintenance.",
      action: "Calibrate"
    },
    {
      href: "https://toolsquark.com/tools/daily-steps-goal-calculator.html",
      title: "Daily Steps Goal Calculator",
      description: "Build a walking plan when activity level is the weakest assumption.",
      action: "Plan Steps"
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
      question: "Is TDEE the same as maintenance calories?",
      answer: "TDEE is an estimated maintenance calorie level. Your real maintenance can differ, so compare the estimate with average intake and body-weight trend over several weeks."
    },
    {
      question: "How should I use TDEE for weight change?",
      answer: "Eating near TDEE tends to support maintenance. A moderate deficit can support gradual fat loss, while a modest surplus can support muscle gain when paired with resistance training."
    },
    {
      question: "Which activity level should I choose?",
      answer: "Choose the activity level that matches your usual week, not your hardest training day. If you are between two options, start with the lower one and adjust after tracking your weight trend for two to four weeks."
    },
    {
      question: "What are the TDEE activity multipliers?",
      answer: "This calculator uses 1.2 for sedentary, 1.375 for lightly active, 1.55 for moderately active, 1.725 for very active, and 1.9 for extra active. The multiplier is applied after estimating BMR."
    },
    {
      question: "Why is my real maintenance different from this estimate?",
      answer: "TDEE formulas cannot fully capture genetics, non-exercise movement, adaptive metabolism, training intensity, sleep, illness, or tracking accuracy. Treat the result as a starting estimate and refine it with real-world progress data."
    },
    {
      question: "Is TDEE the same as BMR?",
      answer: "No. BMR estimates resting energy needs before daily activity is added. TDEE starts with BMR, then applies an activity multiplier to estimate total daily maintenance energy."
    },
    {
      question: "Can I use TDEE for weight loss?",
      answer: "Yes, but indirectly. TDEE is the maintenance estimate. To plan fat loss, use a moderate deficit below that estimate or open the Daily Calorie Goal Calculator to apply a visible adjustment."
    },
    {
      question: "Why is my TDEE different from my fitness app?",
      answer: "Apps may use wearable movement data, different formulas, exercise logs, or personalized history. This calculator uses a transparent equation and broad activity multipliers, so compare it with your multi-week trend."
    },
    {
      question: "Should I choose a higher activity level for workouts?",
      answer: "Choose the level that reflects your average week, including non-exercise movement and work demands. If you are unsure, start conservative and calibrate from trend data."
    },
    {
      question: "What is the next step after TDEE?",
      answer: "Use the TDEE estimate as maintenance. If your goal is weight loss or gain, open the Daily Calorie Goal Calculator to apply a visible deficit or surplus."
    }
  ],
  references: [
    { title: "A New Predictive Equation for Resting Energy Expenditure", publisher: "The American Journal of Clinical Nutrition / PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/2305711/" },
    { title: "Body Weight Planner", publisher: "National Institute of Diabetes and Digestive and Kidney Diseases", href: "https://www.niddk.nih.gov/bwp" }
  ],
  contentSections: [
    {
      title: "What TDEE Means",
      body: `<p>Total Daily Energy Expenditure is an estimate of how many calories your body burns in a typical day. It combines your resting metabolic needs with daily movement, exercise, digestion, and general activity.</p><p>In practical nutrition planning, TDEE is the maintenance calorie estimate. It is most useful after a <a href="https://toolsquark.com/tools/bmr-calculator.html">BMR estimate</a> and before choosing a moderate fat-loss deficit, a maintenance target, or a controlled muscle-gain surplus in the <a href="https://toolsquark.com/tools/calorie-calculator.html">daily calorie goal calculator</a>.</p>`
    },
    {
      title: "How This Calculator Works",
      body: `<p>This tool first estimates resting energy expenditure with the Mifflin-St Jeor equations, then multiplies that estimate by a selected activity factor.</p><div class="formula-box">Men: BMR = 10W + 6.25H - 5A + 5<br>Women: BMR = 10W + 6.25H - 5A - 161<br>Maintenance calories = TDEE = BMR x activity multiplier</div><p>W is weight in kilograms, H is height in centimeters, and A is age in years. The sex-specific constants are part of the published equation.</p><ul><li><strong>1.2:</strong> sedentary.</li><li><strong>1.375:</strong> lightly active.</li><li><strong>1.55:</strong> moderately active.</li><li><strong>1.725:</strong> very active.</li><li><strong>1.9:</strong> extra active.</li></ul>`
    },
    {
      title: "How To Use Your Result",
      body: `<ul><li><strong>Maintenance:</strong> start near your TDEE and monitor body weight trend.</li><li><strong>Fat loss:</strong> a moderate deficit often starts around 300 to 500 calories below TDEE.</li><li><strong>Muscle gain:</strong> a modest surplus often starts around 150 to 300 calories above TDEE.</li></ul><div class="note-box">Avoid using one calculation as a permanent prescription. Track your average weight, performance, hunger, and energy for a few weeks, then adjust gradually with the <a href="https://toolsquark.com/tools/maintenance-calorie-calibration-calculator.html">maintenance calibration calculator</a>.</div>`
    },
    {
      title: "When This Estimate Is Useful",
      body: `<p>TDEE is useful when you need a maintenance-calorie starting point before choosing a deficit, surplus, or macro split. It is especially helpful when you understand that activity level is an assumption rather than a measured value.</p><p>It is less useful when medical nutrition needs, pregnancy, breastfeeding, growth, recovery from illness, or eating-disorder history require individualized guidance.</p>`
    },
    {
      title: "Example Calculation",
      body: `<p>For a 30-year-old man at 70 kg and 175 cm, estimated BMR is (10 x 70) + (6.25 x 175) - (5 x 30) + 5 = 1,649 kcal/day. With the moderate 1.55 multiplier, estimated TDEE is 1,649 x 1.55 = 2,556 kcal/day after rounding.</p>`
    },
    {
      title: "Activity Multipliers Compared",
      body: `<table class="comparison-table"><thead><tr><th>Activity Level</th><th>Typical Pattern</th><th>Common Risk</th></tr></thead><tbody><tr><td>Sedentary</td><td>Desk-heavy days with little purposeful exercise.</td><td>Under-counting small daily movement if steps are higher than expected.</td></tr><tr><td>Moderately active</td><td>Regular training or a consistently active routine.</td><td>Choosing this for a few hard workouts while the rest of the week is low movement.</td></tr><tr><td>Very active</td><td>Frequent training, active job demands, or high step volume.</td><td>Overestimating if exercise calories are already counted elsewhere.</td></tr></tbody></table>`
    },
    {
      title: "Maintenance Calories By Activity Level",
      body: `<p>The same BMR can produce very different maintenance estimates once activity is added. For example, a 1,650 kcal BMR becomes about 1,980 kcal at sedentary, 2,269 kcal at light activity, 2,558 kcal at moderate activity, and 2,846 kcal at very active.</p><p>This is the main reason TDEE pages should show the multiplier clearly. If activity is uncertain, start conservative and use trend data rather than choosing the highest label.</p>`
    },
    {
      title: "Best Use Cases For TDEE",
      body: `<div class="use-case-grid"><div class="use-case-card"><strong>Maintenance estimate</strong><span>Use TDEE when you need the full-day calorie number rather than resting calories only.</span></div><div class="use-case-card"><strong>Deficit or surplus setup</strong><span>Use TDEE before choosing a daily calorie goal for fat loss or lean gain.</span></div><div class="use-case-card"><strong>Calibration checkpoint</strong><span>Compare estimated TDEE with real intake and weight trend to refine the number.</span></div></div>`
    },
    {
      title: "Accuracy And Real-World Calibration",
      body: `<p>The published equation estimates resting needs; the activity multiplier adds another assumption. Step count, non-exercise movement, training load, body composition, illness, sleep, and food tracking can all move actual maintenance away from the estimate.</p><p>Use the result as a starting budget for two to four weeks. Compare average intake with average body-weight trend, energy, hunger, and performance, then adjust in small steps. Pregnancy, breastfeeding, growth, eating-disorder history, and medical nutrition needs require individualized guidance.</p>`
    },
    {
      title: "When Activity Level Is The Weak Link",
      body: `<p>The activity multiplier is usually the least precise part of a TDEE estimate. A desk worker who trains hard three days per week and a person with an active job may choose the same label but have very different total movement.</p><p>If the result feels too high or too low, do not only change the formula. Track steps, training days, intake, and trend for several weeks, then calibrate maintenance from what actually happens.</p>`
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
    document.getElementById('calc-suggestion').innerText = 'Compare average intake and body-weight trend over two to four weeks. Use the Daily Calorie Goal Calculator only when you are ready to apply an explicit goal adjustment.';
    document.getElementById('gauge-pointer').style.left = percent + '%';
    setNextStepRecommendations([
        { label: 'Daily Calorie Goal Calculator', href: 'https://toolsquark.com/tools/calorie-calculator.html', reason: 'Apply a visible deficit, maintenance, or surplus after estimating TDEE.', action: 'Plan Goal' },
        { label: 'Activity Multiplier Guide', href: 'https://toolsquark.com/guides/tdee-activity-multiplier-explained.html', reason: 'Check whether your selected activity factor matches your real week.', action: 'Read Guide' }
    ]);
    document.getElementById('result-area').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
renderInputs();`
};
