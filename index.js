const container = document.querySelector(".container");
const display = document.querySelector("#display");
const deleteBtn = document.querySelector("#delete");
const equals = document.querySelector("#equals");
const operators = document.querySelectorAll(".operators");
const keys = document.querySelector(".keys");

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

let num1 = "";
let num2 = "";
let operator = "";
 
function operate() {
    num1 = Number(num1);
    num2 = Number(num2);

    
    if(operator === '+') {
        num2 = sum(num1, num2);
        display.textContent = num2;
    } else if(operator === '-') {
        num2 = sum(num1, num2);
        display.textContent = num2;
    } else if(operator === '*') {
        num2 = sum(num1, num2);
        display.textContent = num2;
    } else if(operator === '/') {
        num2 = sum(num1, num2);
        display.textContent = num2;

    } else {
        display.textContent = num2;
    }
}

equals.addEventListener("click", operate);