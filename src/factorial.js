const factorial = (number) => {
  // your code here
  return number == 0 || number == 1 ? 1 : number * factorial(number-1);
}

module.exports = factorial;