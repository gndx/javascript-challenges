const fibonacci = (n) => {
  var fibonacci = [];
if (n===1){
    fibonacci=[1];
}else{
fibonacci[0] = 1;
fibonacci[1] = 1;
  for (var i = 2; i < n; i++) {
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
}
return(fibonacci)
}
module.exports = fibonacci;
