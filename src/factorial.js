const factorial = (number) => {
  let result = 1
  
  for (let i = 1; i <= number; i++) {
    result = result * i
  }

  return result
}
console.log(factorial(15));

module.exports = factorial;