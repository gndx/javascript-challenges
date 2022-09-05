const fibonacci = (n) => {
  // your code here
  let array = [1]
  if (n==1) return array
  array.push(1)
  if(n==2) return array

   for (let i = 0; i < n-2; i++) {
    array.push(array[i]+array[i+1])// 3 -2//4 1,1,2
  
  }
  return array
}

module.exports = fibonacci;