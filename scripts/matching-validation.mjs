export function isValidMatchingAnswer({ pairIds, pairAnswerIds, matchIds, answer }) {
  if (!Array.isArray(pairIds) || !Array.isArray(pairAnswerIds)
    || !Array.isArray(matchIds) || !Array.isArray(answer)) return false;
  if (pairIds.length < 2 || matchIds.length < 2
    || pairAnswerIds.length !== pairIds.length
    || answer.length !== pairIds.length) return false;
  if (new Set(pairIds).size !== pairIds.length
    || new Set(matchIds).size !== matchIds.length) return false;

  const mappings = [];
  for (const entry of answer) {
    if (typeof entry !== "string") return false;
    const parts = entry.split(":");
    if (parts.length !== 2 || parts.some((part) => !part)) return false;
    mappings.push(parts);
  }

  const mappedPairIds = mappings.map(([pairId]) => pairId);
  const mappedMatchIds = mappings.map(([, matchId]) => matchId);
  if (new Set(mappedPairIds).size !== pairIds.length
    || new Set(mappedMatchIds).size !== mappedMatchIds.length) return false;

  const validPairs = new Set(pairIds);
  const validMatches = new Set(matchIds);
  if (mappings.some(([pairId, matchId]) => !validPairs.has(pairId) || !validMatches.has(matchId))) return false;

  const mappingByPair = new Map(mappings);
  return pairIds.every((pairId, index) => mappingByPair.get(pairId) === pairAnswerIds[index]);
}
