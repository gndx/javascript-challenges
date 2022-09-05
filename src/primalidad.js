const trialDivision = (number) => {
  if (number<=1){
    return false;
  }
  else{
    for (let i =2; i <= number-1; i++){
      if(number%i == 0){
        return false;
      }
      else{
        return true;
      }
    }
  }
}

module.exports = trialDivision;