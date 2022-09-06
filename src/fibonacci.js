const fibonacci = (n) => {
  // your code here
  let secuence = [0, 1];
  let prevIndex = 0, nextIndex = 1;

  for(let i = 1; i <= n; i++) {
    secuence.push(secuence[prevIndex] + secuence[nextIndex]);
    prevIndex++;
    nextIndex++;
  }

  return secuence.slice(1, n + 1);
}

module.exports = fibonacci;