const factorial = (number) => {
  // your code here
  
  if (typeof number !=='number') {
    return 'ERROR: No ingreso un numero :('
  }

  let resultado = 0;
  for(let x = number; x = 0; x --) {
    resultado = resultado * x;
  }
  return resultado;

}
 

module.exports = factorial;