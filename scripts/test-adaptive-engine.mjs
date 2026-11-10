import assert from "node:assert/strict";
import {
  buildAdaptiveQuiz, emptyProgress, finishSession, recordAnswer, recommendedDifficulty, shuffleOrderingItems,
} from "../src/lib/learning/adaptive.ts";
import { semesterOneQuestions } from "../src/data/learning/semester-1-seed.ts";
import { loadProgress, saveProgress } from "../src/lib/learning/storage.ts";

const now = Date.UTC(2026, 10, 8, 12);
const initial = emptyProgress();
const session = buildAdaptiveQuiz(semesterOneQuestions, initial, 10, now);
assert.equal(session.length, 10, "practice sessions should contain ten questions");
assert.equal(new Set(session.map((question) => question.id)).size, 10, "a session must not repeat question IDs");
const orderItems = [{ id: "first" }, { id: "second" }, { id: "third" }];
const shuffledOrder = shuffleOrderingItems(orderItems, ["first", "second", "third"], () => 0);
assert.notDeepEqual(shuffledOrder, ["first", "second", "third"], "ordering questions must not reveal the answer in their initial presentation");
assert.deepEqual(new Set(shuffledOrder), new Set(orderItems.map((item) => item.id)), "shuffling must preserve every ordering item exactly once");


const withoutRecent = { ...initial, recentQuestionIds: semesterOneQuestions.slice(0, 8).map((question) => question.id) };
const nextSession = buildAdaptiveQuiz(semesterOneQuestions, withoutRecent, 10, now);
assert.equal(nextSession.length, 10);
assert.ok(nextSession.every((question) => !withoutRecent.recentQuestionIds.includes(question.id)), "recent questions should be avoided when the bank is large enough");

const sample = semesterOneQuestions.find((question) => question.concepts.length > 0);
assert.ok(sample);
let masteryProgress = emptyProgress();
for (let i = 0; i < 5; i++) masteryProgress = recordAnswer(masteryProgress, sample, true, now + i * 1000);
const concept = masteryProgress.concepts[sample.concepts[0]];
assert.equal(concept.mastery, 100, "five consecutive correct answers should establish mastery");
assert.equal(recommendedDifficulty(sample.concepts, masteryProgress), 5, "mastered concepts should target advanced questions");

const beforeMiss = concept.mastery;
masteryProgress = recordAnswer(masteryProgress, sample, false, now + 6000);
assert.ok(masteryProgress.concepts[sample.concepts[0]].mastery < beforeMiss, "an incorrect answer should reduce mastery");
assert.ok(masteryProgress.concepts[sample.concepts[0]].dueAt < now + 6000 + 24 * 60 * 60 * 1000, "incorrect answers should schedule prompt review");

const dayOne = finishSession(emptyProgress(), Array.from({ length: 10 }, () => ({ correct: true })), now);
assert.equal(dayOne.xp, 110, "ten correct answers should earn 100 XP plus the session bonus");
assert.equal(dayOne.totalSessions, 1);
const dayTwo = finishSession(dayOne, [{ correct: true }], now + 24 * 60 * 60 * 1000);
assert.equal(dayTwo.streakDays, 2, "consecutive practice days should extend the streak");

const storage = new Map();
Object.defineProperty(globalThis, "localStorage", {
  configurable: true,
  value: {
    getItem: (key) => storage.get(key) ?? null,
    setItem: (key, value) => storage.set(key, value),
  },
});
saveProgress(masteryProgress);
assert.deepEqual(loadProgress(), masteryProgress, "valid saved progress should round-trip unchanged");
const validLeapDate = structuredClone(masteryProgress);
validLeapDate.lastPracticeDate = "2024-02-29";
storage.set("fredfish.learning.progress.v1", JSON.stringify(validLeapDate));
assert.deepEqual(loadProgress(), validLeapDate, "valid leap days should remain valid practice dates");
const invalidDate = structuredClone(masteryProgress);
invalidDate.lastPracticeDate = "2026-02-31";
storage.set("fredfish.learning.progress.v1", JSON.stringify(invalidDate));
assert.deepEqual(loadProgress(), emptyProgress(), "calendar-invalid practice dates should safely reset progress");
const malformedDate = structuredClone(masteryProgress);
malformedDate.lastPracticeDate = "not-a-date";
storage.set("fredfish.learning.progress.v1", JSON.stringify(malformedDate));
assert.deepEqual(loadProgress(), emptyProgress(), "malformed practice dates should safely reset progress");
const corrupted = structuredClone(masteryProgress);
corrupted.concepts[sample.concepts[0]].attempts = "not-a-number";
storage.set("fredfish.learning.progress.v1", JSON.stringify(corrupted));
assert.deepEqual(loadProgress(), emptyProgress(), "malformed concept records should safely reset instead of leaking invalid state");
storage.set("fredfish.learning.progress.v1", "{invalid json");
assert.deepEqual(loadProgress(), emptyProgress(), "invalid JSON should safely reset progress");


