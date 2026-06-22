module.exports = {
  categoryHref: "lifestyle.html",
  categoryLabel: "Lifestyle Tools",
  slug: "running-pace-calculator",
  title: "Running Pace Calculator | Minutes per km or Mile",
  description: "Calculate average running pace from elapsed time and distance in min/km or min/mile. Includes the formula, example, pacing limits, and safety context.",
  h1: "Running Pace Calculator",
  hero: "Calculate average pace from elapsed time and distance in metric or imperial units. All inputs stay in your browser.",
  schemaName: "Privacy-First Running Pace Calculator",
  schemaDescription: "An interactive, client-side running pace calculator for metric and imperial race planning without data logging.",
  lastUpdated: "June 21, 2026",
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
      href: "https://toolsquark.com/tools/calorie-calculator.html",
      title: "Calorie Calculator",
      description: "Estimate your maintenance calories before adjusting intake around running volume.",
      action: "Estimate Calories"
    },
    {
      href: "https://toolsquark.com/tools/protein-calculator.html",
      title: "Protein Calculator",
      description: "Set a daily protein target that supports recovery after frequent training.",
      action: "Set Protein Target"
    }
  ],
  references: [
    { title: "Physical Activity Guidelines for Adults", publisher: "Centers for Disease Control and Prevention", href: "https://www.cdc.gov/physical-activity-basics/guidelines/adults.html" }
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
  contentSections: [
    {
      title: "What Pace Means",
      body: `<p>Running pace is elapsed time per unit of distance. A lower min/km or min/mile value means faster average speed. The result describes the entered session; it does not classify fitness or prescribe a training zone.</p>`
    },
    {
      title: "Formula",
      body: `<div class="formula-box">Pace = total elapsed time / distance<br>Average speed = distance / elapsed time</div><p>Hours, minutes, and seconds are converted to decimal minutes before division. The displayed pace is rounded to the nearest second.</p>`
    },
    {
      title: "Worked Example",
      body: `<p>A 10 km run completed in 50 minutes has an average pace of 50 / 10 = 5:00 min/km. The same performance is approximately 8:03 min/mile.</p>`
    },
    {
      title: "Why Average Pace Can Mislead",
      body: `<p>Hills, wind, heat, stops, GPS error, terrain, and fatigue can make equal average paces represent different effort. Heart rate and perceived exertion add context, but neither can be inferred from time and distance alone.</p>`
    },
    {
      title: "Training Use And Safety",
      body: `<p>Compare pace against your own recent sessions under similar conditions. Training zones and race targets should reflect current ability, recovery, and health rather than generic speed labels. Stop exercise and seek appropriate care for chest pain, faintness, or unusual symptoms.</p>`
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
    const speed = 60 / paceDecimal;
    const result = { status: 'Calculated Average Pace', color: 'var(--accent)', desc: \`Your average pace is \${displayPace} \${unitLabel}, equivalent to about \${speed.toFixed(2)} \${currentUnit === 'metric' ? 'km/h' : 'mph'}.\`, suggestion: 'Compare this result with your own sessions under similar conditions. Time and distance alone cannot determine effort level or training zone.', percent: Math.min(95, Math.max(5, (speed / 20) * 90)) };
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
