const calculator = {
    displayValue: '0',
    num1: null,
    waitingForNum2: false,
    operator: null,  
};

function updateDisplay() {
    const display = document.querySelector(".display");
    display.value = calculator.displayValue;
};
updateDisplay();

const keys = document.querySelector(".keys");
keys.addEventListener("click", (e) => {
    const { target } = e;

    if(!target.matches('button')) {
        return;
    }

    if(target.classList.contains('operator')) {
        handleOperator(target.value);
        updateDisplay();
        return;
    }

    if(target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    } 

    if(target.classList.contains('all-clear')) {
        resetCalc(target.value);
        updateDisplay();
        return;
    }

    handleKeys(target.value);
    updateDisplay();
});

function handleKeys(keys) {
    const { displayValue, waitingForNum2 } = calculator;

    if(waitingForNum2 === true) {
        calculator.displayValue = keys;
        calculator.waitingForNum2 = false;
    } else {
        calculator.displayValue = displayValue === '0' ? keys : displayValue + keys; 
    }
};

function inputDecimal(dec) {
    if(calculator.waitingForNum2 === true) {
        calculator.displayValue = '0.';
        calculator.waitingForNum2 = false;
        return;
    } 
    if(!calculator.displayValue.includes(dec)) {
        calculator.displayValue += dec;
    }
};

function handleOperator(nextOperator) {
    const { num1, displayValue, operator } = calculator;
    const input = parseFloat(displayValue);

    if(operator && calculator.waitingForNum2) {
        calculator.operator = nextOperator;
        return;
    }

    if(num1 == null && !isNaN(input)) {
        calculator.num1 = input;
    } else if(operator) {
        const result = operate(num1, input, operator);
        calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
        calculator.num1  = result;
    }

    calculator.waitingForNum2 = true;
    calculator.operator = nextOperator;
};

function operate(num1, num2, operator) {
    if(operator === '+') {
        return num1 + num2;
    } else if(operator === '-') {
        return num1 - num2;
    } else if(operator === '*') {
        return num1 * num2;
    } else if(operator === '/') {
        return num1 / num2;
    }
    return num2;
};

function resetCalc() {
    calculator.displayValue = '0';
    calculator.num1 = null;
    calculator.waitingForNum2 = false;
    calculator.operator = null; 
}
