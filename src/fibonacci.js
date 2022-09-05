const fibonacci = (n) => {
  if(n <= 2){
    return n;
  }
  else{
    return fibonacci(n-1) + fibonacci(n-2);
  }
}

module.exports = fibonacci;

console.log(fibonacci(4))