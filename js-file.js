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
var displaySolution;

/* Clear */

function clear() {
  displayNumberOne = "";
  displayNumberTwo = "";
  displayOperator = "";
  displaySolution = "";
}

/* Initializing Variables (Display Values) */

function setDisplayNumbers(e) {
  let target = e.target;
  let buttonChar = target.innerHTML;

  switch (buttonChar) {
    case "C":
      clear();
      display();
      break;
    case "=":
      if (displayNumberOne && displayNumberTwo && displayOperator) {
        operate(displayNumberOne, displayNumberTwo, displayOperator);
        displayTotal();
      }
      break;
    case "+":
    case "-":
    case "*":
    case "/":
      if (!displayOperator && !displaySolution) {
        displayOperator = buttonChar;
        display();
      }
      break;
    default:
      if (!displayOperator && !displaySolution) {
        !displayNumberOne
          ? (displayNumberOne = buttonChar)
          : (displayNumberOne = displayNumberOne + buttonChar);
        display();
      } else if (displayOperator && !displaySolution) {
        !displayNumberTwo
          ? (displayNumberTwo = buttonChar)
          : (displayNumberTwo = displayNumberTwo + buttonChar);
        display();
      }
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

function displayTotal() {
  var display = document.querySelector(".calc-display");
  display.innerHTML = `${displaySolution}`;
}

/* Operations */

function operate(a, b, operator) {
  switch (operator) {
    case "+":
      displaySolution = add(a, b);
      break;
    case "-":
      displaySolution = subtract(a, b);
      break;
    case "*":
      displaySolution = multiply(a, b);
      break;
    case "/":
      displaySolution = divide(a, b);
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
  if (parseInt(b) === 0) {
    return "To Infinity and Beyond!";
  }
  return parseInt(a) / parseInt(b);
}
