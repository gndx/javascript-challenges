const fibonacci = (n) => {
  // your code here
  let fibo1 = [1]
  let fibo = [1,1] 
  if(n == 1) {
    return fibo1
  } else if(n==2){
    return fibo
  } else {
    for(let i = 2; i < n; i++){
      let newValue = fibo[i - 1] + fibo[i - 2]
      fibo.push(newValue)
    }

    return fibo
  }
}

module.exports = fibonacci;