const trialDivision = (number) => {
  // your code here
    if (number <=1)return false;
    else if (number % 1 !== 0) return false;
    for (let i = 2; i < number-1; i++) {
        if (number % i ===0) return false;
    }
    return true;
}

module.exports = trialDivision;