const trialDivision = (number) => {
  let max = 7
  let numDivisiones = 0;
  if(number <= 1 || Number.isInteger(number) == false) return false
  for(let i=2; i<number; i++){
    if(number%i == 0) return false
  }
  return true;
}

module.exports = trialDivision;