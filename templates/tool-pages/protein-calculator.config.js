module.exports = {
  slug: "protein-calculator",
  title: "Protein Calculator | Daily Grams by Body Weight",
  description: "Estimate daily protein grams from body weight and a selected 0.8-2.2 g/kg planning factor. Includes range guidance, examples, limits, and sources.",
  h1: "Protein Calculator",
  hero: "Estimate your daily protein target for maintenance, fat loss, or muscle-supportive training. The calculation runs locally in your browser.",
  schemaName: "Privacy-First Protein Calculator",
  schemaDescription: "A client-side protein intake calculator that estimates daily protein targets from body weight and activity level without data logging.",
  lastUpdated: "June 20, 2026",
  buttonText: "Calculate Protein Target",
  resultStatus: "Standard Target",
  gaugeLabels: ["0.8g/kg", "1.4g/kg", "2.2g/kg"],
  insightTitle: "Actionable Nutrition Insight",
  controlsHtml: `
        <div class="unit-switcher">
            <div class="unit-tab active" id="tab-metric" onclick="switchUnit('metric')">Metric Units (kg)</div>
            <div class="unit-tab" id="tab-imperial" onclick="switchUnit('imperial')">Imperial Units (lbs)</div>
        </div>
        <div id="inputs-container"></div>`,
  relatedTitle: "Build A Fuller Nutrition Plan",
  related: [
    {
      href: "https://toolsquark.com/tools/macro-calculator.html",
      title: "Macro Calculator",
      description: "Split your daily calories into protein, fat, and carbohydrate targets.",
      action: "Calculate Macros"
    },
    {
      href: "https://toolsquark.com/tools/calorie-calculator.html",
      title: "Calorie Calculator",
      description: "Estimate your maintenance calories before setting a protein target.",
      action: "Check Calories"
    }
  ],
  references: [
    { title: "Dietary Reference Intakes for Energy and Macronutrients", publisher: "National Academies Press", href: "https://nap.nationalacademies.org/catalog/10490/dietary-reference-intakes-for-energy-carbohydrate-fiber-fat-fatty-acids-cholesterol-protein-and-amino-acids" },
    { title: "Position Stand: Protein and Exercise", publisher: "Journal of the ISSN / PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/28642676/" }
  ],
  faq: [
    {
      question: "How much protein does an average adult need?",
      answer: "The Recommended Dietary Allowance is about 0.8 grams per kilogram of body weight for sedentary adults. Active people and strength trainees often use higher targets, commonly around 1.4 to 2.2 grams per kilogram."
    },
    {
      question: "Can high protein intake harm healthy kidneys?",
      answer: "For people with healthy kidneys, higher protein intake is generally considered safe within reasonable dietary ranges. People with kidney disease or medical restrictions should follow clinician guidance."
    },
    {
      question: "Should protein be eaten all at once?",
      answer: "Most people do better distributing protein across several meals. This can improve meal quality and support muscle protein synthesis throughout the day."
    }
  ],
  contentSections: [
    {
      title: "What The Number Means",
      body: `<p>This tool multiplies body weight by a selected grams-per-kilogram factor. The result is a planning target for total daily protein, not a diagnosis of deficiency and not a guarantee of better training results.</p><p>The 0.8 g/kg option reflects the adult RDA framework for generally healthy adults. Higher selectable factors are exercise-oriented planning values and should be interpreted with total calories, training, age, and health.</p>`
    },
    {
      title: "Formula And Options",
      body: `<div class="formula-box">Daily protein (g) = body weight (kg) x selected factor (g/kg)</div><ul><li><strong>0.8 g/kg:</strong> baseline adult RDA option.</li><li><strong>1.0 g/kg:</strong> modest planning increase.</li><li><strong>1.4 g/kg:</strong> regular training option.</li><li><strong>1.8 g/kg:</strong> higher resistance-training option.</li><li><strong>2.2 g/kg:</strong> high-intake planning option, not a universal requirement.</li></ul>`
    },
    {
      title: "Worked Example",
      body: `<p>A 70 kg person selecting 1.4 g/kg receives 70 x 1.4 = 98 g protein per day. At four meals, an even distribution would average about 24 to 25 g per meal, although equal portions are not required.</p>`
    },
    {
      title: "Choosing And Using A Target",
      body: `<p>Start with the lowest factor that reasonably matches your situation, then consider training volume, calorie intake, appetite, food access, and preference. A higher number is not automatically better.</p><p>Build the total from varied foods and distribute it across meals in a sustainable way. The calculation covers quantity only; it does not assess amino-acid quality, overall diet quality, or energy adequacy.</p>`
    },
    {
      title: "Who Needs Individual Guidance",
      body: `<p>People with kidney disease, liver disease, metabolic disorders, pregnancy, breastfeeding, pediatric needs, frailty, major illness, or a prescribed diet should not choose a high protein target from this tool alone. Older adults and athletes may also benefit from individualized advice when goals are complex.</p>`
    }
  ],
  methodology: "This calculator converts pounds to kilograms when needed, multiplies body weight by the explicitly selected 0.8-2.2 g/kg planning factor, and rounds the result to the nearest gram.",
  disclaimer: "These results are educational estimates and not medical advice. Consult a qualified clinician or registered dietitian for personal nutrition guidance.",
  script: `
let currentUnit='metric';
function renderInputs(){
 const container=document.getElementById('inputs-container');
 const activity=\`<div class="input-group"><label for="input_activity">Protein Planning Factor</label><div class="input-wrapper"><select id="input_activity"><option value="0.8">Adult RDA baseline (0.8g/kg)</option><option value="1.0">Modest increase (1.0g/kg)</option><option value="1.4">Regular training (1.4g/kg)</option><option value="1.8">Higher training intake (1.8g/kg)</option><option value="2.2">High-intake planning (2.2g/kg)</option></select></div></div>\`;
 if(currentUnit==='metric'){container.innerHTML=\`<div class="input-group"><label for="input_weight">Your Body Weight</label><div class="input-wrapper"><input type="number" id="input_weight" placeholder="e.g. 70" step="any"><span class="unit-badge">kg</span></div></div>\`+activity;}else{container.innerHTML=\`<div class="input-group"><label for="input_weight">Your Body Weight</label><div class="input-wrapper"><input type="number" id="input_weight" placeholder="e.g. 154" step="any"><span class="unit-badge">lbs</span></div></div>\`+activity;}
}
function switchUnit(unit){if(currentUnit===unit)return;currentUnit=unit;document.getElementById('tab-metric').classList.toggle('active',unit==='metric');document.getElementById('tab-imperial').classList.toggle('active',unit==='imperial');document.getElementById('result-area').style.display='none';renderInputs();}
function calculateNow(){
 const weightInput=parseFloat(document.getElementById('input_weight').value);const multiplier=parseFloat(document.getElementById('input_activity').value);
 if(isNaN(weightInput)||weightInput<=0){alert('Please input a valid body weight.');return;}
 const weightKg=currentUnit==='metric'?weightInput:weightInput*0.45359237;const grams=Math.round(weightKg*multiplier);
 let status='',color='',desc='',suggestion='',percent=0;
 if(multiplier<=0.8){status='Baseline RDA';color='var(--underweight)';desc=\`Your estimated target is \${grams}g of protein per day, based on the basic adult RDA range.\`;suggestion='This level is mainly a minimum adequacy target. Active adults often benefit from a higher range.';percent=15;}else if(multiplier<=1.2){status='Active Maintenance';color='var(--normal)';desc=\`Your estimated target is \${grams}g of protein per day for light activity and lean mass maintenance.\`;suggestion='Aim to distribute protein across meals and pair it with whole-food carbohydrate and fat sources.';percent=35;}else if(multiplier<=1.6){status='Muscle Recovery';color='var(--overweight)';desc=\`Your estimated target is \${grams}g per day, suitable for regular training and recovery support.\`;suggestion='This range pairs well with consistent resistance training, sleep, and sufficient total calories.';percent=65;}else{status='High Training Target';color='var(--obese)';desc=\`Your estimated target is \${grams}g per day for intense training or a muscle-building phase.\`;suggestion='High protein targets require planning. Keep meals balanced and consider professional guidance if you have kidney disease or other medical concerns.';percent=90;}
 document.getElementById('result-area').style.display='block';document.getElementById('calc-output').innerText=grams+'g';document.getElementById('calc-output').style.color=color;document.getElementById('calc-status').innerText=status;document.getElementById('calc-status').style.color=color;document.getElementById('calc-desc').innerText=desc;document.getElementById('calc-suggestion').innerText=suggestion;document.getElementById('gauge-pointer').style.left=percent+'%';document.getElementById('result-area').scrollIntoView({behavior:'smooth',block:'nearest'});
}
renderInputs();`
};
