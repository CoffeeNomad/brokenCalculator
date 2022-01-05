let id = null;
let valid = true;


function display(value, valid) {
	if (valid) {
    	const result = document.querySelector('.screen');
    	result.value += value;
	}
	else {
	    clearScreen();	
		result = document.querySelector('.screen');
		result.value += value;
	}
}

function solve() {
	valid = false;
    result.value = eval(result.value);
}

function clearScreen() {
    result.value = '';
    valid = true;
}


function fall() {
    let elems = document.getElementsByClassName("button")

    for (let i = 0; i < elems.length; i++) {
        const element = elems[i];
        element.style.padding = Math.floor(Math.random() * 40) + "px";

    }

    //elem.style.left = pos + 'px'; 
}
