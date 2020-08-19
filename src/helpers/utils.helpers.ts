export const getIndexesInRange = (
  range: number,
  currentIndex: number,
  lastIndex: number
): number[] => {
  const previousIndexes: number[] = [];
  const nextIndexes: number[] = [];

  // find previous indexes within range + loop back
  for (let i = range; i > 0; i--) {
    // Loop back if < 0
    const previousIndex =
      currentIndex - i < 0
        ? lastIndex - Math.abs(currentIndex - i) + 1 // - loopBackAmount after passing the 0 index // + 1 because of index 0
        : currentIndex - i;

    previousIndexes.push(previousIndex);
  }

  // find next indexes within range + loop forward
  for (let i = 1; i <= range; i++) {
    // Loop forward if > last index
    const nextIndex =
      currentIndex + i > lastIndex
        ? 0 + Math.abs(currentIndex + i - lastIndex) - 1 // + loopBackAmount after passing the last index // - 1 because of index 0
        : currentIndex + i;

    nextIndexes.push(nextIndex);
  }

  // Sort all indexes in order
  return [...previousIndexes, currentIndex, ...nextIndexes];
};
