const trialDivision = (number) => {
  if (number % 1 !== 0){
    return false
  }
  else{
    for(var i = 2; i < number; i++){
      if(number % i === 0){ 
        return false;
      }
    }
    return number > 1;
  }
}
console.log(trialDivision(1.3));
module.exports = trialDivision;