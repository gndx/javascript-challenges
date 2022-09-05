const trialDivision = (number) => {

    if (number <= 1) return false
    if (number === 2) return true
    if (!Number.isInteger(number)) return false

    let numbers = Array.from(Array(number).keys(), n => n + 2);

    numbers = numbers.filter(number => number === 2 || number % 2 !== 0)

    if (numbers.length <= 2){
        return numbers.includes(number)
    }

    let index = 1

    while (Math.pow(numbers[index], 2) <= number){
        numbers = numbers.filter(number => (number === 2 || number === numbers[index] || number % numbers[index] !== 0))
        index++
    }

    return numbers.includes(number)

}

module.exports = trialDivision;