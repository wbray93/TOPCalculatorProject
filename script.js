let calculationFirstNumber;
let calculationSecondNumber;
let operator;
let displayValue = "";
let result;
const calculatorDisplay = document.querySelector('[data-display]');
const calculatorOperatorButtons = document.querySelectorAll('[data-operator]');
const clearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');
const calculatorNumberButtons = document.querySelectorAll('[data-number]');


function add(num1, num2) {
    console.log(num1, num2);
    result = num1 + num2;
    return result;
}

function subtract(num1, num2) {
    result = num1 - num2;
    return result;
}

function multiply(num1, num2) {
    result = num1 * num2;
    return result;
}

function divide(num1, num2) {
    result = num1 / num2;
    console.log(result)
    return result;
}

function operate() {
    if (operator === "+") {
        add(parseFloat(calculationFirstNumber), parseFloat(calculationSecondNumber));
    } else if (operator === "-") {
        subtract(parseFloat(calculationFirstNumber), parseFloat(calculationSecondNumber));
    } else if (operator === "*") {
        multiply(parseFloat(calculationFirstNumber), parseFloat(calculationSecondNumber));
    } else if (operator === "/") {
        divide(parseFloat(calculationFirstNumber), parseFloat(calculationSecondNumber));
    }

    displayValue = "";
    updateCalculatorDisplay(result);
}

let populateDisplay = (displayValue) => {
    calculatorDisplay.innerText = displayValue;
}

function updateCalculatorDisplay(value) {
    displayValue = value;
    populateDisplay(displayValue);
};

function clearDisplay() {
    displayValue = "";
    updateCalculatorDisplay(displayValue);
};

clearButton.addEventListener('click', clearDisplay);

deleteButton.addEventListener('click', () => {
    displayValue = displayValue.slice(0, -1);
    updateCalculatorDisplay(displayValue);
})

equalsButton.addEventListener('click', () => {
    operate();
});

calculatorNumberButtons.forEach(button => button.addEventListener('click', () => {
    if (operator === undefined) {
        if (calculationFirstNumber === undefined) {
            calculationFirstNumber = button.innerText;
        } else {
            calculationFirstNumber += button.innerText;
        }
    } else {
        if (calculationSecondNumber === undefined) {
            calculationSecondNumber = button.innerText;
        } else {
            calculationSecondNumber += button.innerText;
        }
    }
    displayValue = calculationFirstNumber + (operator || '') + (calculationSecondNumber || "");
    updateCalculatorDisplay(displayValue);
}));

calculatorOperatorButtons.forEach(button => button.addEventListener('click', () => {
    operator = button.innerText;
    if(calculationFirstNumber !== undefined && calculationSecondNumber === undefined) {
        calculationFirstNumber = displayValue;
    } else if (calculationSecondNumber !== undefined) {
        operate();
    }

    calculationSecondNumber = undefined;

    displayValue = calculationFirstNumber + operator;
    updateCalculatorDisplay(displayValue);
}));