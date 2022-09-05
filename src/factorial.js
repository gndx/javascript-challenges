const factorial = (number) => {
  // your code here
  let result=1;
  for(let i=number; i>=1; i--){
    console.log(i)
    result *= i 
  }
  return result;
}


module.exports = factorial;