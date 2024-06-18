const container = document.querySelector(".container");
const display = document.querySelector("#display");
const deleteBtn = document.querySelector("#delete");

function appendToDisplay(input) {
    display.value += input;
}

function clear() {
    display.value = "";
}

deleteBtn.addEventListener("click", clear);