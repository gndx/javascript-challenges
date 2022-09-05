const fibonacci = (n) => {
  if (!n || isNaN(n)) throw Error("Please, provide a number");
  const secuence = [0, 1];
  for (let i = 2; i <= n; i++) {
    secuence[i] = secuence[i - 2] + secuence[i - 1];
  }
  secuence.shift();
  return secuence;
}

module.exports = fibonacci;