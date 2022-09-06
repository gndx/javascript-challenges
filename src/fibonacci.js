const fibonacci = (n) => {
  const fiboArr = [1];

  for (let i = 2; i <= n; i++) {
    let newValue = (fiboArr[i - 3] || 0) + fiboArr[i - 2];
    fiboArr.push(newValue);
  }

  return fiboArr
}

module.exports = fibonacci;