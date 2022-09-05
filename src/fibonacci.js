const fibonacci = (n) => {
  if(n == 1)
    return [1]

  if(n ==2)
    return [1, 1]

  let fib = [1,1]
  let i = 1
  while(n > 2){
    n--
    fib.push(fib[i] + fib[i-1])
    i++
  }

  return fib
  
}

module.exports = fibonacci;