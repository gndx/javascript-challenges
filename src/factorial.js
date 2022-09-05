const factorial = (number) => {
  arr = [];
  operacion = 1;
  if(number > 0){
    for (i= 1; i <= number; i++){
      arr.push(i)
    }
    for (i= 0; i < number; i++){
      operacion = operacion * arr[i];
    }
    return operacion;
  }
  else
    return 1;
}

module.exports = factorial;