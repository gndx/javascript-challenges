const factorial = (number) => {
  let result = 0;

  // number 0 and 1 cases
  if (number === 0 || number === 1) {
    result = 1;
  } else {
    for (let index = number; index !== 0; index--) {
      // check if first number is assigned first
      result === 0 ? (result = index) : (result *= index);
    }
  }
  return result;
};

module.exports = factorial;
