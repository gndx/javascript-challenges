const trialDivision = (number) => {
  if(number % 1 !== 0) {
    return false;
  }
  else if(number < 0 || number === 0){
    return false;
  }else if(number === 1){
  return false;
} else if(number === 2){
  return true;
} else{
  for(let i = 2; i< number; i++){
    if(number % i === 0){
      return false;
    }
  }
  return true;
}
}
module.exports = trialDivision;