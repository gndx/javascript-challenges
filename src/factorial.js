const factorial = (number) => {
  // your code here
  var fact = 1;
  for (const x of Array(number).keys()){
    fact *= (x+1);
  }
  return fact;
}

module.exports = factorial;