const fibonacci = (n) => {
  //PARA PASAR LOS TEST ELIMINAMOS EL VALOR 0 DEL ARRAY
  let f_arr = [1];
  if(n>1){
    f_arr[1] = 1;
    for (let i = 2; i < n; i++) {
      f_arr[i] = f_arr[i - 2] + f_arr[i - 1];
    }
  }
  return f_arr;
}

module.exports = fibonacci;
