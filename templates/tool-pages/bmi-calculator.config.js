module.exports = {
  slug: "bmi-calculator",
  title: "BMI Calculator Metric & Imperial With Formula and Category",
  description: "Calculate adult BMI in metric kg/cm or imperial lb/ft-in units. See BMI formula, category, examples, limits, and what to check next.",
  h1: "BMI Calculator: Metric & Imperial",
  hero: "Calculate adult body mass index in metric or imperial units, then see the formula, category, worked examples, limitations, and next body-metric options. Everything runs locally in your browser with no account.",
  schemaName: "Privacy-First BMI Calculator",
  schemaDescription: "A free browser-side Body Mass Index calculator for metric and imperial units, with adult BMI categories, formula notes, and result interpretation.",
  lastUpdated: "June 26, 2026",
  buttonText: "Calculate BMI",
  resultUnit: "",
  resultStatus: "BMI Result",
  gaugeLabels: ["18.5", "24.9", "29.9"],
  insightTitle: "Actionable Health Insight",
  shareResult: true,
  dynamicNextSteps: true,
  controlsHtml: `
        <div class="intent-banner">
            <strong>Metric or imperial BMI in one place.</strong>
            <span>Choose kg/cm or lb/ft-in, then see the exact formula, adult category, and what to check next.</span>
        </div>
        <div class="unit-switcher">
            <div class="unit-tab active" id="tab-metric" onclick="switchUnit('metric')">Metric Units (kg/cm)</div>
            <div class="unit-tab" id="tab-imperial" onclick="switchUnit('imperial')">Imperial Units (lbs/ft-in)</div>
        </div>
        <div id="inputs-container"></div>`,
  extraCss: `.intent-banner{display:grid;gap:5px;margin-bottom:14px;padding:14px 16px;border:1px solid #bbf7d0;background:#f0fdf4;border-radius:10px;color:#14532d}.intent-banner strong{font-size:15px}.intent-banner span{font-size:13px;line-height:1.5;color:#166534}.input-help{margin-top:7px;font-size:12px;color:var(--text-muted);line-height:1.45}`,
  relatedTitle: "Optimize Your Body Metrics Further",
  related: [
    {
      href: "https://toolsquark.com/guides/metric-vs-imperial-bmi-formula.html",
      title: "Metric vs Imperial BMI Formula",
      description: "Compare kg/cm and lb/ft-in BMI equations, rounding differences, and examples.",
      action: "Read Guide"
    },
    {
      href: "https://toolsquark.com/tools/tdee-calculator.html",
      title: "TDEE Calculator",
      description: "Estimate your full-day calorie burn after checking your basic weight category.",
      action: "Calculate TDEE"
    },
    {
      href: "https://toolsquark.com/tools/body-fat-calculator.html",
      title: "Body Fat Calculator",
      description: "Add body composition context beyond the standard height-to-weight ratio.",
      action: "Estimate Fat %"
    },
    {
      href: "https://toolsquark.com/tools/waist-to-height-ratio-calculator.html",
      title: "Waist-to-Height Ratio",
      description: "Add a simple central-size screen when BMI needs distribution context.",
      action: "Check Waist Ratio"
    },
    {
      href: "https://toolsquark.com/tools/calorie-calculator.html",
      title: "Daily Calorie Goal Calculator",
      description: "Move from body-size context to a transparent calorie planning target.",
      action: "Plan Calories"
    }
  ],
  faq: [
    {
      question: "What formula does this BMI calculator use?",
      answer: "For metric units, BMI = weight(kg) / height(m)^2. For imperial units, BMI = weight(lbs) x 703 / height(in)^2."
    },
    {
      question: "Can I use this as a metric BMI calculator?",
      answer: "Yes. Choose the metric tab, enter weight in kilograms and height in centimeters, and the calculator converts height to meters before applying the standard BMI equation."
    },
    {
      question: "What is the metric BMI formula?",
      answer: "The metric BMI formula is BMI = weight in kilograms divided by height in meters squared. A height entered in centimeters is first converted to meters."
    },
    {
      question: "Can I use this as an imperial BMI calculator?",
      answer: "Yes. Choose the imperial tab, enter weight in pounds and height in feet and inches, and the calculator uses the standard pounds-and-inches BMI equation with the 703 conversion factor."
    },
    {
      question: "What is the imperial BMI formula?",
      answer: "The imperial BMI formula is BMI = weight in pounds x 703 divided by height in inches squared. Feet and inches are converted to total inches before the equation is applied."
    },
    {
      question: "What is considered a healthy BMI range?",
      answer: "For many adults, BMI below 18.5 is categorized as underweight, 18.5 to 24.9 as normal weight, 25 to 29.9 as overweight, and 30 or higher as obesity."
    },
    {
      question: "Can BMI be inaccurate for athletes?",
      answer: "Yes. BMI does not separate muscle from fat, so muscular athletes can score high even when body fat is low. Pair BMI with waist or body fat tools for better context."
    },
    {
      question: "Is BMI different for children or teenagers?",
      answer: "Yes. Children and teenagers are usually evaluated with age- and sex-specific BMI percentiles rather than the standard adult BMI categories shown here."
    },
    {
      question: "Does this BMI calculator store my height or weight?",
      answer: "No. The calculation runs in your browser. ToolsQuark does not require an account and this page does not send your BMI inputs to a server."
    },
    {
      question: "What should I check after BMI?",
      answer: "If BMI is only a rough screen for you, compare it with waist-to-height ratio, body-fat estimate, or a calorie-planning tool depending on whether your next question is body distribution, composition, or daily energy."
    },
    {
      question: "Why does this page explain BMI limitations?",
      answer: "BMI is often searched as if it gives a complete health answer, but it is only a height-to-weight screening ratio. The page explains its limits so the result is easier to interpret responsibly."
    },
    {
      question: "Why do metric BMI and imperial BMI sometimes differ slightly?",
      answer: "They use the same underlying ratio after unit conversion. Small differences usually come from rounding height or weight before converting between centimeters, meters, inches, pounds, and kilograms."
    }
  ],
  references: [
    { title: "Adult BMI Categories", publisher: "Centers for Disease Control and Prevention", href: "https://www.cdc.gov/bmi/adult-calculator/bmi-categories.html" },
    { title: "About Body Mass Index (BMI)", publisher: "Centers for Disease Control and Prevention", href: "https://www.cdc.gov/bmi/about/index.html" }
  ],
  contentSections: [
    {
      title: "What BMI Measures",
      body: `<p>Body Mass Index is a screening ratio of weight to height. Health professionals use it to group adults into broad weight categories and to identify cases where a fuller health assessment may be useful.</p><p>BMI does not directly measure body fat, muscle, bone, fat distribution, fitness, or metabolic health. Two people with the same BMI can therefore have very different body composition and risk profiles.</p>`
    },
    {
      title: "BMI Formula",
      body: `<div class="formula-box">Metric BMI: BMI = weight (kg) / height (m)<sup>2</sup><br>Imperial BMI: BMI = weight (lb) x 703 / height (in)<sup>2</sup></div><p><strong>Weight</strong> is total body weight and <strong>height</strong> is standing height without shoes. The imperial constant 703 converts pounds and inches to the metric ratio. This tool rounds only the displayed result to one decimal place.</p><p>If you enter height in centimeters, the calculator first converts centimeters to meters. For example, 175 cm becomes 1.75 m. If you enter feet and inches, the calculator converts the full height to inches before applying the imperial formula.</p><p>Use the metric BMI path when your inputs are kilograms and centimeters. Use the imperial BMI path when your inputs are pounds, feet, and inches. Both paths should be nearly equivalent when the same real height and weight are converted carefully. For a deeper comparison, read the <a href="https://toolsquark.com/guides/metric-vs-imperial-bmi-formula.html">metric vs imperial BMI formula guide</a>.</p>`
    },
    {
      title: "Metric Or Imperial: Which Tab To Use",
      body: `<p>Use <strong>Metric Units</strong> when your weight is in kilograms and height is in centimeters. Use <strong>Imperial Units</strong> when your weight is in pounds and height is measured in feet and inches.</p><p>Do not mix systems in a single calculation. If you only know one value in another system, convert both inputs first or use the matching tab so the calculator can apply the correct equation.</p>`
    },
    {
      title: "Metric And Imperial BMI Examples",
      body: `<p><strong>Metric example:</strong> 70 kg and 175 cm becomes 70 / 1.75<sup>2</sup>, which gives a BMI of 22.9.</p><p><strong>Imperial example:</strong> 154 lb and 5 ft 9 in becomes 154 x 703 / 69<sup>2</sup>, which gives a BMI of 22.7.</p><div class="note-box">Metric and imperial BMI equations should give nearly the same result when the same real-world height and weight are converted correctly. Small differences usually come from rounding the input values.</div>`
    },
    {
      title: "BMI Compared With Related Body Metrics",
      body: `<table class="comparison-table"><thead><tr><th>Metric</th><th>Best Use</th><th>Main Limitation</th></tr></thead><tbody><tr><td>BMI</td><td>Fast adult height-to-weight screening and category comparison.</td><td>Does not separate muscle, fat, bone, or fat distribution.</td></tr><tr><td>Waist-to-height ratio</td><td>Quick central-size context when waist measurement is available.</td><td>Needs careful waist measurement and still does not diagnose risk.</td></tr><tr><td>Body-fat estimate</td><td>Rough composition context from circumference or other inputs.</td><td>Formula error can be meaningful for individuals.</td></tr></tbody></table><p>Use BMI as the first screen, then choose the next metric based on the question you actually need answered.</p>`
    },
    {
      title: "Common Use Cases",
      body: `<div class="use-case-grid"><div class="use-case-card"><strong>Quick adult screening</strong><span>Use BMI when you need a fast category from height and weight only.</span></div><div class="use-case-card"><strong>Unit conversion confidence</strong><span>Use the metric/imperial tabs to avoid mixing kilograms, pounds, centimeters, and inches.</span></div><div class="use-case-card"><strong>Next-step planning</strong><span>Use the result to decide whether waist, body-fat, TDEE, or calorie planning is the better follow-up.</span></div></div>`
    },
    {
      title: "How To Read Your Result",
      body: `<ul><li><strong>Below 18.5:</strong> underweight screening category.</li><li><strong>18.5 to 24.9:</strong> healthy-weight screening category.</li><li><strong>25.0 to 29.9:</strong> overweight screening category.</li><li><strong>30.0 or higher:</strong> obesity screening category.</li></ul><div class="note-box">These are CDC adult screening categories, not diagnoses or personal targets. Risk can vary within every category, so interpret BMI with waist size, health history, blood pressure, laboratory results, and clinician guidance when available.</div>`
    },
    {
      title: "When BMI Needs More Context",
      body: `<p>Standard adult categories are not designed for children or teenagers, who are assessed with age- and sex-specific percentiles. BMI also needs cautious interpretation during pregnancy, in very muscular people, and when illness, edema, amputation, or age-related muscle loss changes the relationship between weight and body composition.</p><p>For a broader picture, pair BMI with waist circumference or waist-to-height ratio and discuss unexpected weight change or health concerns with a qualified clinician.</p>`
    },
    {
      title: "What To Do After The BMI Number",
      body: `<p>If your goal is quick screening, the BMI category may be enough. If the result conflicts with your body composition, waist size, training status, or health history, use it as a prompt to add another measure rather than as a final conclusion.</p><ul><li><strong>Need distribution context?</strong> Try the <a href="https://toolsquark.com/tools/waist-to-height-ratio-calculator.html">waist-to-height ratio calculator</a>.</li><li><strong>Need composition context?</strong> Try the <a href="https://toolsquark.com/tools/body-fat-calculator.html">body fat calculator</a>.</li><li><strong>Need nutrition planning?</strong> Estimate <a href="https://toolsquark.com/tools/tdee-calculator.html">TDEE</a> or a <a href="https://toolsquark.com/tools/calorie-calculator.html">daily calorie goal</a> after BMI.</li></ul>`
    }
  ],
  methodology: "This tool applies the standard adult Body Mass Index equation and unit conversions for metric and imperial inputs. Results are rounded to one decimal place and mapped to common adult BMI screening categories.",
  disclaimer: "BMI is a screening estimate, not a diagnosis. It may be less informative for athletes, older adults, pregnancy, children, or people with unusual body composition.",
  script: `
let currentUnit = 'metric';
function renderInputs() {
    const container = document.getElementById('inputs-container');
    if (currentUnit === 'metric') {
        container.innerHTML = \`
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
                    <p class="input-help">Use centimeters here. If you know your height in meters, enter 1.75 m as 175 cm.</p>
                </div>
            </div>\`;
    } else {
        container.innerHTML = \`
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
            </div>\`;
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
    let bmi = 0;
    if (currentUnit === 'metric') {
        const weight = parseFloat(document.getElementById('input_weight').value);
        const heightCm = parseFloat(document.getElementById('input_height').value);
        if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
            alert('Please enter valid metric values.');
            return;
        }
        const heightM = heightCm / 100;
        bmi = weight / (heightM * heightM);
    } else {
        const weight = parseFloat(document.getElementById('input_weight').value);
        const feet = parseFloat(document.getElementById('input_ft').value) || 0;
        const inches = parseFloat(document.getElementById('input_in').value) || 0;
        const totalInches = (feet * 12) + inches;
        if (isNaN(weight) || weight <= 0 || totalInches <= 0) {
            alert('Please enter valid imperial values.');
            return;
        }
        bmi = (weight * 703) / (totalInches * totalInches);
    }
    const rounded = Number(bmi.toFixed(1));
    let result = {};
    if (rounded < 18.5) {
        result = { status: 'Underweight Range', color: 'var(--underweight)', desc: \`Your BMI is \${rounded}. This falls below the standard adult reference range.\`, suggestion: 'If this reflects unintentional weight loss, low appetite, or low energy availability, consider discussing nutrition status with a qualified clinician.', percent: Math.max(5, (rounded / 18.5) * 25) };
    } else if (rounded < 25) {
        result = { status: 'Normal Weight Range', color: 'var(--normal)', desc: \`Your BMI is \${rounded}. This is within the standard adult normal-weight screening range.\`, suggestion: 'Maintain health context with waist, activity, sleep, nutrition, and blood pressure rather than relying on BMI alone.', percent: 25 + ((rounded - 18.5) / 6.5) * 35 };
    } else if (rounded < 30) {
        result = { status: 'Overweight Range', color: 'var(--overweight)', desc: \`Your BMI is \${rounded}. This sits in the standard adult overweight screening range.\`, suggestion: 'Use body composition, waist measurements, and real-world health markers to decide whether weight change is actually needed.', percent: 60 + ((rounded - 25) / 5) * 22 };
    } else {
        result = { status: 'Obesity Range', color: 'var(--obese)', desc: \`Your BMI is \${rounded}. This is in the standard adult obesity screening range.\`, suggestion: 'Consider reviewing this result with a qualified clinician, especially if paired with high waist measurements or cardiometabolic risk markers.', percent: Math.min(95, 82 + (Math.min(rounded - 30, 15) / 15) * 13) };
    }
    document.getElementById('result-area').style.display = 'block';
    document.getElementById('calc-output').innerText = rounded.toFixed(1);
    document.getElementById('calc-output').style.color = result.color;
    document.getElementById('calc-status').innerText = result.status;
    document.getElementById('calc-status').style.color = result.color;
    document.getElementById('calc-desc').innerText = result.desc;
    document.getElementById('calc-suggestion').innerText = result.suggestion;
    document.getElementById('gauge-pointer').style.left = result.percent + '%';
    if (rounded < 18.5) {
        setNextStepRecommendations([
            { label: 'Daily Calorie Goal Calculator', href: 'https://toolsquark.com/tools/calorie-calculator.html', reason: 'Use energy planning cautiously if low intake or unintentional loss may be involved.', action: 'Plan Calories' },
            { label: 'Healthy Weight Range', href: 'https://toolsquark.com/tools/healthy-weight-range-calculator.html', reason: 'See the BMI-based adult weight range implied by your height.', action: 'Find Range' }
        ]);
    } else if (rounded < 25) {
        setNextStepRecommendations([
            { label: 'TDEE Calculator', href: 'https://toolsquark.com/tools/tdee-calculator.html', reason: 'Move from body-size screening to a maintenance calorie estimate.', action: 'Estimate TDEE' },
            { label: 'Daily Steps Goal Calculator', href: 'https://toolsquark.com/tools/daily-steps-goal-calculator.html', reason: 'Translate general activity into a practical movement target.', action: 'Plan Steps' }
        ]);
    } else {
        setNextStepRecommendations([
            { label: 'Waist-to-Height Ratio', href: 'https://toolsquark.com/tools/waist-to-height-ratio-calculator.html', reason: 'Add central-size context before treating BMI as the full story.', action: 'Check Waist' },
            { label: 'Daily Calorie Goal Calculator', href: 'https://toolsquark.com/tools/calorie-calculator.html', reason: 'If weight change is a goal, start with a visible maintenance or deficit target.', action: 'Plan Calories' }
        ]);
    }
    document.getElementById('result-area').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
renderInputs();`
};
