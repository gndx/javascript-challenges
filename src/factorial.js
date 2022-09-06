const factorial = (number) => {
  resultado = 1;
  for (n = number; n>0 ; n--){
    resultado *= n;
  }
  return resultado;
}

module.exports = factorial;