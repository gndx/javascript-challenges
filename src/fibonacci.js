const fibonacci = (n) => {
  if (typeof n !== 'number') throw Error('Debes pasar un numero para recibir el fibonacci')
  if (n < 2) return [n]
  
  const fib = [0, 1]

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1]
  }

  fib.splice(0, 1)
  
  return fib
}

module.exports = fibonacci;