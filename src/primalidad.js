const trialDivision = (number ) => {
  

  let resultado = true;

  if(number<2){
    resultado = false;
  }

  if(!Number.isInteger(number)){
    resultado = false;
  }

  for(let i = 2; i*i <= number; i++){

    if( number % i == 0){
      resultado = false;
    }
  
  }

  return resultado;
}

module.exports = trialDivision;