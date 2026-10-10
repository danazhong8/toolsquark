module.exports = {
  slug: "due-date-calculator",
  title: "Pregnancy Due Date Calculator | LMP Estimate",
  description: "Estimate your pregnancy due date from the first day of your last period. See weeks and days pregnant, time remaining and the limits of LMP dating.",
  h1: "Pregnancy Due Date Calculator",
  hero: "Enter the first day of your last period to estimate your due date and current pregnancy week. This LMP estimate assumes a regular 28-day cycle; a prenatal clinician may confirm or revise the date.",
  schemaName: "Privacy-First Due Date Calculator",
  schemaDescription: "A browser-side pregnancy due date estimate based on the first day of the last menstrual period, with gestational age and method limitations.",
  lastUpdated: "October 10, 2026",
  buttonText: "Calculate Due Date",
  resultHtml: `
            <div class="due-result-label">Estimated Due Date</div>
            <div class="result-val"><span id="calc-output">--</span></div>
            <div class="result-status" id="calc-status">LMP-Based Estimate</div>
            <dl class="due-result-grid">
                <div><dt>Estimated gestational age</dt><dd id="due-age">--</dd></div>
                <div><dt>Current trimester</dt><dd id="due-trimester">--</dd></div>
                <div><dt>Time to estimated date</dt><dd id="due-remaining">--</dd></div>
                <div><dt>Calculated as of</dt><dd id="due-as-of">--</dd></div>
            </dl>
            <p class="result-desc" id="calc-desc"></p>
            <div class="result-boundary"><strong>A dating estimate, not a delivery prediction</strong><span>This date cannot confirm pregnancy, fetal health, or when labor will begin. Use the date agreed with your prenatal care team for medical decisions.</span></div>
            <div class="suggestion-box">
                <h4>Dating And Prenatal Care</h4>
                <p id="calc-suggestion"></p>
            </div>
            <div class="share-result-panel"><h4>Result Summary</h4><p id="share-summary"></p><button type="button" class="share-copy-btn" onclick="copyShareResult()">Copy Summary</button><span id="share-copy-status" aria-live="polite"></span></div>`,
  controlsHtml: `
        <div class="input-group">
            <label for="input_lmp">First Day of Last Menstrual Period (LMP)</label>
            <div class="input-wrapper">
                <input type="date" id="input_lmp" required aria-describedby="lmp-assumption" style="padding-right:14px;">
            </div>
        </div>
        <p class="due-method-note" id="lmp-assumption">Use the first day bleeding started, not the last day. This method adds 280 days to LMP. If the date is uncertain or cycles are irregular, ask your prenatal care team about dating.</p>`,
  extraCss: `.due-method-note{font-size:13px;color:#475569;margin-bottom:18px}.due-result-label{font-size:14px;font-weight:700;color:#475569;margin-bottom:8px}.result-val{font-size:36px;line-height:1.25;overflow-wrap:anywhere}.result-status{font-size:16px;color:#64748b;margin-top:8px}.due-result-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0 20px;margin:22px 0;text-align:left}.due-result-grid div{padding:12px 0;border-bottom:1px solid #e2e8f0;min-width:0}.due-result-grid dt{font-size:13px;color:#64748b}.due-result-grid dd{font-size:18px;font-weight:800;overflow-wrap:anywhere}.share-result-panel p{white-space:pre-line;overflow-wrap:anywhere}.share-copy-btn:focus-visible{outline:3px solid #2563eb;outline-offset:3px}.input-group{min-width:0}@media(max-width:768px){.result-val{font-size:28px}}@media(max-width:380px){.due-result-grid{grid-template-columns:1fr}}`,
  relatedTitle: "Reproductive & Wellness Tools",
  related: [
    { href: "https://toolsquark.com/tools/period-calculator.html", title: "Period Calculator", description: "Estimate cycle timing, ovulation day, and fertile window.", action: "Track Cycle" },
    { href: "https://toolsquark.com/tools/water-intake-calculator.html", title: "General Water Intake Calculator", description: "Compare fluid units for general adult planning. Not a pregnancy-specific fluid recommendation.", action: "Open Planner" }
  ],
  references: [
    { title: "Methods for Estimating the Due Date", publisher: "American College of Obstetricians and Gynecologists", href: "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/05/methods-for-estimating-the-due-date" },
    { title: "Stages of Pregnancy", publisher: "Office on Women's Health", href: "https://womenshealth.gov/pregnancy/youre-pregnant-now-what/stages-pregnancy" },
    { title: "How Your Fetus Grows During Pregnancy", publisher: "American College of Obstetricians and Gynecologists", href: "https://www.acog.org/womens-health/faqs/how-your-fetus-grows-during-pregnancy" },
    { title: "Pregnancy Due Date Calculator", publisher: "NHS", href: "https://www.nhs.uk/pregnancy/finding-out/due-date-calculator/" }
  ],
  faq: [
    { question: "How do I calculate my pregnancy due date from my last period?", answer: "For this regular 28-day-cycle estimate, add 280 days to the first day of your last menstrual period, not the last day of bleeding. The result is an estimated date, not a prediction of the day labor starts." },
    { question: "What if my cycle is not 28 days or I do not know my LMP?", answer: "This tool does not adjust for cycle length or assisted reproduction. An uncertain LMP or irregular cycle can make a simple calendar estimate less useful. Your prenatal clinician can establish appropriate dating, including ultrasound when needed." },
    { question: "When does the second or third trimester start?", answer: "This tool uses ACOG's boundaries: the first trimester runs through 13 weeks 6 days, the second begins at 14 weeks 0 days, and the third begins at 28 weeks 0 days. Gestational age is counted from the first day of the LMP." },
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
      body: `<p>For an LMP of January 1, 2026, adding 280 calendar days gives October 8, 2026. On March 12, 2026, 70 days have elapsed, so the LMP-based gestational age is 10 weeks 0 days. The example assumes a regular 28-day cycle and is not clinical confirmation.</p>`
    },
    {
      title: "Which Dating Method Fits Your Situation?",
      body: `<table class="comparison-table"><thead><tr><th>Situation</th><th>What the LMP estimate can do</th><th>Next step</th></tr></thead><tbody><tr><td>Known LMP, regular 28-day cycle</td><td>Give a calendar starting estimate</td><td>Confirm dating at prenatal care</td></tr><tr><td>Uncertain LMP or irregular cycle</td><td>The fixed 280-day assumption may not fit</td><td>Ask about clinical or ultrasound dating</td></tr><tr><td>IVF or other assisted reproduction</td><td>Not modeled by this calculator</td><td>Use dating from the fertility care team</td></tr><tr><td>Ultrasound date differs from LMP</td><td>Cannot decide which date to use</td><td>Follow the date documented by your clinician</td></tr></tbody></table>`
    },
    {
      title: "Reading Weeks, Days And Trimesters",
      body: `<p>Ten weeks and three days means 10 completed weeks plus 3 days, not 10.3 weeks. The trimester label follows <a href="https://www.acog.org/womens-health/faqs/how-your-fetus-grows-during-pregnancy">ACOG's pregnancy overview</a>: first through 13 weeks 6 days, second from 14 weeks to 27 weeks 6 days, and third from 28 weeks. The countdown describes time to the estimated date, not time to a guaranteed delivery.</p>`
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
function formatWeeksAndDays(totalDays) {
    const weeks = Math.floor(totalDays / 7);
    const days = totalDays % 7;
    return weeks + (weeks === 1 ? ' week ' : ' weeks ') + days + (days === 1 ? ' day' : ' days');
}
function clearDueResult() {
    document.getElementById('result-area').style.display = 'none';
    document.getElementById('share-copy-status').innerText = '';
}
function calculateNow() {
    clearDueResult();
    const value = document.getElementById('input_lmp').value;
    if (!value) {
        alert('Please select a valid LMP date.');
        return;
    }
    const lmp = new Date(value + 'T00:00:00');
    const todayObj = new Date();
    const today = new Date(todayObj.getFullYear(), todayObj.getMonth(), todayObj.getDate());
    if (!Number.isFinite(lmp.getTime()) || lmp > today) {
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
    const daysRemaining = calendarDayNumber(edd) - calendarDayNumber(today);
    const remaining = daysRemaining >= 0
        ? formatWeeksAndDays(daysRemaining)
        : Math.abs(daysRemaining) + (daysRemaining === -1 ? ' day' : ' days') + ' past estimated date';
    let status = '';
    let suggestion = '';
    if (weeks < 14) {
        status = 'First Trimester';
        suggestion = 'Early dating is best confirmed with a clinician. Ask about prenatal vitamins, folic acid, and first-trimester screening timelines.';
    } else if (weeks < 28) {
        status = 'Second Trimester';
        suggestion = 'This period often includes anatomy scanning and nutrition planning. Keep following clinician guidance for weight, hydration, and activity.';
    } else {
        status = 'Third Trimester';
        suggestion = 'Review birth planning, warning signs, fetal movement guidance, and appointment frequency with your prenatal care team.';
    }
    if (daysRemaining < 0) suggestion = 'This LMP estimate is past the estimated due date. Follow the assessment and plan from your prenatal care team; the calculator cannot assess your pregnancy or decide delivery timing.';
    document.getElementById('result-area').style.display = 'block';
    document.getElementById('calc-output').innerText = formatDate(edd);
    document.getElementById('due-age').innerText = formatWeeksAndDays(daysPassed);
    document.getElementById('due-trimester').innerText = status;
    document.getElementById('due-remaining').innerText = remaining;
    document.getElementById('due-as-of').innerText = formatDate(today);
    document.getElementById('calc-desc').innerText = 'As of ' + formatDate(today) + ', LMP-based gestational age is ' + formatWeeksAndDays(daysPassed) + ' (' + status.toLowerCase() + '). Time to estimated date: ' + remaining + '. Assumes a regular 28-day cycle; not a delivery prediction.';
    document.getElementById('calc-suggestion').innerText = suggestion;
    document.getElementById('result-area').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
const dueInputToday = new Date();
document.getElementById('input_lmp').max = dueInputToday.getFullYear() + '-' + String(dueInputToday.getMonth() + 1).padStart(2, '0') + '-' + String(dueInputToday.getDate()).padStart(2, '0');
document.getElementById('input_lmp').addEventListener('input', clearDueResult);
document.getElementById('input_lmp').addEventListener('change', clearDueResult);`
};
