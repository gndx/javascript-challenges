const factorial = (number) => {
  // your code here
  var fac=1;
 for(var i=1;i<=number;i++){fac=fac*i; }return fac;
}

module.exports = factorial;