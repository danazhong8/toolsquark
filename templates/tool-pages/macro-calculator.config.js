module.exports = {
  slug: "macro-calculator",
  title: "Macro Calculator | Custom Protein, Fat & Carb Targets",
  description: "Convert a calorie target into customizable protein, fat, and carbohydrate grams using body weight, protein factor, and fat percentage.",
  h1: "Macro Calculator",
  hero: "Turn an existing calorie target into adjustable protein, fat, and carbohydrate grams without forcing one fixed macro split.",
  schemaName: "Privacy-First Custom Macro Calculator",
  schemaDescription: "A browser-side macro planner that calculates protein from body weight, fat from a selected calorie percentage, and carbohydrate from remaining calories.",
  lastUpdated: "June 22, 2026",
  buttonText: "Calculate Macro Targets",
  resultHtml: `
            <div class="result-val"><span id="calc-output">0</span> kcal</div>
            <div class="result-status" id="calc-status">Custom Macro Plan</div>
            <p class="result-desc" id="calc-desc"></p>
            <div class="macro-grid">
                <div class="macro-pill"><span>Protein</span><strong id="protein-output">0g</strong></div>
                <div class="macro-pill"><span>Fat</span><strong id="fat-output">0g</strong></div>
                <div class="macro-pill"><span>Carbs</span><strong id="carb-output">0g</strong></div>
            </div>
            <div class="suggestion-box"><h4>Adjustment Check</h4><p id="calc-suggestion"></p></div>`,
  controlsHtml: `
        <div class="unit-switcher">
            <div class="unit-tab active" id="tab-metric" onclick="switchUnit('metric')">Kilograms</div>
            <div class="unit-tab" id="tab-imperial" onclick="switchUnit('imperial')">Pounds</div>
        </div>
        <div class="input-row">
            <div class="input-group"><label for="input_calories">Daily Calorie Target</label><div class="input-wrapper"><input type="number" id="input_calories" value="2000" min="1000" max="8000" step="10"><span class="unit-badge">kcal</span></div></div>
            <div class="input-group"><label for="input_weight">Body Weight</label><div class="input-wrapper"><input type="number" id="input_weight" value="70" min="25" max="400" step="0.1"><span class="unit-badge" id="weight-unit">kg</span></div></div>
        </div>
        <div class="input-row">
            <div class="input-group"><label for="input_protein">Protein Factor</label><div class="input-wrapper"><select id="input_protein"><option value="0.8">0.8 g/kg - general baseline</option><option value="1.2">1.2 g/kg - active</option><option value="1.6" selected>1.6 g/kg - resistance training</option><option value="2.0">2.0 g/kg - higher target</option></select></div></div>
            <div class="input-group"><label for="input_fat">Calories From Fat</label><div class="input-wrapper"><select id="input_fat"><option value="0.20">20%</option><option value="0.25">25%</option><option value="0.30" selected>30%</option><option value="0.35">35%</option></select></div></div>
        </div>`,
  relatedTitle: "Set The Inputs First",
  related: [
    { href: "https://toolsquark.com/tools/calorie-calculator.html", title: "Daily Calorie Goal Calculator", description: "Estimate a calorie target before distributing it across macros.", action: "Plan Calories" },
    { href: "https://toolsquark.com/tools/protein-calculator.html", title: "Protein Calculator", description: "Compare protein factors and focus on a protein-only target.", action: "Set Protein" }
  ],
  references: [
    { title: "Dietary Reference Intakes for Energy and Macronutrients", publisher: "National Academies Press", href: "https://nap.nationalacademies.org/catalog/10490/dietary-reference-intakes-for-energy-carbohydrate-fiber-fat-fatty-acids-cholesterol-protein-and-amino-acids" },
    { title: "Position Stand: Protein and Exercise", publisher: "Journal of the ISSN / PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/28642676/" }
  ],
  faq: [
    { question: "How does this macro calculator work?", answer: "It calculates protein grams from body weight and the selected factor, assigns the selected share of calories to fat, then gives the remaining calories to carbohydrate." },
    { question: "Why does it ask for a calorie target?", answer: "Calorie planning and macro distribution are separate decisions. Accepting an existing target avoids repeating the TDEE calculator and makes the macro assumptions easier to inspect." },
    { question: "Is one macro split best for everyone?", answer: "No. Suitable ranges vary with training, food preference, health context, digestion, and adherence. This tool exposes adjustable inputs rather than claiming one optimum split." },
    { question: "What protein factor should I choose?", answer: "The 0.8 g/kg option reflects a general adult baseline, while higher options may fit active or resistance-training contexts. Medical conditions and therapeutic diets require individualized guidance." },
    { question: "Why are carbohydrates calculated last?", answer: "After protein and fat calories are assigned, carbohydrate fills the remaining calorie budget. This keeps the displayed macros mathematically aligned with the selected total." }
  ],
  contentSections: [
    {
      title: "A Flexible Macro Starting Point",
      body: `<p>One fixed macro percentage cannot reflect different body sizes, training demands, and food preferences. This planner starts with a calorie target chosen elsewhere, makes protein and fat assumptions visible, and calculates carbohydrate as the remainder.</p>`
    },
    {
      title: "Calculation Method",
      body: `<div class="formula-box">Protein grams = weight (kg) x selected g/kg factor<br>Fat grams = target calories x selected fat percentage / 9<br>Carbohydrate grams = remaining calories / 4</div><p>Protein and carbohydrate use 4 kcal per gram. Fat uses 9 kcal per gram. Rounding can create a small difference from the entered calorie total.</p>`
    },
    {
      title: "Worked Example",
      body: `<p>At 70 kg, 2,000 kcal, 1.6 g/kg protein, and 30% fat, the plan assigns 112 g protein and about 67 g fat. The remaining energy provides about 237 g carbohydrate after rounding.</p>`
    },
    {
      title: "How To Adjust The Result",
      body: `<p>Keep the calorie target stable while testing one macro change at a time. Evaluate hunger, digestion, training performance, food quality, and adherence over multiple weeks rather than treating exact daily matching as the goal.</p>`
    },
    {
      title: "Limits And Safety",
      body: `<p>This is not medical nutrition therapy. Pregnancy, breastfeeding, diabetes, kidney disease, eating-disorder history, pediatric growth, allergies, and therapeutic diets require individualized professional guidance.</p><div class="note-box">The calculator checks only whether the selected protein and fat leave calories available for carbohydrate. It cannot establish that the calorie target itself is suitable.</div>`
    }
  ],
  methodology: "Protein is calculated from body weight and a selected g/kg factor. Fat is calculated from a selected percentage of total calories. Carbohydrate receives the remaining calories using 4/9/4 kcal-per-gram factors.",
  disclaimer: "Macro targets are educational planning estimates and not medical nutrition therapy.",
  script: `
let currentUnit = 'metric';
function switchUnit(unit) {
    if (currentUnit === unit) return;
    const input = document.getElementById('input_weight');
    const value = parseFloat(input.value);
    if (!isNaN(value)) input.value = unit === 'imperial' ? (value * 2.20462).toFixed(1) : (value / 2.20462).toFixed(1);
    currentUnit = unit;
    document.getElementById('tab-metric').classList.toggle('active', unit === 'metric');
    document.getElementById('tab-imperial').classList.toggle('active', unit === 'imperial');
    document.getElementById('weight-unit').innerText = unit === 'metric' ? 'kg' : 'lb';
    document.getElementById('result-area').style.display = 'none';
}
function calculateNow() {
    const calories = parseFloat(document.getElementById('input_calories').value);
    const enteredWeight = parseFloat(document.getElementById('input_weight').value);
    const proteinFactor = parseFloat(document.getElementById('input_protein').value);
    const fatShare = parseFloat(document.getElementById('input_fat').value);
    if (isNaN(calories) || calories < 1000 || calories > 8000 || isNaN(enteredWeight) || enteredWeight <= 0) {
        alert('Please enter a calorie target from 1,000 to 8,000 kcal and a valid body weight.');
        return;
    }
    const weightKg = currentUnit === 'metric' ? enteredWeight : enteredWeight * 0.45359237;
    const protein = Math.round(weightKg * proteinFactor);
    const fat = Math.round((calories * fatShare) / 9);
    const remaining = calories - (protein * 4) - (fat * 9);
    if (remaining < 0) {
        alert('The selected protein and fat targets exceed the calorie target. Increase calories or lower one factor.');
        return;
    }
    const carbs = Math.round(remaining / 4);
    const reconstructed = (protein * 4) + (fat * 9) + (carbs * 4);
    document.getElementById('result-area').style.display = 'block';
    document.getElementById('calc-output').innerText = Math.round(calories).toLocaleString();
    document.getElementById('calc-status').innerText = 'Custom Macro Plan';
    document.getElementById('calc-desc').innerText = protein + ' g protein at ' + proteinFactor + ' g/kg, ' + fat + ' g fat at ' + Math.round(fatShare * 100) + '% of calories, and carbohydrate from the remaining energy.';
    document.getElementById('protein-output').innerText = protein + 'g';
    document.getElementById('fat-output').innerText = fat + 'g';
    document.getElementById('carb-output').innerText = carbs + 'g';
    document.getElementById('calc-suggestion').innerText = 'Rounded macros reconstruct approximately ' + reconstructed.toLocaleString() + ' kcal. Treat the plan as a starting point and adjust one variable at a time.';
    document.getElementById('result-area').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}`
};
