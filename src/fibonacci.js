const fibonacci = (number) => {
	// your code here
	let fibonacci_result = [1]
	for (let index = 1; index < number; index++) {
		if (fibonacci_result.length == 1) fibonacci_result.push(1)
		else fibonacci_result.push(fibonacci_result[fibonacci_result.length - 1] + fibonacci_result[fibonacci_result.length - 2])
	}
	return fibonacci_result
}

module.exports = fibonacci;