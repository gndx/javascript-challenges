const trialDivision = (number) => {
  if(number < 2||(number % 2 == 0 && number != 2))
  return false;
  for (let i = 3; i * i <= number; i += 2)
  if(number % i == 0)
     return false;
return true;
}

module.exports = trialDivision;