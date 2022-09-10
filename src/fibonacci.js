const fibonacci = (n) => {
  let numFibonacci= [];
  if(n ===1){
    numFibonacci.push(1);
  }else if(n > 1){
    let numBefore = 0;
    let numAfter = 1;
    numFibonacci.push(numBefore+numAfter);
    for(let i=1;i<n; i++){
      numFibonacci.push(numBefore+numAfter);
      numBefore=numAfter;
      numAfter= numFibonacci[i];
    }
  }
  return numFibonacci;
}
fibonacci(3)
module.exports = fibonacci;