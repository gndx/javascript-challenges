const fibonacci = (n) => {
  // your code here
  var fibo = [];
  var a=0;
  var b=1;
for (var i = 0; i < n; i++) {
  var aux=a;
  a=b;
  b=aux+b;
  fibo.push(a);
}
return fibo;
}

module.exports = fibonacci;