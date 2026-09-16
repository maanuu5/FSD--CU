const calculator = require("./medium");

const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);

console.log("multiply:", calculator.mul(num1,num2));
console.log("addition:", calculator.add(num1,num2));
console.log("subtraction:", calculator.sub(num1,num2));
console.log("division:", calculator.div(num1,num2));



