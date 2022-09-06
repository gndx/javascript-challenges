const fibonacci = (n) => {
  // your code here
  matriz = [0,1]

  for (i=2; i<=n; i++) {
    matriz.push(parseInt(matriz[i-1]+matriz[i-2]))
  }

  matriz.shift()

  return matriz

}

module.exports = fibonacci;