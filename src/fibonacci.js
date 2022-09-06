const fibonacci = (n) => {
  let arr = [];
  if ( n <= 0 ){
    return "Error: enter a positive integer"
  } else {
    arr.push(1);
    if (n > 1){
      arr.push(1);
      for (let i = 2; i < n; i++){
        arr.push(arr[i-2] + arr[i-1]);
      }
    }    
  }
  return arr;
}

module.exports = fibonacci;