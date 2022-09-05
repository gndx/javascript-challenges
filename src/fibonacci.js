const fibonacci = (n) => {
  let number1 = 1;
  let number2 = 1;
  let next = 0;
  let fibonacciResult = [];
  for (let x = 0; x < n; x++) {
    fibonacciResult.push(number1);
    next = number1 + number2;
    number1 = number2;
    number2 = next;
  }
  return fibonacciResult;
}

module.exports = fibonacci;