const factorial = (number) => {
  // your code here

  var result = number;

  if (number < 0) {
     return -1;
  }

  else if (number == 0 || number == 1) {
    return 1;
  }

  else {
    while(number > 1) {
      number= number-1;
      result =  result * number;
    }
    return result;
  }
  
}

module.exports = factorial;