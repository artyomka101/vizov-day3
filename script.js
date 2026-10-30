const symbols1  = [2, 5, 7, 5, 2];
const symbols2  = [4, 1, 3, 1, 4];
const symbols3  = [2, 5, 7, 4, 2];
const symbols4  = [9, 9, 9, 9];
const symbols5  = [1, 2];
const symbols6  = [6];

function isSymmetric(symbols) {
  for (let i = 0; i < symbols.length / 2; i++) {
    if (symbols[i] !== symbols[symbols.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isSymmetric(symbols1));
console.log(isSymmetric(symbols2));
console.log(isSymmetric(symbols3));
console.log(isSymmetric(symbols4));
console.log(isSymmetric(symbols5));
console.log(isSymmetric(symbols6));
