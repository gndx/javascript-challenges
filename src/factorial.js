const factorial = (number) => {
  let total = 1
  for(let i = 0; i < number; i++){
    total *= number-i
  }
  return total
}

module.exports = factorial;