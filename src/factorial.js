const factorial = (number) => {
  // your code here
  
  var factorial = 1; 
  for (i=1; i<=number; i++) {
    factorial = factorial * i; 
  }
  return factorial
}

module.exports = factorial;