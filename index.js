const container = document.querySelector(".container");
const display = document.querySelector("#display");
const deleteBtn = document.querySelector("#delete");

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

let num1;
let num2;
let operators = document.querySelectorAll(".operators");
 
function operate(num1, num2, operators) {
    if(operators === '+') {
        return sum(num1, num2);
    }
    else if(operators === '-') {
        return difference(num1, num2);
    }
    else if(operators === '*') {
        return product(num1, num2);
    }
    else if(operators === '/') {
        return division(num1, num2);
    }
    return num2;
}

equals.addEventListener("click", operate);