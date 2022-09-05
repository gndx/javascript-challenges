const factorial = (number) => {
  // your code here
  if(number === 0) return 1
  let multiplicacion = number
  for(let i =number - 1 ; i >= 1; i--){
    multiplicacion = multiplicacion * i 
  }
  return multiplicacion
}

module.exports = factorial;