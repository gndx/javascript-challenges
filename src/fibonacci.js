const fibonacci = (n) => {
  // your code here
  var fibonacciNumbers = []
  var numbers = [0, 1]; 
  var sum; 
  var numberi = 0;
  if(n == 0){
    fibonacciNumbers = [numbers[0]]
  }else if (n == 1) {
    fibonacciNumbers = [numbers[1]]
  } else {
    fibonacciNumbers = [numbers[1]]
    for (numberi = 1; numberi < n; numberi++)  
    { 
      sum = numbers[0] + numbers[1]; 
      numbers[0] = numbers[1]; 
      numbers[1] = sum; 
      fibonacciNumbers.push(sum)
    } 
  }
  return fibonacciNumbers
}

module.exports = fibonacci;