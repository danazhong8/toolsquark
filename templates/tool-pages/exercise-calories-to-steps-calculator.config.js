module.exports = {
  categoryHref: "lifestyle.html",
  categoryLabel: "Lifestyle Tools",
  slug: "exercise-calories-to-steps-calculator",
  title: "Exercise Calories To Steps Calculator | Walking Equivalent",
  description: "Convert an exercise calorie estimate into a rough walking step equivalent using body weight and the same disclosed walking assumption as the steps converter.",
  h1: "Exercise Calories To Steps Calculator",
  hero: "Convert a calorie-burn estimate into a rough walking step equivalent so you can compare activity days with the same transparent assumption.",
  heroHighlights: ["Calories to steps", "Body-weight adjusted", "Walking equivalent only"],
  schemaName: "Privacy-First Exercise Calories To Steps Calculator",
  schemaDescription: "A browser-side calculator that converts estimated exercise calories into a rough walking step equivalent.",
  lastUpdated: "July 13, 2026",
  buttonText: "Convert Calories To Steps",
  resultUnit: "steps",
  resultStatus: "Walking Step Equivalent",
  gaugeLabels: ["Light", "Moderate", "High"],
  insightTitle: "Equivalent Planning Note",
  shareResult: true,
  dynamicNextSteps: true,
  controlsHtml: `
        <div class="input-row">
            <div class="input-group">
                <label for="input_calories">Exercise Calories</label>
                <div class="input-wrapper"><input type="number" id="input_calories" value="250" min="1" max="3000" step="1"><span class="unit-badge">kcal</span></div>
            </div>
            <div class="input-group">
                <label for="input_weight">Body Weight</label>
                <div class="input-wrapper"><input type="number" id="input_weight" value="70" min="20" max="250" step="0.1"><span class="unit-badge">kg</span></div>
            </div>
        </div>`,
  relatedTitle: "Compare Activity Estimates",
  related: [
    { href: "https://toolsquark.com/tools/steps-to-calories-converter.html", title: "Steps To Calories Converter", description: "Convert in the other direction using the same simplified assumption.", action: "Estimate Burn" },
    { href: "https://toolsquark.com/tools/walking-distance-to-steps-calculator.html", title: "Walking Distance To Steps", description: "Estimate the route distance implied by a step target.", action: "Convert Distance" },
    { href: "https://toolsquark.com/tools/daily-steps-goal-calculator.html", title: "Daily Steps Goal Calculator", description: "Turn the equivalent into a sustainable movement target.", action: "Plan Steps" }
  ],
  references: [
    { title: "2011 Compendium of Physical Activities", publisher: "Medicine & Science in Sports & Exercise / PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/21681120/" },
    { title: "Physical Activity Guidelines for Adults", publisher: "Centers for Disease Control and Prevention", href: "https://www.cdc.gov/physical-activity-basics/guidelines/adults.html" }
  ],
  faq: [
    { question: "How do I convert calories to steps?", answer: "This tool divides calories by a simplified per-step walking estimate based on body weight. It gives a walking equivalent, not an exact replacement for another exercise." },
    { question: "Why does body weight matter?", answer: "A heavier body generally uses more energy per walking step, so the same calorie estimate converts to fewer equivalent steps." },
    { question: "Can this compare running, cycling, and walking perfectly?", answer: "No. Different activities use different muscles and intensities. Use the result only as a rough walking-equivalent planning number." }
  ],
  contentSections: [
    { title: "What The Result Means", body: `<p>The result is the number of walking steps that would produce a similar simplified calorie estimate. It is not a claim that different activities are physiologically identical.</p>` },
    { title: "Formula Used", body: `<div class="formula-box">Equivalent steps = exercise calories / (body weight in kg x 0.00057)</div><p>This mirrors the simplified assumption used by the Steps To Calories Converter, which keeps both directions internally consistent.</p>` },
    { title: "Worked Example", body: `<p>For 250 kcal at 70 kg, each step is estimated as 70 x 0.00057 = 0.0399 kcal. The equivalent is 250 / 0.0399 = about 6,266 steps.</p>` },
    { title: "Appropriate Use", body: `<p>Use this for broad comparison between activity estimates. Do not use it to earn back food or claim precise energy expenditure.</p>` }
  ],
  methodology: "Equivalent steps are calculated by dividing entered calories by body weight in kg multiplied by 0.00057 kcal per step.",
  disclaimer: "This is a simplified walking-equivalent estimate. Actual energy expenditure varies by intensity, terrain, fitness, movement efficiency, and device method.",
  script: `
function calculateNow() {
    const calories = parseFloat(document.getElementById('input_calories').value);
    const weight = parseFloat(document.getElementById('input_weight').value);
    if (isNaN(calories) || isNaN(weight) || calories <= 0 || weight <= 0) {
        alert('Please enter valid positive calories and body weight.');
        return;
    }
    const steps = Math.round(calories / (weight * 0.00057));
    const percent = Math.min(95, Math.max(5, steps / 12000 * 90));
    document.getElementById('result-area').style.display = 'block';
    document.getElementById('calc-output').innerText = steps.toLocaleString();
    document.getElementById('calc-output').style.color = 'var(--accent)';
    document.getElementById('calc-status').innerText = 'Simplified Walking Equivalent';
    document.getElementById('calc-status').style.color = 'var(--accent)';
    document.getElementById('calc-desc').innerText = calories.toLocaleString() + ' kcal is roughly equivalent to ' + steps.toLocaleString() + ' walking steps using the selected body weight.';
    document.getElementById('calc-suggestion').innerText = 'Use this as a comparison number only. Different activities and devices can produce very different energy estimates.';
    document.getElementById('gauge-pointer').style.left = percent + '%';
    setNextStepRecommendations([
        { label: 'Steps To Calories Converter', href: 'https://toolsquark.com/tools/steps-to-calories-converter.html', reason: 'Convert steps back into estimated walking calories with the same assumption.', action: 'Open Converter' },
        { label: 'Daily Steps Goal Calculator', href: 'https://toolsquark.com/tools/daily-steps-goal-calculator.html', reason: 'Turn equivalent steps into a practical movement plan.', action: 'Plan Steps' }
    ]);
    document.getElementById('result-area').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}`
};
