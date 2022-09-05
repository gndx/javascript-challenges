const fibonacci = (n) => {

  if(n === 1)
    return [ 1 ];

  let num = fibonacciNEsimo(n);

  const resultado = [...fibonacci(n-1), num];

  return resultado;
}

const fibonacciNEsimo = (n) => {
  
  if(n === 1 || n === 2 ){
    return 1;
  }

  const resultado = fibonacciNEsimo(n-1) + fibonacciNEsimo(n-2);

  return resultado;
}

module.exports = fibonacci;