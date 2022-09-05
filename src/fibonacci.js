const fibonacci = (n) => {
  // your code here
  let data = [];

  if (n === 1) {
    data = [n];
  } else {
    data = [1, 1];
    for (var i = 2; i < n; i++) {
      data.push(data[i-2] + data[i-1]);
    }
  }

  return data;
}

module.exports = fibonacci;