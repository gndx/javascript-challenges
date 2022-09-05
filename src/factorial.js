const factorial = (number) => {
    let result = number;
    if (number != 1) {
      number -= 1;
      result *= factorial(number);
    }
    return result;
  }

module.exports = factorial;
