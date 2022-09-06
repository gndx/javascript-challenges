const fibonacci = (n) => {

  matriz_fibonacci = [0,1]
  for (i=2; i<=n; i++) {
    matriz_fibonacci.push(parseInt(matriz_fibonacci[i-1]+matriz_fibonacci[i-2]))
  }
  matriz_fibonacci.shift()
  return matriz_fibonacci
}

module.exports = fibonacci;