const fibonacci = (n) => {
  if(n === 1 ) return [1];
  if(n === 2 ) return [1,1];

  const fiboNumbers = [1,1];

  for(let i = 0 ; i < n-2;  i++) fiboNumbers.push((fiboNumbers[i] + fiboNumbers[i+1]));
  return fiboNumbers;
}

module.exports = fibonacci;