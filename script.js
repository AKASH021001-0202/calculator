function handleButtonClick(value) {
    document.getElementById('result').value += value;
}

function handleCalculate() {
    try {
        const result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch (error) {
        alert('Invalid expression');
        handleClear();
    }
}

function handleClear() {
    document.getElementById('result').value = '';
}

function handleBackspace() {
    const displayValue = document.getElementById('result').value;
    document.getElementById('result').value = displayValue.slice(0, -1);
}

function handleDoubleClick() {
    const displayValue = document.getElementById('result').value;
    document.getElementById('result').value = displayValue + '00';
}

window.addEventListener('keydown', function(event) {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', '=', 'Enter', 'Backspace'];
    if (!allowedKeys.includes(event.key)) {
        event.preventDefault();
        alert('Only numbers, operators, and Backspace are allowed');
    } else {
        if (event.key === 'Enter') {
            handleCalculate();
        } else if (event.key === 'Backspace') {
            handleBackspace();
        } else {
            handleButtonClick(event.key);
        }
    }
});
