const fibonacci = (n) => {
  // your code here
  if(n <= 1) { return [1]; }
  let anteriorValor = 1;
  let actualValor = 1;
  let fibonacci = [anteriorValor, actualValor];
  while(n-2 > 0){ //restar los dos primero numeros declarados
    let nuevoValor = anteriorValor + actualValor;
    fibonacci.push(nuevoValor);
    anteriorValor = actualValor;
    actualValor = nuevoValor;
    n--;
  }
  return fibonacci;
}
//console.log(fibonacci(1));
module.exports = fibonacci;