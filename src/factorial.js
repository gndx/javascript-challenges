const factorial = (number) => {
  // your code here
  let rval = 1;
  
  for (let i = 2; i <= number; i++)
    rval = rval * i;
  
  return rval;
}

module.exports = factorial;