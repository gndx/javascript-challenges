const trialDivision = (number) => {
  // your code here
  const isPrime = (number, dividered = number) => {
    const noRest = (number, divider) => {
      const rest = number % divider;
      if (rest === 0) return true;
      return false;
    };
    const divider = dividered - 1;
    if (divider === 1) return true;
    if (noRest(number, divider)) return false;
    return isPrime(number, divider);
  };
  if (number <= 1 || !Number.isInteger(number)) return false;
  return isPrime(number);
};

module.exports = trialDivision;
