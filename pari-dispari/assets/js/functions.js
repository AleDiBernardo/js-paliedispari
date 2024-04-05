/**
 * Asks the user for a number from 1 to 5
 * @date 4/4/2024 - 2:46:18 PM
 *
 * @returns {number}
 */
function getNumBtwOneAndFive() {
  let num = 0;
  do {
    num = parseInt(prompt("Inserisci un numero da 1 a 5"));
  } while (num < 1 || num > 5);

  return num;
}

/**
 * Generate random number from 1 to 5
 * @date 4/4/2024 - 2:53:25 PM
 *
 * @returns {number} randNum
 */
function randNumBtwOneAndFive() {
  const max = 5,
    min = 1;
  const randNum = Math.floor(Math.random() * max - min + 1) + min;

  return randNum;
}

/**
 * Check if sum is even or odd
 * @date 4/4/2024 - 8:18:50 PM
 *
 * @param {number} userNum
 * @param {number} cpuNum
 * @returns {boolean}
 */
function isSumEven(userNum, cpuNum) {
  let sum = userNum + cpuNum;

  return sum % 2 === 0;
}
