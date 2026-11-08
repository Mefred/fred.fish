#!/usr/bin/env node
import { readFileSync, writeFileSync } from "node:fs";

const source = readFileSync(new URL("../src/data/learning/semester-1-seed.ts", import.meta.url), "utf8");
const output = new URL("../docs/semester-1-coverage-report.md", import.meta.url);
const records = source.split(/\r?\n/).filter((line) => line.trim().startsWith("{ id:"));
const lessons = new Map();
const allConcepts = new Set();
const formats = new Map();
const difficulties = new Map();

const values = (fragment) => [...fragment.matchAll(/"([^"]+)"/g)].map((match) => match[1]);
for (const line of records) {
  const id = line.match(/id:"([^"]+)"/)?.[1];
  const lessonId = line.match(/lessonId:"([^"]+)"/)?.[1];
  const type = line.match(/type:"([^"]+)"/)?.[1] ?? "unknown";
  const difficulty = Number(line.match(/difficulty:(\d)/)?.[1] ?? 0);
  const conceptFragment = line.match(/concepts:\[(.*?)\],sourceRefs:/)?.[1] ?? "";
  const concepts = values(conceptFragment);
  if (!id || !lessonId || !concepts.length) continue;
  if (!lessons.has(lessonId)) lessons.set(lessonId, { ids: [], concepts: new Set(), formats: new Map(), difficulties: new Map() });
  const lesson = lessons.get(lessonId);
  lesson.ids.push(id);
  for (const concept of concepts) { lesson.concepts.add(concept); allConcepts.add(concept); }
  lesson.formats.set(type, (lesson.formats.get(type) ?? 0) + 1);
  lesson.difficulties.set(difficulty, (lesson.difficulties.get(difficulty) ?? 0) + 1);
  formats.set(type, (formats.get(type) ?? 0) + 1);
  difficulties.set(difficulty, (difficulties.get(difficulty) ?? 0) + 1);
}
const sorted = (map) => [...map.entries()].sort((a, b) => a[0].localeCompare(b[0]));
const totalQuestions = [...lessons.values()].reduce((sum, lesson) => sum + lesson.ids.length, 0);
const lines = [
  "# Semester 1 question coverage report",
  "",
  `Generated from ` + "`src/data/learning/semester-1-seed.ts`" + ` by ` + "`scripts/report-learning-coverage.mjs`" + `.`,
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
lines.push("", "## Concepts represented by lesson", "");
for (const [lessonId, lesson] of [...lessons.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
  lines.push(`### ${lessonId}`, "", [...lesson.concepts].sort().map((concept) => `- \`${concept}\``).join("\n"), "");
}
lines.push(
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
  "This report measures only the concepts currently tagged on active questions. It shows where the bank is concentrated and which tags are represented; it does **not** prove that every instructional concept in a lesson has been tested. A true syllabus-gap report requires an authoritative per-lesson concept inventory to compare against. Question counts are a useful triage signal, not a mastery or quality score.",
  "",
);
writeFileSync(output, lines.join("\n"));
console.log(`Wrote ${output.pathname} for ${totalQuestions} questions, ${lessons.size} lessons, and ${allConcepts.size} concept tags.`);
