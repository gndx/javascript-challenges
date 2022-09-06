const trialDivision =
    (number) => {
      result = true;
      if (number == 1) {
        result = false;
      } else {
        for (let i = 2; i <= parseInt(Math.sqrt(number)); i++) {
          if (number % i == 0) {
            result = false;
          }
        }
      }
      return result;
    }

module.exports = trialDivision;
