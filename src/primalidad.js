const trialDivision = (number) => {
  // your code here
  if(number<=1){
    return false;
  }else{
    //Create a count for know the quantity numbers is divisors with the number
    let count = 0;
    for(let i=2; i<=number; i++){
      if(number%i==0){
        //quantity
        count += 1;
      }
    }
    //Check about the quanty numbers if the number just have a two divisor
    //for example 1 and the same number, the number is prime.
    if(count<=2){
      return true;
    }else{
      return false;
    }
  }
}


module.exports = trialDivision;