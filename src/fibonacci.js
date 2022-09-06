const fibonacci = (n) => {
  let array = [0, 1];
    for (let index = 2; index <= n; index++) {
      let number;
        number = array[index-1] + array[index-2];
        array.push(number);
    }
    array.shift();
  return array;
}

module.exports = fibonacci;