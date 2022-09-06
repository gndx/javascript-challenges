const trialDivision = (number) => {
  // validation of decimals
  if(number != parseInt(number)) return false
  // validation negativos
  if(number <= 1) return false
  // if it is 2 is correct
  if(number == 2) return true

  let min = 2;
  let max = number;

  while(min < max){
    if(number % min==0){
      return false;
    }
    max = parseInt(number/min)+1;
    min += 1;
  }
  return true;
}

module.exports = trialDivision;