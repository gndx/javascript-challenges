const fibonacci = (n) => {
    let result = [];
    let current_number = 1;
    while (true) {
        result_len = result.length;
        if (result_len >= 2) {
            current_number = result[result_len - 2] + result[result_len - 1];
        }
        if (result_len < n) {
            result.push(current_number);
        } else {
            break;
        }
    }
    return result;
};

module.exports = fibonacci;
