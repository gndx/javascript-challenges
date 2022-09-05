const trialDivision = (number) => {
  // your code here
  if(!Number.isInteger(number) || number < 1){
    return false
  }
  else if(number == 1){
    return false
  }else{
    let primo = true
    for(let i=2; i< (parseInt(Math.sqrt(number)) + 1); i++){
      if(number % i == 0){
        primo = false
        break;
      }
    }
    return primo
  }
}

module.exports = trialDivision;