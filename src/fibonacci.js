const fibonacci = (n) => {
  let arr = [];
  for (let i = 0; i < n; i++) {
	if (i === 0 || i === 1) {
	  arr.push(1);
	} else {
	  arr.push(arr[i - 1] + arr[i - 2]);
	}
  }
  return arr;
};

module.exports = fibonacci;
