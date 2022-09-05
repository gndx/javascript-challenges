const trialDivision = (number) => {
  // your code here
  
  let arr = []
  for (var i = 1; i < number+1; i++) {
    if (number%i==0){
      arr.push(i)
    }
  }
  if (arr.length==2){
    return true
  }else{
    return false
  }
}

// console.log(trialDivision(7))
module.exports = trialDivision;