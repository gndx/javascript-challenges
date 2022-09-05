/*** Optimized algorithm ***/
const fibonacci = (n) => {
  const arr = [];
  let a = 1, b = 1, c;
  for(let i = 0; i < n; i++) {
    arr.push(a);
    c = a+b; a = b; b = c;
  }
  return arr;
}

/*** Most visible algorithm (comment line 2 to 11 and uncomment lines 14 to 28) ***/
// const fibonacci = (n) => {
//   const fibArr = [];
//   let prev = 1,
//       next = 1,
//       tmp;

//   for(let i = 0; i < n; i++) {
//     fibArr.push(prev);

//     tmp = prev + next;
//     prev = next;
//     next = tmp;
//   }
//   return fibArr;
// }

//my logic:

// prev = 0;
// next = 1;
// prev + next; 0 + 1

// prev = 1;
// next = 1;
// prev + next; 1 + 1

// prev = 1;
// next = 2;
// prev + next; 1 + 2

// prev = 2;
// next = 3;
// prev + next; 2 + 3;

// 0 1 1 2 3 5

module.exports = fibonacci;