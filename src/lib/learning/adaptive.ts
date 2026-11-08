import type { ConceptProgress, LearningProgress, LearningQuestion } from "./types";

const DAY = 24 * 60 * 60 * 1000;
const localDateKey = (date: Date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));

export function emptyProgress(): LearningProgress {
  return {
    version: 1, xp: 0, streakDays: 0, lastPracticeDate: null,
    totalSessions: 0, totalAnswers: 0, totalCorrect: 0,
    recentQuestionIds: [], concepts: {}, history: [],
  };
}

function conceptState(id: string, progress: LearningProgress): ConceptProgress {
  return progress.concepts[id] ?? {
    conceptId: id, attempts: 0, correct: 0, streak: 0, mastery: 0,
    lastReviewedAt: null, dueAt: 0, recentResults: [],
  };
}

export function recordAnswer(
  progress: LearningProgress,
  question: LearningQuestion,
  correct: boolean,
  now = Date.now(),
): LearningProgress {
  const next = structuredClone(progress);
  next.totalAnswers += 1;
  if (correct) next.totalCorrect += 1;
  for (const id of question.concepts) {
    const previous = conceptState(id, next);
    const attempts = previous.attempts + 1;
    const streak = correct ? previous.streak + 1 : 0;
    const recentResults = [...previous.recentResults, correct].slice(-8);
    // Recent accuracy matters more than lifetime accuracy, but a single miss cannot erase mastery.
    const recentAccuracy = recentResults.filter(Boolean).length / recentResults.length;
    const lifetimeAccuracy = (previous.correct + (correct ? 1 : 0)) / attempts;
    const evidence = Math.min(1, attempts / 5);
    const mastery = clamp(Math.round((recentAccuracy * 0.65 + lifetimeAccuracy * 0.35) * evidence * 100), 0, 100);
    const intervalDays = !correct ? 0.25 : mastery >= 90 ? 21 : mastery >= 75 ? 7 : mastery >= 55 ? 3 : 1;
    next.concepts[id] = {
      conceptId: id, attempts, correct: previous.correct + (correct ? 1 : 0),
      streak, mastery, lastReviewedAt: now, dueAt: now + intervalDays * DAY, recentResults,
    };
  }
  next.recentQuestionIds = [question.id, ...next.recentQuestionIds].slice(0, 40);
  return next;
}

function difficultyFit(question: LearningQuestion, progress: LearningProgress): number {
  const target = recommendedDifficulty(question.concepts, progress);
  // Prefer questions near the learner's current level without excluding harder stretch questions.
  return 12 - Math.abs(question.difficulty - target) * 3;
}

function priority(question: LearningQuestion, progress: LearningProgress, now: number): number {
  const states = question.concepts.map((id) => conceptState(id, progress));
  const weakest = states.reduce((sum, state) => sum + (100 - state.mastery), 0) / Math.max(1, states.length);
  const due = states.filter((state) => state.dueAt <= now).length / Math.max(1, states.length);
  const unseen = states.filter((state) => state.attempts === 0).length / Math.max(1, states.length);
  const stale = states.reduce((sum, state) => sum + (state.lastReviewedAt ? Math.min(30, (now - state.lastReviewedAt) / DAY) : 30), 0) / Math.max(1, states.length);
  return weakest * 0.42 + due * 24 + unseen * 35 + stale * 0.65;
}

export function buildAdaptiveQuiz(
  bank: LearningQuestion[],
  progress: LearningProgress,
  count = 10,
  now = Date.now(),
): LearningQuestion[] {
  const candidates = bank.filter((q) => !progress.recentQuestionIds.slice(0, 8).includes(q.id));
  const pool = candidates.length >= count ? candidates : bank;
  const selected: LearningQuestion[] = [];
  const remaining = [...pool];
  while (selected.length < count && remaining.length) {
    remaining.sort((a, b) => {
      const score = (priority(b, progress, now) + difficultyFit(b, progress)) - (priority(a, progress, now) + difficultyFit(a, progress));
      return score || a.id.localeCompare(b.id);
    });
    // A little controlled exploration prevents the same weakest topic from dominating every session.
    const exploration = selected.length > 0 && selected.length % 4 === 3;
    const index = exploration ? Math.min(remaining.length - 1, Math.floor(remaining.length * 0.25)) : 0;
    selected.push(remaining.splice(index, 1)[0]);
  }
  return selected;
}

export function recommendedDifficulty(conceptIds: string[], progress: LearningProgress): number {
  if (!conceptIds.length) return 1;
  const mastery = conceptIds.reduce((sum, id) => sum + conceptState(id, progress).mastery, 0) / conceptIds.length;
  return mastery >= 90 ? 5 : mastery >= 75 ? 4 : mastery >= 55 ? 3 : mastery >= 30 ? 2 : 1;
}

export function finishSession(
  progress: LearningProgress,
  answers: { correct: boolean }[],
  now = Date.now(),
): LearningProgress {
  const next = structuredClone(progress);
  const currentDate = new Date(now);
  const date = localDateKey(currentDate);
  if (next.lastPracticeDate !== date) {
    const previousDate = new Date(now);
    previousDate.setDate(previousDate.getDate() - 1);
    const yesterday = localDateKey(previousDate);
    next.streakDays = next.lastPracticeDate === yesterday ? next.streakDays + 1 : 1;
    next.lastPracticeDate = date;
  }
  const correct = answers.filter((answer) => answer.correct).length;
  const xp = correct * 10 + (answers.length === 10 ? 10 : 0);
  next.xp += xp;
  next.totalSessions += 1;
  next.history = [...next.history, { id: `session-${now}`, date: now, correct, total: answers.length, xp }].slice(-100);
  return next;
}
