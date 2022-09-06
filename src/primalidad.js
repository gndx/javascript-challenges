const trialDivision = (number) => {
  if(number <= 1 || number % 1 != 0) return false //If number is 1, negative or float return false
  let n = number/2 // Optimizing the code
  let count = 1 //Always a number can be divided by itself 
  for(i=1; i <= n; i++){
    if(number % i == 0){
      count++
    }
  }

  if(count <= 2){
    return true
  }else{
    return false
  }
  
}

module.exports = trialDivision;