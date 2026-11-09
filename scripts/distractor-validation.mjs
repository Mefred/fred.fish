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
