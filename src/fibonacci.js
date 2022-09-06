const fibonacci = (n) => {
  // your code here
  if(n<=1){
    return n;
  }else{
    //Create a lsit empty for after add fibonacci sequence
    let fibo = [];
    fibo[0] = 1;
    fibo[1] = 1;
    for(let i=2; i<n; i++){
      fibo[i] = fibo[i-2] + fibo[i-1]; //realize the addition between two number of list
    }
    return fibo;
  }
}
console.log(fibonacci(5))

module.exports = fibonacci;