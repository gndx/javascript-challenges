const fibonacci = (n) => {
  // your code here
  aux1 = 1;
  aux2 = 1;
  serie = [];
  for (let i = 1; i <= n; i++) {
    switch (i) {
      case 1:
        serie.push(aux1);
        break;
      case 2:
        serie.push(aux2);
        break;
      default:
        number = aux1 + aux2;
        serie.push(number);
        aux1 = aux2;
        aux2 = number;
        break;
    }
  }
  return serie;
};

module.exports = fibonacci;
