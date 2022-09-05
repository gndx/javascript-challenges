const fibonacci = (n) => {
  let numbers = [];
  
  if (n > 0)
    numbers.push(1);
  
  if (n > 1)
    numbers.push(1);
  
  if (n > 2)
      for (let ix = 2; ix < n; ix++) {
            numbers.push(numbers[ix - 1] + numbers[ix - 2]);
      }

  return numbers;
}

module.exports = fibonacci;