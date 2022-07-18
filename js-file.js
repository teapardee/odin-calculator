/* Populate Buttons */

const array = [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "C", 0, "=", "/"];

for (i = 0; i < 16; i++) {
  var buttonContainer = document.querySelector(".main-container");
  var button = document.createElement("button");
  button.innerHTML = array[i];
  button.addEventListener("click", setDisplayNumbers);

  if (Number.isInteger(array[i])) {
    button.className = "btn-number";
  } else {
    button.className = "btn-function";
  }

  buttonContainer.appendChild(button);
}

/* Global Variables */

var displayNumberOne;
var displayNumberTwo;
var displayOperator;
var displayTotal;

/* Clear */

function clear() {
  displayNumberOne = "";
  displayNumberTwo = "";
  displayOperator = "";
  displayTotal = "";
}

/* Assign Values */

function setDisplayNumbers(e) {
  let target = e.target;
  let buttonChar = target.innerHTML;

  switch (buttonChar) {
    case "C":
      clear();
      display();
      break;
    case "=":
      operate(displayNumberOne, displayNumberTwo, displayOperator);
      displayTotalValue();
      break;
    case "+":
    case "-":
    case "*":
    case "/":
      if (!displayOperator) {
        displayOperator = buttonChar;
      }
      display();
      break;
    default:
      if (!displayNumberOne) {
        displayNumberOne = buttonChar;
      } else if (!displayNumberTwo && displayOperator) {
        displayNumberTwo = buttonChar;
      }
      display();
  }
}

/* Display Functionality */

function display() {
  var display = document.querySelector(".calc-display");

  if (displayNumberOne && displayNumberTwo && displayOperator) {
    display.innerHTML = `${displayNumberOne} ${displayOperator} ${displayNumberTwo}`;
  } else if (displayNumberOne && displayOperator) {
    display.innerHTML = `${displayNumberOne} ${displayOperator}`;
  } else if (displayNumberOne) {
    display.innerHTML = `${displayNumberOne}`;
  } else {
    display.innerHTML = "";
  }
}

function displayTotalValue() {
  var display = document.querySelector(".calc-display");
  display.innerHTML = `${displayTotal}`;
}

/* Operations */

function operate(a, b, operator) {
  switch (operator) {
    case "+":
      displayTotal = add(a, b);
      break;
    case "-":
      displayTotal = subtract(a, b);
      break;
    case "*":
      displayTotal = multiply(a, b);
      break;
    case "/":
      displayTotal = divide(a, b);
      break;
    default:
      return alert("Error");
  }
}

function add(a, b) {
  return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
  return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
  return parseInt(a) * parseInt(b);
}

function divide(a, b) {
  return parseInt(a) / parseInt(b);
}
