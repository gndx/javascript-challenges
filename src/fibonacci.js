const fibonacci = (n) => {
  if (n === 0 || n === 1) {
    return n;
  }

  let fibonacci = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]);
  }

  return fibonacci;
}

module.exports = fibonacci;
