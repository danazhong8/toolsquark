module.exports = {
  categoryHref: "lifestyle.html",
  categoryLabel: "Lifestyle Tools",
  slug: "screen-free-bedtime-planner",
  title: "Screen-Free Bedtime Planner | Build A Phone-Free Wind-Down",
  description: "Plan a screen-free bedtime wind-down by choosing bedtime, buffer length, and the first phone-free step.",
  h1: "Screen-Free Bedtime Planner",
  hero: "Create a simple phone-free wind-down window before bedtime and choose a first step that is easier to repeat.",
  schemaName: "Screen-Free Bedtime Planner",
  schemaDescription: "A browser-side planner for setting a screen-free wind-down start time before bedtime.",
  lastUpdated: "June 28, 2026",
  buttonText: "Plan Wind-Down",
  resultHtml: `
            <div class="result-val"><span id="calc-output">21:30</span></div>
            <div class="result-status" id="calc-status">Screen-Free Start Time</div>
            <p class="result-desc" id="calc-desc"></p>
            <div class="suggestion-box"><h4>First Step</h4><p id="calc-suggestion"></p></div>`,
  controlsHtml: `
        <div class="input-row">
            <div class="input-group"><label for="bedtime">Target Bedtime</label><div class="input-wrapper"><input type="time" id="bedtime" value="23:00"></div></div>
            <div class="input-group"><label for="buffer">Screen-Free Buffer</label><div class="input-wrapper"><select id="buffer"><option value="15">15 minutes</option><option value="30" selected>30 minutes</option><option value="45">45 minutes</option><option value="60">60 minutes</option><option value="90">90 minutes</option></select></div></div>
        </div>
        <div class="input-group"><label for="step">First Phone-Free Step</label><div class="input-wrapper"><select id="step"><option value="charging">Charge phone outside reach</option><option value="notifications">Silence nonessential notifications</option><option value="paper">Use a paper note for tomorrow</option><option value="alarm">Set a non-phone alarm</option></select></div></div>`,
  relatedTitle: "Compare The Pattern",
  related: [
    { href: "https://toolsquark.com/tools/smartphone-addiction-test.html", title: "Smartphone Use Pattern Self-Check", description: "Review automatic checking and displacement.", action: "Review Phone Use" },
    { href: "https://toolsquark.com/tools/sleep-quality-assessment.html", title: "Sleep Pattern Self-Check", description: "Review sleep initiation, continuity, and restoration.", action: "Review Sleep" }
  ],
  references: [
    { title: "Healthy Sleep Habits", publisher: "National Heart, Lung, and Blood Institute", href: "https://www.nhlbi.nih.gov/health/sleep-deprivation/healthy-sleep-habits" },
    { title: "About Sleep", publisher: "Centers for Disease Control and Prevention", href: "https://www.cdc.gov/sleep/about/index.html" }
  ],
  faq: [
    { question: "How long should a screen-free buffer be?", answer: "There is no perfect number. Start with a buffer you can repeat, such as 15 or 30 minutes, then increase only if it helps." },
    { question: "Does this prove screens cause my sleep problem?", answer: "No. It only plans one controllable boundary. Sleep can also be affected by stress, caffeine, pain, schedule, and medical issues." },
    { question: "What if I need my phone for an alarm?", answer: "Use the smallest practical change: put the phone across the room, use do-not-disturb, or use a separate alarm if available." }
  ],
  contentSections: [
    { title: "What This Planner Does", body: `<p>This planner counts backward from bedtime to create a screen-free wind-down start time. It also asks for one first step so the boundary is visible and repeatable.</p>` },
    { title: "Formula Used", body: `<div class="formula-box">Screen-free start = target bedtime - selected buffer</div>` },
    { title: "How To Use The Result", body: `<p>Try the same buffer for several nights before judging it. If the plan fails immediately, reduce the buffer or make the first step easier.</p>` }
  ],
  methodology: "This planner subtracts the selected screen-free buffer from the target bedtime and pairs the result with an implementation step.",
  disclaimer: "This is a behavior planning tool, not sleep treatment or medical advice.",
  script: `
function toMinutes(value){const [h,m]=value.split(':').map(Number);return h*60+m;}
function toTime(total){total=(total+1440)%1440;const h=String(Math.floor(total/60)).padStart(2,'0');const m=String(total%60).padStart(2,'0');return h+':'+m;}
function calculateNow(){
  const bedtime=document.getElementById('bedtime').value;
  const buffer=Number(document.getElementById('buffer').value);
  const step=document.getElementById('step').selectedOptions[0].text;
  const start=toTime(toMinutes(bedtime)-buffer);
  document.getElementById('result-area').style.display='block';
  document.getElementById('calc-output').innerText=start;
  document.getElementById('calc-status').innerText='Screen-Free Start Time';
  document.getElementById('calc-desc').innerText='For a '+bedtime+' bedtime and a '+buffer+' minute buffer, begin the phone-free wind-down at '+start+'.';
  document.getElementById('calc-suggestion').innerText='First step: '+step+'. Keep the plan small enough to repeat for at least three nights.';
  document.getElementById('result-area').scrollIntoView({behavior:'smooth',block:'nearest'});
}`
};
