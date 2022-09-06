const factorial = (number) => { 
  let factorial2=1;

  if  (number == 0 ){
    factorial2=1;
  }
  else {
    if (number>0){
      while(number>=1){
        factorial2=factorial2*number;
        number=number-1;
      }
    }
  }
  return factorial2;
}

module.exports = factorial;