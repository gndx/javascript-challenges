const fibonacci = (n) => {
  let initial = [1, 1];
  let result = [1, 1];

  for (let i = 2; i <= n; i++) {
    initial[i] = initial[i - 1] + initial[i - 2];
    result.push(initial[i]);
  }

  result.length = result.length - 1;

  return result;
};
module.exports = fibonacci;