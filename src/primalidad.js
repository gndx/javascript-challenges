const trialDivision = (number) => {
  // your code here
  const absNumber = Math.abs(number);
  if (!Number.isInteger(absNumber)) return false;
  if (absNumber <= 1) return false;
  if (absNumber > 2 && absNumber % 2 === 0) return false;
  for (let i = 3; i < absNumber / 3; i += 2) {
    if (absNumber % i === 0) return false;
  }
  return true;
};

module.exports = trialDivision;
