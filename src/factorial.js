const factorial = (number) => {
  // your code here
  if (number === 0 || number === 1) return 1
  let res = 1
  for (let i = 1; i <= number; i++) {
    res *= i
  }
  return res
}

module.exports = factorial;