const trialDivision = (number) => {
  let divisible = 0, i;

  for (i = 2; i <= number; i++) {
      if (number % i == 0){ divisible +=1; }
  };

  return divisible == 1; 
}

module.exports = trialDivision;