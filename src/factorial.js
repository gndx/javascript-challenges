const factorial = (number) => {
  var valor = 1;
  for( var i=number;i>0;i--) {
    valor *= i;
  }
  return valor;
}

module.exports = factorial;
