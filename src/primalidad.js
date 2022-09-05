/*** Optimized algorithm ***/
const trialDivision = (n) => {
  let d = 0;
  for (let i = 1; i <= n; i++) if (n % i === 0) d++;
  return d === 2;
};

/*** Most visible algorithm (comment line 2 to 6 and uncomment lines 9 to 18) ***/
// const trialDivision = (number) => {
//   let divisibleCounter = 0;

//   for(let i = 1; i <= number; i++) {
//     if(number % i === 0) divisibleCounter++;
//   }

//   if(divisibleCounter == 2) return true;
//   else return false;
// }

//Logic:
//2 stars prime
//+2 or -2 stars no prime

// 1 % 1 = 0 *
// 1 NO PRIME

// 3 % 1 = 0 *
// 3 % 2 = 1
// 3 % 3 = 0 *
// 3 PRIME


// 5 % 1 = 0 *
// 5 % 2 = 1
// 5 % 3 = 2
// 5 % 4 = 1
// 5 % 5 = 0 *
// 5 PRIME

// 6 % 1 = 0 *
// 6 % 2 = 0 *
// 6 % 3 = 0 *
// 6 % 4 = 2
// 6 % 6 = 0 *
// 6 NO PRIME

module.exports = trialDivision;
