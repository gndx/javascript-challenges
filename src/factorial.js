const factorial = (number) => {
  // your code here
  let n = 1
  while (number >1){
    n = n * ( number )
    number = number - 1
  }
  
  return n
}
// console.log(factorial(120))
module.exports = factorial;