function add(num1, num2) {
  let result = num1 + num2;
  return result;
}

function subtract(num1, num2) {
  let result = num1 - num2;
  return result;
}

function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

function divide(num1, num2) {
  if (num2 === 0) return "Error";
  let result = num1 / num2;
  return result;
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
    case "=":
      return num2;
    default:
      return num1;
  }
}

function clearScreen() {
  currentDisplay.innerText = "";
}

function clearAll() {
  clearScreen();
  firstNumber = null;
}

function backspace() {
  currentDisplay.innerText = currentDisplay.innerText.substring(0, currentDisplay.innerText.length - 1)
}

function setCalculatorForNextCalculation(result) {
  currentDisplay.innerText = result;
  firstNumber = result;
  currentOperator = "=";

}

function parseButtonPress(button) {
  switch(button.dataset.action) {
    case "number":
      currentDisplay.append(button.innerText);
      break;
    case "operator":
      if (currentDisplay.innerText === "") return;
      currentOperator = button.innerText;
      firstNumber = parseFloat(currentDisplay.innerText);
      clearScreen();
      break;
    case "equals":
      let secondNumber = parseFloat(currentDisplay.innerText)
      let result = calculate(currentOperator, firstNumber, secondNumber);
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

const buttonPressed = (e) => {
  buttonCurrent = e.target;
  buttonAction = buttonCurrent.dataset.action;
  parseButtonPress(buttonCurrent)
}

let currentDisplay = document.getElementById("input");

let firstNumber = null;
let secondNumber = null;
let currentOperator = "";


const buttons = document.querySelectorAll(".button");
let buttonCurrent = null;
let buttonAction = null;


buttons.forEach(button => {
  button.addEventListener("click", buttonPressed)
});

