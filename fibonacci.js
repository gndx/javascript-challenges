const fibonacci = (n) => {
  var arreglo = [0, 1]
  for (let i = 2; i <= n; i++) {
    arreglo[i] = arreglo[i - 2] + arreglo[i - 1];
  }
  return arreglo.splice(1);
}

module.exports = fibonacci;