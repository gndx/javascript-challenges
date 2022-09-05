const factorial = (number) => {
  let fac = 1;
  for (let i = 1; i <= number; i++) {
    fac *= i;
  }
  return fac;
}

module.exports = factorial;
