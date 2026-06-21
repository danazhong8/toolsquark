module.exports = {
  slug: "social-media-addiction-index",
  title: "Social Media Use Self-Check | Scrolling & Comparison",
  description: "Take a private social media use self-check for automatic opening, endless scrolling, validation seeking, comparison, and fear of missing out.",
  h1: "Social Media Use Self-Check",
  hero: "Evaluate feed capture, validation seeking, FOMO, and mood shifts linked to social media use.",
  schemaName: "Privacy-First Social Media Use Self-Check",
  lastUpdated: "June 21, 2026",
  timeframe: "Past 30 days",
  questionDimensions: ["capture", "validation", "comparison", "capture", "comparison"],
  dimensionRelated: { capture: 0, validation: 0, comparison: 1 },
  dimensionGuidance: {
    capture: "Create a clear stopping cue: use a timer, remove shortcuts from the home screen, and decide what you are opening the app to do.",
    validation: "Disable nonessential reaction alerts and wait for a planned check time instead of monitoring response counts.",
    comparison: "Mute or unfollow accounts that reliably worsen your mood and add accounts connected to real interests, learning, or supportive relationships."
  },
  references: [
    { title: "Health Advisory on Social Media Use in Adolescence", publisher: "American Psychological Association", href: "https://www.apa.org/topics/social-media-internet/health-advisory-adolescent-social-media-use" },
    { title: "Social Media and Youth Mental Health", publisher: "U.S. Surgeon General", href: "https://www.hhs.gov/surgeongeneral/priorities/youth-mental-health/social-media/index.html" }
  ],
  categoryHref: "lifestyle.html",
  categoryLabel: "Lifestyle Tools",
  questions: [
    { question: "How often do you open social apps without intending to?", options: ["Rarely", "Sometimes", "Often", "Constantly"] },
    { question: "How much do likes, views, or comments affect your mood?", options: ["Very little", "Somewhat", "A lot", "Strongly"] },
    { question: "How often do you compare your life to what others post?", options: ["Rarely", "Sometimes", "Often", "Almost always"] },
    { question: "How hard is it to stop scrolling once you begin?", options: ["Easy", "Somewhat hard", "Hard", "Very hard"] },
    { question: "How often do you fear missing out when offline?", options: ["Rarely", "Sometimes", "Often", "Almost constantly"] }
  ],
  profiles: [
    { min: 5, max: 8, title: "Fewer Frequent Use Concerns", color: "var(--low)", description: "Your answers include fewer frequent concerns about automatic use, validation, or comparison.", indicators: { capture: 22, validation: 20, comparison: 18 }, insights: ["Keep feeds intentional and time-limited.", "Protect offline identity-building activities."] },
    { min: 9, max: 14, title: "Recurring Social-Media Friction", color: "var(--mid)", description: "Your social media use may be affecting mood, attention, or comparison patterns.", indicators: { capture: 62, validation: 58, comparison: 60 }, insights: ["Hide like counts where possible.", "Replace passive scrolling with intentional check-in windows."] },
    { min: 15, max: 20, title: "Frequent Social-Media Disruption", color: "var(--high)", description: "Your responses include frequent feed loops, comparison, or validation seeking that may affect attention and mood.", indicators: { capture: 90, validation: 86, comparison: 88 }, insights: ["Use blockers or app limits during vulnerable times.", "Consider a short reset period if social media strongly affects self-worth."] }
  ],
  indicators: [{ key: "capture", label: "Feed Capture" }, { key: "validation", label: "Validation Seeking" }, { key: "comparison", label: "Comparison/FOMO" }],
  related: [
    { href: "https://toolsquark.com/tools/smartphone-addiction-test.html", title: "Smartphone Use Self-Check", description: "Review broader phone-use and checking loops.", action: "Review Phone Use" },
    { href: "https://toolsquark.com/tools/self-discipline-test.html", title: "Self-Discipline Self-Check", description: "Check impulse friction and habit consistency.", action: "Review Follow-Through" }
  ],
  faq: [
    { question: "Is social media always harmful?", answer: "No. It can support connection and learning. Risk rises when use feels compulsive or strongly affects mood, sleep, or self-worth." },
    { question: "What is a practical first step?", answer: "Remove algorithmic feeds from your first and last hour of the day." }
  ],
  contentSections: [
    { title: "What This Self-Check Covers", body: `<p>The five questions review automatic opening, sensitivity to engagement metrics, social comparison, scrolling control, and fear of missing out.</p><p>This is an original ToolsQuark checklist. It is not the Bergen Social Media Addiction Scale or a diagnostic assessment.</p>` },
    { title: "How Scoring Works", body: `<p>Each answer contributes 1 to 4 points, producing a total from 5 to 20. Higher totals reflect more frequent social-media friction in this set.</p><ul><li><strong>5-8:</strong> fewer frequent concerns.</li><li><strong>9-14:</strong> several recurring concerns.</li><li><strong>15-20:</strong> many frequent concerns affecting attention or mood.</li></ul><div class="note-box">The bands and dimension bars are editorial, not validated addiction thresholds.</div>` },
    { title: "Effects Differ By Person And Use", body: `<p>Age, content, active connection versus passive scrolling, harassment, sleep timing, existing mental health, and platform design can all change the experience. A single time total cannot determine benefit or harm.</p>` },
    { title: "How To Use The Result", body: `<p>Identify the answer with the most real-world cost and test one boundary: remove a trigger, schedule check-in windows, mute comparison-heavy accounts, or keep feeds out of the sleep period. Seek support when use is tied to severe distress, harassment, self-harm content, or major functional impairment.</p>` }
  ],
  methodology: "This original five-item checklist scores answers from 1 to 4. Total-score bands and feed, validation, and comparison indicators are editorial and not clinically validated.",
  disclaimer: "This tool is educational and cannot diagnose behavioral addiction, depression, anxiety, or other mental health conditions."
};
