const factorial = (number) => {
  var resultado = 1;
  for (let index = resultado; index <= number; index++) {
    resultado = resultado * index;
  }
  return resultado;
};

module.exports = factorial;
