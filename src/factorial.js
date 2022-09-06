const factorial = (number) => {
  // your code here
  let resultado = 1;
  for (let iterator = number; iterator > 0; iterator--) {
    resultado *= iterator;
  }
  return resultado;
}

module.exports = factorial;