const factorial = (number) => {
  number =5;
  let valor = number; 
  for( let i = number-1; i > 0; i--  ) {
    let multiplicacion = valor * i;
    valor = multiplicacion;
  }
alert("multiplicacion "+ valor );
}
module.exports = factorial;
