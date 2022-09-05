const fibonacci = (n) => {
  const fibonacciSequence = [0, 1];

  if(n <= 1) {
    return [1];
  }

  for(let i = 2; i <= n; i++) {
    fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
  }

  fibonacciSequence.shift();

  return fibonacciSequence;
}

fibonacci(1);

module.exports = fibonacci;