const trialDivision = (number) => {
  const noFloat= number%1===0;
  let isCousin=false;
  let count=0;
  if(number>1 && noFloat){
    for(let i=1;i<=number;i++){
      const numOdd=(number%i === 0);

      if(numOdd){
        count+=1;
      }else{
        count=count;
      }
      if(count>2){
        isCousin=false;
      }else{
        isCousin=true
      }

    }

  }else{
    isCousin=false;
  }
  console.log(isCousin)
  return isCousin

}
trialDivision(5)

module.exports = trialDivision;