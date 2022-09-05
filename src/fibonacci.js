const fibonacci = (n) => {
  if (n < 2) {
    return [1];   
  }
  if (n < 3) {
    return [1, 1];
 }

 let a = fibonacci(n - 1);
 a.push(a[n - 2] + a[n - 3]);
 return a;

}

console.log(fibonacci(5))
module.exports = fibonacci;