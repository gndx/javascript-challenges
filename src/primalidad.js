const trialDivision = (number) => {
  // your code here
  if(number<= 1 || number != Math.round(number) ){
    return false;
  }
  if(2<=Math.sqrt(number)){
    for (let x = 2; x <= Math.sqrt(number) ; x++){
      if(number%x == 0) {return false;}
    }
  }
  return true;
}

module.exports = trialDivision;