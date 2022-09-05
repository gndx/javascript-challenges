const dynamicFibo = (n, memo) => {
  if (n === 0 || n === 1) {
    memo[n] = 1;
    return 1;
  }

  if (memo[n]) { return memo[n]; }

  const result = dynamicFibo(n - 1, memo) + dynamicFibo(n - 2, memo);
  memo[n] = result;
  return result;
}

const fibonacci = (n) => {
  // your code here
  if (n === 1) return [1];
  let memo = {}
  dynamicFibo(n, memo);
  const result = Object.values(memo)
  result.pop();
  return result;
}

module.exports = fibonacci;