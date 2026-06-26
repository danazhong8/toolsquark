module.exports = {
  slug: "protein-per-meal-calculator",
  title: "Protein Per Meal Calculator | Split Daily Protein Across Meals",
  description: "Calculate protein per meal from your daily protein target and meal count. Split grams across breakfast, lunch, dinner, and snacks.",
  h1: "Protein Per Meal Calculator",
  hero: "Split a daily protein target into practical per-meal amounts so the number is easier to use in real meals.",
  schemaName: "Privacy-First Protein Per Meal Calculator",
  schemaDescription: "A browser-side calculator for dividing daily protein grams across meals and snacks.",
  lastUpdated: "June 26, 2026",
  buttonText: "Split Protein",
  resultUnit: "g/meal",
  resultStatus: "Protein Per Meal",
  gaugeLabels: ["Light", "Moderate", "High"],
  insightTitle: "Meal Planning Note",
  controlsHtml: `
        <div class="input-row">
            <div class="input-group">
                <label for="input_daily_protein">Daily Protein Target</label>
                <div class="input-wrapper">
                    <input type="number" id="input_daily_protein" value="120" min="20" max="400" step="1">
                    <span class="unit-badge">g/day</span>
                </div>
            </div>
            <div class="input-group">
                <label for="input_meals">Meals Or Protein Feedings</label>
                <div class="input-wrapper">
                    <select id="input_meals">
                        <option value="2">2 meals</option>
                        <option value="3" selected>3 meals</option>
                        <option value="4">4 meals</option>
                        <option value="5">5 meals</option>
                    </select>
                </div>
            </div>
        </div>`,
  relatedTitle: "Set The Target First",
  related: [
    { href: "https://toolsquark.com/tools/protein-calculator.html", title: "Protein Calculator", description: "Estimate a daily protein target from body weight and planning factor.", action: "Set Target" },
    { href: "https://toolsquark.com/tools/macro-calculator.html", title: "Macro Calculator", description: "Split calories into protein, fat, and carbohydrate grams.", action: "Split Macros" }
  ],
  references: [
    { title: "Dietary Guidelines for Americans", publisher: "U.S. Department of Agriculture", href: "https://www.dietaryguidelines.gov/" }
  ],
  faq: [
    { question: "How much protein should I eat per meal?", answer: "This depends on your daily target and number of meals. If your daily target is 120 g and you eat 3 protein-focused meals, the even split is 40 g per meal." },
    { question: "Do I need an even protein split?", answer: "No. An even split is easy to plan, but appetite, training time, food preferences, and digestion may make an uneven split more practical." },
    { question: "Should I use this before setting daily protein?", answer: "Set a realistic daily protein target first, then use this calculator to distribute that target across meals." }
  ],
  contentSections: [
    {
      title: "What This Calculator Does",
      body: `<p>This calculator divides a daily protein target by the number of meals or protein-focused feedings you plan to use. It answers a practical question: how many grams should each meal roughly contain?</p>`
    },
    {
      title: "Formula Used",
      body: `<div class="formula-box">Protein per meal = daily protein target / number of meals</div><p>The result is an even split. You can treat it as an anchor and shift grams between meals when that fits your schedule better.</p>`
    },
    {
      title: "Worked Example",
      body: `<p>A 120 g daily target across 3 meals gives 40 g per meal. Across 4 meals, the same daily target gives 30 g per meal.</p>`
    },
    {
      title: "How To Use It",
      body: `<p>Use the number to build simple meal templates. For example, if your target is 35-40 g per meal, choose protein portions that consistently land near that range instead of tracking every gram forever.</p>`
    }
  ],
  methodology: "This tool divides daily protein grams by the selected number of meals or protein feedings and rounds to the nearest gram.",
  disclaimer: "Protein needs vary with body size, training, age, medical conditions, kidney disease, pregnancy, and dietary pattern. This tool is educational planning support.",
  script: `
function calculateNow() {
    const daily = parseFloat(document.getElementById('input_daily_protein').value);
    const meals = parseInt(document.getElementById('input_meals').value, 10);
    if (isNaN(daily) || daily < 20 || daily > 400 || isNaN(meals)) {
        alert('Please enter a daily protein target between 20 and 400 grams.');
        return;
    }
    const perMeal = daily / meals;
    const result = {
        status: meals + '-Meal Protein Split',
        color: 'var(--accent)',
        desc: daily.toFixed(0) + ' g/day divided across ' + meals + ' meals gives about ' + perMeal.toFixed(0) + ' g per meal.',
        suggestion: 'Use this as an anchor. It is fine to shift protein toward the meals where appetite and food choices make it easiest.',
        percent: Math.min(95, Math.max(5, perMeal / 60 * 90))
    };
    document.getElementById('result-area').style.display = 'block';
    document.getElementById('calc-output').innerText = perMeal.toFixed(0);
    document.getElementById('calc-output').style.color = result.color;
    document.getElementById('calc-status').innerText = result.status;
    document.getElementById('calc-status').style.color = result.color;
    document.getElementById('calc-desc').innerText = result.desc;
    document.getElementById('calc-suggestion').innerText = result.suggestion;
    document.getElementById('gauge-pointer').style.left = result.percent + '%';
    document.getElementById('result-area').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}`
};
