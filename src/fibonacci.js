const fibonacci = (n) => {
  f = [];
  i=0;
  while(i<n){
    if (f.length <=1){
      f.push(1);
      i++;
    }
    else{
      f.push(parseInt(f[i-2]) +parseInt([f[i-1]]));
      i++;
    }
  } 
  return f;
}

module.exports = fibonacci;