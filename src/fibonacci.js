const fibonacci = (n) => {

  if (!n) return;

  var fibArr = [1];

  if (n === 1) {
    console.log(fibArr);
    return fibArr;
  }

  fibArr.push(1);

  for(var i = 2, len = n; i < len; i++) {
    fibArr.push(fibArr[i-1] + fibArr[i-2]);
  }
  console.log(fibArr);
  return fibArr;
  
}

module.exports = fibonacci;