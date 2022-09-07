const fibonacci = (n) => {
  // your code here
  let res = [0, 1]
  for (let i = 2; i <= n; i++) {
    res[i] = res[i - 2] + res[i - 1]
  }
  return res.slice(1)
}

module.exports = fibonacci;