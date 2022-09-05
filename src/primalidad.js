function isFloat(n){
  // si el resto del numero dividido 1 no es 0, entonces es float
  return Number(n) === n && n % 1 !== 0;
}

const trialDivision = (number) => {
  for(let i = 2, s = Math.sqrt(number); i <= s; i++)
        if(number % i === 0) return false; 
    return  isFloat(number) ? false : number > 1;
}

console.log(trialDivision(11))

module.exports = trialDivision;