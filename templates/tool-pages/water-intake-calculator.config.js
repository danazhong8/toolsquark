module.exports = {
  slug: "water-intake-calculator",
  title: "Water Intake Calculator | Daily Hydration & Fluid Needs | ToolsQuark",
  description: "Estimate a daily fluid planning target from body weight and exercise duration. Includes the heuristic, hydration limits, and authoritative guidance.",
  h1: "Water Intake Calculator",
  hero: "Estimate your daily hydration target from body weight, sex profile, and exercise duration.",
  schemaName: "Privacy-First Water Intake Calculator",
  schemaDescription: "A browser-side fluid planning estimate based on body weight and exercise duration, with clear limits and hydration safety guidance.",
  lastUpdated: "June 21, 2026",
  buttonText: "Calculate Hydration Target",
  resultUnit: "L/day",
  resultStatus: "Hydration Target",
  gaugeLabels: ["Baseline", "Active", "High"],
  insightTitle: "Hydration Strategy",
  controlsHtml: `
        <div class="unit-switcher">
            <div class="unit-tab active" id="tab-metric" onclick="switchUnit('metric')">Metric Units (kg)</div>
            <div class="unit-tab" id="tab-imperial" onclick="switchUnit('imperial')">Imperial Units (lbs)</div>
        </div>
        <div id="inputs-container"></div>`,
  relatedTitle: "Support Daily Activity",
  related: [
    { href: "https://toolsquark.com/tools/steps-to-calories-converter.html", title: "Steps to Calories Converter", description: "Estimate calories burned from your walking step count.", action: "Convert Steps" },
    { href: "https://toolsquark.com/tools/running-pace-calculator.html", title: "Running Pace Calculator", description: "Calculate pace for training sessions that raise hydration needs.", action: "Check Pace" }
  ],
  references: [
    { title: "Dietary Reference Intakes for Water and Electrolytes", publisher: "National Academies Press", href: "https://nap.nationalacademies.org/catalog/10925/dietary-reference-intakes-for-water-potassium-sodium-chloride-and-sulfate" },
    { title: "About Water and Healthier Drinks", publisher: "Centers for Disease Control and Prevention", href: "https://www.cdc.gov/healthy-weight-growth/water-healthy-drinks/index.html" }
  ],
  faq: [
    { question: "Does coffee or tea count toward fluid intake?", answer: "Yes, mild caffeinated drinks contribute to total daily fluid intake, though plain water remains the most direct hydration option." },
    { question: "Can I drink too much water?", answer: "Yes. Excessive intake can contribute to low blood sodium, especially during long endurance events. Use thirst, urine color, and medical guidance alongside numerical estimates." },
    { question: "Why does exercise increase the result?", answer: "Exercise raises sweat and respiratory fluid losses. This calculator adds an activity allowance based on exercise duration." }
  ],
  contentSections: [
    {
      title: "What This Tool Estimates",
      body: `<p>The result is a simple daily fluid-planning target, not a measured requirement. It combines a body-weight heuristic with a fixed exercise allowance.</p><p>Total water comes from drinking water, other beverages, and food. The National Academies' adequate-intake values describe total water from all sources and are not the same as this calculator's drink target.</p>`
    },
    {
      title: "Heuristic Used",
      body: `<div class="formula-box">Male profile: weight (kg) x 0.035 L<br>Female profile: weight (kg) x 0.031 L<br>Exercise addition: 0.35 L per 30 minutes</div><p>These factors are disclosed planning heuristics, not individualized clinical equations. Pounds are converted to kilograms before calculation.</p>`
    },
    {
      title: "Worked Example",
      body: `<p>A 70 kg person selecting the male profile and entering 30 minutes of exercise receives (70 x 0.035) + 0.35 = 2.80 L/day as a starting estimate.</p>`
    },
    {
      title: "How To Adjust The Starting Point",
      body: `<p>Heat, humidity, altitude, fever, pregnancy, breastfeeding, sodium intake, sweat rate, and exercise intensity can change needs. Thirst, urine pattern, body-weight change during long exercise, and clinician advice provide useful context.</p>`
    },
    {
      title: "Safety And Limits",
      body: `<p>More water is not always safer. Rapid excessive intake can dilute blood sodium, while some heart, kidney, liver, and endocrine conditions require fluid limits. Endurance activity may require individualized fluid and electrolyte planning rather than forced plain-water intake.</p>`
    }
  ],
  methodology: "This calculator estimates baseline hydration as body weight in kg multiplied by a sex-specific factor, then adds about 0.35 L for every 30 minutes of exercise.",
  disclaimer: "Hydration needs vary with climate, sodium intake, medical conditions, medications, pregnancy, and sweat rate. This tool is educational and not medical advice.",
  script: `
let currentUnit = 'metric';
function renderInputs() {
    const container = document.getElementById('inputs-container');
    const unit = currentUnit === 'metric' ? 'kg' : 'lbs';
    container.innerHTML = \`
        <div class="input-group">
            <label for="input_gender">Profile</label>
            <div class="input-wrapper">
                <select id="input_gender">
                    <option value="male">Male Profile</option>
                    <option value="female">Female Profile</option>
                </select>
            </div>
        </div>
        <div class="input-row">
            <div class="input-group">
                <label for="input_weight">Body Weight</label>
                <div class="input-wrapper"><input type="number" id="input_weight" placeholder="\${currentUnit === 'metric' ? 'e.g. 70' : 'e.g. 154'}" step="any"><span class="unit-badge">\${unit}</span></div>
            </div>
            <div class="input-group">
                <label for="input_activity">Daily Exercise</label>
                <div class="input-wrapper"><input type="number" id="input_activity" placeholder="e.g. 45" step="any"><span class="unit-badge">min</span></div>
            </div>
        </div>\`;
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
    let weight = parseFloat(document.getElementById('input_weight').value);
    const activity = parseFloat(document.getElementById('input_activity').value) || 0;
    if (isNaN(weight) || weight <= 0 || activity < 0) {
        alert('Please enter valid body weight and exercise duration.');
        return;
    }
    if (currentUnit === 'imperial') weight *= 0.45359237;
    const multiplier = gender === 'male' ? 0.035 : 0.031;
    const litres = (weight * multiplier) + ((activity / 30) * 0.35);
    let result = {};
    if (litres < 2) {
        result = { status: 'Baseline Hydration Level', color: 'var(--underweight)', desc: \`Your estimated target is \${litres.toFixed(2)} L/day. This reflects a lower body weight or low exercise volume.\`, suggestion: 'Spread intake across the day instead of trying to drink everything at once.', percent: Math.max(5, litres / 2 * 30) };
    } else if (litres <= 3.5) {
        result = { status: 'Active Hydration Level', color: 'var(--normal)', desc: \`Your estimated target is \${litres.toFixed(2)} L/day based on body weight and activity.\`, suggestion: 'Use this as a daily anchor, then adjust for heat, sweating, salty meals, and thirst.', percent: 30 + ((litres - 2) / 1.5) * 40 };
    } else {
        result = { status: 'Higher Fluid Estimate', color: 'var(--overweight)', desc: \`Your estimated target is \${litres.toFixed(2)} L/day, driven by the entered body weight, profile, and exercise duration.\`, suggestion: 'For long or hot training sessions, individualize fluid and electrolyte replacement and avoid forcing excessive plain water.', percent: Math.min(95, 70 + (Math.min(litres - 3.5, 2) / 2) * 25) };
    }
    document.getElementById('result-area').style.display = 'block';
    document.getElementById('calc-output').innerText = litres.toFixed(2);
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
