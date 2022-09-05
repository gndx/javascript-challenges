const trialDivision = (number) => {
  if (number <= 1 || typeof number != 'number') {
    return 'no es valido';
  }
  for (let x = 2; x <= number - 1; x++) {
    if (number % x == 0) {
      return 'No es primo';
    }
  }
  return 'Es Primo';
};

module.exports = trialDivision;
