const connenct = require('./module1');
const calculator = require('./module2');
const { add, subtract, multiply } = require('./module2');

// 모듈1
const result = connenct();
console.log(result);

// 모듈2
console.log(calculator.add(1, 3));
console.log(calculator.subtract(6, 3));
console.log(calculator.multiply(5, 8));

// 모듈2 객체구조분해
console.log(add(5,6));
console.log(subtract(-10,6));
console.log(multiply(8,6));
