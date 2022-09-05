const trialDivision = (number) => {
  let flagPrimo = true
  for (let i = 2; i < number/2; i++) {
    if(number % i === 0){
      flagPrimo = false
    }
  }
  if(flagPrimo){
    return "Es primo: " + number
  }else{
    return "No es primo: " + number
  }
}

module.exports = trialDivision;