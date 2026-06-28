module.exports = {
  categoryHref: "emotional-connection.html",
  categoryLabel: "Emotional Connection",
  slug: "relationship-check-in-planner",
  title: "Relationship Check-In Planner | Questions And Timing",
  description: "Plan a short relationship check-in with timing, topic focus, and answerable questions for one important relationship.",
  h1: "Relationship Check-In Planner",
  hero: "Build a short, low-pressure relationship check-in plan with a topic, time box, and question sequence.",
  schemaName: "Relationship Check-In Planner",
  schemaDescription: "A browser-side planner for preparing a short relationship check-in conversation.",
  lastUpdated: "June 28, 2026",
  buttonText: "Build Check-In",
  resultHtml: `
            <div class="result-val"><span id="calc-output">20</span><span class="result-unit">min</span></div>
            <div class="result-status" id="calc-status">Suggested Check-In</div>
            <p class="result-desc" id="calc-desc"></p>
            <div class="suggestion-box"><h4>Question Sequence</h4><p id="calc-suggestion"></p></div>`,
  controlsHtml: `
        <div class="input-row">
            <div class="input-group"><label for="topic">Main Topic</label><div class="input-wrapper"><select id="topic"><option value="needs">Needs and support</option><option value="repair">Recent conflict repair</option><option value="schedule">Time and availability</option><option value="appreciation">Appreciation and connection</option></select></div></div>
            <div class="input-group"><label for="minutes">Time Box</label><div class="input-wrapper"><select id="minutes"><option value="10">10 minutes</option><option value="20" selected>20 minutes</option><option value="30">30 minutes</option></select></div></div>
        </div>
        <div class="input-group"><label for="tone">Conversation Tone</label><div class="input-wrapper"><select id="tone"><option value="curious">Curious and low-pressure</option><option value="specific">Specific and practical</option><option value="repair">Repair-focused</option></select></div></div>`,
  relatedTitle: "Prepare The Conversation",
  related: [
    { href: "https://toolsquark.com/tools/emotional-needs-clarity-self-check.html", title: "Emotional Needs Clarity", description: "Review what need or request is actually underneath the topic.", action: "Review Needs" },
    { href: "https://toolsquark.com/tools/conflict-repair-self-check.html", title: "Conflict Repair Pattern", description: "Review de-escalation, accountability, and follow-through after conflict.", action: "Review Repair" }
  ],
  references: [
    { title: "Perceived Partner Responsiveness and Relationship Well-Being", publisher: "Journal of Sex Research / PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/31090449/" },
    { title: "Social Connection", publisher: "World Health Organization", href: "https://www.who.int/news-room/fact-sheets/detail/social-connection" }
  ],
  faq: [
    { question: "What is a relationship check-in?", answer: "A check-in is a short planned conversation about how a relationship is working, what support is needed, or what should change next." },
    { question: "Can this fix a serious conflict?", answer: "No. It is a planning tool for low-to-moderate conversations. Safety, coercion, threats, or fear require specialized support." },
    { question: "How often should we do check-ins?", answer: "The useful rhythm depends on the relationship. Start with a short conversation after a specific event or once a week if both people agree." }
  ],
  contentSections: [
    { title: "What This Planner Creates", body: `<p>This tool creates a short check-in structure: one topic, a time box, and a sequence of questions. It is designed to reduce vague, open-ended conversations that become too large to answer.</p>` },
    { title: "A Useful Check-In Shape", body: `<div class="formula-box">Name the topic -> ask one open question -> make one answerable request -> agree on the next step</div>` },
    { title: "When Not To Use It", body: `<p>Do not use a check-in plan when disclosure could trigger retaliation, monitoring, threats, or fear. Prioritize safety and trusted support.</p>` }
  ],
  methodology: "This planner maps the selected topic, time box, and tone to an editorial question sequence intended for short, answerable conversations.",
  disclaimer: "This educational tool is not couples therapy, mediation, crisis support, or a safety assessment.",
  script: `
function calculateNow(){
  const topic=document.getElementById('topic').value;
  const minutes=document.getElementById('minutes').value;
  const tone=document.getElementById('tone').selectedOptions[0].text;
  const questions={
    needs:'What support would feel most useful this week? What is one request that would be easy to answer?',
    repair:'What impact still needs to be acknowledged? What small change would make the next attempt safer or clearer?',
    schedule:'Where are time or availability expectations unclear? What time boundary would help both people plan?',
    appreciation:'What felt connecting recently? What would you like more of this week?'
  };
  document.getElementById('result-area').style.display='block';
  document.getElementById('calc-output').innerText=minutes;
  document.getElementById('calc-status').innerText='Suggested Check-In';
  document.getElementById('calc-desc').innerText='Use a '+minutes+' minute time box with a '+tone.toLowerCase()+' tone. Stay on one topic and end with one next step.';
  document.getElementById('calc-suggestion').innerText=questions[topic];
  document.getElementById('result-area').scrollIntoView({behavior:'smooth',block:'nearest'});
}`
};
