const factorial = (number) => {
  if( number === 0 || number === 1 ) return 1;

  let res = 1;
  for(let i = number; i >= 1; i--) res = res * i;
  
  return res;
}


module.exports = factorial;