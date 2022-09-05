const fibonacci = (n) => {
  let a = 0;
  let b = 1;
  let c;
  let arrayFibonacci = [];
  for (let i = 0; i < n; i++) {
    c = a + b;
    a = b;
    b = c;
    arrayFibonacci.push(a);
  }
  return arrayFibonacci;

}

module.exports = fibonacci;