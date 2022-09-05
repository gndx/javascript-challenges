const fibonacci = (n) => {
  fib = [1, 1];
  if (n == 1) {
    return [1];
  } else if (n == 2) {
    return fib;
  } else {
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
  }
  return fib;
}

module.exports = fibonacci;