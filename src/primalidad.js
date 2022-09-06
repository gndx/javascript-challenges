const trialDivision = (number) => {
  // your code here
const trialDivision = (num) => {
  const number = Math.trunc(num)
  for(let i = 2,raiz=Math.sqrt(number); i <= raiz; i++)
    if(number % i === 0) return false;
  return number > 1;
}
module.exports = trialDivision;
