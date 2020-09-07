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

/**
 * @description change string to title casing
 * @param string input string
 * @param separator a token used for separating & joining words of the input string
 */
export const toTitleCase = (string: string, separator = " "): string => {
  const words = string.split(separator);
  return words
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(separator);
};

/**
 * @description remove all the slug (-) from a string
 * @param string input string
 * @param replaceSlugWith replace the slug (-) with another token. Default is " "
 */
export const removeSlug = (string: string, replaceSlugWith = " "): string => {
  return string.replace(/-/g, replaceSlugWith);
};

/**
 * @description extract filename from file import path
 * @param path the path to the file
 */
export function filePathToName(path: string) {
  // NOTE remove anything before the final slash
  //      remove extension
  return path.replace(/^.*[/\\]/, "").replace(/\..*$/, "");
}
