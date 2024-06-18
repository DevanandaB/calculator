const container = document.querySelector(".container");
const display = document.querySelector("#display");
const deleteBtn = document.querySelector("#delete");
const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");

function appendToDisplay(input) {
    display.value += input;
}

function clear() {
    display.value = "";
}

function sum(a, b) {
    return a + b; 
}

function difference(a, b) {
    return a + b; 
}

deleteBtn.addEventListener("click", clear);
