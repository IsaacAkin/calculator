"use strict";

const display = document.querySelector(".display");
const digits = document.querySelectorAll(".digit");
const signs = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");

let firstNumber;
let operator;
let secondNumber;

function addition(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}

function subtraction(num1, num2) {
    return parseFloat(num1) - parseFloat(num2);
}

function multiplication(num1, num2) {
    return parseFloat(num1) * parseFloat(num2);
}

function division(num1, num2) {
    return parseFloat(num1) / parseFloat(num2);
}

// Performs the calculation between numbers
function operate(operator, firstNumber, secondNumber) {
    if (operator === "+") {
        return addition(firstNumber, secondNumber);
    } else if (operator === "-") {
        return subtraction(firstNumber, secondNumber);
    } else if (operator === "*") {
        return multiplication(firstNumber, secondNumber);
    } else if (operator === "/") {
        return division(firstNumber, secondNumber);
    }
}

// Returns the result of the calculation
function calculate() {
    signs.forEach((sign) => {
        sign.addEventListener("click", () => {
            firstNumber = display.textContent;
            operator = sign.textContent;
            display.textContent = "";
        })
    })

    equals.addEventListener("click", () => {
        secondNumber = display.textContent;

        const result = operate(operator, firstNumber, secondNumber);
        display.textContent = result;
    })
}

// Populates the display with the numbers clicked
function populateDisplay() {
    digits.forEach((digit) => {
        digit.addEventListener("click", () => {
            display.textContent += digit.textContent;
        });
    });
}

// Clears the display
function clearDisplay() {
    clear.addEventListener("click", () =>{
        display.textContent = "";
    });
}

populateDisplay();
clearDisplay();
calculate();