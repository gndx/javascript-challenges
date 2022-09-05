const factorial = (number) => {
  if (typeof number !== 'number') {
    return 'No es un numero :(';
  }
  if (number == 0) {
    return 1;
  }
  let result = 1;
  for (let x = 1; x <= number; x++) {
    result = result * x;
  }

  return result;
};

module.exports = factorial;
