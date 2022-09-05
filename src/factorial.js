const factorial = (number) => {

  if(number === 0) {
    return 1;
  }

  const resultado = number * factorial(number-1);
  
  return  resultado;
}

module.exports = factorial;