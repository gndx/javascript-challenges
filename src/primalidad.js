const trialDivision = (number) => {
  // your code here
  if (number <= 1 || number == 4 || !Number.isInteger(number)) return false;
  for (let i = 2; i < number / 2; i++) if (number % i == 0) return false;
  return true;
};
module.exports = trialDivision;
