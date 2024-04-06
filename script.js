let calculationFirstNumber;
let calculationSecondNumber;
let operator;


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

function operate(num1, operator, num2) {
    if(operator === "+") {
        return add(num1, num2);
    } else if(operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2)
    } else if (operator === "/") {
        return divide(num1, num2);
    }
    console.log(operate)
}



const calculatorDisplay = document.querySelector('[data-display]');
const calculatorOperatorButtons =  document.querySelectorAll('[data-operator]');
const clearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');
const calculatorNumberButtons = document.querySelectorAll('[data-number]');

function updateCalculatorDisplay() {

}

function clearDisplay() {
    calculatorDisplay.placeholder="0"
}

clearButton.addEventListener('click', () =>  {
    clearDisplay();
})

deleteButton.addEventListener('click', () => {
    
})

calculatorNumberButtons.forEach(button => button.addEventListener('click', () => {
    let buttonContent = button.innerText;
    calculatorDisplay.placeholder = buttonContent;
    console.log(buttonContent)
}))

console.log(calculatorNumberButtons);