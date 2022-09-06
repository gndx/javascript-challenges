const fibonacci = (n) => {
  let serie = [0, 1];
  for (let i = 2; i <= n; i++)
    serie.push(serie[i-1] + serie[i-2]);
  serie.shift() // To delete the 0
  return serie;
}

module.exports = fibonacci;