import assert from "node:assert/strict";
import { isValidMatchingAnswer } from "./matching-validation.mjs";
import { isValidDistractorExplanations, parseDistractorExplanations } from "./distractor-validation.mjs";

const base = {
  pairIds: ["p1", "p2", "p3"],
  pairAnswerIds: ["m2", "m1", "m3"],
  matchIds: ["m1", "m2", "m3"],
  answer: ["p1:m2", "p2:m1", "p3:m3"],
};

assert.equal(isValidMatchingAnswer(base), true, "a complete one-to-one mapping matching declared answerIds should pass");
assert.equal(isValidMatchingAnswer(null), false, "null input must fail without throwing");
assert.equal(isValidMatchingAnswer(undefined), false, "undefined input must fail without throwing");
assert.equal(isValidMatchingAnswer("not-an-object"), false, "primitive input must fail without throwing");
assert.equal(isValidMatchingAnswer({ ...base, pairIds: ["p1", "", "p3"] }), false, "empty pair IDs must fail");
assert.equal(isValidMatchingAnswer({ ...base, matchIds: ["m1", " ", "m3"] }), false, "blank match option IDs must fail");
assert.equal(isValidMatchingAnswer({ ...base, pairAnswerIds: ["m2", "m1"] }), false, "declared answer arrays with missing entries must fail");
assert.equal(isValidMatchingAnswer({ ...base, answer: ["p1:m2", "p2:m1", "p3:m3:extra"] }), false, "mapping entries with extra delimiters must fail");
assert.equal(isValidMatchingAnswer({ ...base, answer: ["p1:m2", "p2:m1"] }), false, "missing pair mappings must fail");
assert.equal(isValidMatchingAnswer({ ...base, answer: ["p1:m2", "p1:m1", "p3:m3"] }), false, "duplicate pair mappings must fail");
assert.equal(isValidMatchingAnswer({ ...base, answer: ["p1:m2", "p2:m2", "p3:m3"] }), false, "duplicate target mappings must fail");
assert.equal(isValidMatchingAnswer({ ...base, answer: ["p1:m1", "p2:m2", "p3:m3"] }), false, "mappings that disagree with declared answerIds must fail");
assert.equal(isValidMatchingAnswer({ ...base, answer: ["p1:m2", "p2:m1", "p3:m4"] }), false, "unknown target IDs must fail");
assert.equal(isValidMatchingAnswer({ ...base, answer: ["p1:m2", "p2:m1", 42] }), false, "non-string mapping entries must fail");
assert.equal(isValidMatchingAnswer({ ...base, pairIds: ["p1", "p1", "p3"] }), false, "duplicate pair IDs must fail");
assert.equal(isValidMatchingAnswer({ ...base, matchIds: ["m1", "m1", "m3"] }), false, "duplicate option IDs must fail");

console.log("Matching validation tests passed: complete coverage, one-to-one mappings, declared answers, and malformed input rejection.");

const distractorChoices = ["a", "b", "c", "d"];
const distractorAnswer = ["a"];
assert.equal(isValidDistractorExplanations(distractorChoices, distractorAnswer, { b: "Wrong layer.", c: "Wrong protocol.", d: "Wrong destination." }), true, "valid feedback for incorrect choices should pass");
assert.equal(isValidDistractorExplanations(distractorChoices, distractorAnswer, { a: "Correct answer feedback." }), false, "correct-answer IDs must not be classified as distractors");
assert.equal(isValidDistractorExplanations(distractorChoices, distractorAnswer, { z: "Unknown choice." }), false, "unknown choice IDs must fail");
assert.equal(isValidDistractorExplanations(distractorChoices, distractorAnswer, { b: "  " }), false, "blank distractor explanations must fail");
assert.equal(isValidDistractorExplanations(distractorChoices, distractorAnswer, null), false, "malformed explanation maps must fail");

assert.deepEqual(parseDistractorExplanations(String.raw`b:"Wrong answer.",c:"Another explanation."`), { b: "Wrong answer.", c: "Another explanation." }, "well-formed feedback maps should parse");
assert.deepEqual(parseDistractorExplanations(String.raw`b:"Escaped quote: \"yes\"."`), { b: 'Escaped quote: "yes".' }, "escaped quotes should parse without truncation");
assert.equal(parseDistractorExplanations('b:"Valid.",broken-entry'), null, "malformed trailing entries must not be silently ignored");
assert.equal(parseDistractorExplanations('b:"First.",b:"Duplicate."'), null, "duplicate feedback keys must be rejected");
assert.equal(parseDistractorExplanations('b:"Bad escape: \\q"'), null, "invalid JSON string escapes must be rejected");
assert.equal(parseDistractorExplanations(""), null, "empty feedback maps must be rejected");
console.log("Distractor validation tests passed: answer exclusion, known choice IDs, non-empty text, strict parsing, escapes, and duplicate-key rejection.");
