const factorial = (number) => {
  // your code here
  let f = 1;
  for(var i = 1;i<number;i++ ){
      f *=i+1;
  }
  return f;
}

module.exports = factorial;