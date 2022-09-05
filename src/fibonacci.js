const fibonacci = (n) => {
  let fibo = [];
  let count = 0;
  let n1 = 1;
  let n2 = 1;
  let nth = 0;
  while (count < n) {
    fibo.push(n1);
    nth = n1 + n2;
    n1 = n2;
    n2 = nth;
    count += 1;
  }
  return fibo;
}

module.exports = fibonacci;