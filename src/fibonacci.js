const fibonacci = (n) => {
  const fib = [0,1];

  for (let i = 2; i < n; i++){
    fib[i] = fib[i-2] + fib[i-1];
  }
  console.log(fib);
  return fib;
}

module.exports = fibonacci;