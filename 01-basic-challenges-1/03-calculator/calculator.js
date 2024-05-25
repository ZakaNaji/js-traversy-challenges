function calculator(a, b, op) {
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };
  if (!operations[op]) {
    throw new Error("Invalid operation");
  }
  return operations[op](a, b);
}

module.exports = calculator;
