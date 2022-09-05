const fibonacci = (n) => {
  let first = 0,
    second = 1;
  const result = [];
  for (let i = 1; i <= n; i++) {
    [second, first] = [first + second, second];
    result.push(first);
  }
  return result;
};

module.exports = fibonacci;
