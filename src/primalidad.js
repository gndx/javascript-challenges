const trialDivision = (number) => {
  // your code here
 function isFloat(number){
  return Number(number) === number && number % 1 !== 0;
}
 if (number == 0 || number == 1 || number == 4||number <= 1||isFloat(number)) return false;
 for (let x = 2; x < number / 2; x++) {
   if (number % x == 0) return false;
 }
 return true;
 
}

module.exports = trialDivision;