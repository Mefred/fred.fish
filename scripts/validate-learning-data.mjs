#!/usr/bin/env node
import { readFileSync } from "node:fs";
import { isValidMatchingAnswer } from "./matching-validation.mjs";
import { isValidDistractorExplanations } from "./distractor-validation.mjs";

const file = new URL("../src/data/learning/semester-1-seed.ts", import.meta.url);
const source = readFileSync(file, "utf8");
const sourceIndexFile = new URL("../docs/semester-1-source-question-index.md", import.meta.url);
const sourceInventoryFile = new URL("../docs/semester-1-source-concept-inventory.md", import.meta.url);
const sourceIndex = readFileSync(sourceIndexFile, "utf8");
const sourceInventory = readFileSync(sourceInventoryFile, "utf8");
const indexedQuestionIds = new Set([...sourceIndex.matchAll(/^## (Q\d{3}) —/gm)].map((match) => match[1]));
const lines = source.split(/\r?\n/).filter((line) => line.trim().startsWith("{ id:"));
const errors = [];
const ids = new Set();
const conceptQuestionCounts = new Map();
const normalizedPrompts = new Map();
const allowedTypes = new Set(["single","multiple","true-false","fill","matching","ordering","scenario"]);
const strings = (fragment) => fragment ? [...fragment.matchAll(/"([^"]+)"/g)].map((match) => match[1]) : [];
const fieldArray = (line, name, nextField) => {
  const pattern = nextField
    ? new RegExp(name + ":\\[(.*?)\\]," + nextField + ":")
    : new RegExp(name + ":\\[(.*?)\\]");
  const match = line.match(pattern);
  return match ? match[1] : null;
};

for (const [index, line] of lines.entries()) {
  const id = line.match(/id:"([^"]+)"/)?.[1];
  const label = id || `question line ${index + 1}`;
  const type = line.match(/type:"([^"]+)"/)?.[1];
  const answerMatch = line.match(/answer:(\[[^\]]*\]|"[^"]*")/);
  const answer = answerMatch ? JSON.parse(answerMatch[1]) : null;
  const concepts = strings(fieldArray(line, "concepts"));
  const sourceRefs = strings(fieldArray(line, "sourceRefs"));
  const origin = line.match(/origin:"([^"]+)"/)?.[1];
  const prompt = line.match(/prompt:"([^"]*)"/)?.[1] ?? "";
  const explanation = line.match(/explanation:"([^"]*)"/)?.[1] ?? "";
  const subject = line.match(/subject:"([^"]+)"/)?.[1];
  const lessonId = line.match(/lessonId:"([^"]+)"/)?.[1];
  const difficulty = Number(line.match(/difficulty:(\d)/)?.[1] ?? 0);
  const choiceFragment = fieldArray(line, "choices", "answer");
  const choiceIds = choiceFragment ? [...choiceFragment.matchAll(/id:"([^"]+)"/g)].map((m) => m[1]) : [];
  const distractorFragment = line.match(/distractorExplanations:\{([^}]*)\}/)?.[1];
  if (distractorFragment !== undefined) {
    const distractorEntries = [...distractorFragment.matchAll(/([a-zA-Z0-9_-]+):"((?:\\.|[^"\\])*)"/g)];
    const distractorExplanations = Object.fromEntries(distractorEntries.map((match) => [match[1], JSON.parse('"' + match[2] + '"')]));
    if (distractorEntries.length === 0 || !isValidDistractorExplanations(choiceIds, Array.isArray(answer) ? answer : [answer], distractorExplanations)) {
      errors.push(label + ": distractor explanations must reference non-answer choice IDs and contain non-empty text");
    }
  }
  const itemFragment = fieldArray(line, "items", "answer");
  const itemIds = itemFragment ? [...itemFragment.matchAll(/id:"([^"]+)"/g)].map((m) => m[1]) : [];
  const pairFragment = fieldArray(line, "pairs", "matchOptions");
  const pairIds = pairFragment ? [...pairFragment.matchAll(/id:"([^"]+)"/g)].map((m) => m[1]) : [];
  const pairAnswerIds = pairFragment ? [...pairFragment.matchAll(/answerId:"([^"]+)"/g)].map((m) => m[1]) : [];
  const matchFragment = fieldArray(line, "matchOptions", "answer");
  const matchIds = matchFragment ? [...matchFragment.matchAll(/id:"([^"]+)"/g)].map((m) => m[1]) : [];

  if (!id) errors.push(`${label}: missing id`);
  if (id && ids.has(id)) errors.push(`${id}: duplicate question id`);
  if (id) ids.add(id);
  const normalizedPrompt = prompt.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  if (!prompt.trim()) errors.push(`${label}: missing prompt`);
  if (normalizedPrompt && normalizedPrompts.has(normalizedPrompt)) errors.push(`${label}: duplicate prompt of ${normalizedPrompts.get(normalizedPrompt)}`);
  if (normalizedPrompt) normalizedPrompts.set(normalizedPrompt, label);
  if (!explanation.trim()) errors.push(`${label}: missing answer explanation`);
  if (!subject || !lessonId) errors.push(`${label}: missing subject or lesson mapping`);
  if (!Number.isInteger(difficulty) || difficulty < 1 || difficulty > 5) errors.push(`${label}: difficulty must be an integer from 1 to 5`);
  for (const concept of concepts) conceptQuestionCounts.set(concept, (conceptQuestionCounts.get(concept) ?? 0) + 1);
  if (concepts.length !== new Set(concepts).size) errors.push(`${label}: duplicate concept tags`);
  if (sourceRefs.length !== new Set(sourceRefs).size) errors.push(`${label}: duplicate source references`);
  if (!allowedTypes.has(type)) errors.push(`${label}: unsupported type ${type}`);
  if (!Array.isArray(concepts) || concepts.length === 0) errors.push(`${label}: must map to at least one concept`);
  if (!sourceRefs.length) errors.push(`${label}: missing source references`);
  if (sourceRefs.some((ref) => !/^(block-\d{4}|IMG-\d{4}|Q\d{3})$/.test(ref))) errors.push(`${label}: malformed source reference`);
  if (sourceRefs.some((ref) => /^Q\d{3}$/.test(ref) && !indexedQuestionIds.has(ref))) errors.push(`${label}: source question reference ${ref} is missing from the source-question index`);
  if (!["source","ai-generated"].includes(origin)) errors.push(`${label}: invalid origin`);
  if (origin === "source" && /AI-generated|answer is inferred|no (?:visible )?answer key|not marked in (?:the )?source/i.test(explanation)) {
    errors.push(`${label}: source-origin explanation contradicts its provenance`);
  }
  if (answer === null) errors.push(`${label}: missing answer`);

  if (["single","scenario"].includes(type) && (choiceIds.length < 2 || new Set(choiceIds).size !== choiceIds.length || typeof answer !== "string" || !choiceIds.includes(answer))) {
    errors.push(`${label}: answer must match a choice id`);
  }
  if (type === "multiple" && (choiceIds.length < 3 || new Set(choiceIds).size !== choiceIds.length || !Array.isArray(answer) || answer.length < 2 || new Set(answer).size !== answer.length || answer.some((value) => !choiceIds.includes(value)))) {
    errors.push(`${label}: multiple-select answer must contain at least two valid choice ids`);
  }
  if (type === "true-false" && !["true","false"].includes(answer)) errors.push(`${label}: true-false answer must be true or false`);
  if (type === "fill" && (typeof answer !== "string" || !answer.trim())) errors.push(`${label}: fill answer must be non-empty text`);
  if (type === "ordering" && (itemIds.length < 2 || new Set(itemIds).size !== itemIds.length || !Array.isArray(answer) || answer.length !== itemIds.length || new Set(answer).size !== answer.length || answer.some((value) => !itemIds.includes(value)))) {
    errors.push(`${label}: ordering answer must contain every item id exactly once`);
  }
  if (type === "matching") {
    if (!isValidMatchingAnswer({ pairIds, pairAnswerIds, matchIds, answer })) {
      errors.push(`${label}: matching answer must map every pair exactly once to a unique valid option and agree with each pair's declared answerId`);
    }
  }
}

if (lines.length < 10) errors.push(`question bank too small: found ${lines.length}`);
if (ids.size !== lines.length) errors.push(`question IDs are not unique: ${ids.size} unique IDs across ${lines.length} records`);
const underPracticed = [...conceptQuestionCounts.entries()].filter(([, count]) => count < 2);
if (underPracticed.length) errors.push(`concepts need at least two questions: ${underPracticed.map(([concept, count]) => `${concept} (${count})`).join(", ")}`);
const inventoryQuestionIds = [...sourceInventory.matchAll(/\b(s\d{1,2}-[a-z0-9-]+-\d{3})\b/g)].map((match) => match[1]);
for (const inventoryId of new Set(inventoryQuestionIds)) {
  if (!ids.has(inventoryId)) errors.push(`source-concept inventory references missing question ${inventoryId}`);
}
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`Validated ${lines.length} questions, ${ids.size} unique IDs, ${normalizedPrompts.size} unique prompts, ${conceptQuestionCounts.size} concepts (minimum exposure ${Math.min(...conceptQuestionCounts.values())}), explanations, lesson/concept mappings, difficulty, answer keys, formats, provenance, source references, and source-inventory question links.`);
