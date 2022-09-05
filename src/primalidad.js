const trialDivision= (number) => {
  // your code here

  var div, result;
  
  result = true;

  for(div=2;div<(number/2);div++){
    if(number%div==0) //is divider
    {
      result=false;
      break; 
    }
  }
  return result;

}

module.exports = trialDivision;