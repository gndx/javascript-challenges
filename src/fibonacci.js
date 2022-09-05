const fibonacci = (n) => {
if (n === 1) return [1];
arrayFibonacci = [1, 1];
for (let index = 2; index < n; index++) {
  arrayFibonacci[index] = arrayFibonacci[index - 1] + arrayFibonacci[index -2];
}
return arrayFibonacci;
}
module.exports = fibonacci;
