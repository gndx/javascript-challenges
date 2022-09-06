const fibonacci = (n) => {
  var myFibonacci = [1, 1];
  if (n < 2) return [1];
  for (let i = 2; i < n; i++) {
    myFibonacci[i] = myFibonacci[i - 2] + myFibonacci[i - 1];
  }
  return myFibonacci;
};

module.exports = fibonacci;
