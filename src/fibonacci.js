const fibonacci = (n) => {
  // your code here
  if (typeof n != 'number') {
    return 'numero no valido'
  }
  let nUno = 0;
  let nDos = 1;
  let nSiguiente = 0;
  let primoseturn = [1];

  for (let x = 1; x<= n; x ++  ) {
    nSiguiente = nUno+nDos;
    primoseturn.push(nSiguiente);
    nUno = nDos;
    nDos =  nSiguiente;
  }
  const primos = primoseturn.slice(0,n)
  return primos;
 
}

module.exports = fibonacci;