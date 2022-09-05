const trialDivision = (number) => {
  const arr = Array.from({length: number}, (x, i) => i + 1);
  var contador = 0;

  if(number > 0){

    for (var i = 0; i < number; i++){
        if(number % arr[i] == 0)
            contador ++;
    }
    if(contador == 2)
        return true;
    else
        return false;
  }
  else
    return false;
}

module.exports = trialDivision;