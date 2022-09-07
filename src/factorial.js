const factorialR = (number) => {
  const n=number;
  if (n < 0){
  	return;
  }else if(n == 0){
    return 1;
   }return n*factorialR(n-1);
}

module.exports = factorialR;
