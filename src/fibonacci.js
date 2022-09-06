const fibonacci = (n) => {
  let arr = []
  for(let i = 1; i <= n; i++){
    if(i<=2){
      arr.push(1)
    }
    else{
      arr.push(arr[arr.length-2] + arr[arr.length-1])
    }
  }
return arr
}

module.exports = fibonacci;