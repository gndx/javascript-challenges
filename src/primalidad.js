const trialDivision = (number) => {
  let contador = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      contador++;
    }
  }
  if (contador === 2) {
    return true;
  } else {
    return false;
  }
}

module.exports = trialDivision;