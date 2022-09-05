const factorial = (number) => {
  if (typeof number !=='number') {
    return 'No es un numero :('
  }
  let result = 0;
  for(let x = number; x = 0; x --) {
    result = result * x;
  }
  return result;
}

module.exports = factorial;