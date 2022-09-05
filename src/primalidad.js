const trialDivision = (number) => {
  // your code here
  let residuo=0;

  if (number ==0 || number==1 || number==4 || number<0 || Number.isInteger(number)==false) {
    return false;
  }

  for(let i=2; i<number/2; i++){
    residuo=number%i;
    if(residuo==0) return false    
  }

  return true;
  

}

module.exports = trialDivision;