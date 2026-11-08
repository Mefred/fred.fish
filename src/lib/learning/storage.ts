import { emptyProgress } from "./adaptive";
import type { LearningProgress } from "./types";

const KEY = "fredfish.learning.progress.v1";

export function loadProgress(): LearningProgress {
  if (typeof localStorage === "undefined") return emptyProgress();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return emptyProgress();
    const parsed = JSON.parse(raw) as LearningProgress;
    if (parsed.version !== 1 || !parsed.concepts || !Array.isArray(parsed.history)) return emptyProgress();
    return parsed;
  } catch {
    return emptyProgress();
  }
}

export function saveProgress(progress: LearningProgress): void {
  if (typeof localStorage !== "undefined") {\n    try { localStorage.setItem(KEY, JSON.stringify(progress)); } catch { /* Storage may be unavailable or full; keep the active session usable. */ }\n  }
}
