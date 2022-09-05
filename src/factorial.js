const factorial = (number) => {
  if (number === 0 || number === 1) return 1;

  let total = number;

  for (let i = number; i > 0; i--) {
    if (i < number) {
      total = i * total;
    }
  }

  return total;
};

module.exports = factorial;
