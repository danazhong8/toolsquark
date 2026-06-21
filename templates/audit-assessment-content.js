const fs = require("fs");
const path = require("path");

const configsDir = path.resolve(__dirname, "assessment-pages");
const strict = process.argv.includes("--strict");
const summaryOnly = process.argv.includes("--summary");
const configFiles = fs.readdirSync(configsDir)
  .filter((file) => file.endsWith(".config.js"))
  .sort();

const loadedLanguage = [
  /explosive/i,
  /constantly drowning/i,
  /completely unsustainable/i,
  /collapse quickly/i
];

const compoundPatterns = [
  /\b(?:and|or)\b/i,
  /,[^?]+(?:,|\bor\b)/i
];

function issue(severity, code, message, item) {
  return { severity, code, message, item };
}

function inspectConfig(file) {
  const configPath = path.join(configsDir, file);
  delete require.cache[require.resolve(configPath)];
  const config = require(configPath);
  const issues = [];
  const questions = Array.isArray(config.questions) ? config.questions : [];
  const modern = config.instrument?.type === "original-self-check";
  const dimensions = questions.map((question, index) => question.dimension || config.questionDimensions?.[index]);

  if (!questions.length) {
    issues.push(issue("error", "questions.missing", "No scored questions are configured."));
  }

  if (questions.length < 12) {
    issues.push(issue("blocker", "questions.too-few", `${questions.length} scored items; the P1 standard requires 12-16.`));
  }

  if (dimensions.some((dimension) => !dimension)) {
    issues.push(issue("error", "dimensions.mapping", "Every scored question must map to one primary dimension."));
  }

  const dimensionCounts = dimensions.reduce((counts, key) => {
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {});

  for (const [key, count] of Object.entries(dimensionCounts)) {
    if (count < 3) {
      issues.push(issue("blocker", "dimension.under-supported", `Dimension '${key}' has ${count} item${count === 1 ? "" : "s"}; at least 3 must be drafted.`));
    }
  }

  const optionSets = new Set();
  questions.forEach((question, index) => {
    const item = index + 1;
    if (!question || typeof question.question !== "string") {
      issues.push(issue("error", "item.text", "Question text is missing.", item));
      return;
    }
    const options = question.options || config.responseScale?.options;
    const expectedOptionCount = modern ? config.responseScale?.values?.length : 4;
    if (!Array.isArray(options) || options.length !== expectedOptionCount) {
      issues.push(issue("error", "item.options", `Expected ${expectedOptionCount || "a declared number of"} response options.`, item));
    } else {
      optionSets.add(options.map((option) => typeof option === "object" ? option.label : option).join(" | "));
    }
    if (compoundPatterns.some((pattern) => pattern.test(question.question))) {
      issues.push(issue("warning", "item.possible-compound", "Review for multiple concepts or alternatives.", item));
    }
    if (Array.isArray(options) && loadedLanguage.some((pattern) => options.some((option) => pattern.test(typeof option === "object" ? option.label : option)))) {
      issues.push(issue("warning", "item.loaded-anchor", "Replace emotionally loaded answer wording with an observable anchor.", item));
    }
  });

  if (optionSets.size > 1) {
    issues.push(issue("blocker", "scale.inconsistent", `${optionSets.size} unique answer scales are converted to the same positional score.`));
  }

  const scaleValues = modern ? config.responseScale?.values || [] : [1, 2, 3, 4];
  const expectedMin = (scaleValues.length ? Math.min(...scaleValues) : 0) * questions.length;
  const expectedMax = (scaleValues.length ? Math.max(...scaleValues) : 0) * questions.length;
  const profiles = Array.isArray(config.profiles) ? config.profiles : [];
  if (!profiles.length || profiles[0].min !== expectedMin || profiles[profiles.length - 1].max !== expectedMax) {
    issues.push(issue("error", "profiles.coverage", `Profiles must cover the legacy score range ${expectedMin}-${expectedMax}.`));
  }
  for (let index = 1; index < profiles.length; index += 1) {
    if (profiles[index].min !== profiles[index - 1].max + 1) {
      issues.push(issue("error", "profiles.gap", `Profile ${index + 1} does not continue after profile ${index}.`));
    }
  }

  if ((config.references || []).length < 2) {
    issues.push(issue("warning", "references.thin", "Fewer than two independent authoritative background sources are listed."));
  }

  if (!config.instrument) {
    issues.push(issue("migration", "contract.instrument", "P1 must add instrument type, version, audience, recall period, and review status."));
  }
  if (!config.responseScale) {
    issues.push(issue("migration", "contract.response-scale", "P1 must declare one scored-core response scale."));
  }
  if (!Array.isArray(config.contextQuestions)) {
    issues.push(issue("migration", "contract.context", "P1 must separate optional context questions from scored questions."));
  } else if (modern && config.contextQuestions.length < 2) {
    issues.push(issue("warning", "contract.context-thin", "Modern self-checks should include at least two non-scored context questions."));
  }
  if (!Array.isArray(config.protectiveQuestions)) {
    issues.push(issue("migration", "contract.protective", "P1 must declare protective factors separately when relevant."));
  } else if (modern && config.protectiveQuestions.length < 2) {
    issues.push(issue("warning", "contract.protective-thin", "Modern self-checks should include at least two separately reported protective factors."));
  }
  if (!Array.isArray(config.revisionHistory)) {
    issues.push(issue("migration", "contract.history", "P1 must add a revision history."));
  }

  return {
    slug: config.slug || file.replace(/\.config\.js$/, ""),
    questions: questions.length,
    dimensions: Object.keys(dimensionCounts).length,
    minimumDimensionItems: Object.keys(dimensionCounts).length
      ? Math.min(...Object.values(dimensionCounts))
      : 0,
    optionScales: optionSets.size,
    issues
  };
}

const reports = configFiles.map(inspectConfig);
const rows = reports.map((report) => ({
  selfCheck: report.slug,
  items: report.questions,
  dimensions: report.dimensions,
  minItemsPerDimension: report.minimumDimensionItems,
  answerScales: report.optionScales,
  blockers: report.issues.filter((item) => item.severity === "blocker").length,
  warnings: report.issues.filter((item) => item.severity === "warning").length
}));

console.table(rows);

if (!summaryOnly) {
  for (const report of reports) {
    console.log(`\n${report.slug}`);
    for (const item of report.issues) {
      const location = item.item ? ` item ${item.item}` : "";
      console.log(`  [${item.severity.toUpperCase()}] ${item.code}${location}: ${item.message}`);
    }
  }
}

const totals = reports.flatMap((report) => report.issues).reduce((counts, item) => {
  counts[item.severity] = (counts[item.severity] || 0) + 1;
  return counts;
}, {});

console.log(`\nAudited ${reports.length} original self-check configurations.`);
console.log(`Errors: ${totals.error || 0}; blockers: ${totals.blocker || 0}; warnings: ${totals.warning || 0}; migration tasks: ${totals.migration || 0}.`);
if ((totals.blocker || 0) > 0 || (totals.migration || 0) > 0) {
  console.log("Known content blockers remain until each assessment is migrated as a complete versioned unit.");
} else {
  console.log("All original self-check configurations satisfy the versioned content contract.");
}

if ((totals.error || 0) > 0 || (strict && (totals.blocker || 0) > 0)) {
  process.exitCode = 1;
}
