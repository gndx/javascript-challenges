const factorial = (number) => {
  let valor = number; 
  for( let i = number-1; i > 0; i--  ) {
    let multiplicacion = valor * i;
    valor = multiplicacion;
  }
}
module.exports = factorial;
