module.exports = {
  slug: "bmi-calculator",
  title: "Free Accurate BMI Calculator | Metric & Imperial | ToolsQuark",
  description: "Calculate your Body Mass Index (BMI) instantly with our free online calculator. Supports Metric (kg/cm) and Imperial (lbs/ft/in) systems with 100% data privacy.",
  h1: "BMI Calculator",
  hero: "Calculate body mass index using metric or imperial units. Everything runs locally in your browser with no account and no server-side health data storage.",
  schemaName: "Privacy-First BMI Calculator",
  schemaDescription: "An interactive, client-side Body Mass Index calculator supporting metric and imperial units without data logging.",
  buttonText: "Calculate BMI",
  resultUnit: "",
  resultStatus: "BMI Result",
  gaugeLabels: ["18.5", "24.9", "29.9"],
  insightTitle: "Actionable Health Insight",
  controlsHtml: `
        <div class="unit-switcher">
            <div class="unit-tab active" id="tab-metric" onclick="switchUnit('metric')">Metric Units (kg/cm)</div>
            <div class="unit-tab" id="tab-imperial" onclick="switchUnit('imperial')">Imperial Units (lbs/ft-in)</div>
        </div>
        <div id="inputs-container"></div>`,
  relatedTitle: "Optimize Your Body Metrics Further",
  related: [
    {
      href: "https://www.toolsquark.com/tools/tdee-calculator.html",
      title: "TDEE Calculator",
      description: "Estimate your full-day calorie burn after checking your basic weight category.",
      action: "Calculate TDEE"
    },
    {
      href: "https://www.toolsquark.com/tools/body-fat-calculator.html",
      title: "Body Fat Calculator",
      description: "Add body composition context beyond the standard height-to-weight ratio.",
      action: "Estimate Fat %"
    }
  ],
  faq: [
    {
      question: "What formula does this BMI calculator use?",
      answer: "For metric units, BMI = weight(kg) / height(m)^2. For imperial units, BMI = weight(lbs) x 703 / height(in)^2."
    },
    {
      question: "What is considered a healthy BMI range?",
      answer: "For many adults, BMI below 18.5 is categorized as underweight, 18.5 to 24.9 as normal weight, 25 to 29.9 as overweight, and 30 or higher as obesity."
    },
    {
      question: "Can BMI be inaccurate for athletes?",
      answer: "Yes. BMI does not separate muscle from fat, so muscular athletes can score high even when body fat is low. Pair BMI with waist or body fat tools for better context."
    }
  ],
  methodology: "This tool applies the standard adult BMI equation and unit conversions for metric and imperial inputs.",
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
    document.getElementById('result-area').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
renderInputs();`
};
