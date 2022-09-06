const fibonacci = (n) => {
  // your code here
  const  arr = []; 
  
  for(let i = 0; i < n; i++){
    if(i == 0 || i == 1){
      arr[i] = 1;
    }else{
      arr[i] = arr[i-1] + arr[i-2];
    }
  }

  return arr;
}

module.exports = fibonacci;
