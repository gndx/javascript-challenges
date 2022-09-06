const factorial = (number) => {
  result = 1;
  for(let i = number; i >= 1; i--){
    result *= number;
  }
  return result;
}

module.exports = factorial;
