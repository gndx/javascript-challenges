const factorial = (number) => {
  /*var min = 1;
  var fac = 5;
  for (var i = 1; i <= 5; i--) {
    min = min * i;
  }
  return min;*/

  var i, numero, factorial;
  factorial = 1;
  numero = number;
  for(i = 1; i <= numero; i++)  
  {
  factorial = factorial * i;
  }
  i = i - 1;

  return factorial
}

module.exports = factorial;