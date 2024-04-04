/**
 * Description this function check if a word is palindromic
 * @date 4/4/2024 - 2:29:41 PM
 *
 * @param {string} word
 * @returns {boolean}
 */
function isPalindromic(word) {
  let invertedWord = "";
  let result = false;
  for (let i = word.length - 1; i >= 0; i--) {
    invertedWord += word[i];

    if (invertedWord === word) {
        result = true;
    }
  }

  return result;
}
