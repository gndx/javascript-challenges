const factorial = (number) => {
  if (typeof number !== 'number') throw Error('Para saber el factorial debes proveer un numero entero')

  if (number < 2) return 1

  return number * factorial(number - 1)
}

module.exports = factorial;