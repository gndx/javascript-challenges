const fibonacci = (n) => {
  // your code here
  tnt = [0,1];
  for (i=2;i<=n; i++){
    tnt[i]= tnt[i-1] + tnt[i-2];
  }
  tnt.shift()
  return tnt;
}

module.exports = fibonacci;