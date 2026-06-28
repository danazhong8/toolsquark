module.exports = {
  categoryHref: "health.html",
  categoryLabel: "Health Tools",
  slug: "weight-trend-smoothing-calculator",
  title: "Weight Trend Smoothing Calculator | 7-Day Average Weight",
  description: "Calculate a simple 7-day average weight and compare it with last week's average to reduce daily scale noise.",
  h1: "Weight Trend Smoothing Calculator",
  hero: "Smooth daily scale noise by comparing this week's average weight with last week's average.",
  schemaName: "Weight Trend Smoothing Calculator",
  schemaDescription: "A browser-side calculator for comparing two weekly average body-weight values.",
  lastUpdated: "June 28, 2026",
  buttonText: "Calculate Trend",
  resultHtml: `
            <div class="result-val"><span id="calc-output">0</span><span class="result-unit">lb/week</span></div>
            <div class="result-status" id="calc-status">Weekly Trend</div>
            <p class="result-desc" id="calc-desc"></p>
            <div class="suggestion-box"><h4>Trend Reading</h4><p id="calc-suggestion"></p></div>`,
  controlsHtml: `
        <div class="input-row">
            <div class="input-group"><label for="last_avg">Last Week Average</label><div class="input-wrapper"><input type="number" id="last_avg" value="180.5" min="40" max="700" step="0.1"><span class="unit-badge">lb</span></div></div>
            <div class="input-group"><label for="this_avg">This Week Average</label><div class="input-wrapper"><input type="number" id="this_avg" value="179.8" min="40" max="700" step="0.1"><span class="unit-badge">lb</span></div></div>
        </div>`,
  relatedTitle: "Use The Trend",
  related: [
    { href: "https://toolsquark.com/tools/maintenance-calorie-calibration-calculator.html", title: "Maintenance Calorie Calibration", description: "Use a multi-week trend to calibrate maintenance calories.", action: "Calibrate" },
    { href: "https://toolsquark.com/tools/calorie-calculator.html", title: "Daily Calorie Goal Calculator", description: "Set a visible calorie target after estimating maintenance.", action: "Plan Calories" }
  ],
  references: [
    { title: "Body Weight Planner", publisher: "National Institute of Diabetes and Digestive and Kidney Diseases", href: "https://www.niddk.nih.gov/bwp" }
  ],
  faq: [
    { question: "Why use weekly averages?", answer: "Daily weight can move because of water, sodium, carbohydrate intake, digestion, soreness, and timing. Weekly averages reduce some of that noise." },
    { question: "Is one week enough to decide if a plan works?", answer: "Usually no. One week can be noisy. Use this as a quick check and compare multiple weeks before making major changes." },
    { question: "Can this calculate body fat change?", answer: "No. It only compares scale-weight averages. It cannot separate fat, lean mass, water, or digestive contents." }
  ],
  contentSections: [
    { title: "What This Calculator Measures", body: `<p>This calculator compares two weekly average weights. It is meant to reduce the emotional noise of single weigh-ins and make the direction easier to see.</p>` },
    { title: "Formula Used", body: `<div class="formula-box">Weekly trend = this week's average - last week's average</div><p>A negative result indicates a lower weekly average; a positive result indicates a higher weekly average.</p>` },
    { title: "How To Use The Result", body: `<p>Small changes can be ordinary noise. Look for repeated direction across several weeks before changing calories, training, or expectations.</p>` }
  ],
  methodology: "This tool subtracts last week's average weight from this week's average weight and maps the difference to simple editorial trend bands.",
  disclaimer: "Weight trends are educational planning signals and do not diagnose health status or body composition.",
  script: `
function calculateNow(){
  const last=Number(document.getElementById('last_avg').value);
  const current=Number(document.getElementById('this_avg').value);
  if(!Number.isFinite(last)||!Number.isFinite(current)||last<40||current<40){alert('Please enter valid weekly average weights.');return;}
  const diff=current-last;
  let status='Mostly Stable';
  let suggestion='This weekly change is small enough that normal scale noise may explain part of it. Watch another week.';
  if(diff<=-0.5){status='Average Trending Down';suggestion='The weekly average moved down. Compare with energy, hunger, training, and adherence before changing the plan.';}
  if(diff>=0.5){status='Average Trending Up';suggestion='The weekly average moved up. Review the multi-week pattern before assuming fat gain.';}
  document.getElementById('result-area').style.display='block';
  document.getElementById('calc-output').innerText=diff.toFixed(1);
  document.getElementById('calc-status').innerText=status;
  document.getElementById('calc-desc').innerText='Last week average: '+last.toFixed(1)+' lb. This week average: '+current.toFixed(1)+' lb. Difference: '+diff.toFixed(1)+' lb.';
  document.getElementById('calc-suggestion').innerText=suggestion;
  document.getElementById('result-area').scrollIntoView({behavior:'smooth',block:'nearest'});
}`
};
