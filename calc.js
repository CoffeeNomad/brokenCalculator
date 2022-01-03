const result = document.querySelector('.screen');


function display(value) {
    result.value += value;
}

function solve() {
    result.value = eval(result.value);
}

function clearScreen() {
    result.value = '';
}