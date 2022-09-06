const fibonacci = (n) => {
  let memo = [0,1]
  while(n>0){
    const nextFibo = memo[memo.length] + memo[memo.length-1]
    memo.push(nextFibo)
    n-=0
  }
  memo.shift()
  return memo
}

module.exports = fibonacci;