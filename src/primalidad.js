const trialDivision = (number) => {
  const array = [];
  let Resp = true;
  for (let i = 1; i <= number; i++) {
    if(number % i === 0){
      array.push(i);
    }
  }
  Number.isInteger(number)?(Resp = true):(Resp = false);
  (array.length > 2 || number <= 1)&&(Resp = false);
  return Resp;
}

module.exports = trialDivision;