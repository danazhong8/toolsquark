module.exports = {
  slug: "water-intake-calculator",
  title: "Water Intake Calculator | Daily Hydration & Fluid Needs | ToolsQuark",
  description: "How much water should you drink a day? Estimate a daily fluid starting point by weight and exercise, in liters, US cups and fluid ounces, with clear limits.",
  h1: "Daily Water Intake Calculator",
  hero: "How much water should you drink a day? Estimate fluid intake in liters, US cups, and fluid ounces from weight and exercise. A general adult starting point, not a plain-water prescription.",
  schemaName: "Privacy-First Water Intake Calculator",
  schemaDescription: "A browser-side fluid planning estimate based on body weight and exercise duration, with clear limits and hydration safety guidance.",
  lastUpdated: "October 10, 2026",
  buttonText: "Estimate Daily Fluid Intake",
  resultHtml: `
            <div class="result-status" id="calc-status">Daily Fluid Starting Estimate</div>
            <div class="result-val"><span id="calc-output">--</span><span class="result-unit">L/day</span></div>
            <dl class="water-result-grid">
                <div><dt>US cups / day</dt><dd id="water-cups">--</dd></div>
                <div><dt>US fluid ounces / day</dt><dd id="water-ounces">--</dd></div>
                <div><dt>Baseline estimate</dt><dd id="water-baseline">--</dd></div>
                <div><dt>Exercise allowance</dt><dd id="water-exercise">--</dd></div>
            </dl>
            <p class="result-desc" id="calc-desc"></p>
            <div class="result-boundary"><strong>Not a plain-water prescription</strong><span>Other drinks contribute to fluid intake, and food contributes to total water. This estimate does not measure dehydration or replace a clinician's fluid restriction. Do not force yourself to meet the number.</span></div>
            <div class="suggestion-box"><h4>Put The Estimate In Context</h4><p id="calc-suggestion"></p></div>
            <div class="share-result-panel"><h4>Result Summary</h4><p id="share-summary"></p><button type="button" class="share-copy-btn" onclick="copyShareResult()">Copy Summary</button><span id="share-copy-status" aria-live="polite"></span></div>`,
  controlsHtml: `
        <div class="unit-switcher">
            <button type="button" class="unit-tab active" id="tab-metric" aria-label="Body weight in kilograms" aria-pressed="true" onclick="switchUnit('metric')">Kilograms</button>
            <button type="button" class="unit-tab" id="tab-imperial" aria-label="Body weight in pounds" aria-pressed="false" onclick="switchUnit('imperial')">Pounds</button>
        </div>
        <div id="inputs-container"></div>
        <p class="water-method-note">Adult planning heuristic, not a clinical or pregnancy-specific target. <a href="#guide">Method and limits</a>.</p>`,
  extraCss: `.unit-tab{border:0;font-family:inherit}.unit-tab:focus-visible,.share-copy-btn:focus-visible{outline:3px solid #2563eb;outline-offset:3px}.water-method-note{font-size:13px;color:#475569;margin-bottom:18px}.water-method-note a{color:#2563eb}.water-result-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0 20px;margin:22px 0;text-align:left}.water-result-grid div{padding:12px 0;border-bottom:1px solid #e2e8f0;min-width:0}.water-result-grid dt{font-size:13px;color:#64748b}.water-result-grid dd{font-size:22px;font-weight:800;overflow-wrap:anywhere}.result-val{overflow-wrap:anywhere}.share-result-panel p{white-space:pre-line;overflow-wrap:anywhere}.input-group{min-width:0}@media(max-width:768px){.hero{padding:12px 0 18px;margin-bottom:16px}.card{padding:18px 16px}.unit-switcher{margin-bottom:16px}.input-group{margin-bottom:14px}}@media(max-width:380px){.water-result-grid{grid-template-columns:1fr}}`,
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
    { question: "How much water should I drink a day?", answer: "There is no single amount that suits everyone. This calculator gives a disclosed weight-and-exercise starting estimate in liters, US cups, and US fluid ounces. Climate, pregnancy, health conditions, food, and other drinks can change how you interpret it; it is not a requirement to drink that much plain water." },
    { question: "How many cups are in a liter of water?", answer: "One liter is about 4.23 US customary cups or 33.81 US fluid ounces. This page uses a 236.59 mL US cup, not a 250 mL metric cup or an Imperial fluid ounce." },
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
      body: `<p>For 70 kg, the 35 mL/kg profile, and 30 minutes of exercise: 2.45 L baseline + 0.35 L exercise allowance = 2.80 L/day. That is about 11.8 US cups or 94.7 US fluid ounces, not an instruction to drink 11.8 cups of plain water.</p><table class="comparison-table"><thead><tr><th>Example inputs</th><th>Starting estimate</th><th>US cups</th></tr></thead><tbody><tr><td>60 kg, 31 mL/kg, no exercise</td><td>1.86 L/day</td><td>7.9</td></tr><tr><td>70 kg, 35 mL/kg, 30 min exercise</td><td>2.80 L/day</td><td>11.8</td></tr><tr><td>80 kg, 35 mL/kg, 60 min exercise</td><td>3.50 L/day</td><td>14.8</td></tr></tbody></table><p>The examples illustrate the heuristic, not recommended targets for people of these weights.</p>`
    },
    {
      title: "Drinking Fluids Versus Total Water",
      body: `<p>Keep three different quantities separate: plain drinking water, fluids from all drinks, and total water including food. This result is a fluid-planning estimate; it is not the National Academies' total-water adequate intake. <a href="https://www.cdc.gov/healthy-weight-growth/water-healthy-drinks/index.html">CDC guidance</a> explains that water needs vary and that beverages and food both contribute.</p><p>If you are planning a walk or routine day, the unit conversions can help you understand drink sizes. For endurance exercise, pregnancy, breastfeeding, or a medical fluid limit, use advice specific to your circumstances instead of scaling this general estimate.</p>`
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
            <label for="input_gender">Formula Profile</label>
            <div class="input-wrapper">
                <select id="input_gender">
                    <option value="male">Male profile (35 mL/kg)</option>
                    <option value="female">Female profile (31 mL/kg)</option>
                </select>
            </div>
        </div>
        <div class="input-row">
            <div class="input-group">
                <label for="input_weight">Body Weight</label>
                <div class="input-wrapper"><input type="number" id="input_weight" placeholder="\${currentUnit === 'metric' ? 'e.g. 70' : 'e.g. 154'}" min="0.01" step="any" inputmode="decimal"><span class="unit-badge">\${unit}</span></div>
            </div>
            <div class="input-group">
                <label for="input_activity">Daily Exercise</label>
                <div class="input-wrapper"><input type="number" id="input_activity" value="0" min="0" max="1440" step="any" inputmode="decimal"><span class="unit-badge">min</span></div>
            </div>
        </div>\`;
}
function clearWaterResult() {
    document.getElementById('result-area').style.display = 'none';
    document.getElementById('share-copy-status').innerText = '';
}
function switchUnit(unit) {
    if (currentUnit === unit) return;
    const profile = document.getElementById('input_gender').value;
    const weight = parseFloat(document.getElementById('input_weight').value);
    const activity = document.getElementById('input_activity').value;
    const converted = unit === 'imperial' ? weight / 0.45359237 : weight * 0.45359237;
    currentUnit = unit;
    document.getElementById('tab-metric').classList.toggle('active', unit === 'metric');
    document.getElementById('tab-imperial').classList.toggle('active', unit === 'imperial');
    document.getElementById('tab-metric').setAttribute('aria-pressed', String(unit === 'metric'));
    document.getElementById('tab-imperial').setAttribute('aria-pressed', String(unit === 'imperial'));
    clearWaterResult();
    renderInputs();
    document.getElementById('input_gender').value = profile;
    document.getElementById('input_weight').value = Number.isFinite(converted) && converted > 0 ? converted.toFixed(2) : '';
    document.getElementById('input_activity').value = activity;
}
function calculateNow() {
    clearWaterResult();
    const gender = document.getElementById('input_gender').value;
    let weight = parseFloat(document.getElementById('input_weight').value);
    const activityValue = document.getElementById('input_activity').value;
    const activity = activityValue === '' ? 0 : Number(activityValue);
    if (!Number.isFinite(weight) || weight <= 0 || !Number.isFinite(activity) || activity < 0 || activity > 1440) {
        alert('Enter a positive body weight and exercise duration from 0 to 1,440 minutes.');
        return;
    }
    if (currentUnit === 'imperial') weight *= 0.45359237;
    const multiplier = gender === 'male' ? 0.035 : 0.031;
    const baseline = weight * multiplier;
    const exercise = (activity / 30) * 0.35;
    const litres = baseline + exercise;
    if (!Number.isFinite(litres)) {
        alert('Please check the entered body weight.');
        return;
    }
    document.getElementById('result-area').style.display = 'block';
    document.getElementById('calc-output').innerText = litres.toFixed(2);
    document.getElementById('water-cups').innerText = (litres / 0.2365882365).toFixed(1);
    document.getElementById('water-ounces').innerText = (litres / 0.0295735295625).toFixed(1);
    document.getElementById('water-baseline').innerText = baseline.toFixed(2) + ' L';
    document.getElementById('water-exercise').innerText = exercise.toFixed(2) + ' L';
    document.getElementById('calc-desc').innerText = 'Starting estimate: ' + litres.toFixed(2) + ' L/day, about ' + (litres / 0.2365882365).toFixed(1) + ' US cups or ' + (litres / 0.0295735295625).toFixed(1) + ' US fl oz. Based on the ' + (multiplier * 1000).toFixed(0) + ' mL/kg profile and ' + activity + ' exercise minutes. This is not a plain-water prescription.';
    document.getElementById('calc-suggestion').innerText = activity >= 120
        ? 'A fixed exercise allowance is not a sweat-loss measurement. For prolonged exercise, individualize fluids and electrolytes and avoid forcing plain water.'
        : 'Use thirst, conditions, other drinks, and medical advice as context. If you have a prescribed fluid limit, follow that instead of this estimate.';
    document.getElementById('result-area').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
renderInputs();
document.getElementById('inputs-container').addEventListener('input', clearWaterResult);
document.getElementById('inputs-container').addEventListener('change', clearWaterResult);`
};
