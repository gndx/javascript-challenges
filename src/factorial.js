const factorial = (number) => {
  // your code here
  let res = 1;

  for(let i = number; i > 0; i--){
    res *= i;
  }

  return res;
}

module.exports = factorial;
