const trialDivision = (number) => {
  // your code here
   if(isFloat(number) || number < 2) {
     return false
   }

   let result = true

   for(let i = 2; i < number; i++){
     if(!isFloat(number / i)){
      result = false 
      break
     }
   }

   return result
}

function isFloat(value) {
  if (
    typeof value === 'number' &&
    !Number.isNaN(value) &&
    !Number.isInteger(value)
  ) {
    return true;
  }

  return false;
}

module.exports = trialDivision;