const trialDivision = (number) => {
  if(number <=1 || !Number.isInteger(number)) return false;
  let div = 0;
  for(let i=number-1; i>=2; i--){ 
    if(number % i ===0){
      console.log(i, "Es divisible")
      div +=1;
    }}
return div>=1 ? false: true
}

module.exports = trialDivision;