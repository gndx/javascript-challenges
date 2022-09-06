const trialDivision = (number) => {
  let primo=false;
  let divisor=1;
  if(number>1){
    if(number % 1 == 0){
      divisor=Math.round(number/2);
      while(divisor>1){
        if(number%divisor==0) {
          primo=false;
          break;
        }
        divisor=divisor-1;
      }
      if(divisor==1) primo=true;
    }
  }

  return primo;
}

module.exports = trialDivision;