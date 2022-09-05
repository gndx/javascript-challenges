
const fibonacci = (n) => {
  if (n == 1) {
    return [1];
  }else if (n == 2) {
    return [1, 1]
  } else{
  const resultado = [1, 1]
  for(let i = 2; i < n; i++){
    resultado.push(resultado.slice(-1)[0] + resultado.slice(-2)[0])
  }
  return resultado
}
};

module.exports = fibonacci;
