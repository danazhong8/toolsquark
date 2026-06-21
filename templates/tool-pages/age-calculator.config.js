module.exports = {
  slug: "age-calculator",
  title: "Age Calculator | Years, Months & Days",
  description: "Calculate chronological age in calendar years, months, and days, plus total elapsed days and the next birthday countdown. Handles month lengths and leap years.",
  h1: "Age Calculator",
  hero: "Calculate exact chronological age in years, months, and days from a birth date to today.",
  schemaName: "Privacy-First Age Calculator",
  schemaDescription: "A browser-side chronological age calculator using calendar-aware year, month, and day arithmetic.",
  lastUpdated: "June 21, 2026",
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
  references: [
    { title: "ECMAScript Date Objects", publisher: "ECMA International / TC39", href: "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date-objects" }
  ],
  faq: [
    { question: "Does this calculator account for leap years?", answer: "Yes. It uses calendar dates and JavaScript Date behavior, so leap years and month lengths are handled during the date comparison." },
    { question: "What is chronological age?", answer: "Chronological age is the amount of calendar time that has passed since birth. It differs from biological age, which tries to estimate physiological aging." },
    { question: "Does the calculator store my birth date?", answer: "No. The calculation runs locally in your browser and does not need to send your date of birth to a server." }
  ],
  contentSections: [
    {
      title: "What Chronological Age Means",
      body: `<p>Chronological age is elapsed calendar time since the entered birth date. This tool expresses it as completed years, then completed months, then remaining days.</p><p>That calendar decomposition is different from dividing total days by 365 because month lengths and leap years vary.</p>`
    },
    {
      title: "Calendar Method",
      body: `<div class="formula-box">Age = completed years + completed calendar months + remaining calendar days</div><p>The calculator clamps month-end anniversaries to the last valid day of shorter months, then uses UTC day numbers for elapsed-day counts so daylight-saving transitions do not add or remove a day.</p>`
    },
    {
      title: "Month-End Example",
      body: `<p>From January 31 to March 1 in a non-leap year, the calendar-aware result is 1 month and 1 day: the February anniversary is clamped to February 28, with one additional day to March 1.</p>`
    },
    {
      title: "Leap-Day Birthdays",
      body: `<p>For a February 29 birth date, the annual anniversary is clamped to February 28 in non-leap years for this calculator's countdown. Legal treatment of leap-day birthdays can vary by jurisdiction.</p>`
    },
    {
      title: "Limits",
      body: `<p>The result uses the device's current local calendar date and is informational. It does not account for birth time, time zone at birth, legal age rules, or historical calendar systems.</p>`
    }
  ],
  methodology: "This tool compares the selected birth date with the current local date and adjusts years, months, and days using calendar month lengths.",
  disclaimer: "Age calculations are informational and based on your device date settings. They are not medical or legal advice.",
  script: `
function daysInMonth(year, monthIndex) {
    return new Date(year, monthIndex + 1, 0).getDate();
}
function clampedDate(year, monthIndex, day) {
    const normalizedYear = year + Math.floor(monthIndex / 12);
    const normalizedMonth = ((monthIndex % 12) + 12) % 12;
    return new Date(normalizedYear, normalizedMonth, Math.min(day, daysInMonth(normalizedYear, normalizedMonth)));
}
function calendarDayNumber(date) {
    return Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86400000);
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
    let cursor = clampedDate(birth.getFullYear() + years, birth.getMonth(), birth.getDate());
    if (cursor > current) {
        years -= 1;
        cursor = clampedDate(birth.getFullYear() + years, birth.getMonth(), birth.getDate());
    }
    let months = 0;
    while (months < 11) {
        const candidate = clampedDate(birth.getFullYear() + years, birth.getMonth() + months + 1, birth.getDate());
        if (candidate > current) break;
        months += 1;
        cursor = candidate;
    }
    const days = calendarDayNumber(current) - calendarDayNumber(cursor);
    const totalDays = calendarDayNumber(current) - calendarDayNumber(birth);
    let nextBirthday = clampedDate(current.getFullYear(), birth.getMonth(), birth.getDate());
    if (nextBirthday < current) nextBirthday = clampedDate(current.getFullYear() + 1, birth.getMonth(), birth.getDate());
    const daysToBirthday = calendarDayNumber(nextBirthday) - calendarDayNumber(current);
    document.getElementById('result-area').style.display = 'block';
    document.getElementById('calc-output').innerText = \`\${years}y \${months}m \${days}d\`;
    document.getElementById('calc-status').innerText = 'Exact Chronological Age';
    document.getElementById('calc-desc').innerText = \`You are \${years} years, \${months} months, and \${days} days old. That is approximately \${totalDays.toLocaleString()} total days.\`;
    document.getElementById('calc-suggestion').innerText = daysToBirthday === 0 ? 'Today is your birthday based on the selected date.' : \`Your next birthday is in \${daysToBirthday} day\${daysToBirthday === 1 ? '' : 's'}.\`;
    document.getElementById('result-area').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}`
};
