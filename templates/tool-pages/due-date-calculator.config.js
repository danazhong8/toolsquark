module.exports = {
  slug: "due-date-calculator",
  title: "Accurate Due Date Calculator | Plan Your Pregnancy Timeline | ToolsQuark",
  description: "Calculate your precise clinical Estimated Date of Delivery (EDD) and current gestational age using Naegele's Rule. Track your specific trimester countdown instantly.",
  h1: "Due Date Calculator",
  hero: "Estimate pregnancy due date, gestational age, trimester, and remaining weeks from the first day of your last menstrual period.",
  schemaName: "Privacy-First Due Date Calculator",
  buttonText: "Calculate Due Date",
  resultHtml: `
            <div class="result-val"><span id="calc-output">--</span></div>
            <div class="result-status" id="calc-status">Estimated Delivery Date</div>
            <div class="bmi-gauge-container">
                <div class="bmi-pointer" id="gauge-pointer"></div>
                <div class="bmi-gauge-bar"></div>
                <div class="bmi-labels"><span>1st Trimester</span><span>2nd</span><span>3rd</span><span>Full Term</span></div>
            </div>
            <p class="result-desc" id="calc-desc"></p>
            <div class="suggestion-box">
                <h4>Pregnancy Timeline Insight</h4>
                <p id="calc-suggestion"></p>
            </div>`,
  controlsHtml: `
        <div class="input-group">
            <label for="input_lmp">First Day of Last Menstrual Period (LMP)</label>
            <div class="input-wrapper">
                <input type="date" id="input_lmp" style="padding-right:14px;">
            </div>
        </div>`,
  relatedTitle: "Reproductive & Wellness Tools",
  related: [
    { href: "https://www.toolsquark.com/tools/period-calculator.html", title: "Period Calculator", description: "Estimate cycle timing, ovulation day, and fertile window.", action: "Track Cycle" },
    { href: "https://www.toolsquark.com/tools/water-intake-calculator.html", title: "Water Intake Calculator", description: "Estimate daily hydration targets for general wellness planning.", action: "Check Hydration" }
  ],
  faq: [
    { question: "What is Naegele's Rule?", answer: "Naegele's Rule estimates due date by adding 280 days, or 40 weeks, to the first day of the last menstrual period." },
    { question: "Will delivery happen exactly on the due date?", answer: "Usually not. The due date is an estimate. Many births occur within the weeks around the estimated date, and ultrasound or clinician assessment may refine the timeline." },
    { question: "Can this replace medical prenatal care?", answer: "No. This calculator is for educational planning only. A clinician should confirm pregnancy dating and provide prenatal guidance." }
  ],
  methodology: "This tool estimates EDD as LMP plus 280 days, then calculates gestational age from elapsed days since LMP and maps that to standard trimester ranges.",
  disclaimer: "Pregnancy timing estimates are educational and not a diagnosis or clinical dating confirmation. Consult an OB-GYN or qualified clinician for prenatal care.",
  script: `
function formatDate(date) {
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
function addDays(date, days) {
    const next = new Date(date);
    next.setDate(next.getDate() + days);
    return next;
}
function calculateNow() {
    const value = document.getElementById('input_lmp').value;
    if (!value) {
        alert('Please select a valid LMP date.');
        return;
    }
    const lmp = new Date(value + 'T00:00:00');
    const todayObj = new Date();
    const today = new Date(todayObj.getFullYear(), todayObj.getMonth(), todayObj.getDate());
    if (lmp > today) {
        alert('The LMP date cannot be in the future.');
        return;
    }
    const daysPassed = Math.floor((today - lmp) / 86400000);
    if (daysPassed > 308) {
        alert('This date is beyond the usual pregnancy dating range. Please verify the input.');
        return;
    }
    const edd = addDays(lmp, 280);
    const weeks = Math.floor(daysPassed / 7);
    const days = daysPassed % 7;
    const daysRemaining = Math.max(0, Math.ceil((edd - today) / 86400000));
    const weeksRemaining = Math.floor(daysRemaining / 7);
    const percent = Math.min(100, Math.max(0, (daysPassed / 280) * 100));
    let status = '';
    let suggestion = '';
    let color = 'var(--normal)';
    if (weeks < 13) {
        status = 'First Trimester';
        color = 'var(--underweight)';
        suggestion = 'Early dating is best confirmed with a clinician. Ask about prenatal vitamins, folic acid, and first-trimester screening timelines.';
    } else if (weeks < 27) {
        status = 'Second Trimester';
        color = 'var(--normal)';
        suggestion = 'This period often includes anatomy scanning and nutrition planning. Keep following clinician guidance for weight, hydration, and activity.';
    } else {
        status = 'Third Trimester';
        color = 'var(--overweight)';
        suggestion = 'Review birth planning, warning signs, fetal movement guidance, and appointment frequency with your prenatal care team.';
    }
    document.getElementById('result-area').style.display = 'block';
    document.getElementById('calc-output').innerText = formatDate(edd);
    document.getElementById('calc-output').style.color = color;
    document.getElementById('calc-status').innerText = status;
    document.getElementById('calc-status').style.color = color;
    document.getElementById('calc-desc').innerText = \`Estimated gestational age is \${weeks} weeks and \${days} days. About \${weeksRemaining} weeks remain until the estimated due date.\`;
    document.getElementById('calc-suggestion').innerText = suggestion;
    document.getElementById('gauge-pointer').style.left = percent + '%';
    document.getElementById('result-area').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}`
};
