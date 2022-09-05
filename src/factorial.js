const factorial = (number) => {
  // your code here

  if (typeof number !== 'number'){
    return "Tipo de dato no válido"
  }

  return number === 0  ? 1 : number * factorial(number-1)
  
  
}

module.exports = factorial;