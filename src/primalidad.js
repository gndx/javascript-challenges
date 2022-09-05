const trialDivision = (number) => {
  // si no es numero entero o es igual a 1, entonces devuelve false
  if (number <= 1 || !Number.isInteger(number)) {
    return false;
  }

  // busca cada posible divisor del numero, si encuentra alguno entonces
  // no es primo
  for (let i = number - 1; i > 1; i--) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

module.exports = trialDivision;
