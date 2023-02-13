const numbers = [...Array(101).keys()]

const sumOfNumbers = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0)

console.log(sumOfNumbers)