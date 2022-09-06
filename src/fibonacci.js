const fibonacci = (n) => {
    let getValue = n
    var result = []

    result[0] = 0;
    result[1] = 1;

    if (n === 1) {
        return [1]
    } else if (n === 2 ) {
        return [1, 1]
    }

    for(var i = 2; i <= getValue; i++) {
      result[i] = result[i - 1] + result[i - 2];
    } 
    
    return result.slice(1)
}

module.exports = fibonacci;