// Adaptive selection regression coverage: weak concepts should outrank mastered ones.
const weakQuestion = {
  ...sample, id: "test-weak-concept", lessonId: "weak-topic",
  concepts: ["test-weak"], difficulty: 2,
};
const masteredQuestion = {
  ...sample, id: "test-mastered-concept", lessonId: "mastered-topic",
  concepts: ["test-mastered"], difficulty: 2,
};
const selectionProgress = emptyProgress();
selectionProgress.concepts["test-weak"] = {
  conceptId: "test-weak", attempts: 5, correct: 1, streak: 0,
  mastery: 20, lastReviewedAt: now, dueAt: now,
  recentResults: [false, false, true, false, false],
};
selectionProgress.concepts["test-mastered"] = {
  conceptId: "test-mastered", attempts: 5, correct: 5, streak: 5,
  mastery: 100, lastReviewedAt: now, dueAt: now + 30 * 24 * 60 * 60 * 1000,
  recentResults: [true, true, true, true, true],
};
const selectionSnapshot = structuredClone(selectionProgress);
const targeted = buildAdaptiveQuiz([masteredQuestion, weakQuestion], selectionProgress, 1, now, () => 0);
assert.equal(targeted[0].id, weakQuestion.id, "weak and due concepts should outrank mastered concepts");
assert.deepEqual(selectionProgress, selectionSnapshot, "building a quiz must not mutate learner progress");

// Session construction must remain bounded, unique, and robust when every question is recent.
const tinyBank = [weakQuestion, masteredQuestion];
const oversized = buildAdaptiveQuiz(tinyBank, emptyProgress(), 10, now, () => 0);
assert.equal(oversized.length, tinyBank.length, "quiz size must never exceed the available question bank");
assert.equal(new Set(oversized.map((question) => question.id)).size, tinyBank.length, "fallback selection must not duplicate questions");
const fullyRecent = {
  ...emptyProgress(),
  recentQuestionIds: tinyBank.map((question) => question.id),
};
const recentFallback = buildAdaptiveQuiz(tinyBank, fullyRecent, 10, now, () => 0);
assert.equal(recentFallback.length, tinyBank.length, "the selector should fall back to the bank when all questions are recent");
assert.equal(new Set(recentFallback.map((question) => question.id)).size, tinyBank.length);

// A newly introduced concept should be represented before repeatedly sampling a known concept.
const unseenQuestion = {
  ...sample, id: "test-unseen-concept", lessonId: "new-topic",
  concepts: ["test-unseen"], difficulty: 1,
};
const knownQuestion = {
  ...sample, id: "test-known-concept", lessonId: "known-topic",
  concepts: ["test-known"], difficulty: 1,
};
const knownProgress = emptyProgress();
knownProgress.concepts["test-known"] = {
  conceptId: "test-known", attempts: 8, correct: 6, streak: 0,
  mastery: 70, lastReviewedAt: now, dueAt: now + 7 * 24 * 60 * 60 * 1000,
  recentResults: [true, false, true, true, false, true, true, false],
};
const unseenFirst = buildAdaptiveQuiz([knownQuestion, unseenQuestion], knownProgress, 1, now, () => 0);
assert.equal(unseenFirst[0].id, unseenQuestion.id, "unseen concepts should receive initial exposure");

// Equal-priority questions should spread across lessons before repeating a lesson.
const lessonAFirst = {
  ...sample, id: "a-lesson-first", lessonId: "lesson-a",
  concepts: ["test-lesson-a-first"], difficulty: 1,
};
const lessonASecond = {
  ...sample, id: "b-lesson-second", lessonId: "lesson-a",
  concepts: ["test-lesson-a-second"], difficulty: 1,
};
const lessonBFirst = {
  ...sample, id: "z-lesson-b-first", lessonId: "lesson-b",
  concepts: ["test-lesson-b-first"], difficulty: 1,
};
const diverseSession = buildAdaptiveQuiz(
  [lessonAFirst, lessonASecond, lessonBFirst], emptyProgress(), 2, now, () => 0,
);
assert.equal(diverseSession[0].id, lessonAFirst.id, "stable tie-breaking should select the first question deterministically");
assert.equal(diverseSession[1].lessonId, "lesson-b", "the selector should prefer a new lesson over an equally ranked repeat");

console.log("Learning tests passed: adaptive selection, mastery, review scheduling, XP, streaks, ordering shuffle, and storage validation.");
