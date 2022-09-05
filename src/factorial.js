const factorial = (number) => {
  if (number == 0 || number == 1) return 1
  return factorial(number - 1) * number
}

// Como solución alternativa se puede usar un array para evitar calcular el factorial de un número más de una vez.
/*
const arr = []

const factorial = (number) => {
  if (number == 0 || number == 1) return 1
  if (arr[number] > 0) return arr[n]
  return arr[number] = factorial(number - 1) * number
}
*/

module.exports = factorial