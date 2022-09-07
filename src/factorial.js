const factorial = (number) => {
  // your code here
  if (number < 2) return 1;
  return number * factorial(number - 1);
};

module.exports = factorial;
