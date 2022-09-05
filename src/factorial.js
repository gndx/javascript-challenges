const factorial = (number) => {
  // your code here
  let output=1;
  for (let i=1; i<=number;i++){
    output=output*i;
  }
  return output;
}

module.exports = factorial;