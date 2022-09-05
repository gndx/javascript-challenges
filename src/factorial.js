const factorial = (number) => {
  //Check if the number is positive 
  if(number > 0){
      var total = 1;
    for(i = 1; i <= number; i++){
      total = total * i;
    }
    console.log("The factorial of " + number + " is " + total );
    return total;
  }else{
    console.log("Number is negative");
  }
}

module.exports = factorial;