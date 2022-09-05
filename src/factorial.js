const factorial = (number) => {
  // your code here

  // condicion base
  if (number <= 1) {
    return 1;
  }
  // recursion
  return number * factorial(number-1);
}

module.exports = factorial;