const trialDivision = (number) => {
  
  for (var i = 2; i < number; i++) {

    if (number % i === 0) {
      return false;
      

    }
    else{
      console.log(`${number}  es primo`)
    }

  }

  return number !== 1;
  // your code here
}
trialDivision(4)

module.exports = trialDivision;