module.exports = {
  categoryHref: "health.html",
  categoryLabel: "Health Tools",
  slug: "maintenance-calorie-calibration-calculator",
  title: "Maintenance Calorie Calibration Calculator | Adjust TDEE From Trend",
  description: "Calibrate estimated maintenance calories from average intake and body-weight trend over 2 to 4 weeks.",
  h1: "Maintenance Calorie Calibration Calculator",
  hero: "Compare estimated TDEE with recent intake and weight trend to see whether your maintenance estimate may need adjustment.",
  schemaName: "Maintenance Calorie Calibration Calculator",
  schemaDescription: "A browser-side calculator that adjusts maintenance calorie estimates from recent average intake and body-weight trend.",
  lastUpdated: "June 28, 2026",
  buttonText: "Calibrate Maintenance",
  resultHtml: `
            <div class="result-val"><span id="calc-output">0</span><span class="result-unit">kcal/day</span></div>
            <div class="result-status" id="calc-status">Estimated Maintenance</div>
            <p class="result-desc" id="calc-desc"></p>
            <div class="suggestion-box"><h4>Calibration Note</h4><p id="calc-suggestion"></p></div>`,
  controlsHtml: `
        <div class="input-row">
            <div class="input-group"><label for="input_tdee">Current TDEE Estimate</label><div class="input-wrapper"><input type="number" id="input_tdee" value="2400" min="800" max="6000" step="10"><span class="unit-badge">kcal</span></div></div>
            <div class="input-group"><label for="input_intake">Average Daily Intake</label><div class="input-wrapper"><input type="number" id="input_intake" value="2200" min="800" max="6000" step="10"><span class="unit-badge">kcal</span></div></div>
        </div>
        <div class="input-row">
            <div class="input-group"><label for="input_change">Weight Change Over Period</label><div class="input-wrapper"><input type="number" id="input_change" value="-1" min="-20" max="20" step="0.1"><span class="unit-badge">lb</span></div></div>
            <div class="input-group"><label for="input_days">Review Period</label><div class="input-wrapper"><input type="number" id="input_days" value="21" min="14" max="42" step="1"><span class="unit-badge">days</span></div></div>
        </div>`,
  relatedTitle: "Plan Calories",
  related: [
    { href: "https://toolsquark.com/tools/tdee-calculator.html", title: "TDEE Calculator", description: "Estimate maintenance calories from body size and activity.", action: "Estimate TDEE" },
    { href: "https://toolsquark.com/tools/calorie-calculator.html", title: "Daily Calorie Goal Calculator", description: "Apply a visible deficit or surplus after estimating maintenance.", action: "Set Goal" }
  ],
  references: [
    { title: "Body Weight Planner", publisher: "National Institute of Diabetes and Digestive and Kidney Diseases", href: "https://www.niddk.nih.gov/bwp" },
    { title: "A New Predictive Equation for Resting Energy Expenditure", publisher: "The American Journal of Clinical Nutrition / PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/2305711/" }
  ],
  faq: [
    { question: "How does this calibrate maintenance calories?", answer: "It estimates the daily energy gap implied by your weight trend, then adds that gap back to your average intake." },
    { question: "Why use 2 to 4 weeks?", answer: "Shorter windows can be dominated by water, sodium, digestion, and measurement noise. A multi-week trend is still imperfect but more useful." },
    { question: "Is 3,500 calories per pound exact?", answer: "No. It is a simplified planning approximation. Real weight change includes water, glycogen, lean mass, adherence error, and metabolic adaptation." }
  ],
  contentSections: [
    { title: "What This Calculator Does", body: `<p>This tool compares your estimated TDEE with what your recent intake and weight trend imply. It is intended for calibration after you have at least 2 weeks of reasonably consistent tracking.</p>` },
    { title: "Formula Used", body: `<div class="formula-box">Trend gap = weight change x 3500 / days<br>Estimated maintenance = average intake + trend gap</div><p>A negative weight change means your intake was likely below maintenance; a positive change means it was likely above maintenance.</p>` },
    { title: "How To Use The Result", body: `<p>Do not chase the number daily. Use it to decide whether your original TDEE estimate is close enough or whether a small adjustment is warranted for the next 2-week block.</p>` },
    { title: "Important Limits", body: `<p>Scale weight is noisy. Menstrual cycle changes, sodium, carbohydrate intake, digestion, training soreness, medication, illness, and inconsistent tracking can all distort the estimate.</p>` }
  ],
  methodology: "This calculator uses a simplified 3,500 kcal per pound trend approximation to infer maintenance calories from average intake and weight change over the selected number of days.",
  disclaimer: "This is an educational estimate, not medical or nutrition advice. It is not appropriate for pregnancy, eating-disorder history, growth, or medical nutrition therapy.",
  script: `
function calculateNow(){
  const tdee=Number(document.getElementById('input_tdee').value);
  const intake=Number(document.getElementById('input_intake').value);
  const change=Number(document.getElementById('input_change').value);
  const days=Number(document.getElementById('input_days').value);
  if(!Number.isFinite(tdee)||!Number.isFinite(intake)||!Number.isFinite(change)||!Number.isFinite(days)||days<14||days>42||intake<800||tdee<800){alert('Please enter realistic intake, TDEE, weight change, and a 14-42 day period.');return;}
  const dailyGap=change*3500/days;
  const calibrated=Math.round(intake+dailyGap);
  const difference=Math.round(calibrated-tdee);
  let status='Estimate Looks Close';
  let suggestion='The calibrated estimate is within about 100 kcal/day of your current TDEE estimate. Keep watching a longer trend.';
  if(Math.abs(difference)>100&&Math.abs(difference)<=250){status='Small Adjustment Suggested';suggestion='Consider adjusting the planning estimate by 100-200 kcal/day and reviewing another 2-week trend.';}
  if(Math.abs(difference)>250){status='Large Difference To Review';suggestion='Check tracking consistency, weigh-in noise, activity changes, and the review period before making a large change.';}
  document.getElementById('result-area').style.display='block';
  document.getElementById('calc-output').innerText=calibrated;
  document.getElementById('calc-status').innerText=status;
  document.getElementById('calc-desc').innerText='Your trend implies maintenance near '+calibrated+' kcal/day, which is '+Math.abs(difference)+' kcal/day '+(difference>=0?'above':'below')+' your current estimate.';
  document.getElementById('calc-suggestion').innerText=suggestion;
  document.getElementById('result-area').scrollIntoView({behavior:'smooth',block:'nearest'});
}`
};
