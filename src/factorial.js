const factorial = (number) => {
  if (number === 0 ){
    fact = 0
  }
  else{
  fact =1;
  for (let i=1;i<=number;i++){
    fact *=i;
}
  }
return fact
}

module.exports = factorial;