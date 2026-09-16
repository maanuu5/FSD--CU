const mathUtils = require("./mathUtils");

const [, , operation, ...numberArgs] = process.argv;
const numbers = numberArgs.map(Number);

const operations = {
  add: mathUtils.add,
  subtract: mathUtils.subtract,
  multiply: mathUtils.multiply,
  divide: mathUtils.divide,
};

function showUsage() {
  console.log("Usage: node medium.js <add|subtract|multiply|divide> <num1> <num2> ...");
  console.log("Example: node medium.js add 10 5");
}

if (!operation || !operations[operation.toLowerCase()]) {
  console.error(`Error: Unsupported or missing operation '${operation}'.`);
  showUsage();
  process.exit(1);
}

if (numbers.length < 2 || numbers.some(Number.isNaN)) {
  console.error("Error: Please provide at least two valid numbers.");
  showUsage();
  process.exit(1);
}

try {
  const opKey = operation.toLowerCase();
  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    result = operations[opKey](result, numbers[i]);
  }
  console.log(`Result: ${result}`);
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}
