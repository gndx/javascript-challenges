const factorial = (number) => {
  let result = 1;
  for (let i = 0; i < number; i++) result *= i + 1;
  return result;
};

module.exports = factorial;
