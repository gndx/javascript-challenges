const trialDivision = (number) => {
  numero = number;
  //Casos Especiales
  if(numero <= 1 || numero == 0 || numero == 4){return false;}
  //Si son datos Float
  if (numero % 1 !== 0) {return false}
  //Regla General
  for (var i = 2; i < numero / 2; i++) {
    if (numero % i == 0) {return false;}
  }
  return true; 
}

module.exports = trialDivision;