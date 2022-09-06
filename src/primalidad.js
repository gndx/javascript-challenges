const trialDivision = (number) => {
    let counter = 0;
    let is_prime = true;
    if (number <= 0) {
        is_prime = false
    }
    for (let i = 1; i <= number; i++) {
        // console.log("i: ", i);
        if (number % i === 0) {
                counter += 1
                if (counter === 2) {
                    is_prime = true
                    //break
                } else {
                    is_prime = false
                }                
        }
    } 
   
    if (!Number.isInteger(number)) {
        // console.log("Float: ", number);
        for (let i = 0.1; i <= number; i+=0.1) {
            // console.log("i: ", i.toFixed(1));
            if (number % i.toFixed(1) === 0) {
                    counter += 1
                    if (counter === 2) {
                        is_prime = true
                    //break
                    } else {
                        is_prime = false
                    }                
            }
        }
    }    
    return is_prime
}

console.log(trialDivision(0.5))

module.exports = trialDivision;
