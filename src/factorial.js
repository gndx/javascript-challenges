const factorial = (number) => {
  // your code here
  let resultado = 1;
  for(let i=number; i>0; i--){
    resultado *= i;
  }
  return resultado
}

module.exports = factorial;