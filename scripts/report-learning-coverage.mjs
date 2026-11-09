#!/usr/bin/env node
import { readFileSync, writeFileSync } from "node:fs";

const source = readFileSync(new URL("../src/data/learning/semester-1-seed.ts", import.meta.url), "utf8");
const output = new URL("../docs/semester-1-coverage-report.md", import.meta.url);
const records = source.split(/\r?\n/).filter((line) => line.trim().startsWith("{ id:"));
const lessons = new Map();
const allConcepts = new Set();
const conceptQuestionCounts = new Map();
const conceptLessons = new Map();
const formats = new Map();
const difficulties = new Map();

const values = (fragment) => [...fragment.matchAll(/"([^"]+)"/g)].map((match) => match[1]);
for (const line of records) {
  const id = line.match(/id:"([^"]+)"/)?.[1];
  const lessonId = line.match(/lessonId:"([^"]+)"/)?.[1];
  const type = line.match(/type:"([^"]+)"/)?.[1] ?? "unknown";
  const difficulty = Number(line.match(/difficulty:(\d)/)?.[1] ?? 0);
  const conceptFragment = line.match(/concepts:\[([^\]]*)\]/)?.[1] ?? "";
  const concepts = values(conceptFragment);
  if (!id || !lessonId || !concepts.length) continue;
  if (!lessons.has(lessonId)) lessons.set(lessonId, { ids: [], concepts: new Set(), formats: new Map(), difficulties: new Map() });
  const lesson = lessons.get(lessonId);
  lesson.ids.push(id);
  for (const concept of concepts) {
    lesson.concepts.add(concept);
    allConcepts.add(concept);
    conceptQuestionCounts.set(concept, (conceptQuestionCounts.get(concept) ?? 0) + 1);
    if (!conceptLessons.has(concept)) conceptLessons.set(concept, new Set());
    conceptLessons.get(concept).add(lessonId);
  }
  lesson.formats.set(type, (lesson.formats.get(type) ?? 0) + 1);
  lesson.difficulties.set(difficulty, (lesson.difficulties.get(difficulty) ?? 0) + 1);
  formats.set(type, (formats.get(type) ?? 0) + 1);
  difficulties.set(difficulty, (difficulties.get(difficulty) ?? 0) + 1);
}
const sorted = (map) => [...map.entries()].sort((a, b) => a[0].localeCompare(b[0]));
const totalQuestions = [...lessons.values()].reduce((sum, lesson) => sum + lesson.ids.length, 0);
const singleQuestionConcepts = [...conceptQuestionCounts.entries()].filter(([, count]) => count === 1);
const underPracticedConcepts = [...conceptQuestionCounts.entries()].filter(([, count]) => count < 2);
const exposureHistogram = new Map();
for (const count of conceptQuestionCounts.values()) exposureHistogram.set(count, (exposureHistogram.get(count) ?? 0) + 1);
const lines = [
  "# Semester 1 question coverage report",
  "",
  "Generated from `src/data/learning/semester-1-seed.ts` by `scripts/report-learning-coverage.mjs`.",
  "",
  `- **Questions:** ${totalQuestions}`,
  `- **Lessons represented:** ${lessons.size}`,
  `- **Distinct concept tags:** ${allConcepts.size}`,
  "",
  "## Lesson coverage",
  "",
  "| Lesson ID | Questions | Distinct concept tags | Formats | Difficulty range |",
  "|---|---:|---:|---|---|",
];
for (const [lessonId, lesson] of [...lessons.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
  const formatText = sorted(lesson.formats).map(([name, count]) => `${name}: ${count}`).join(", ");
  const difficultyKeys = [...lesson.difficulties.keys()].sort((a, b) => a - b);
  lines.push(`| ${lessonId} | ${lesson.ids.length} | ${lesson.concepts.size} | ${formatText} | ${difficultyKeys[0]}–${difficultyKeys.at(-1)} |`);
}
lines.push(
  "",
  "## Concept exposure distribution",
  "",
  "| Questions per concept | Number of concepts |",
  "|---:|---:|",
  ...[...exposureHistogram.entries()].sort((a, b) => a[0] - b[0]).map(([count, concepts]) => `| ${count} | ${concepts} |`),
  "",
  `**Concepts with fewer than two questions:** ${underPracticedConcepts.length}.`,
  "",
  "## Concepts represented by lesson",
  "",
);
for (const [lessonId, lesson] of [...lessons.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
  lines.push(`### ${lessonId}`, "", [...lesson.concepts].sort().map((concept) => `- \`${concept}\``).join("\n"), "");
}
lines.push(
  "## Concept question exposure",
  "",
  "| Concept tag | Questions | Lesson(s) |",
  "|---|---:|---|",
  ...[...conceptQuestionCounts.entries()].sort((a, b) => a[0].localeCompare(b[0])).map(([concept, count]) => `| \`${concept}\` | ${count} | ${[...conceptLessons.get(concept)].sort().join(", ")} |`),
  "",
  `**Single-question concepts:** ${singleQuestionConcepts.length}. **Concepts below the two-question exposure floor:** ${underPracticedConcepts.length}. The data validator fails if any concept falls below this floor.`,
  "",
  "## Bank-wide distribution",
  "",
  "### Question formats",
  "",
  "| Format | Count |",
  "|---|---:|",
  ...sorted(formats).map(([name, count]) => `| ${name} | ${count} |`),
  "",
  "### Difficulty",
  "",
  "| Level | Count |",
  "|---:|---:|",
  ...[...difficulties.entries()].sort((a, b) => a[0] - b[0]).map(([level, count]) => `| ${level} | ${count} |`),
  "",
  "## Interpretation and limits",
  "",
  "This report measures only concept tags attached to active questions. The exposure table counts questions per tag; it does not measure learner mastery, question quality, or complete instructional coverage. A tag absent from this report cannot be assumed to be a source-material gap because no authoritative, reviewed per-lesson source-concept inventory is currently available. OCR-derived topic hints and question-candidate text are not sufficient evidence for such an inventory. Build that inventory through lesson-by-lesson source review before publishing a zero-coverage gap list. Question counts are a triage signal, not evidence of learner mastery or proof of missing source content.",
  "",
);
writeFileSync(output, lines.join("\n"));
console.log(`Wrote ${output.pathname} for ${totalQuestions} questions, ${lessons.size} lessons, and ${allConcepts.size} concept tags.`);
