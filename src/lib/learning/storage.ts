import { emptyProgress } from "./adaptive.ts";
import type { ConceptProgress, LearningProgress } from "./types";

const KEY = "fredfish.learning.progress.v1";
const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);
const isFiniteNumber = (value: unknown): value is number =>
  typeof value === "number" && Number.isFinite(value);
const isNonNegativeInteger = (value: unknown): value is number =>
  Number.isInteger(value) && typeof value === "number" && value >= 0;

function isConceptProgress(value: unknown, key: string): value is ConceptProgress {
  if (!isRecord(value)) return false;
  return value.conceptId === key
    && isNonNegativeInteger(value.attempts)
    && isNonNegativeInteger(value.correct)
    && value.correct <= value.attempts
    && isNonNegativeInteger(value.streak)
    && value.streak <= value.attempts
    && isFiniteNumber(value.mastery)
    && value.mastery >= 0 && value.mastery <= 100
    && (value.lastReviewedAt === null || isFiniteNumber(value.lastReviewedAt))
    && isFiniteNumber(value.dueAt)
    && Array.isArray(value.recentResults)
    && value.recentResults.length <= 8
    && value.recentResults.every((result) => typeof result === "boolean");
}

function isLearningProgress(value: unknown): value is LearningProgress {
  if (!isRecord(value) || value.version !== 1 || !isRecord(value.concepts)) return false;
  if (!isNonNegativeInteger(value.xp) || !isNonNegativeInteger(value.streakDays)
    || !isNonNegativeInteger(value.totalSessions) || !isNonNegativeInteger(value.totalAnswers)
    || !isNonNegativeInteger(value.totalCorrect) || value.totalCorrect > value.totalAnswers) return false;
  if (value.lastPracticeDate !== null && (typeof value.lastPracticeDate !== "string"
    || !/^\\d{4}-\\d{2}-\\d{2}$/.test(value.lastPracticeDate))) return false;
  if (!Array.isArray(value.recentQuestionIds)
    || value.recentQuestionIds.length > 40
    || !value.recentQuestionIds.every((id) => typeof id === "string")) return false;
  if (!Array.isArray(value.history) || value.history.length > 100
    || !value.history.every((entry) => isRecord(entry)
      && typeof entry.id === "string"
      && isFiniteNumber(entry.date)
      && isNonNegativeInteger(entry.correct)
      && isNonNegativeInteger(entry.total)
      && entry.correct <= entry.total
      && isNonNegativeInteger(entry.xp))) return false;
  return Object.entries(value.concepts).every(([key, concept]) => isConceptProgress(concept, key));
}

export function loadProgress(): LearningProgress {
  if (typeof localStorage === "undefined") return emptyProgress();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return emptyProgress();
    const parsed: unknown = JSON.parse(raw);
    return isLearningProgress(parsed) ? parsed : emptyProgress();
  } catch {
    return emptyProgress();
  }
}

export function saveProgress(progress: LearningProgress): void {
  if (typeof localStorage !== "undefined") {
    try { localStorage.setItem(KEY, JSON.stringify(progress)); } catch { /* Storage may be unavailable or full; keep the active session usable. */ }
  }
}
