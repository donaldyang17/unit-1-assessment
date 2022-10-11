let plusButton = document.querySelector(".plusButton");
let minusButton = document.querySelector(".minusButton");

let counter = document.getElementById("counter");
let count = 0;
document.getElementById("plusButton").addEventListener("click", add);

function add() {
  let input = parseInt(document.getElementById("inputValue").value);
  count = count + input;
  counter.textContent = count;
}

document.getElementById("minusButton").addEventListener("click", minus);

function minus() {
  let input = parseInt(document.getElementById("inputValue").value);
  count = count - input;
  counter.textContent = count;
}
