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
  }
}

function test() {
  console.log("working");
}

const buttonPressed = (e) => {
  console.log(e.target);
}

let currentDisplay = document.getElementById("input");

const buttons = document.querySelectorAll(".button");

// console.log(buttons);

buttons.forEach(button => {
  button.addEventListener("click", buttonPressed)
});


currentDisplay.innerText = "80"
