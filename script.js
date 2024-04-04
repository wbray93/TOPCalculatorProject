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

let buttonValueTest = document.querySelector("value")
console.log(buttonValueTest)