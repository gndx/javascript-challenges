const factorial = (number) => {
  let total = 1;
  for(let i = 1; i <= number; i++ ) {
    total = total * i
  }
  return total
}

module.exports = factorial;