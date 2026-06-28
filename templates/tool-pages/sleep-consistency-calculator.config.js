module.exports = {
  categoryHref: "lifestyle.html",
  categoryLabel: "Lifestyle Tools",
  slug: "sleep-consistency-calculator",
  title: "Sleep Consistency Calculator | Bedtime And Wake-Time Stability",
  description: "Calculate sleep schedule consistency from your earliest and latest bedtime and wake time. Review weekly timing stability without creating an account.",
  h1: "Sleep Consistency Calculator",
  hero: "Estimate how consistent your sleep timing was this week from your earliest and latest bedtime and wake time.",
  schemaName: "Privacy-First Sleep Consistency Calculator",
  schemaDescription: "A browser-side sleep consistency calculator that estimates weekly bedtime and wake-time variability.",
  lastUpdated: "June 28, 2026",
  buttonText: "Calculate Consistency",
  resultHtml: `
            <div class="result-val"><span id="calc-output">0</span><span class="result-unit">min</span></div>
            <div class="result-status" id="calc-status">Timing Variability</div>
            <p class="result-desc" id="calc-desc"></p>
            <div class="suggestion-box"><h4>Next Timing Step</h4><p id="calc-suggestion"></p></div>`,
  controlsHtml: `
        <div class="input-row">
            <div class="input-group"><label for="earliest_bed">Earliest Bedtime</label><div class="input-wrapper"><input type="time" id="earliest_bed" value="22:30"></div></div>
            <div class="input-group"><label for="latest_bed">Latest Bedtime</label><div class="input-wrapper"><input type="time" id="latest_bed" value="00:15"></div></div>
        </div>
        <div class="input-row">
            <div class="input-group"><label for="earliest_wake">Earliest Wake Time</label><div class="input-wrapper"><input type="time" id="earliest_wake" value="06:45"></div></div>
            <div class="input-group"><label for="latest_wake">Latest Wake Time</label><div class="input-wrapper"><input type="time" id="latest_wake" value="08:00"></div></div>
        </div>`,
  relatedTitle: "Review Sleep Timing",
  related: [
    { href: "https://toolsquark.com/tools/sleep-calculator.html", title: "Sleep Schedule Calculator", description: "Plan bedtime or wake time from a sleep duration target.", action: "Plan Schedule" },
    { href: "https://toolsquark.com/tools/sleep-debt-calculator.html", title: "Sleep Debt Calculator", description: "Estimate the gap between target sleep and recent sleep.", action: "Estimate Debt" }
  ],
  references: [
    { title: "About Sleep", publisher: "Centers for Disease Control and Prevention", href: "https://www.cdc.gov/sleep/about/index.html" },
    { title: "Healthy Sleep Habits", publisher: "National Heart, Lung, and Blood Institute", href: "https://www.nhlbi.nih.gov/health/sleep-deprivation/healthy-sleep-habits" }
  ],
  faq: [
    { question: "What is sleep consistency?", answer: "Sleep consistency describes how stable your bedtime and wake time are across a review period. This calculator uses the spread between earliest and latest times." },
    { question: "Is wake-time consistency more important than bedtime?", answer: "For many people, a stable wake time is the easier anchor. Bedtime can then move earlier or later depending on sleep pressure and schedule needs." },
    { question: "Can this diagnose a circadian rhythm problem?", answer: "No. It is a timing review tool, not a diagnostic test. Persistent insomnia, unsafe sleepiness, or major schedule disruption deserves qualified guidance." }
  ],
  contentSections: [
    { title: "What This Calculator Estimates", body: `<p>This tool estimates weekly sleep timing variability from the spread between your earliest and latest bedtime and wake time. It is most useful when you already know the approximate range from a sleep diary, calendar, or wearable.</p>` },
    { title: "Formula Used", body: `<div class="formula-box">Timing variability = average of bedtime spread and wake-time spread</div><p>The result is a rough stability score. It does not measure sleep stages, sleep quality, or whether the schedule fits your body clock.</p>` },
    { title: "How To Use The Result", body: `<p>If variability is high, choose one anchor first. A consistent wake time is often easier to protect than a perfect bedtime. Then adjust the bedtime window in small steps.</p>` },
    { title: "When Timing Is Not The Whole Issue", body: `<p>Consistent timing can still coexist with poor sleep quality, frequent awakenings, stress, pain, caffeine effects, or breathing problems. Use this result with sleep quality and sleep debt tools when needed.</p>` }
  ],
  methodology: "This calculator converts the four time inputs into minutes, calculates bedtime spread and wake-time spread, handles overnight bedtime ranges, averages the two spreads, and maps the result to editorial timing bands.",
  disclaimer: "Sleep consistency is an educational planning metric. It does not diagnose sleep disorders or determine a medically appropriate schedule.",
  script: `
function minutes(value){const parts=value.split(':').map(Number);return parts[0]*60+parts[1];}
function spread(start,end){let diff=end-start;if(diff<0)diff+=1440;return Math.min(diff,1440-diff);}
function calculateNow(){
  const eb=minutes(document.getElementById('earliest_bed').value);
  const lb=minutes(document.getElementById('latest_bed').value);
  const ew=minutes(document.getElementById('earliest_wake').value);
  const lw=minutes(document.getElementById('latest_wake').value);
  const bedSpread=spread(eb,lb);
  const wakeSpread=spread(ew,lw);
  const average=Math.round((bedSpread+wakeSpread)/2);
  let status='Stable Timing';
  let suggestion='Your timing range is fairly stable. Keep the anchor that is easiest to repeat.';
  if(average>60&&average<=120){status='Moderate Timing Drift';suggestion='Choose one anchor, usually wake time, and narrow the range by 15-30 minutes this week.';}
  if(average>120){status='High Timing Drift';suggestion='Start by protecting a realistic wake-time window before trying to perfect bedtime.';}
  document.getElementById('result-area').style.display='block';
  document.getElementById('calc-output').innerText=average;
  document.getElementById('calc-status').innerText=status;
  document.getElementById('calc-desc').innerText='Bedtime spread: '+bedSpread+' minutes. Wake-time spread: '+wakeSpread+' minutes. Average timing variability: '+average+' minutes.';
  document.getElementById('calc-suggestion').innerText=suggestion;
  document.getElementById('result-area').scrollIntoView({behavior:'smooth',block:'nearest'});
}`
};
