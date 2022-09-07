const trialDivision = (number) => {

    if (number <= 1 || !Number.isInteger(number)){
      return false
    }
  
  	for(let i = number - 1; i > 1; i--){
      if(number % i === 0){
        return false
      }
    }
  
  return true

}

module.exports = trialDivision;