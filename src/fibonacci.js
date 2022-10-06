const fibonacci = (n) => {
  if (n == 0) return [0];
  if (n == 1) return [1];
  if (n == 2) return [1, 1];
  let fibonacciArray = fibonacci(n - 1);
  fibonacciArray.push(fibonacciArray[n - 2] + fibonacciArray[n - 3]);
  return fibonacciArray;
}

module.exports = fibonacci;