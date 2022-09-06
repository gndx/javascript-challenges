const factorial = (number) => {
  if(number === 0){
    return 1
  }
  if(number === 1){
    return 1
  }
  else{
    return number * factorial(--number)
  }
}

module.exports = factorial;