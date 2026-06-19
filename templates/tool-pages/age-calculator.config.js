module.exports = {
  slug: "age-calculator",
  title: "Age Calculator | Exact Chronological Lifespan Tracker | ToolsQuark",
  description: "Calculate your exact chronological age in years, months, and days based on your calendar birth parameters instantly with our automated tracking tool.",
  h1: "Age Calculator",
  hero: "Calculate exact chronological age in years, months, and days from a birth date to today.",
  schemaName: "Privacy-First Age Calculator",
  buttonText: "Calculate Age",
  resultHtml: `
            <div class="result-val"><span id="calc-output">0y 0m 0d</span></div>
            <div class="result-status" id="calc-status">Exact Chronological Age</div>
            <p class="result-desc" id="calc-desc"></p>
            <div class="suggestion-box">
                <h4>Calendar Insight</h4>
                <p id="calc-suggestion"></p>
            </div>`,
  controlsHtml: `
        <div class="input-group">
            <label for="input_birthdate">Birth Date</label>
            <div class="input-wrapper">
                <input type="date" id="input_birthdate" style="padding-right:14px;">
            </div>
        </div>`,
  relatedTitle: "Helpful Health Context",
  related: [
    { href: "https://toolsquark.com/tools/bmr-calculator.html", title: "BMR Calculator", description: "Use age with height and weight to estimate resting energy needs.", action: "Calculate BMR" },
    { href: "https://toolsquark.com/tools/healthy-weight-range-calculator.html", title: "Healthy Weight Range Calculator", description: "Estimate a BMI-based adult weight range from height.", action: "Check Range" }
  ],
  faq: [
    { question: "Does this calculator account for leap years?", answer: "Yes. It uses calendar dates and JavaScript Date behavior, so leap years and month lengths are handled during the date comparison." },
    { question: "What is chronological age?", answer: "Chronological age is the amount of calendar time that has passed since birth. It differs from biological age, which tries to estimate physiological aging." },
    { question: "Does the calculator store my birth date?", answer: "No. The calculation runs locally in your browser and does not need to send your date of birth to a server." }
  ],
  methodology: "This tool compares the selected birth date with the current local date and adjusts years, months, and days using calendar month lengths.",
  disclaimer: "Age calculations are informational and based on your device date settings. They are not medical or legal advice.",
  script: `
function daysInMonth(year, monthIndex) {
    return new Date(year, monthIndex + 1, 0).getDate();
}
function calculateNow() {
    const value = document.getElementById('input_birthdate').value;
    if (!value) {
        alert('Please select a valid birth date.');
        return;
    }
    const birth = new Date(value + 'T00:00:00');
    const today = new Date();
    const current = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    if (birth > current) {
        alert('Birth date cannot be in the future.');
        return;
    }
    let years = current.getFullYear() - birth.getFullYear();
    let months = current.getMonth() - birth.getMonth();
    let days = current.getDate() - birth.getDate();
    if (days < 0) {
        months -= 1;
        const previousMonth = current.getMonth() === 0 ? 11 : current.getMonth() - 1;
        const previousMonthYear = current.getMonth() === 0 ? current.getFullYear() - 1 : current.getFullYear();
        days += daysInMonth(previousMonthYear, previousMonth);
    }
    if (months < 0) {
        years -= 1;
        months += 12;
    }
    const totalDays = Math.floor((current - birth) / 86400000);
    const nextBirthday = new Date(current.getFullYear(), birth.getMonth(), birth.getDate());
    if (nextBirthday < current) nextBirthday.setFullYear(current.getFullYear() + 1);
    const daysToBirthday = Math.ceil((nextBirthday - current) / 86400000);
    document.getElementById('result-area').style.display = 'block';
    document.getElementById('calc-output').innerText = \`\${years}y \${months}m \${days}d\`;
    document.getElementById('calc-status').innerText = 'Exact Chronological Age';
    document.getElementById('calc-desc').innerText = \`You are \${years} years, \${months} months, and \${days} days old. That is approximately \${totalDays.toLocaleString()} total days.\`;
    document.getElementById('calc-suggestion').innerText = daysToBirthday === 0 ? 'Today is your birthday based on the selected date.' : \`Your next birthday is in \${daysToBirthday} day\${daysToBirthday === 1 ? '' : 's'}.\`;
    document.getElementById('result-area').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}`
};
