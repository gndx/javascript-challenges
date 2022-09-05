const factorial = (number) => {
  // your code here
  if (number == 1 || number == 0) return 1
  return number * factorial(number - 1)
}

module.exports = factorial;