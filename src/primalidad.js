const trialDivision = (number) => {
  for(let i = 2; i < number; i++){
    if(number%i === 0){
      return false
    }
  }
  return (number >= 2 && Number.isInteger(number)) ;
}

module.exports = trialDivision;