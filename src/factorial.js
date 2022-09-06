const factorial = (number) => {
  
  var total = number;

  if (number === 1 || number === 0) 
    return 1; 

  while (number > 1) { 
    number--;
    total *= number;
  }

  return total;
  
}

module.exports = factorial;