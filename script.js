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
    result = num1 + num2;
    console.log(result)
}

function subtract(num1, num2) {
    result = num1 - num2;
    console.log(result)
}

function multiply(num1, num2) {
    result = num1 * num2;
    console.log(result)
}

function divide(num1, num2) {
    result = num1 / num2;
    console.log(result)
}


//unsure how to pass my data-operator attibute here. im assuming i pass the equals button
function operate() {
    if (operator === "+") {
        add(calculationFirstNumber, calculationSecondNumber);
    } else if (operator === "-") {
        subtract(calculationFirstNumber, calculationSecondNumber);
    } else if (operator === "*") {
        multiply(calculationFirstNumber, calculationSecondNumber)
    } else if (operator === "/") {
        divide(calculationFirstNumber, calculationSecondNumber);
    }
    updateCalculatorDisplay(result);
}

function updateCalculatorDisplay(value) {
    calculatorDisplay.placeholder = value;
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
    const [num1Str, operator, num2Str] = displayValue.split(/(\+|\-|\*|\/)/);
    calculationFirstNumber = parseInt(num1Str)
    calculationSecondNumber = parseInt(num2Str);
    operate();
});

calculatorNumberButtons.forEach(button => button.addEventListener('click', () => {
    let buttonContent = button.innerText;
    if(operator !== undefined && result === undefined) {
        clearDisplay();
    }
    displayValue += buttonContent;
    updateCalculatorDisplay(displayValue);
}))

calculatorOperatorButtons.forEach(button => button.addEventListener('click', () => {
    operator = button.innerText;
    calculationFirstNumber = parseInt(displayValue);
    displayValue += operator;
    updateCalculatorDisplay(displayValue);
}));


console.log(calculatorNumberButtons);

console.log(result)