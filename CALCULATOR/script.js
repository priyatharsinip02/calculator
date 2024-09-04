let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

function setOperation(op) {
    if (currentInput === '') return;
    firstOperand = currentInput;
    operator = op;
    currentInput = '';
}

function calculate() {
    if (currentInput === '' || operator === '' || firstOperand === '') return;
    secondOperand = currentInput;

    let result;
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }

    currentInput = result.toString();
    operator = '';
    firstOperand = '';
    secondOperand = '';
    updateDisplay(currentInput);
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = '';
    secondOperand = '';
    updateDisplay('0');
}

function updateDisplay(value) {
    document.getElementById('display').textContent = value;
}

// Initialize display
updateDisplay('0');