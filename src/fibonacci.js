const fibonacci = (n) => {
  if (typeof n != 'number') {
    return 'numero no valido'
  }
  let n1 = 0;
  let n2 = 1;
  let nSiguiente = 0;
  let arrayReturn = [0,1];

  for (let x = 1; x<= n; x ++  ) {
    nSiguiente = n1+n2;
    arrayReturn.push(nSiguiente);
    n1 = n2;
    n2 =  nSiguiente;
  }
  const arrayR = arrayReturn.slice(0,n)
  return arrayR;
}

module.exports = fibonacci;