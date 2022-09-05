const trialDivision = (number) => {
  // your code here
  if (number == 1) {
    return false;
  }
  
  let divisors = 0;

  for (let i = number; i > 0; i--) {
    if (number % i == 0) {
      divisors++
    }
  }

  if (divisors == 2) {
    return true;
  } else {
    return false;
  }
}

module.exports = trialDivision;