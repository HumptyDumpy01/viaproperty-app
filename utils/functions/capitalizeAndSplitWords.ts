// capitalize each first letter, and if the word is e.g. airConditioning, split it into two words
// and capitalize the first letter of each word
export function capitalizeAndSplitWords(convenience: string): string {
  const capitalizedConvenience = convenience.split(/(?=[A-Z])/).map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(` `);
  return capitalizedConvenience;
}
