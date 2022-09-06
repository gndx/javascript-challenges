const factorial = (number) => {
  // your code here
  /*
  var resultado = 1
  for (var i = number-1; i >0; i--) {
    resultado = number * i
  }
  return resultado;
  */
  
  let resultado = 1;
  for(let i = 1; i<=number; i++){
    resultado *= i;
  }
  return resultado;
}
module.exports = factorial;