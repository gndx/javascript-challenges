const factorial = (number) => {
  // your code here
  let x = 1;
  for (let i = 2; i <= number; i++)
    x *= i;
  return x;
  }
  
module.exports = factorial;