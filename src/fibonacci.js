const fibonacci = (n) => {
  // your code here
  
  let fibonacci = [1, 1];

  if(n == 1)  fibonacci = [fibonacci[0]]; 
 
  for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  return fibonacci;
}

module.exports = fibonacci;