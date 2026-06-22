module.exports = [
  {
    slug: "bmi-vs-body-fat-vs-waist",
    title: "BMI vs Body Fat vs Waist Measurements | ToolsQuark",
    description: "Compare BMI, body-fat estimates, waist-to-height ratio, and waist-to-hip ratio so you can choose the right screening tool and interpret its limits.",
    h1: "BMI vs Body Fat vs Waist Measurements",
    intro: "These measurements answer different questions. Use this guide to choose a starting metric without treating any single number as a complete picture of health.",
    primaryQuery: "bmi vs body fat",
    tools: [
      ["bmi-calculator", "BMI Calculator", "Calculate the standard adult height-to-weight screening ratio.", "Calculate BMI"],
      ["body-fat-calculator", "Body Fat Calculator", "Estimate body-fat percentage from circumference measurements.", "Estimate Body Fat"],
      ["waist-to-height-ratio-calculator", "Waist-to-Height Ratio", "Compare waist circumference with height.", "Check Waist Ratio"],
      ["waist-hip-ratio-calculator", "Waist-to-Hip Ratio", "Compare waist and hip circumference for distribution context.", "Check WHR"]
    ],
    sections: [
      ["Quick Comparison", `<div class="table-wrap"><table><thead><tr><th>Metric</th><th>Main question</th><th>Inputs</th><th>Important limitation</th></tr></thead><tbody><tr><td>BMI</td><td>How does weight compare with height?</td><td>Height, weight</td><td>Does not separate fat from muscle.</td></tr><tr><td>Body-fat estimate</td><td>What share of body mass may be fat?</td><td>Body circumferences</td><td>Measurement and equation error can be substantial.</td></tr><tr><td>Waist-to-height</td><td>How large is waist circumference relative to height?</td><td>Waist, height</td><td>A screening boundary cannot describe overall health.</td></tr><tr><td>Waist-to-hip</td><td>How is waist size distributed relative to hips?</td><td>Waist, hips</td><td>Technique and body shape affect the ratio.</td></tr></tbody></table></div>`],
      ["When BMI Is A Useful Starting Point", `<p>BMI is fast, standardized, and useful for broad adult screening. It can help place weight in height-adjusted context and makes population-level comparisons possible. It is not a direct measurement of body fat, fitness, nutrition, or metabolic health.</p><p>Use BMI when the immediate question is simply where current height and weight fall on the adult screening scale. Add another measure when muscularity, fat distribution, pregnancy, edema, aging, or illness changes how weight should be interpreted.</p>`],
      ["When A Body-Fat Estimate Adds Context", `<p>A circumference-based body-fat calculator tries to estimate composition rather than only weight relative to height. That can be useful when two people have a similar BMI but different amounts of lean mass. The result is still an equation-based estimate, not a scan or direct measurement.</p><p>Repeat measurements under similar conditions and focus on broad trends. Small changes may reflect tape placement, breathing, hydration, or rounding rather than a real change in body fat.</p>`],
      ["What Waist Ratios Add", `<p>Waist measures focus on central size and distribution. Waist-to-height ratio asks how waist circumference compares with stature. Waist-to-hip ratio compares two circumferences and is more sensitive to body shape and hip measurement.</p><p>For a simple second screen after BMI, waist-to-height is usually easier to explain. Waist-to-hip can add distribution context, but the two pages should not be treated as competing diagnoses.</p>`],
      ["A Practical Measurement Sequence", `<ol><li>Start with BMI when you need a standard height-to-weight screen.</li><li>Add waist-to-height ratio when central size is relevant.</li><li>Use a body-fat estimate when composition is the actual question and you can measure consistently.</li><li>Use waist-to-hip ratio only when distribution is specifically useful.</li></ol><p>Look for agreement or disagreement between measures. A disagreement is a reason to add context, not to choose whichever result feels most favorable.</p>`],
      ["Limits And Next Steps", `<p>None of these tools diagnoses disease or defines an ideal body. Blood pressure, laboratory markers, strength, nutrition status, symptoms, medical history, and changes over time may matter more than a single ratio.</p><div class="note">Children, pregnancy, major fluid shifts, amputations, and significant illness require methods and interpretation beyond standard adult calculators.</div>`]
    ],
    faq: [
      ["Is BMI or body-fat percentage more accurate?", "They estimate different things. BMI is a height-to-weight screen; circumference equations estimate body composition with additional measurement error."],
      ["Should I use waist-to-height or waist-to-hip ratio?", "Waist-to-height is a simpler central-size screen. Waist-to-hip is useful when distribution relative to hip circumference is the specific question."],
      ["Can a healthy BMI guarantee good health?", "No. BMI cannot show fitness, fat distribution, nutrition status, blood pressure, laboratory results, or symptoms."]
    ],
    references: [
      ["About Body Mass Index", "Centers for Disease Control and Prevention", "https://www.cdc.gov/bmi/about/index.html"],
      ["Predicting Percent Body Fat from Circumference Measurements", "Military Medicine / PubMed", "https://pubmed.ncbi.nlm.nih.gov/8437737/"]
    ],
    related: ["bmr-vs-tdee-vs-calorie-goal", "how-to-set-macro-targets"]
  },
  {
    slug: "bmr-vs-tdee-vs-calorie-goal",
    title: "BMR vs TDEE vs Calorie Goal: What Each Number Means | ToolsQuark",
    description: "Understand the difference between BMR, TDEE, maintenance calories, and a daily calorie goal before choosing a deficit or surplus.",
    h1: "BMR vs TDEE vs A Daily Calorie Goal",
    intro: "BMR, TDEE, and a calorie goal belong to one planning sequence, but they are not interchangeable numbers.",
    primaryQuery: "bmr vs tdee",
    tools: [
      ["bmr-calculator", "BMR Calculator", "Estimate predicted resting energy before activity.", "Calculate BMR"],
      ["tdee-calculator", "TDEE Calculator", "Estimate maintenance energy after an activity multiplier.", "Estimate TDEE"],
      ["calorie-calculator", "Daily Calorie Goal Calculator", "Apply a visible deficit, maintenance, or surplus adjustment.", "Plan A Goal"],
      ["macro-calculator", "Macro Calculator", "Distribute an existing calorie target across macros.", "Set Macros"]
    ],
    sections: [
      ["The Three-Step Sequence", `<div class="flow"><strong>BMR</strong><span>resting estimate</span><b>&rarr;</b><strong>TDEE</strong><span>maintenance estimate</span><b>&rarr;</b><strong>Calorie goal</strong><span>planned intake</span></div><p>BMR is an equation estimate of resting needs. TDEE multiplies that estimate by an activity factor. A daily calorie goal changes TDEE according to a chosen objective.</p>`],
      ["What BMR Does And Does Not Mean", `<p>Basal metabolic rate describes energy used at rest under controlled conditions. Online calculators predict it from body weight, height, age, and the sex-specific constants in an equation such as Mifflin-St Jeor.</p><p>BMR is not a suggested food intake. Normal daily life adds movement, exercise, digestion, and other expenditure. Planning intake directly from BMR can therefore confuse a resting estimate with a full-day need.</p>`],
      ["TDEE Is A Maintenance Starting Point", `<p>Total Daily Energy Expenditure adds a broad activity multiplier to predicted BMR. The result is an estimated maintenance level: the approximate intake associated with weight stability if the assumptions fit.</p><p>Activity categories are imprecise. Two people choosing “moderately active” may have different step counts, training loads, jobs, and non-exercise movement. Treat TDEE as a starting hypothesis and compare it with a multi-week trend.</p>`],
      ["A Calorie Goal Is A Decision", `<p>A deficit or surplus is not discovered by the BMR equation. It is selected after estimating maintenance. ToolsQuark uses visible percentage options so the adjustment scales with the maintenance estimate and remains inspectable.</p><p>Choose the smallest adjustment likely to support the goal. Larger changes are not automatically more effective once hunger, adherence, recovery, and nutritional adequacy are considered.</p>`],
      ["Worked Example", `<p>Suppose predicted BMR is 1,600 kcal/day. An activity multiplier of 1.55 produces an estimated TDEE near 2,480 kcal/day. A 10% deficit would create a planning target near 2,232 kcal/day; a 5% surplus would create about 2,604 kcal/day.</p><p>The useful test is not whether the arithmetic is exact. It is whether average intake, weight trend, energy, and training response over two to four weeks support the estimate.</p>`],
      ["Avoiding Tool Overlap", `<p>Use BMR only for the resting baseline, TDEE for maintenance, Daily Calorie Goal for an explicit adjustment, and Macro Calculator only after a calorie target exists. This order prevents four calculators from giving the same answer under different names.</p><div class="note">Pregnancy, breastfeeding, growth, eating-disorder history, significant illness, and medical nutrition needs require individualized professional guidance.</div>`]
    ],
    faq: [
      ["Is TDEE the same as maintenance calories?", "TDEE is an estimate of maintenance energy. Real maintenance can differ and should be calibrated against a multi-week trend."],
      ["Should I eat my BMR?", "BMR is a resting estimate, not automatically an intake recommendation. Daily activity and individual context must be considered."],
      ["Why do calorie calculators give different answers?", "They may use different BMR equations, activity factors, rounding, and goal adjustments."]
    ],
    references: [
      ["A New Predictive Equation for Resting Energy Expenditure", "The American Journal of Clinical Nutrition / PubMed", "https://pubmed.ncbi.nlm.nih.gov/2305711/"],
      ["Body Weight Planner", "National Institute of Diabetes and Digestive and Kidney Diseases", "https://www.niddk.nih.gov/bwp"]
    ],
    related: ["how-to-set-macro-targets", "bmi-vs-body-fat-vs-waist"]
  },
  {
    slug: "how-to-set-macro-targets",
    title: "How To Set Protein, Fat And Carb Targets | ToolsQuark",
    description: "Learn a transparent way to turn an existing calorie target into protein, fat, and carbohydrate grams without forcing one fixed macro split.",
    h1: "How To Set Macro Targets Without A Fixed Split",
    intro: "A useful macro plan begins with an existing calorie target, then makes each protein and fat assumption visible before calculating carbohydrate.",
    primaryQuery: "how to set macros",
    tools: [
      ["macro-calculator", "Macro Calculator", "Convert calories into adjustable protein, fat, and carb grams.", "Calculate Macros"],
      ["protein-calculator", "Protein Calculator", "Compare body-weight protein factors separately.", "Check Protein"],
      ["calorie-calculator", "Daily Calorie Goal Calculator", "Create the calorie input before distributing macros.", "Plan Calories"]
    ],
    sections: [
      ["Start With Calories, Not Percentages", `<p>Macro grams must fit inside a total energy budget. Selecting percentages before choosing calories can hide the more important assumption. Establish a maintenance, deficit, or surplus target first, then decide how to distribute it.</p>`],
      ["Set Protein From Body Weight", `<p>Protein is often easier to reason about in grams per kilogram than as a percentage of calories. A percentage can produce unnecessarily high grams at high calorie intakes and low grams during a deficit.</p><p>The calculator provides selectable factors rather than claiming one requirement for everyone. Training, age, energy intake, food pattern, and medical context influence an appropriate choice.</p>`],
      ["Set A Visible Fat Share", `<p>After protein, choose a fat percentage that leaves room for food preference and carbohydrate needs. The acceptable distribution of dietary fat is a range, not one perfect number. The planner exposes the selected percentage instead of burying it in a preset.</p>`],
      ["Let Carbohydrate Use The Remainder", `<p>Protein and carbohydrate contribute about 4 kcal per gram, while fat contributes about 9 kcal per gram. Once protein and fat calories are assigned, carbohydrate can fill the remaining energy budget.</p><div class="formula">Carb grams = (target calories - protein calories - fat calories) / 4</div>`],
      ["Worked Example", `<p>At 2,000 kcal, 70 kg, 1.6 g/kg protein, and 30% calories from fat, the plan produces about 112 g protein and 67 g fat. After rounding, the remaining energy provides about 237 g carbohydrate.</p><p>This is a starting structure, not a requirement to hit every gram every day. Weekly consistency, food quality, fiber, micronutrients, digestion, and adherence still matter.</p>`],
      ["When Generic Macros Are Not Appropriate", `<p>Diabetes, kidney disease, pregnancy, breastfeeding, pediatric growth, eating-disorder history, allergies, and therapeutic diets require individualized guidance. A macro calculator cannot assess whether the calorie target is safe or nutritionally complete.</p>`]
    ],
    faq: [
      ["What is the best macro split?", "There is no single best percentage split for everyone. Body size, training, preference, health context, and adherence all matter."],
      ["Why calculate protein by body weight?", "A body-weight factor keeps protein grams tied to body size instead of allowing calorie intake alone to determine them."],
      ["Do macro grams have to be exact?", "No. Treat them as planning targets and evaluate the overall food pattern and real-world response."]
    ],
    references: [
      ["Dietary Reference Intakes for Energy and Macronutrients", "National Academies Press", "https://nap.nationalacademies.org/catalog/10490/dietary-reference-intakes-for-energy-carbohydrate-fiber-fat-fatty-acids-cholesterol-protein-and-amino-acids"],
      ["Position Stand: Protein and Exercise", "Journal of the ISSN / PubMed", "https://pubmed.ncbi.nlm.nih.gov/28642676/"]
    ],
    related: ["bmr-vs-tdee-vs-calorie-goal", "bmi-vs-body-fat-vs-waist"]
  },
  {
    slug: "sleep-schedule-and-sleep-quality",
    title: "Sleep Schedule vs Sleep Quality: What To Fix First | ToolsQuark",
    description: "Separate bedtime and wake-time planning from sleep quality, restoration, and daytime impact, then choose the right sleep tool.",
    h1: "Sleep Schedule And Sleep Quality Are Different Problems",
    intro: "A clock-time planner can create enough opportunity for sleep. It cannot determine whether sleep is continuous, restorative, or medically healthy.",
    primaryQuery: "sleep schedule vs sleep quality",
    tools: [
      ["sleep-calculator", "Sleep Schedule Calculator", "Plan bedtime or wake time from duration and sleep latency.", "Plan A Schedule"],
      ["sleep-quality-assessment", "Sleep Pattern Self-Check", "Review initiation, continuity, restoration, and daytime impact.", "Review Sleep"],
      ["stress-index-test", "Stress Pattern Self-Check", "Review whether overload and reactivity may be affecting recovery.", "Review Stress"]
    ],
    sections: [
      ["Two Separate Questions", `<div class="table-wrap"><table><thead><tr><th>Question</th><th>Best starting tool</th><th>What it cannot answer</th></tr></thead><tbody><tr><td>What time should I go to bed?</td><td>Sleep Schedule Calculator</td><td>Whether sleep will be restorative.</td></tr><tr><td>Why do I still feel tired?</td><td>Sleep Pattern Self-Check</td><td>The medical cause of poor sleep.</td></tr></tbody></table></div>`],
      ["What A Schedule Calculator Can Do", `<p>A sleep schedule calculator adds target sleep duration to expected sleep latency, then counts backward from a wake time or forward from a bedtime. It helps reserve enough time in bed.</p><p>It should not promise that waking at a fixed 90-minute boundary will prevent tiredness. Sleep cycles vary between people and across the night.</p>`],
      ["What Sleep Quality Includes", `<p>Sleep quality is broader than duration. Falling asleep, staying asleep, feeling restored, and functioning during the day can move independently. Someone may allow eight hours in bed but experience frequent awakenings or unrefreshing sleep.</p><p>A self-check can organize those experiences, but it cannot diagnose insomnia, sleep apnea, a circadian disorder, or another condition.</p>`],
      ["Choose The First Change", `<ol><li>If time in bed is consistently too short, protect a realistic schedule first.</li><li>If time is adequate but sleep feels poor, review continuity, restoration, and daytime effects.</li><li>If stress is delaying sleep, address the stress pattern alongside timing.</li><li>If symptoms or unsafe sleepiness persist, seek qualified assessment.</li></ol>`],
      ["A One-Week Calibration", `<p>Keep wake time reasonably stable, record when you enter bed, estimate sleep onset, note awakenings, and rate morning restoration. This small log helps separate schedule opportunity from sleep-quality difficulty without turning one unusual night into a conclusion.</p>`],
      ["Safety Signals", `<p>Loud habitual snoring, witnessed breathing pauses, morning headaches, persistent insomnia, or unsafe daytime sleepiness deserve clinical attention. A calculator or original checklist cannot rule out a sleep disorder.</p>`]
    ],
    faq: [
      ["Does sleeping eight hours mean sleep quality is good?", "No. Duration does not show continuity, restoration, breathing, or daytime functioning."],
      ["Should I plan around 90-minute cycles?", "Fixed-cycle timing creates false precision because cycle length varies. Prioritize adequate total sleep and a workable schedule."],
      ["When should tiredness be assessed professionally?", "Seek qualified help when sleep problems persist, impair daily life, or include breathing pauses or unsafe sleepiness."]
    ],
    references: [
      ["About Sleep", "Centers for Disease Control and Prevention", "https://www.cdc.gov/sleep/about/index.html"],
      ["Healthy Sleep Habits", "National Heart, Lung, and Blood Institute", "https://www.nhlbi.nih.gov/health/sleep-deprivation/healthy-sleep-habits"]
    ],
    related: ["stress-vs-anxiety-patterns", "procrastination-vs-follow-through"]
  },
  {
    slug: "stress-vs-anxiety-patterns",
    title: "Stress vs Anxiety Patterns: How They Differ | ToolsQuark",
    description: "Compare overload and control strain with persistent worry and high-alert experiences, then choose the appropriate private self-check.",
    h1: "Stress vs Anxiety Patterns",
    intro: "Stress and anxiety can overlap, but the most useful first question is whether the experience is organized around current demands or persists as worry and high alert beyond one demand.",
    primaryQuery: "stress vs anxiety",
    tools: [
      ["stress-index-test", "Stress Pattern Self-Check", "Review overload, control strain, reactivity, and impact.", "Review Stress"],
      ["anxiety-hyperarousal-assessment", "Anxiety & High-Alert Self-Check", "Review worry, physical alertness, sensitivity, and recovery.", "Review Anxiety"],
      ["cognitive-overthinking-test", "Overthinking Pattern Self-Check", "Review repetitive thought loops and action displacement.", "Review Thought Loops"]
    ],
    sections: [
      ["A Practical Difference", `<div class="table-wrap"><table><thead><tr><th>Pattern</th><th>Common organizing question</th><th>ToolsQuark dimensions</th></tr></thead><tbody><tr><td>Stress</td><td>Are current demands exceeding perceived capacity or control?</td><td>Overload, control strain, reactivity, impact</td></tr><tr><td>Anxiety/high alert</td><td>Does worry or physical alertness persist, spread, or resist recovery?</td><td>Physical alertness, worry, sensitivity, recovery</td></tr></tbody></table></div>`],
      ["Where They Overlap", `<p>Both patterns can involve tension, sleep disruption, irritability, concentration difficulty, and avoidance. A stressful period can increase worry, and persistent anxiety can make normal demands feel harder to manage.</p><p>The goal is not to force every experience into one box. It is to choose the self-check whose dimensions best match the question you want to examine.</p>`],
      ["Start With Stress When", `<p>Use the stress self-check when workload, caregiving, uncertainty, conflict, or too many demands are central. The result organizes perceived load, control strain, reactivity, and interference with daily life.</p>`],
      ["Start With Anxiety And High Alert When", `<p>Use the anxiety self-check when worry continues across situations, the body remains unusually alert, triggers feel broad, or returning to baseline is difficult. It is still an original educational checklist, not a validated diagnostic scale.</p>`],
      ["Use Functioning As A Separate Signal", `<p>A score should never override daily-life impact. Difficulty working, studying, sleeping, caring for yourself, maintaining relationships, or staying safe deserves attention regardless of the total.</p>`],
      ["What To Do With The Result", `<p>Choose one dimension rather than trying to change everything. Reduce one controllable demand, define the next action, protect recovery, or seek qualified support when the pattern persists or intensifies.</p><div class="note">Use urgent local support when you may be unable to stay safe. These pages do not provide crisis assessment.</div>`]
    ],
    faq: [
      ["Can stress turn into anxiety?", "Stressful demands can increase worry and alertness, but only a qualified professional can assess a clinical condition."],
      ["Which test should I take first?", "Choose Stress when current demands and control are central; choose Anxiety & High Alert when persistent worry and alertness are the main concern."],
      ["Can I take both self-checks?", "Yes, if you keep the same recall period in mind and interpret each result by its distinct dimensions rather than adding the scores together."]
    ],
    references: [
      ["So Stressed Out?", "National Institute of Mental Health", "https://www.nimh.nih.gov/health/publications/so-stressed-out-fact-sheet"],
      ["Anxiety Disorders", "National Institute of Mental Health", "https://www.nimh.nih.gov/health/topics/anxiety-disorders"]
    ],
    related: ["sleep-schedule-and-sleep-quality", "procrastination-vs-follow-through"]
  },
  {
    slug: "procrastination-vs-follow-through",
    title: "Procrastination vs Follow-Through: Find The Real Friction | ToolsQuark",
    description: "Separate task-specific delay from broader consistency and restarting problems, then choose a more useful self-check and next action.",
    h1: "Procrastination And Follow-Through Are Not The Same",
    intro: "One pattern delays starting a particular task; the other concerns maintaining routines and restarting after disruption.",
    primaryQuery: "procrastination vs self discipline",
    tools: [
      ["procrastination-test", "Procrastination Pattern Self-Check", "Review initiation, avoidance, reward pull, and perfectionistic delay.", "Review Delay"],
      ["self-discipline-test", "Follow-Through Pattern Self-Check", "Review starting friction, consistency, impulses, and restarting.", "Review Follow-Through"],
      ["focus-attention-diagnostic", "Focus & Attention Self-Check", "Review distractibility, sustained attention, and organization.", "Review Focus"]
    ],
    sections: [
      ["Choose The Right Question", `<div class="table-wrap"><table><thead><tr><th>If the main problem is...</th><th>Start with...</th></tr></thead><tbody><tr><td>One important task repeatedly delayed despite intention</td><td>Procrastination Pattern</td></tr><tr><td>Routines collapse after interruptions or inconsistent days</td><td>Follow-Through Pattern</td></tr><tr><td>Attention drifts even after a task has started</td><td>Focus & Attention Pattern</td></tr></tbody></table></div>`],
      ["Procrastination Is Usually Task-Specific", `<p>Procrastination is not simply doing nothing. It often replaces an intended task with an easier, more rewarding, or emotionally safer action. Difficulty starting, avoidance of discomfort, short-term reward pull, and perfectionistic delay can produce the same outward postponement for different reasons.</p>`],
      ["Follow-Through Is A System Pattern", `<p>Follow-through concerns consistency across time: starting with reasonable friction, maintaining a routine, handling immediate impulses, and restarting after a lapse. Calling this “discipline” can invite moral judgment when the practical issue is a fragile routine or unrealistic plan.</p>`],
      ["Focus Is A Third Question", `<p>A person can start promptly and still struggle to sustain attention. They can also focus well once started but avoid beginning. Keeping attention separate prevents every execution problem from being mislabeled as procrastination.</p>`],
      ["Match The Intervention To The Friction", `<ul><li><strong>Initiation:</strong> define a visible first action that takes less than ten minutes.</li><li><strong>Avoidance:</strong> name the feeling the task brings up and reduce exposure size.</li><li><strong>Reward pull:</strong> remove one immediate alternative during the start window.</li><li><strong>Restarting:</strong> define the smallest version of the routine that counts after disruption.</li></ul>`],
      ["Avoid A Character Verdict", `<p>An original self-check cannot determine laziness, willpower, ADHD, depression, or another cause. Use the result as a description of recent behavior and context. Persistent impairment deserves qualified assessment.</p>`]
    ],
    faq: [
      ["Is procrastination a lack of discipline?", "Not necessarily. Task emotion, unclear next actions, reward timing, perfectionism, attention, and context can all contribute."],
      ["Why can I focus after finally starting?", "Initiation and sustained attention are different processes. Strong focus after starting can coexist with repeated delay."],
      ["Should I take the focus test too?", "Use it when distractibility or sustained attention remains difficult after the task has begun."]
    ],
    references: [
      ["The Nature of Procrastination: A Meta-Analytic Review", "Psychological Bulletin / PubMed", "https://pubmed.ncbi.nlm.nih.gov/17201571/"],
      ["What Research Has Been Conducted on Procrastination?", "Frontiers in Psychology / PubMed", "https://pubmed.ncbi.nlm.nih.gov/35185729/"]
    ],
    related: ["stress-vs-anxiety-patterns", "sleep-schedule-and-sleep-quality"]
  },
  {
    slug: "identify-and-communicate-emotional-needs",
    title: "How To Identify And Communicate Emotional Needs | ToolsQuark",
    description: "Move from a vague emotional reaction to a named need and answerable request without treating needs as demands or labels.",
    h1: "How To Identify And Communicate Emotional Needs",
    intro: "Clarity improves when you separate the feeling, the underlying need, the request, and the other person's freedom to answer.",
    primaryQuery: "how to identify emotional needs",
    tools: [
      ["emotional-needs-clarity-self-check", "Emotional Needs Clarity Self-Check", "Review noticing, naming, requesting, and responding to needs.", "Review Needs"],
      ["emotional-communication-self-check", "Emotional Communication Self-Check", "Review identification, specificity, ownership, and timing.", "Review Communication"],
      ["felt-understood-self-check", "Felt Understood Self-Check", "Review attention, accuracy, validation, and response fit.", "Review Understanding"]
    ],
    sections: [
      ["Use A Four-Part Sequence", `<div class="flow"><strong>Signal</strong><span>what changed?</span><b>&rarr;</b><strong>Feeling</strong><span>what is present?</span><b>&rarr;</b><strong>Need</strong><span>what matters?</span><b>&rarr;</b><strong>Request</strong><span>what could help?</span></div>`],
      ["Start With The Earliest Signal", `<p>Needs are often easier to identify before strain becomes intense. Notice changes in attention, body tension, withdrawal, irritability, or repeated thoughts. A signal is not proof of one need, but it is a prompt to pause.</p>`],
      ["Name The Need More Broadly Than The Strategy", `<p>“I need you to reply immediately” is a strategy. The underlying need might involve reassurance, predictability, inclusion, or clarity. Separating need from strategy creates more than one possible response.</p><p>Common categories include understanding, rest, autonomy, belonging, reliability, appreciation, privacy, practical help, and reassurance. A list can prompt reflection but should not dictate the answer.</p>`],
      ["Turn The Need Into An Answerable Request", `<p>A request is specific enough to receive yes, no, or an alternative. “Can we talk for fifteen minutes after dinner?” is easier to answer than “Be more emotionally available.” State the time, action, and purpose without claiming to know the other person's motive.</p>`],
      ["Keep Consent And Capacity In The Process", `<p>Identifying a need does not obligate one person to meet it. The other person may have a boundary, limited capacity, or a different interpretation. Clarity helps both people discuss alternatives rather than turning a need into a verdict.</p>`],
      ["When Communication Is Not The Main Problem", `<p>Clear wording cannot make coercion, retaliation, monitoring, or fear safe. In unsafe situations, greater disclosure may increase risk. Privacy, trusted support, and specialized resources can be more appropriate than another conversation.</p>`]
    ],
    faq: [
      ["Is an emotional need the same as a request?", "No. A need describes what matters internally; a request is one possible action that could support it."],
      ["What if I cannot name the feeling?", "Begin with the situation and body or attention signal, then compare a few possible feeling words without forcing certainty."],
      ["Does the other person have to meet the need?", "No. A clear need supports negotiation, boundaries, alternatives, and an honest answer."]
    ],
    references: [
      ["Perceived Partner Responsiveness and Relationship Well-Being", "Journal of Sex Research / PubMed", "https://pubmed.ncbi.nlm.nih.gov/31090449/"],
      ["Social Connection", "World Health Organization", "https://www.who.int/news-room/fact-sheets/detail/social-connection"]
    ],
    related: ["relationship-conflict-repair", "stress-vs-anxiety-patterns"]
  },
  {
    slug: "relationship-conflict-repair",
    title: "Relationship Conflict Repair: What To Do After An Argument | ToolsQuark",
    description: "Use a practical conflict-repair sequence covering de-escalation, accountability, reconnection, and follow-through without deciding who is right.",
    h1: "A Practical Relationship Conflict Repair Sequence",
    intro: "Repair is not pretending the conflict did not happen. It is the work of returning to enough safety and clarity to address impact and change what happens next.",
    primaryQuery: "relationship conflict repair",
    tools: [
      ["conflict-repair-self-check", "Conflict Repair Self-Check", "Review de-escalation, accountability, reconnection, and learning.", "Review Repair"],
      ["emotional-communication-self-check", "Emotional Communication Self-Check", "Review clarity and timing during difficult conversations.", "Review Communication"],
      ["safe-emotional-disclosure-self-check", "Safe Emotional Disclosure Self-Check", "Review safety, boundaries, reception, and aftermath.", "Review Disclosure"]
    ],
    sections: [
      ["Four Parts Of Repair", `<div class="flow"><strong>De-escalate</strong><span>reduce activation</span><b>&rarr;</b><strong>Account</strong><span>name impact</span><b>&rarr;</b><strong>Reconnect</strong><span>restore contact</span><b>&rarr;</b><strong>Learn</strong><span>change the next attempt</span></div>`],
      ["1. De-Escalate Without Disappearing", `<p>A pause is useful when it lowers activation and includes a return plan. Abrupt withdrawal with no explanation can create additional uncertainty. Name that the conversation is not workable now, what you will do during the pause, and when you can revisit it.</p>`],
      ["2. Take Specific Accountability", `<p>Accountability describes an observable action and its likely impact without using intent as an escape. “I interrupted repeatedly and that made it hard for you to finish” is more useful than a broad apology followed by a defense.</p><p>Each person can acknowledge their own contribution without accepting a false claim or abandoning a boundary.</p>`],
      ["3. Reconnect Before Solving Everything", `<p>Reconnection can be a short acknowledgment, a check on readiness, or agreement about the immediate next step. It does not require instant agreement, affection, or closure. The aim is enough stability for the issue to be discussed productively.</p>`],
      ["4. Convert Insight Into A Small Change", `<p>A repair conversation is incomplete when the same conditions remain untouched. Choose one observable change: a new pause signal, a limit on the number of issues discussed, a clearer request, or a scheduled follow-up.</p>`],
      ["Safety Changes The Goal", `<p>Repair requires enough safety and freedom for both people to participate. Coercion, threats, stalking, retaliation, or fear of harm are not communication puzzles to solve with greater vulnerability.</p><div class="note">When safety is uncertain, prioritize trusted support and specialized local resources over a joint repair exercise.</div>`]
    ],
    faq: [
      ["Does repair mean both people were equally responsible?", "No. Repair can include different levels of responsibility and does not require accepting a false equivalence."],
      ["How long should a conflict pause last?", "Long enough to reduce activation, but with a realistic return time so the pause does not become indefinite avoidance."],
      ["Can every conflict be repaired?", "No. Repair depends on safety, willingness, capacity, boundaries, and follow-through. A checklist cannot decide whether a relationship should continue."]
    ],
    references: [
      ["Perceived Partner Responsiveness and Relationship Well-Being", "Journal of Sex Research / PubMed", "https://pubmed.ncbi.nlm.nih.gov/31090449/"],
      ["Adult Attachment and Mental Health: A Meta-Analysis", "Journal of Personality and Social Psychology / PubMed", "https://pubmed.ncbi.nlm.nih.gov/36201836/"]
    ],
    related: ["identify-and-communicate-emotional-needs", "stress-vs-anxiety-patterns"]
  }
];
