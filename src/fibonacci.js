const fibonacci = (n) => {
  // your code here
const fibonacci = (n) => { 
    if(n == 1) return [1] 
    var fibonacci = [1 , 1];
    for (var i = 2; i < n; i++) {
      fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    return fibonacci;    
}
module.exports = fibonacci;
