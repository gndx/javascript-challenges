const fibonacci = (n) => {
  // your code here
  // 0 1 1 2 3 5 8
  let a = 0, b = 1;
  const fibonacciSerie = [];

  for (let i = 1; i <= n; i++) {
    fibonacciSerie.push(b);
    const aux = a;
    a = b;
    b = aux + b;
  }

  return fibonacciSerie;
}

module.exports = fibonacci;