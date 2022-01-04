let id = null;


function display(value) {
    const result = document.querySelector('.screen');
    result.value += value;
}

function solve() {
    result.value = eval(result.value);
}

function clearScreen() {
    result.value = '';
}


function fall() {
    let elems = document.getElementsByClassName("button")

    for (let i = 0; i < elems.length; i++) {
        const element = elems[i];
        element.style.padding = Math.floor(Math.random() * 40) + "px";

    }

    //elem.style.left = pos + 'px'; 
}
