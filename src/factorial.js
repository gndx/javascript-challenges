const factorial = (number) => {
  let fact = 1;
  for(let i = 1; i<=number; i++){
    fact = fact * i;
  }
  return fact;
}

module.exports = factorial;