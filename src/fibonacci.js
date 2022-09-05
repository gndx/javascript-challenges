const fibonacci = (n) => {
  let result = [1], a = 0, b = 1, res, i;
  for (i = 2; i <= n; i++) {
    res = a + b; a = b; b = res;
    result.push(res);
  }
  return result;
}

module.exports = fibonacci;