const fibonacci = (n) => {
  let lastResult = 1;
  let resultArray = [];

  for (let index = 0; index < n; index++) {
    if (resultArray.length > 0) {
      // check if number exist first, else use 0
      lastResult += resultArray[resultArray.length - 2]
        ? resultArray[resultArray.length - 2]
        : 0;
    }

    // push many number as the input received
    resultArray.push(lastResult);
  }

  return resultArray;
};

module.exports = fibonacci;
