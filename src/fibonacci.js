const fibonacci = (n) => {
  // your code here
  if (n <= 1) return [1]
  if (n === 2) return [1, 1]
  const fibonacciArray = fibonacci(n - 1)
  return [...fibonacciArray, fibonacciArray[fibonacciArray.length - 2] + fibonacciArray[fibonacciArray.length - 1]]
}

module.exports = fibonacci;