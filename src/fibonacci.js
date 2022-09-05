const fibonacci = (n) => {
  // your code here
  if(n==1){
    fibo = [1];
  }
  if(n==2){
    fibo = [1,1];
  }
  if(n>=3){
    fibo = [1,1];
    for (i=3; i<=n; i++) {
      new_element = fibo[i-2] + fibo[i-3];
      fibo[i-1] = new_element;
    }
  }
	return fibo; 
}

module.exports = fibonacci;