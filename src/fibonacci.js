const fibonacci = (n) => {
    let fibonacci_array = [];
    if (n === 1) {
        fibonacci_array = [1];
    } 
    if (n === 2) {
        fibonacci_array = [1, 1]; 
    } 
    let i = 2;
    if (i < n) {
        fibonacci_array = [1, 1]
        while (i < n) {
            fibonacci_array[i] = fibonacci_array[i-1] + fibonacci_array[i-2]
            i+=1
        }
    }
    return fibonacci_array
}
module.exports = fibonacci;
