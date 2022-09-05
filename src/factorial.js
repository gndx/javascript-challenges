const factorial = (number) => {
  var result = 1
  for(i=number; i>0;i--){
    result*=i
  }
  return result
}

module.exports = factorial;