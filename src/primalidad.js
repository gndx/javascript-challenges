const trialDivision = (number) => {
  // your code here
    if(number % 1 !== 0) return false;
    for(let i = 2, s = Math.sqrt(number); i <= s; i++)
        if(number % i === 0) return false;
    return number > 1;
}

module.exports = trialDivision;