const fibonacci = (n) => {
  // your code here

  const result = [];

  for (let i = 0; i < n; i++) {
    // condicion base: los dos primeros numeros de la seria son 1 y 1
    if ((i == 0) || (i == 1)) {
      result.push(1);
    } else {
      result.push(result[i - 1] + result[i - 2]);
    }
  }
  return result;
}

module.exports = fibonacci;