const trialDivision = (number) => {
  // your code here
  let control = true;
  let i = number - 1;
  let res;

  while(control){
    if(number % 1 == 0){
    if(number == 1){
      res = false;
      control = false;
    }else if(number > 1){
      if(i > 1){
        if(number % i == 0){
          res = false;
          control = false;
        }else{
          i--
        }
      }else{
        res = true;
        control = false;
      }
    }else{
      res = false;
      control = false;
    }
  }else{
    res = false;
    control = false;
  }
  }
  return res;
}

module.exports = trialDivision;
