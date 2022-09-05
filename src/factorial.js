const factorial = (number) => {
  let fact = 1;
  while (number >= 1) {
    fact = fact * number;
    number--;
  }
  return fact;
}

module.exports = factorial;