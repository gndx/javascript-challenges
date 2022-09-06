function fibonacci(number){
  var fiboarray = [];
  fiboarray[0]=0;
  fiboarray[1]=1;
  for (var i = 2; i <= number; i++) {
    fiboarray[i] = fiboarray[i - 2] + fiboarray[i - 1];
  }
  let newarray = fiboarray.slice(1,11);
  return newarray;
  }
module.exports = fibonacci;