const fibonacci = (n) => {
  // your code here
  let arr = [];
  
  function fib(numero) {
    if (numero <= 2) return 1;
    
    return fib(numero-1)+fib(numero-2);
  }
  
  for(var i=1; i <= n ;i++){
  var  resultado = fib(i)
    arr.push(resultado)
  }
  
  return arr
}

module.exports = fibonacci;