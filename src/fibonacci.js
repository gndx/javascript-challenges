const fibonacci = (n) => {
  // your code here
  var fib= [1,1];
  if(n==0){
    return [0]
  }
  if(n==1){
    return [1]
  }
  if(n==2){
    return fib
  }

  for (let x = 3; x<=n; x++){
    fib[x-1] = fib[x-2]+fib[x-3]
  }
  return fib;
}

module.exports = fibonacci;