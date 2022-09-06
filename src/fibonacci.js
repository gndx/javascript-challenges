const fibonacci = (n) => {
  var i;
  var fib = [1]; // Initialize array!

  if (n == 1) return fib;
  
  else{
    for(i=1; i<n; i++) {
      
      if (i==1) fib.push(1);
      else {
        fib.push( fib[fib.length-2] + fib[fib.length-1] );
      }
    }
    return fib;
  }
  
}

module.exports = fibonacci;