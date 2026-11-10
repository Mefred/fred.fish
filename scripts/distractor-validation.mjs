/** Validate optional per-distractor feedback against a question's answer choices. */
export function isValidDistractorExplanations(choiceIds, answer, explanations) {
  if (!Array.isArray(choiceIds) || !Array.isArray(answer) || !explanations
    || typeof explanations !== "object" || Array.isArray(explanations)) return false;
  const validChoices = new Set(choiceIds);
  const correctChoices = new Set(answer);
  return Object.entries(explanations).every(([id, explanation]) =>
    typeof id === "string" && id.length > 0
    && validChoices.has(id) && !correctChoices.has(id)
    && typeof explanation === "string" && explanation.trim().length > 0
  );
}


/** Parse a compact object literal without silently accepting malformed or duplicate entries. */
export function parseDistractorExplanations(fragment) {
  if (typeof fragment !== "string" || !fragment.trim()) return null;
  const result = {};
  let remaining = fragment;
  while (remaining.trim()) {
    const match = remaining.match(/^\s*([a-zA-Z0-9_-]+)\s*:\s*("(?:\\.|[^"\\])*")\s*(?:,|$)/);
    if (!match || Object.hasOwn(result, match[1])) return null;
    try {
      result[match[1]] = JSON.parse(match[2]);
    } catch {
      return null;
    }
    remaining = remaining.slice(match[0].length);
  }
  return Object.keys(result).length ? result : null;
}
