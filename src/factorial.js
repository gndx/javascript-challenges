const factorial = (number) => {
  // your code here
  //local variables
  var i, result=1;
  //code 
  for(i=0;i<number;i++){
    result = result * (number - i);
  }

  return result;
}

module.exports = factorial;