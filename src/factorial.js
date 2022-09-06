const factorial = (number) => {
  let result = 1
  while(number){
    result *= number
    number-=1
  }
  return result
}

module.exports = factorial;