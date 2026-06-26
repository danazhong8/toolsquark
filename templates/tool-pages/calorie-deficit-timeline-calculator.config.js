module.exports = {
  slug: "calorie-deficit-timeline-calculator",
  title: "Calorie Deficit Timeline Calculator | Estimate Weight-Loss Time",
  description: "Estimate a calorie deficit timeline from target weight change and daily deficit. Conservative planning math with clear limitations.",
  h1: "Calorie Deficit Timeline Calculator",
  hero: "Estimate how long a planned calorie deficit might take, using transparent arithmetic and conservative warnings about real-world variability.",
  schemaName: "Privacy-First Calorie Deficit Timeline Calculator",
  schemaDescription: "A browser-side calorie deficit timeline calculator for educational weight-change planning.",
  lastUpdated: "June 26, 2026",
  buttonText: "Estimate Timeline",
  resultUnit: "weeks",
  resultStatus: "Estimated Timeline",
  gaugeLabels: ["Short", "Moderate", "Long"],
  insightTitle: "Planning Note",
  controlsHtml: `
        <div class="input-row">
            <div class="input-group">
                <label for="input_weight_change">Target Weight Change</label>
                <div class="input-wrapper">
                    <input type="number" id="input_weight_change" value="5" min="0.5" max="50" step="0.1">
                    <span class="unit-badge">kg</span>
                </div>
            </div>
            <div class="input-group">
                <label for="input_deficit">Planned Daily Deficit</label>
                <div class="input-wrapper">
                    <input type="number" id="input_deficit" value="500" min="100" max="1200" step="25">
                    <span class="unit-badge">kcal</span>
                </div>
            </div>
        </div>`,
  relatedTitle: "Build The Deficit Carefully",
  related: [
    { href: "https://toolsquark.com/tools/calorie-calculator.html", title: "Daily Calorie Goal Calculator", description: "Choose a transparent intake adjustment from maintenance.", action: "Plan Calories" },
    { href: "https://toolsquark.com/tools/tdee-calculator.html", title: "TDEE Calculator", description: "Estimate maintenance energy before setting a deficit.", action: "Estimate TDEE" }
  ],
  references: [
    { title: "Body Weight Planner", publisher: "National Institute of Diabetes and Digestive and Kidney Diseases", href: "https://www.niddk.nih.gov/bwp" }
  ],
  faq: [
    { question: "How long does a calorie deficit take to show weight loss?", answer: "This calculator estimates timeline from planned energy deficit, but water changes, adherence, metabolic adaptation, and measurement noise can obscure early progress." },
    { question: "Is 7,700 kcal per kg exact?", answer: "No. It is a simplified planning conversion. Real body-weight change is dynamic, so use this as a rough timeline rather than a promise." },
    { question: "Should I use a very large deficit?", answer: "Usually not without professional guidance. Larger deficits can be harder to sustain and may raise risks around hunger, performance, nutrition, and recovery." }
  ],
  contentSections: [
    {
      title: "What This Timeline Means",
      body: `<p>This tool estimates the time required for a planned calorie deficit to equal a target amount of body-weight energy. It does not predict exact scale weight on a specific date.</p>`
    },
    {
      title: "Simplified Formula",
      body: `<div class="formula-box">Estimated days = target kg x 7,700 / daily deficit<br>Estimated weeks = estimated days / 7</div><p>The 7,700 kcal per kg conversion is a simplified planning heuristic. It does not model changing energy expenditure or body composition.</p>`
    },
    {
      title: "Worked Example",
      body: `<p>A 5 kg target with a 500 kcal/day planned deficit gives 5 x 7,700 / 500 = 77 days, or about 11 weeks.</p>`
    },
    {
      title: "How To Use The Result",
      body: `<p>Use the output to check whether a goal is realistic. If the timeline seems too long, avoid simply pushing the deficit higher; revisit target size, maintenance estimate, activity, and adherence instead.</p>`
    }
  ],
  methodology: "This calculator uses the simplified 7,700 kcal per kg planning conversion and divides by the entered daily deficit.",
  disclaimer: "Weight change is dynamic and affected by water, glycogen, adherence, metabolic adaptation, body composition, medications, and health status. This tool is educational.",
  script: `
function calculateNow() {
    const kg = parseFloat(document.getElementById('input_weight_change').value);
    const deficit = parseFloat(document.getElementById('input_deficit').value);
    if (isNaN(kg) || isNaN(deficit) || kg <= 0 || deficit < 100 || deficit > 1200) {
        alert('Please enter a target weight change and a daily deficit between 100 and 1200 kcal.');
        return;
    }
    const days = (kg * 7700) / deficit;
    const weeks = days / 7;
    const result = {
        status: 'Simplified Timeline Estimate',
        color: 'var(--accent)',
        desc: kg.toFixed(1) + ' kg at a planned ' + deficit.toFixed(0) + ' kcal/day deficit equals about ' + Math.round(days) + ' days.',
        suggestion: 'Compare this with real trend data over several weeks. Adjust gradually rather than chasing a perfect date.',
        percent: Math.min(95, Math.max(5, weeks / 26 * 90))
    };
    document.getElementById('result-area').style.display = 'block';
    document.getElementById('calc-output').innerText = weeks.toFixed(weeks < 10 ? 1 : 0);
    document.getElementById('calc-output').style.color = result.color;
    document.getElementById('calc-status').innerText = result.status;
    document.getElementById('calc-status').style.color = result.color;
    document.getElementById('calc-desc').innerText = result.desc;
    document.getElementById('calc-suggestion').innerText = result.suggestion;
    document.getElementById('gauge-pointer').style.left = result.percent + '%';
    document.getElementById('result-area').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}`
};
