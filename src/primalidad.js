const trialDivision = (number) => {
  // Todos los números flotantes primos deben ser de la forma a.0;
  if(isFloat(number)) {
    if (number % 1 !== 0) return false;
    number = Math.trunc(number)
  }
  for(let i = 2, s = Math.sqrt(number); i <= s; i++) {
    if(number % i === 0) return false; 
  }
  return number > 1;
}

function isFloat(n) {
  return Number(n) === n && n % 1 !== 0 ;
}

module.exports = trialDivision;