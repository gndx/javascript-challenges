const trialDivision = (number) => {
  var tipoCompuesto = 0;
  var tipoPrimo = 0;
  for (let index = 1; index <= number; index++) {
    if (Number.isInteger(number / index)) {
      tipoCompuesto++;
    } else {
      tipoPrimo++;
    }
  }
  tipoCompuesto -= 2;
  return tipoCompuesto == 0 ? true : false;
  // console.log("Compuesto: " + tipoCompuesto + " - Primo: " + tipoPrimo);
};

module.exports = trialDivision;
