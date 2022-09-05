const factorial = (number) => {
  let total = 1;
  for (let i = number; i > 0; i--) {
    total *= i;
  }
  return total;
}

module.exports = factorial;