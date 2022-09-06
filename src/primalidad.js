const trialDivision = (number) => {
    
    let count_divisibility = 0;
    
    for (let index = 2; index <= number; index++) {
        if (number % index == 0){
            count_divisibility +=1;
        }
    };

    return count_divisibility == 1 //? 'Es primo':'No es primo';
  }

module.exports = trialDivision;
