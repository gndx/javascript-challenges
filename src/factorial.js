const factorial = (number) => {
  // your code here
  if(number < 0){
    return -1
  }else if(number == 0){
    return 1
  }
  else{
    let result = number;
    for(let i=number-1; i> 0; i--){
      result = result * i
    }
    return result
  }
}

module.exports = factorial;