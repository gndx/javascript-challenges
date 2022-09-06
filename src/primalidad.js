function trialDivision(number) { 
  if (Number.isInteger(number) )
  {
    if (number<=0||number<=1) return false;
    
    for (var i = 2; i <= Math.sqrt(number); i++)
        if (number % i == 0) return false;
    return true;
    
}else {
  return false;
}

}
var number = 1.3;
isPrime= trialDivision(number)
console.log(isPrime);

module.exports = trialDivision;