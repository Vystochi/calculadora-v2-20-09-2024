function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    var display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Erro';
    }
}

function calculateSquareRoot() {
    var display = document.getElementById('display');
    var value = parseFloat(display.value);
    if (value >= 0) {
        display.value = Math.sqrt(value);
    } else {
        display.value = 'Erro';
    }
}

function calculatePercentage() {
    var display = document.getElementById('display');
    var value = parseFloat(display.value);
    display.value = value / 100;
}
