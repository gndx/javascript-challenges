const fibonacci = (n) => {
  // your code here
  var i;
  const result = [];
  switch(n){
    case 1: 
      result[0] = 1;
    break;
    default: 
      result[0] =1;
      result[1] =1; 
  }

  for (i=2;i<n;i++){
    result[i] = result[i-1]+result[i-2];
  }
  return result;
}

module.exports = fibonacci;