const fibonacci = (n) => {
  let fib = [];
  if (n == 1) {
    return (fib = [n]);
  } else {
    fib = [1, 1];
    for (let i = 2; i < n; i++) {
      fib.push(fib[i - 2] + fib[i - 1]);
    }
  }
  return fib;
}

module.exports = fibonacci;