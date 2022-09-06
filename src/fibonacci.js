const fibonacci = (n) => {
  let memo = [0,1]
  while(n>1){
    const nextFibo = memo[memo.length-1] + memo[memo.length-2]
    memo.push(nextFibo)
    n -= 1
  }
  memo.shift()
  return memo
}

module.exports = fibonacci;