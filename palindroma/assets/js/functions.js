/**
 * Description this function check if a word is palindromic
 * @date 4/4/2024 - 2:29:41 PM
 *
 * @param {string} word
 * @returns {boolean}
 */
function isPalindromic(word) {
  let result = false;
  const reverseWord = reverseString(word);

  if (reverseWord === word) {
    result = true;
  }

  return result;
}

/**
 * Description placeholder
 * @date 4/5/2024 - 10:21:27 AM
 *
 * @param {string} stringToReverse
 * @returns {string}
 */
function reverseString(stringToReverse) {
  let invertedWord = "";
  for (let i = stringToReverse.length - 1; i >= 0; i--) {
    invertedWord += stringToReverse[i];
  }

  return invertedWord;
}
