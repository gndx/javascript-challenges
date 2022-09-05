const factorial = number => {
  let a = 1
  for(let k = 0; number > 1; k++) {
    a *=number
    number--
  }
  return a
}

// console.log(factorial(9))

module.exports = factorial
