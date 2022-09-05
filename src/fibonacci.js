const fibonacci = (n) => {
  for (var i = 0, fib = []; i < n; i++) {
	fib.push(i < 2 ? 1 : fib[i - 2] + fib[i - 1]);
  }
  return fib;
}

module.exports = fibonacci;