const fibonacci = (n) => {
  if (n === 1) return [1];
  var fib = [];
  fib[0] = 1;
  fib[1] = 1;
  for (var i = 2; i < n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib;
}

module.exports = fibonacci;