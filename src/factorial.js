const factorial = (number) => {
  let result = 1;
  for (let iterator = number; iterator > 0; iterator--) {
    result *= iterator;
  }
  return result;
}

module.exports = factorial;