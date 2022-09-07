const trialDivision = (number) => {
  var valor = true;
  if (number == 1 || !Number.isInteger(number) )
    valor = false;
  else {
    var valor = (number>1);
    for( var i=2;i<number;i++) {
      for(var j=2;j<number;j++)
      {
        if (i*j == number) {
          valor = false;
          break;
        }
      }
      if (valor==false)
      break;
    }
  }
  return valor;
}

module.exports = trialDivision;
