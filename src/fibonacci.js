const fibonacci = (n) => {
  // your code here
  /*
  if (n === 0 || n === 1) {
    return n;
  }
  let fibonacci = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]);
  }
  return fibonacci;
  */
  
  /*
  if(n === 0 || n === 1) return n;
  return fibonacci(n - 1) + fibonacci( n- 2);

  */
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

}
module.exports = fibonacci;