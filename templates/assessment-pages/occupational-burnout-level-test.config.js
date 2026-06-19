module.exports = {
  slug: "occupational-burnout-level-test",
  title: "Accurate Occupational Burnout Level Test | Workplace Fatigue Audit | ToolsQuark",
  description: "Evaluate your professional fatigue parameters, chronic emotional exhaustion, and career efficacy using our advanced workplace burnout tracker.",
  h1: "Occupational Burnout Level Test",
  hero: "Assess work-related exhaustion, detachment, and reduced efficacy before fatigue becomes your default operating mode.",
  schemaName: "Privacy-First Occupational Burnout Test",
  questions: [
    { question: "How often do you feel emotionally drained by work?", options: ["Rarely", "Sometimes", "Often", "Almost daily"] },
    { question: "How often do you feel detached or cynical about your work?", options: ["Rarely", "Sometimes", "Often", "Almost daily"] },
    { question: "How often does work fatigue spill into evenings or weekends?", options: ["Rarely", "Sometimes", "Often", "Almost always"] },
    { question: "How effective do you feel at work lately?", options: ["Very effective", "Mostly effective", "Less effective", "Barely effective"] },
    { question: "How recoverable does your workload feel?", options: ["Very recoverable", "Somewhat", "Hard to recover", "Not recoverable"] }
  ],
  profiles: [
    { min: 5, max: 8, title: "Sustainable Workload Pattern", color: "var(--low)", description: "Your work strain appears relatively manageable with healthier recovery capacity.", indicators: { exhaustion: 22, detachment: 20, efficacy: 80 }, insights: ["Keep recovery boundaries visible.", "Protect the routines that make workload sustainable."] },
    { min: 9, max: 14, title: "Burnout Warning Zone", color: "var(--mid)", description: "Your responses suggest rising exhaustion or reduced recovery from work demands.", indicators: { exhaustion: 62, detachment: 56, efficacy: 48 }, insights: ["Identify one workload pressure that can be renegotiated.", "Add real transitions between work and non-work time."] },
    { min: 15, max: 20, title: "High Burnout Risk", color: "var(--high)", description: "Your answers suggest significant work-related depletion, detachment, or reduced effectiveness.", indicators: { exhaustion: 90, detachment: 84, efficacy: 22 }, insights: ["Consider discussing workload, leave, role fit, or support with a trusted professional.", "If burnout is affecting health or safety, seek qualified help."] }
  ],
  indicators: [{ key: "exhaustion", label: "Emotional Exhaustion" }, { key: "detachment", label: "Detachment" }, { key: "efficacy", label: "Work Efficacy" }],
  related: [
    { href: "https://toolsquark.com/tools/stress-index-test.html", title: "Stress Index Test", description: "Compare burnout with broader stress load.", action: "Assess Stress" },
    { href: "https://toolsquark.com/tools/sleep-quality-assessment.html", title: "Sleep Quality Assessment", description: "Burnout and sleep often reinforce each other.", action: "Assess Sleep" }
  ],
  faq: [
    { question: "Is burnout just being tired?", answer: "No. Burnout often combines exhaustion, cynicism or detachment, and reduced professional efficacy." },
    { question: "Can a vacation fix burnout?", answer: "Rest can help, but persistent burnout often requires workload, boundary, role, or support changes." }
  ],
  methodology: "This self-check uses five four-point items inspired by common burnout dimensions: exhaustion, detachment, and efficacy.",
  disclaimer: "This is not a clinical diagnosis or workplace assessment. Seek professional support if work strain affects health, safety, or functioning."
};
