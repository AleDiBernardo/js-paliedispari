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
