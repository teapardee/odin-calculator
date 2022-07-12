const array = [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "C", 0, "=", "/"];

for (i = 0; i < 16; i++) {
  var buttonContainer = document.querySelector(".main-container");
  var button = document.createElement("button");
  button.innerHTML = array[i];

  console.log(array[i]);
  if (Number.isInteger(array[i])) {
    button.className = "btn-number";
  } else {
    button.className = "btn-function";
  }
  buttonContainer.appendChild(button);
}
