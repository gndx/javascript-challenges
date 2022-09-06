const fibonacci = (n) => {
  let fibonacciArray = []
  for(let i = 0; i < n ; i++){
    if(i === 0 || i === 1){
      fibonacciArray.push(1)
    }
    else{
      fibonacciArray.push(fibonacciArray[i - 2] + fibonacciArray[i - 1])
    }
  }
  return fibonacciArray
}

module.exports = fibonacci;