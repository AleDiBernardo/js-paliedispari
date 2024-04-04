// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const userInput = prompt("Pari o dispari?");

const userNum = getNumBtwOneAndFive();
const cpuNum = randNumBtwOneAndFive();
const result = isSumEven(userNum, cpuNum);

console.log("UserNum:" + userNum);
console.log("CpuNum:" + cpuNum);
console.log(result);
if (userInput === "pari" && result) {
  alert(`La somma è pari. Hai vinto! 🎉`);
} else if (userInput === "dispari" && result === false) {
  alert(`La somma è dispari. Hai vinto! 🎉`);
} else {
  alert(`Ha vinto il computer 🤖`);
}
