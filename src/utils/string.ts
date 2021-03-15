/**
 * Elush- Properly capitalize the first letter and set the rest to be lower case
 * letters
 * @param str
 */
export const toProperCapitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

/**
 * Elush- Properly capitalize the first letter after every split in a string
 * todo-> add support not to capitalize "and", "or", etc
 * @param str
 * @param split
 */
export const toProperCapitalizeMult = (str: string, split = " "): string =>
  str
    .split(split)
    .map((word: string) => {
      return toProperCapitalize(word);
    })
    .join(split);
