const array = [7, 8, 9, 4, 5, 6, 1, 2, 3];

for (i = 0; i < 15; i++) {
  var buttonContainer = document.querySelector(".main-container");
  var button = document.createElement("button");
  button.innerHTML = array[i];
  button.className = ".btn";

  buttonContainer.appendChild(button);
}
