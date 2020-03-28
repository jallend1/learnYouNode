const numberStrings = process.argv.slice(2);
const numbers = numberStrings.map(numberString => parseInt(numberString, 10));
const sum = numbers.reduce((sum, num) => sum + num);
console.log(sum);

