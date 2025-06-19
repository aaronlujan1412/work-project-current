function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) return "Error";
  return num1 / num2;
}

function calculate(operator, num1, num2) {
  switch(operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}

function clearScreen() {
  calculator.display.innerText = "";
}

function clearAll() {
  clearScreen();
  calculator.firstNumber = null;
}

function backspace() {
  calculator.display.innerText = calculator.display.innerText.slice(0, -1);
}

function setCalculatorForNextCalculation(result) {
  calculator.display.innerText = result;
  calculator.firstNumber = result;
  calculator.currentOperator = null;
}

function parseButtonPress(button) {
  switch(button.dataset.action) {
    case "number":
      calculator.display.innerText += button.innerText;
      break;
    case "operator":
      if (calculator.display.innerText === "") return;
      calculator.currentOperator = button.innerText;
      calculator.firstNumber = parseFloat(calculator.display.innerText);
      clearScreen();
      break;
    case "equals":
      if (calculator.display.innerText === "") return;
      let secondNumber = parseFloat(calculator.display.innerText)
      let result = calculate(calculator.currentOperator, calculator.firstNumber, secondNumber);
      if (result === "Error" {
        calculator.display.innerText = "Error";
        calculator.firstNumber = null;
        calculator.currentOperator = null;
        return;
      })
      setCalculatorForNextCalculation(result);
      break;
    case "function":
      switch(button.innerText) {
        case "Clear All":
          clearAll();
          break;
        case "Backspace":
          backspace();
          break;
      }
  }
}

const calculator = {
  display: document.getElementById("input"),
  firstNumber: null,
  currentOperator: null,
}

const buttonPressed = (e) => {
  parseButtonPress(e.target);
}

const buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
  button.addEventListener("click", buttonPressed)
});

