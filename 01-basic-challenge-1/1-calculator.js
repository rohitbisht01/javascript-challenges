// Write a function called calculator that takes in 2 numbers and an operator and returns the result of the calculation.

function calculator(a, b, operator) {
  let result = 0;
  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;

    default:
      throw new Error("Invalid Operator");
  }
  return result;
}

console.log(calculator(1, 3, "+"));
