const factorial = (number) => {
  // your code here
  if ( number == 0) {
    return 1;
  }

  if ( number == 1) {
    return 1;
  }

  return number * factorial(number-1);
}

module.exports = factorial;