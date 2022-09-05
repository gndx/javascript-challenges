const trialDivision = (number) => {
  if(number < 2)
    return false

  if(number % 1 != 0)
    return false

  let to = Math.trunc(Math.sqrt(number))
  for(let i = 2; i <= to; i++){
    if (number % i == 0)
    return false
  } 

  return true
}

module.exports = trialDivision;