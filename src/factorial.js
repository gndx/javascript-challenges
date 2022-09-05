const factorial = (number) => {
  let result = 1
  while(number > 1){
    result *= number
    number--
  }

  return result
}

module.exports = factorial;