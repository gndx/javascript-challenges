const factorial = (number) => {
  let factorial = 1;
  while(number > 0){
    factorial = factorial * number
    number--;
  }
  return factorial;  
}


module.exports = factorial;