const factorial = (number) => {
  let fact = 1;
  for (let i = 0; i < number; i++) {
    fact = fact * (number - i);
  }
  return fact;
};

module.exports = factorial;
