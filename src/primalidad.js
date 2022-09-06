const trialDivision= (number) => {
  // your code here

  var div, result;
  
  
  if (number>2 && Number.isInteger(number)){
    result = true;
    for(div=2;div<(number/2);div++){
      if(number%div==0) //is divider
      {
        result=false;
        break; 
      }
    }
  }
  else
    result = false;

 
  return result;

}

module.exports = trialDivision;