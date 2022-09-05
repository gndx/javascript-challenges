const trialDivision = (number) => {
  // your code here

  // condiciones base
  if (number <= 1) {
    return false;
  }

  // si el numero es decimal, no es primo
  // para ver si el numero es decimal, el resto de dividir el numero entre 1 no es 0
  if ((number % 1) !== 0) {
    return false;
  }

  // vemos si number es divisible entre los numeros comprendidos entre 2 y number - 1.
  for (let i = 2; i < number; i++) {
    if ((number % i) === 0) {
      return false;
    }
  }
  return true;
}

module.exports = trialDivision;