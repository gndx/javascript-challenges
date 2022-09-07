const fibonacci = (n) => {
  var secuenciaFibo = [1];
  for (let index = 0; index < n; index++) {
    if (secuenciaFibo.length < 2) {
      secuenciaFibo[index] = 1;
    } else if (secuenciaFibo.length >= 2) {
      secuenciaFibo[index] =
        secuenciaFibo[index - 1] + secuenciaFibo[index - 2];
    }
  }
  return secuenciaFibo;
};

module.exports = fibonacci;
