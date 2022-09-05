const fibonacci = (n) => {
  // your code here
  var arr = [0, 1];
  for (var i = 2; i < n + 1; i++){
    arr.push(arr[i - 2] + arr[i -1])
  }
 let arrOutZero = arr.shift()
 return arr
}
module.exports = fibonacci;