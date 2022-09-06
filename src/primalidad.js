const trialDivision = (number) => {
  // your code here
  let isPrimo = true;
  for(let i = 2; i < number/2; i++){
    if(number % i === 0){
      isPrimo = false;
    }
  }
  return isPrimo ? true : false;
}

module.exports = trialDivision;