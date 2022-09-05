const fibonacci = (n) => { 
  if(n==1){
    f = [1];
  }
  if(n==2){
    f = [1,1];
  }
  if(n>=3){
    f = [1,1];
    for (i=3; i<=n; i++) {
      new_element = f[i-2] + f[i-3];
      f[i-1] = new_element;
    }
  }
	return f; 
  


}

module.exports = fibonacci;