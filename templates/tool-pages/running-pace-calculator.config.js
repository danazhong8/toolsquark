module.exports = {
  slug: "running-pace-calculator",
  title: "Free Accurate Running Pace Calculator | Track & Plan | ToolsQuark",
  description: "Calculate your running pace instantly with our free online calculator. Plan your training speeds in Metric (min/km) or Imperial (min/mi) with 100% data privacy.",
  h1: "Running Pace Calculator",
  hero: "Determine your exact running pace or target speed required to achieve your race goals. This utility processes all data privately within your browser.",
  schemaName: "Privacy-First Running Pace Calculator",
  schemaDescription: "An interactive, client-side running pace calculator for metric and imperial race planning without data logging.",
  buttonText: "Calculate Running Pace",
  resultUnit: "",
  resultStatus: "min/km",
  gaugeLabels: ["Elite Pace", "Average Jog", "Walking"],
  insightTitle: "Training Insight",
  controlsHtml: `
        <div class="unit-switcher">
            <div class="unit-tab active" id="tab-metric" onclick="switchUnit('metric')">Metric Units (km)</div>
            <div class="unit-tab" id="tab-imperial" onclick="switchUnit('imperial')">Imperial Units (miles)</div>
        </div>
        <div id="inputs-container"></div>`,
  relatedTitle: "Support Your Training Plan",
  related: [
    {
      href: "https://www.toolsquark.com/tools/calorie-calculator.html",
      title: "Calorie Calculator",
      description: "Estimate your maintenance calories before adjusting intake around running volume.",
      action: "Estimate Calories"
    },
    {
      href: "https://www.toolsquark.com/tools/protein-calculator.html",
      title: "Protein Calculator",
      description: "Set a daily protein target that supports recovery after frequent training.",
      action: "Set Protein Target"
    }
  ],
  faq: [
    {
      question: "How does this running pace calculator work?",
      answer: "The calculator divides your total running time in minutes by your distance. It converts hours, minutes, and seconds into decimal minutes, then formats the pace as minutes and seconds per kilometer or mile."
    },
    {
      question: "What is a typical running pace for healthy adults?",
      answer: "Many recreational runners fall around 6:00 to 7:30 min/km for steady runs. Competitive runners may be faster than 4:00 min/km, while brisk walking commonly falls above 9:00 min/km."
    },
    {
      question: "Should I train by pace or heart rate?",
      answer: "Pace measures external output, while heart rate reflects internal strain. Many runners use both: pace for race goals and heart rate for managing easy aerobic sessions and recovery."
    }
  ],
  methodology: "This tool calculates pace as total elapsed time divided by total distance, then maps the result to general recreational training ranges.",
  disclaimer: "Running pace estimates are educational and should not replace medical or coaching advice. Stop exercising and seek professional guidance if you experience chest pain, dizziness, or unusual symptoms.",
  script: `
let currentUnit = 'metric';
function renderInputs() {
    const container = document.getElementById('inputs-container');
    const timeInputs = \`
        <h4 style="font-size:15px;margin-bottom:10px;color:#1e293b;">Total Running Time</h4>
        <div class="input-row">
            <div class="input-group">
                <div class="input-wrapper">
                    <input type="number" id="input_hrs" placeholder="Hrs" min="0" value="0">
                    <span class="unit-badge">h</span>
                </div>
            </div>
            <div class="input-group">
                <div class="input-wrapper">
                    <input type="number" id="input_min" placeholder="Min" min="0" max="59" value="30">
                    <span class="unit-badge">m</span>
                </div>
            </div>
            <div class="input-group">
                <div class="input-wrapper">
                    <input type="number" id="input_sec" placeholder="Sec" min="0" max="59" value="0">
                    <span class="unit-badge">s</span>
                </div>
            </div>
        </div>\`;
    if (currentUnit === 'metric') {
        container.innerHTML = \`
            <div class="input-group">
                <label for="input_dist">Total Distance</label>
                <div class="input-wrapper">
                    <input type="number" id="input_dist" placeholder="e.g. 5" step="any" value="5">
                    <span class="unit-badge">km</span>
                </div>
            </div>\` + timeInputs;
    } else {
        container.innerHTML = \`
            <div class="input-group">
                <label for="input_dist">Total Distance</label>
                <div class="input-wrapper">
                    <input type="number" id="input_dist" placeholder="e.g. 3.1" step="any" value="3.1">
                    <span class="unit-badge">miles</span>
                </div>
            </div>\` + timeInputs;
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
    const dist = parseFloat(document.getElementById('input_dist').value);
    const hrs = parseInt(document.getElementById('input_hrs').value, 10) || 0;
    const min = parseInt(document.getElementById('input_min').value, 10) || 0;
    const sec = parseInt(document.getElementById('input_sec').value, 10) || 0;
    const totalMinutes = (hrs * 60) + min + (sec / 60);
    if (isNaN(dist) || dist <= 0) {
        alert('Please input a valid distance greater than zero.');
        return;
    }
    if (totalMinutes <= 0) {
        alert('Please input a valid running time greater than zero.');
        return;
    }
    const paceDecimal = totalMinutes / dist;
    const paceMin = Math.floor(paceDecimal);
    const paceSec = Math.round((paceDecimal - paceMin) * 60);
    let finalMin = paceMin;
    let finalSec = paceSec;
    if (finalSec === 60) {
        finalMin += 1;
        finalSec = 0;
    }
    const displayPace = \`\${finalMin < 10 ? '0' : ''}\${finalMin}:\${finalSec < 10 ? '0' : ''}\${finalSec}\`;
    const unitLabel = currentUnit === 'metric' ? 'min/km' : 'min/mi';
    const paceKmDecimal = currentUnit === 'metric' ? paceDecimal : (paceDecimal / 1.60934);
    let result = {};
    if (paceKmDecimal < 4.5) {
        const percent = (paceKmDecimal / 4.5) * 30;
        result = { status: 'Elite / High Speed', color: 'var(--underweight)', desc: \`Your calculated pace is \${displayPace} \${unitLabel}. This indicates an excellent level of cardiovascular conditioning and athletic output.\`, suggestion: 'At this speed threshold, prioritize structured warm-ups, cool-downs, and recovery to reduce injury risk.', percent: Math.max(5, percent) };
    } else if (paceKmDecimal <= 6.5) {
        const percent = 30 + ((paceKmDecimal - 4.5) / 2) * 35;
        result = { status: 'Average Active Pace', color: 'var(--normal)', desc: \`Your calculated pace is \${displayPace} \${unitLabel}. This sits within a strong range for recreational runners.\`, suggestion: 'This pace is sustainable for aerobic base fitness. Keep consistent weekly volume to see gradual improvements.', percent };
    } else if (paceKmDecimal <= 8.5) {
        const percent = 65 + ((paceKmDecimal - 6.5) / 2) * 20;
        result = { status: 'Light Jog / Endurance', color: 'var(--overweight)', desc: \`Your calculated pace is \${displayPace} \${unitLabel}, representing a steady light jogging rhythm.\`, suggestion: 'This output works well for Zone 2 training and active recovery between harder sessions.', percent };
    } else {
        const percent = 85 + (Math.min(paceKmDecimal - 8.5, 5) / 5) * 15;
        result = { status: 'Walking / Recovery', color: 'var(--obese)', desc: \`Your output tracks at \${displayPace} \${unitLabel}, which often corresponds to brisk walking or low-impact recovery.\`, suggestion: 'Power walking is an effective low-impact strategy for maintaining joint health and daily movement.', percent: Math.min(95, percent) };
    }
    document.getElementById('result-area').style.display = 'block';
    document.getElementById('calc-output').innerText = displayPace;
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
