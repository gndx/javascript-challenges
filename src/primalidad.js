const trialDivision = (number) => {
  let isPrimal = true;

  if (number <= 1 || !Number.isInteger(number)) {return !isPrimal};

  for(let i = 2; i <= number/2; i++){
    if(number % i == 0){
      isPrimal = !isPrimal;
      break;
    };
  }

  return isPrimal;
}

module.exports = trialDivision;