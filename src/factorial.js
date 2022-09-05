const factorial = (number) => {
  if(number > 0){
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result = result * i;
    }
    return result;
  }else{
    if(number === 0){
      return 1;
    }else{
      throw new Error('El numero debe ser mayor a 0');
    }
  }
}

module.exports = factorial;