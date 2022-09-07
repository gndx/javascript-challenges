const trialDivision = (number) => {
  let bandera = true;
  if (number <= 1) return false;
  if (!Number.isInteger(number)) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) bandera = false;
  }
  return bandera;
};
trialDivision(5);

module.exports = trialDivision;
