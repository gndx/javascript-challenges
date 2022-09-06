const factorial = (number) => {
  // your code here
  let total = 1; 
  for (i=1; i<=number; i++) {
    total = total * i; 
    console.log(total)
  }
  return total; 
}

module.exports = factorial;

const numb = 5;


factorial(numb)