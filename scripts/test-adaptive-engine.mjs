import assert from "node:assert/strict";
import {
  buildAdaptiveQuiz, emptyProgress, finishSession, recordAnswer, recommendedDifficulty,
} from "../src/lib/learning/adaptive.ts";
import { semesterOneQuestions } from "../src/data/learning/semester-1-seed.ts";

const now = Date.UTC(2026, 10, 8, 12);
const initial = emptyProgress();
const session = buildAdaptiveQuiz(semesterOneQuestions, initial, 10, now);
assert.equal(session.length, 10, "practice sessions should contain ten questions");
assert.equal(new Set(session.map((question) => question.id)).size, 10, "a session must not repeat question IDs");

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

console.log("Adaptive engine tests passed: quiz length, repeat avoidance, mastery, difficulty, review scheduling, XP, and streaks.");
