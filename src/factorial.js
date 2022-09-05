const factorial = (number) => {
  let result = number;
  while number != 1 {
    number -= 1
    resulr *= factorial(number)
  }
  return result
}

module.exports = factorial;
