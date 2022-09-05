const trialDivision = (number) => {
  // your code here
  
  if (number <= 1 || typeof number != 'number') {
    return 'ERROR: no es un numero valido';
  }
  for (let x = 2; x <= number - 1; x++) {
    if (number % x == 0) {
      return 'El numero NO es primo';
    }
  }
  return 'EL numero Si es Primo';


}

module.exports = trialDivision;