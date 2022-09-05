const fibonacci = (n) => {
  // your code here
  const firstTwo = [1, 1];
  const completeSecuence = (nTimes, actualFibonacci = firstTwo) => {
    const plusLastTwo = (uncompleteArray) => [
      ...uncompleteArray,
      uncompleteArray.at(-2) + uncompleteArray.at(-1),
    ];
    const fibonacciSecuence = plusLastTwo(actualFibonacci);
    if (fibonacciSecuence.length === nTimes) return fibonacciSecuence;
    return completeSecuence(n, fibonacciSecuence);
  };
  if (n === 1) return [firstTwo[0]];
  if (n <= 2) return firstTwo;
  return completeSecuence(n);
};

module.exports = fibonacci;
