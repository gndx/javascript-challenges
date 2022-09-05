const trialDivision = (number) => {
if (number < 0 || !Number.isInteger(number)) return false;
if(number === 0 || number === 1 || number === 4) return false;
for (let index = 2; index < number/2; index++) {
  if (number % index === 0) return false;
}
return true;
}
module.exports = trialDivision;
