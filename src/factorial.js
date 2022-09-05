const factorial = (number) => {
  let result = 1
  for (var i = 1; i <= number; i++) {
    result = result * i
  }
  return result
}

module.exports = factorial;