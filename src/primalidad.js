const trialDivision = (number) => {
  if (number < 2) return false;

  let counter = 0;

  for (let i = 2; i < number; i++) {
    const result = number % i;
    if (result !== 0) counter = counter + 1;
  }

  if (counter === number - 2) {
    return number % number === 0 && number % 1 === 0;
  }

  return false;
};

module.exports = trialDivision;
