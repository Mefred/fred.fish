import assert from "node:assert/strict";
import { isValidMatchingAnswer } from "./matching-validation.mjs";

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
