import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = "dist/cisco/learning/modules";
const directories = readdirSync(root, { withFileTypes: true }).filter((entry) => entry.isDirectory());
const failures = [];
let questionTotal = 0;

const fail = (module, message) => failures.push(`${module}: ${message}`);

if (directories.length !== 30) {
  failures.push(`Expected 30 lesson directories, found ${directories.length}`);
}

for (const directory of directories) {
  const modulePath = join(root, directory.name, "index.html");
  let html;
  try {
    html = readFileSync(modulePath, "utf8");
  } catch {
    fail(directory.name, "missing index.html");
    continue;
  }

  const completion = html.match(/data-completion="(\d{2})"/)?.[1];
  const expectedNumber = directory.name.slice(0, 2);
  if (completion !== expectedNumber) {
    fail(directory.name, `completion key should be "${expectedNumber}", got "${completion ?? "missing"}"`);
  }

  const quiz = html.match(/<div class="quiz-panel" data-lesson-quiz>([\s\S]*?)<\/div>\s*<\/section>/)?.[1];
  if (!quiz) {
    fail(directory.name, "missing lesson quiz panel");
    continue;
  }

  const questions = [...quiz.matchAll(/<fieldset class="quiz-question" data-correct="([^"]+)">([\s\S]*?)<\/fieldset>/g)];
  if (questions.length === 0) {
    fail(directory.name, "quiz has no questions");
    continue;
  }

  questionTotal += questions.length;

  for (const [index, question] of questions.entries()) {
    const correct = question[1].split(",").filter(Boolean);
    const body = question[2];
    const optionLabels = [...body.matchAll(/<label class="quiz-option">([\s\S]*?)<\/label>/g)];
    const optionValues = optionLabels.map((option) => option[1].match(/<input[^>]*value="([A-D])"/)?.[1]);
    const inputTags = optionLabels.map((option) => option[1].match(/<input[^>]*>/)?.[0] ?? "");
    const radioNames = inputTags.map((input) => input.match(/name="([^"]+)"/)?.[1]);
    const questionNumber = index + 1;

    if (!body.includes("<legend>")) {
      fail(directory.name, `question ${questionNumber} has no legend`);
    }
    if (optionLabels.length !== 4) {
      fail(directory.name, `question ${questionNumber} has ${optionLabels.length} options; expected 4`);
    }
    if (optionValues.some((value) => !value) || new Set(optionValues).size !== optionValues.length) {
      fail(directory.name, `question ${questionNumber} has missing or duplicate A-D option values`);
    }
    if (correct.length !== 1 || correct.some((value) => !["A", "B", "C", "D"].includes(value))) {
      fail(directory.name, `question ${questionNumber} has invalid data-correct value "${question[1]}"`);
    }
    if (inputTags.some((input) => !/type="radio"/.test(input))) {
      fail(directory.name, `question ${questionNumber} contains a non-radio answer input`);
    }
    if (radioNames.some((name) => !name) || new Set(radioNames).size !== 1) {
      fail(directory.name, `question ${questionNumber} options must share one radio-group name`);
    }
    if (correct.some((value) => !optionValues.includes(value))) {
      fail(directory.name, `question ${questionNumber} marks an answer correct that is not present`);
    }

    for (const [optionIndex, option] of optionLabels.entries()) {
      if (!/data-explanation="[^"]+/.test(option[1])) {
        fail(directory.name, `question ${questionNumber}, option ${optionIndex + 1} has no explanation`);
      }
    }
  }
}

const migratedLessons = [
  "01-physical-layer",
  "02-data-link-layer",
  "03-ethernet-switching",
  "04-network-devices-topologies",
  "05-network-models-encapsulation",
  "06-number-systems-binary-math",
  "07-ipv4-addressing-subnetting",
  "08-ipv6-addressing",
  "09-network-layer-routing-basics",
  "10-arp-neighbor-discovery-icmp",
  "11-transport-layer",
  "12-application-layer-services",
  "13-vlans-8021q-trunking",
  "14-inter-vlan-routing",
  "15-spanning-tree-protocol",
  "16-etherchannel-link-aggregation",
  "17-wireless-lans-architectures",
  "18-static-default-routing",
  "19-dynamic-routing-ospf",
  "20-routing-troubleshooting-redundancy",
  "21-ip-services",
  "22-network-security-fundamentals",
  "23-network-automation-programmability",
  "24-ios-xe-cli-device-management",
  "25-access-control-lists",
  "26-nat-dhcp-configuration",
  "27-layer2-security-wireless-security",
  "28-qos-network-monitoring",
  "29-virtualization-cloud-networking",
  "30-integrated-network-troubleshooting",
];

for (const slug of migratedLessons) {
  const routeSource = `src/pages/cisco/learning/modules/${slug}.astro`;
  const builtPage = join("dist/cisco/learning/modules", slug, "index.html");
  if (!existsSync(routeSource)) {
    failures.push(`${slug}: missing Astro route source ${routeSource}`);
    continue;
  }
  const source = readFileSync(routeSource, "utf8");
  const expectedLegacyImport = `../../../../../cisco/learning/modules/${slug}/index.html?raw`;
  if (!source.includes(expectedLegacyImport)) {
    fail(slug, `Astro route does not import its matching legacy lesson (${expectedLegacyImport})`);
  }
  if (!source.includes("LegacyLessonLayout") || !/source=\{lessonSource\}/.test(source)) {
    fail(slug, "Astro route must render its source through LegacyLessonLayout");
  }
  if (!existsSync(builtPage)) {
    failures.push(`${slug}: migrated Astro route was not generated at ${builtPage}`);
    continue;
  }
  const html = readFileSync(builtPage, "utf8");
  const builtQuestionCount = [...html.matchAll(/<fieldset class="quiz-question" data-correct=/g)].length;
  const sourceQuestionCount = [...readFileSync(join(root, slug, "index.html"), "utf8").matchAll(/<fieldset class="quiz-question" data-correct=/g)].length;
  if (builtQuestionCount !== sourceQuestionCount) {
    fail(slug, `generated route contains ${builtQuestionCount} quiz questions; legacy source contains ${sourceQuestionCount}`);
  }
  if (!html.includes(`data-completion="${slug.slice(0, 2)}"`)) {
    fail(slug, "generated route is missing its original lesson completion key");
  }
  for (const [label, pattern] of [
    ["canonical URL", /<link rel="canonical" href=/],
    ["article metadata", /property="og:type" content="article"/],
    ["lesson stylesheet", /href="\/assets\/learning\.css"/],
    ["lesson interaction script", /src="\/assets\/learning\.js"/],
    ["lesson body", /<main class="main">[\s\S]*<article class="lesson-main">/],
  ]) {
    if (!pattern.test(html)) failures.push(`${slug}: migrated page is missing ${label}`);
  }
}

if (questionTotal !== 95) {
  failures.push(`Expected 95 practice questions, found ${questionTotal}`);
}

if (failures.length) {
  console.error("Cisco lesson validation failed:");
  for (const failure of failures) console.error(` - ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`Validated ${directories.length} Cisco lessons and ${questionTotal} quiz questions.`);
}
