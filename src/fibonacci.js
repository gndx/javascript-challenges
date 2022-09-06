const fibonacci = (n) => {
    const number = [0, 1];
    let sum = 1;

    for (let i = 1; sum <= n; i++) {
        number.push(sum);
        sum = number[i] + number[i + 1];
    }
    return number;
}
console.log(fibonacci([10]));
module.exports = fibonacci;

