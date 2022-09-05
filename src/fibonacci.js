const fibonacci = (n) => {
  // your code here
  if(n == 1){
    return 0
  }
  if(n == 0){
    return []
  }
  const ans = [0,1]
  for(let i = 2; i < n; i++){
    ans.push(ans[i-1] + ans[i-2])
  }
  return ans
}

module.exports = fibonacci;