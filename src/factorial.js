const factorial = (number) => {
  let factorial=0;

  if(number===0){
    return 1;
  }else{

    for(let i=0;i<number;i++){
      let decrement=number-i;
      if(i){
        factorial= decrement*factorial
        numMinor=decrement;
      }else{
        factorial=decrement;
      }
      
  
    }
    return factorial
  }

}


module.exports = factorial;