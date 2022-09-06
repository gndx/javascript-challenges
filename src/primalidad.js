const trialDivision = (number) => {
  // your code here
  if (number !== Math.round(number)) return false;

  const divisores = [];
  for (let i = 2; i < 10; i++)
    if (i !== number && number % i === 0) divisores.push(i);

  // console.log(divisores);
  return number > 1 && divisores.length === 0;
}

module.exports = trialDivision;