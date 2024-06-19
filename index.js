const container = document.querySelector(".container");
const display = document.querySelector("#display");
const deleteBtn = document.querySelector("#delete");
const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#division");

function appendToDisplay(input) {
    display.value += input;
}

function clear() {
    display.value = "";
}

function sum(...arr) { return arr.reduce((prevValue, currValue) => prevValue + currValue, 0) };

function difference(...arr) { return arr.reduce((prevValue, currValue) => prevValue - currValue) };

function product(...arr) { return arr.reduce((prevValue, currValue) => prevValue * currValue) };

function division(...arr) { return arr.reduce((prevValue, currValue) => prevValue / currValue) };

deleteBtn.addEventListener("click", clear);
