const factorial = (number) => {
  let arr = [], operacion = 1;
  if(number < 0) return 1;
  for (i= 1; i <= number; i++){ arr.push(i); }
  for (i= 0; i < number; i++){ operacion = operacion * arr[i]; }
  return operacion;
}

module.exports = factorial;