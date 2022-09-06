const trialDivision = (number) => {
  let n, i, primario = true;
  n = parseInt(number)
  if(n<=1){
    primario = false;
    return primario
  }else{
    for (i = 2; i <= n - 1; i++){
      if (n % i == 0) {
        primario = false;
        return primario
        break;
      }
    }
    return primario
  }
}

module.exports = trialDivision;
