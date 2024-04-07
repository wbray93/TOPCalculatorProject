let calculationFirstNumber;
let calculationSecondNumber;
let operator;
let displayValue;
let result;
const calculatorDisplay = document.querySelector('[data-display]');
const calculatorOperatorButtons = document.querySelectorAll('[data-operator]');
const clearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');
const calculatorNumberButtons = document.querySelectorAll('[data-number]');

function add(num1, num2) {
    let result = num1 + num2;
    console.log(result)
}

function subtract(num1, num2) {
    let result = num1 - num2;
    console.log(result)
}

function multiply(num1, num2) {
    let result = num1 * num2;
    console.log(result)
}

function divide(num1, num2) {
    let result = num1 / num2;
    console.log(result)
}


//unsure how to pass my data-operator attibute here. im assuming i pass the equals button
function operate(num1, calculatorOperatorButtons, num2) {
    if (calculatorOperatorButtons === "+") {
        return add(num1, num2);
    } else if (calculatorOperatorButtons === "-") {
        return subtract(num1, num2);
    } else if (calculatorOperatorButtons === "*") {
        return multiply(num1, num2)
    } else if (calculatorOperatorButtons === "/") {
        return divide(num1, num2);
    }
    updateCalculatorDisplay();
}

function updateCalculatorDisplay() {
    calculatorDisplay.placeholder = result;
}

function clearDisplay() {
    calculatorDisplay.placeholder = ""
}

clearButton.addEventListener('click', () => {
    clearDisplay();
})

deleteButton.addEventListener('click', () => {

})

equalsButton.addEventListener('click', () => {
    operate();
});

calculatorNumberButtons.forEach(button => button.addEventListener('click', () => {
    let buttonContent = button.innerText;
    displayValue = buttonContent;
    calculatorDisplay.placeholder += displayValue;
    console.log(displayValue);
}))

calculatorOperatorButtons.forEach(button => button.addEventListener('click', () => {
    let operatorContent = button.innerText;
    displayValue = operatorContent;
    calculatorDisplay.placeholder += operatorContent;
}));


console.log(calculatorNumberButtons);

console.log(result)