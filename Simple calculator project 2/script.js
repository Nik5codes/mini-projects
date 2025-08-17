function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return 'Error: Cannot divide by zero';
  return a / b;
}

function calculate() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operation = document.getElementById('operation').value;
  const resultDiv = document.getElementById('result');

  if (isNaN(num1) || isNaN(num2)) {
    resultDiv.textContent = 'Please enter valid numbers.';
    return;
  }

  let result;

  switch (operation) {
    case '+':
      result = add(num1, num2);
      break;
    case '-':
      result = subtract(num1, num2);
      break;
    case '*':
      result = multiply(num1, num2);
      break;
    case '/':
      result = divide(num1, num2);
      break;
    default:
      result = 'Invalid operation';
  }

  resultDiv.textContent = `Result: ${result}`;
}
