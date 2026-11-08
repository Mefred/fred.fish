#!/usr/bin/env node
import { readFileSync } from "node:fs";

const file = new URL("../src/data/learning/semester-1-seed.ts", import.meta.url);
const source = readFileSync(file, "utf8");
const lines = source.split(/\r?\n/).filter((line) => line.trim().startsWith("{ id:"));
const errors = [];
const ids = new Set();
const allowedTypes = new Set(["single","multiple","true-false","fill","matching","ordering","scenario"]);
const strings = (fragment) => [...fragment.matchAll(/"([^"]+)"/g)].map((match) => match[1]);
const fieldArray = (line, name, nextField) => {
  const pattern = nextField
    ? new RegExp(name + ":\\[(.*?)\\]," + nextField + ":")
    : new RegExp(name + ":\\[(.*?)\\]");
  const match = line.match(pattern);
  return match ? match[1] : null;
};

for (const [index, line] of lines.entries()) {
  const id = line.match(/id:"([^"]+)"/)?.[1];
  const type = line.match(/type:"([^"]+)"/)?.[1];
  const answerMatch = line.match(/answer:(\[[^\]]*\]|"[^"]*")/);
  const answer = answerMatch ? JSON.parse(answerMatch[1]) : null;
  const concepts = strings(fieldArray(line, "concepts"));
  const sourceRefs = strings(fieldArray(line, "sourceRefs"));
  const origin = line.match(/origin:"([^"]+)"/)?.[1];
  const choiceFragment = fieldArray(line, "choices", "answer");
  const choiceIds = choiceFragment ? [...choiceFragment.matchAll(/id:"([^"]+)"/g)].map((m) => m[1]) : [];
  const itemFragment = fieldArray(line, "items", "answer");
  const itemIds = itemFragment ? [...itemFragment.matchAll(/id:"([^"]+)"/g)].map((m) => m[1]) : [];
  const pairFragment = fieldArray(line, "pairs", "matchOptions");
  const pairIds = pairFragment ? [...pairFragment.matchAll(/id:"([^"]+)"/g)].map((m) => m[1]) : [];
  const matchFragment = fieldArray(line, "matchOptions", "answer");
  const matchIds = matchFragment ? [...matchFragment.matchAll(/id:"([^"]+)"/g)].map((m) => m[1]) : [];
  const label = id || `question line ${index + 1}`;

  if (!id) errors.push(`${label}: missing id`);
  if (id && ids.has(id)) errors.push(`${id}: duplicate question id`);
  if (id) ids.add(id);
  if (!allowedTypes.has(type)) errors.push(`${label}: unsupported type ${type}`);
  if (!Array.isArray(concepts) || concepts.length === 0) errors.push(`${label}: must map to at least one concept`);
  if (!sourceRefs.length) errors.push(`${label}: missing source references`);
  if (sourceRefs.some((ref) => !/^(block-\d{4}|IMG-\d{4})$/.test(ref))) errors.push(`${label}: malformed source reference`);
  if (!["source","ai-generated"].includes(origin)) errors.push(`${label}: invalid origin`);
  if (answer === null) errors.push(`${label}: missing answer`);

  if (["single","scenario"].includes(type) && (typeof answer !== "string" || !choiceIds.includes(answer))) {
    errors.push(`${label}: answer must match a choice id`);
  }
  if (type === "multiple" && (!Array.isArray(answer) || answer.length < 2 || answer.some((value) => !choiceIds.includes(value)))) {
    errors.push(`${label}: multiple-select answer must contain at least two valid choice ids`);
  }
  if (type === "true-false" && !["true","false"].includes(answer)) errors.push(`${label}: true-false answer must be true or false`);
  if (type === "fill" && (typeof answer !== "string" || !answer.trim())) errors.push(`${label}: fill answer must be non-empty text`);
  if (type === "ordering" && (!Array.isArray(answer) || answer.length !== itemIds.length || answer.some((value) => !itemIds.includes(value)))) {
    errors.push(`${label}: ordering answer must contain every item id exactly once`);
  }
  if (type === "matching") {
    const validPairs = new Set(pairIds.map((pairId) => pairId));
    const validMatches = new Set(matchIds);
    if (!Array.isArray(answer) || answer.length !== pairIds.length || answer.some((entry) => {
      const [pairId, matchId] = String(entry).split(":");
      return !validPairs.has(pairId) || !validMatches.has(matchId);
    })) errors.push(`${label}: matching answer must map every pair to a valid match`);
  }
}

if (lines.length < 10) errors.push(`question bank too small: found ${lines.length}`);
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`Validated ${lines.length} questions, ${ids.size} unique IDs, concept mappings, answer keys, formats, provenance, and source references.`);
