const fibonacci = (n) => {
  // your code here
  
  if (typeof n != 'number') {
    return 'ERROR: No ingreso un numero'
  }
  let number1 = 0;
  let number2 = 1;
  let Sigue = 0;
  let arrReturn = [0,1];

  for (let x = 1; x<= n; x ++  ) {
    Sigue = number1+number2;
    arrReturn.push(Sigue);
    number1 = number2;
    number2 =  Sigue;
  }
  const arrayret = arrReturn.slice(0,n)
  return arrayret;


}

module.exports = fibonacci;