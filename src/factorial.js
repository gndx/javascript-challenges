const factorial = (number) => {

  if(number < 0) 
    throw new Error("No se puede obtener el factorial de un numero negativo");

  if(number === 0) 
    return 1;

  return number * factorial(number-1);
}

module.exports = factorial;