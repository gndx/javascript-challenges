const fibonacci = (n) => {
  const result = [];
  result[0] = 1;
  // result[1] = 1;
  for (let i = 1; i < n; i++) {
    if (i == 1) {
      result[i] = 1;
    } else {
      result[i] = result[i - 2] + result[i - 1];
    }
  }

  return result;
};

module.exports = fibonacci;
