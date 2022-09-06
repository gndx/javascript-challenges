const fibonacci = (n) => {
  // your code here
  let array = [0, 1];
  for (; n > 1; n--) {
    let last1 = array[array.length - 1];
    let last2 = array[array.length - 2];
    array.push(last1 + last2);
  }
  array.shift();
  return array;
}

module.exports = fibonacci;
