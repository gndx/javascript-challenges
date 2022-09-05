const factorial = (number) => {
  // your code here
  const multiply = (actualValue, multipliedBy = number) => {
    if (multipliedBy === 1) return actualValue;
    const multyplyBy = multipliedBy - 1;
    const result = actualValue * multyplyBy;
    return multiply(result, multyplyBy);
  };
  if (number === 0) return 1;
  return multiply(number);
};

module.exports = factorial;
