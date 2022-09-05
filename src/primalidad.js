const trialDivision = (number) => {
  // your code here
  //se integra el numero
  if (!Number.isInteger(number) || number < 2)
    return false;

  for (let i = 2; i < number/2 + 1; i++)
  {
    if (number % i == 0)
      return false;
  }

  return true;
}
module.exports = trialDivision;