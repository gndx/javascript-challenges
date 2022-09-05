const fibonacci = (n) => {
  // your code here
  let arregloFibonacci = [1,1];
  if(n===1) return([arregloFibonacci[0]]);
  if(n===2) return(arregloFibonacci);
  for (let index = 2; index < n; index++) {
    arregloFibonacci[index] = arregloFibonacci[index-1] + arregloFibonacci[index-2];
  }
  return  arregloFibonacci;
}
module.exports = fibonacci;