const factorial = (number) => {
  // your code here
  let result = number;
  if (number > 1) {
    number--;
    result *= factorial(number);
    return result;
  }
  else if (number < 0) {
    return "Try another number..."
  }
  else {
    return 1;
  }
}

module.exports = factorial;
