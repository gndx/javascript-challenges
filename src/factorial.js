const factorial = (number) => {
  // your code here
  var total = 1;
  for (i=1; i<=number;i++){
    total = total * i;
  }
  return total;
}

module.exports = factorial;