const factorial = (number) => {
  // your code here
  let result = 1
  if(number === 0 || number === 1) {
    return 1
  } else {
      for(let i = 2; i <= number; i++) {
          result = result * i
      }
    return result  
  }
}

module.exports = factorial;