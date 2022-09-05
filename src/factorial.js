const factorial = (number) => {
  //Check if the number is positive 
  if(number > 0){
    for(i = 1; i <= number; i++){
      var result = i*i;
    }
    console.log("The factorial of " + number + " is " + result );
    return result;
  }else{
    console.log("Number is negative");
  }

}

module.exports = factorial;