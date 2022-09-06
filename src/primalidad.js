const trialDivision = (number) => {
  // your code here
  /*
  let primo = true;

  for (let i = 2; i <= Math.sqrt(number) && prim; i++) {
    if (number % i === 0) {
      primo = false;
    }
  }

  return primo;
  */
  /*
  if (number < 2) {return false}
  if (number === 2) {return true}
  for (var a = 2; a < number; a++){
    var c = number % a
     if (c === 0) {return false}
  } return true;
  */
  
  if(number % 1 !== 0) {
    return false;
  }
  else if(number < 0 || number === 0){
    return false;
  }else if(number === 1){
  return false;
} else if(number === 2){
  return true;
} else{
  for(let i = 2; i< number; i++){
    if(number % i === 0){
      return false;
    }
  }
  return true;
}
}

module.exports = trialDivision;