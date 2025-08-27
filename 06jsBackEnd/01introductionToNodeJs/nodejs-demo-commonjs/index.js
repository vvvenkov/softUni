const { add, name } = require('./calculator') // Named import
const calc = require('./calculator'); // Default import

console.log('Hello World!');
console.log(name);

const sum = add(10, 5);

console.log(sum); // 15

console.log(calc.multiply(2, 5)); // 10



