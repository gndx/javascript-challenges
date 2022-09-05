const factorial = (number) => {
  let respuesta = 1;
 
  for(let i = 2; i<= number; i++) {
    respuesta *= i;
  }

  return respuesta;
}

module.exports = factorial;
