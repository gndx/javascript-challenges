const fibonacci = (n) => {
  // your code here
  let number1 = 1, number2 = 1, resul = 0;
  for(let i = 0; i<n; i++){
    resul = number1 + number2;
    number1 = number2;
    number2 = resul;
    return resul;
  }
}

module.exports = fibonacci;