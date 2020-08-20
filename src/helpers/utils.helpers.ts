export const getIndexesInRange = (
  range: number,
  currentIndex: number,
  length: number
): number[] => {
  const results: number[] = [];
  for (let i = -range; i <= range; i++) {
    const literalIndex = currentIndex + i;
    const overflowedIndex = length + literalIndex;
    const mappedIndex = overflowedIndex % length;

    results.push(mappedIndex);
  }

  return results;
};
