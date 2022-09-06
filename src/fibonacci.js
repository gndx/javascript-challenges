const fibonacci = (n) => {
  const numbers = [0, 1];
  for (let index = 1; index < n; index++) {
    let value = numbers[index] + numbers[index - 1];       
    numbers.push(value);    
  }
  return numbers.splice(1);
}
module.exports = fibonacci;