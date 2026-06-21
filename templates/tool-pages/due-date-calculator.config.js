module.exports = {
  slug: "due-date-calculator",
  title: "Pregnancy Due Date Calculator | LMP Estimate",
  description: "Estimate pregnancy due date and gestational age from the first day of the last menstrual period. Includes Naegele's rule, limits, and prenatal guidance.",
  h1: "Due Date Calculator",
  hero: "Estimate pregnancy due date, gestational age, trimester, and remaining weeks from the first day of your last menstrual period.",
  schemaName: "Privacy-First Due Date Calculator",
  schemaDescription: "A browser-side pregnancy due date estimate based on the first day of the last menstrual period, with gestational age and method limitations.",
  lastUpdated: "June 21, 2026",
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
    { href: "https://toolsquark.com/tools/period-calculator.html", title: "Period Calculator", description: "Estimate cycle timing, ovulation day, and fertile window.", action: "Track Cycle" },
    { href: "https://toolsquark.com/tools/water-intake-calculator.html", title: "Water Intake Calculator", description: "Estimate daily hydration targets for general wellness planning.", action: "Check Hydration" }
  ],
  references: [
    { title: "Methods for Estimating the Due Date", publisher: "American College of Obstetricians and Gynecologists", href: "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/05/methods-for-estimating-the-due-date" },
    { title: "Stages of Pregnancy", publisher: "Office on Women's Health", href: "https://womenshealth.gov/pregnancy/youre-pregnant-now-what/stages-pregnancy" }
  ],
  faq: [
    { question: "What is Naegele's Rule?", answer: "Naegele's Rule estimates due date by adding 280 days, or 40 weeks, to the first day of the last menstrual period." },
    { question: "Will delivery happen exactly on the due date?", answer: "Usually not. The due date is an estimate. Many births occur within the weeks around the estimated date, and ultrasound or clinician assessment may refine the timeline." },
    { question: "Can this replace medical prenatal care?", answer: "No. This calculator is for educational planning only. A clinician should confirm pregnancy dating and provide prenatal guidance." }
  ],
  contentSections: [
    {
      title: "What The Estimate Means",
      body: `<p>The estimated due date is a dating reference, not a promise about the day labor will begin. This tool counts 280 days, or 40 weeks, from the first day of the last menstrual period (LMP).</p><p>Gestational age is conventionally counted from the LMP, about two weeks before conception in a textbook 28-day cycle. That convention explains why pregnancy dating can appear older than time since fertilization.</p>`
    },
    {
      title: "Formula And Assumptions",
      body: `<div class="formula-box">Estimated due date = first day of LMP + 280 days<br>Gestational age = completed weeks and days since LMP</div><p>Naegele's rule assumes the LMP date is known, cycles are reasonably regular, and ovulation occurred near the expected time. Cycle length differences, uncertain bleeding dates, recent hormonal contraception, and assisted reproduction can require a different method.</p>`
    },
    {
      title: "Worked Example",
      body: `<p>If the first day of the LMP was January 1, adding 280 calendar days gives an estimated due date around October 8 in a non-leap year. At 70 elapsed days, gestational age is 10 weeks 0 days.</p>`
    },
    {
      title: "How Clinical Dating Can Change",
      body: `<p>ACOG recommends establishing and documenting gestational age using the LMP, the first accurate ultrasound, or assisted-reproduction dating as appropriate. Early ultrasound may revise an LMP estimate when the dates disagree beyond clinical thresholds.</p><p>Use the date confirmed by the prenatal clinician for medical decisions, screening windows, and delivery planning.</p>`
    },
    {
      title: "When To Seek Care",
      body: `<p>This calculator cannot confirm pregnancy location, viability, or fetal health. Contact a qualified clinician for prenatal care and for pain, heavy bleeding, fainting, severe symptoms, or uncertainty about dates. Urgent symptoms require urgent medical assessment.</p>`
    }
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
function calendarDayNumber(date) {
    return Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86400000);
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
    const daysPassed = calendarDayNumber(today) - calendarDayNumber(lmp);
    if (daysPassed > 308) {
        alert('This date is beyond the usual pregnancy dating range. Please verify the input.');
        return;
    }
    const edd = addDays(lmp, 280);
    const weeks = Math.floor(daysPassed / 7);
    const days = daysPassed % 7;
    const daysRemaining = Math.max(0, calendarDayNumber(edd) - calendarDayNumber(today));
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
