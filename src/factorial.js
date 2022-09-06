const factorial = number => {
  if (number < 1) return 1;
  return factorial(number - 1) * number;
};

module.exports = factorial;
