const trialDivision = (number) => {
  // your code here
  let contador = 0;
  let resultado = 0;
  if(number < 2 ){
    return false;
  }
  for(var i = 1;i<=number;i++){
    resultado = number%i;
    if(resultado == 0){
      contador +=1;
    }
    if(i<number && contador > 1){
      return false
    }
  }
  if(contador == 2){
  	return true;
  }else{
  return false;
  }
}

module.exports = trialDivision;