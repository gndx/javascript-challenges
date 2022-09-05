const fibonacci = (n) => {
	// your code here
  const array = Array(n);
  for (i = 0; i < array.length; i++) {
    if (i > 1) {
      array[i] = array[i - 1] + array[i - 2];
    } else {
      array[i] = 1;
    }
  }
  return array;
};

module.exports = fibonacci;
