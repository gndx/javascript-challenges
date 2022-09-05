const fibonacci = (n) => {
  let init = [1, 1];
  let result = [1, 1];

  for (let i = 2; i <= n; i++) {
    init[i] = init[i - 1] + init[i - 2];
    result.push(init[i]);
  }

  result.length = result.length - 1;

  return result;
};
module.exports = fibonacci;