const btns = document.querySelectorAll('.button');
const submitBtn = document.querySelector('.btn');

// OnClick Function to output the value to the screen
function display(value) {
    const result = document.querySelector('.screen');
    result.value += value;
}

// a function to calculate the values.
function solve() {
    result.value = eval(result.value);
}

// function to clear the screen
function clearScreen() {
    result.value = '';
}

// fall function to make buttons fall down
function fall() {
    for (let i = 0; i < ElemBtn.length; i++) {
        const element = ElemBtn[i];
        element.style.padding = Math.floor(Math.random() * 40) + "px";
    }
}

// event listner to click and make keys falling down.
btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        btn.classList.add("down");
        console.log("Whoops,you broke calculator!");

        if (btn.classList.contains("down")) {
            btn.addEventListener("click", function () {
                btn.classList.remove("down")
                btn.classList.add("undo")
                console.log(`Oh, you made the calculator unbroken ¯\_(ツ)_/¯ `);
            })
        }
    });
});

// function to event listen keys whether number keys are pressed and input values on the screen.


document.addEventListener("keydown", (e) => {
    let keyCode = e.keyCode;
    let keys = String.fromCharCode(keyCode);

    if (keyCode >= '48' && keyCode <= '57') {
        display(keys);
    }
    if (e.shiftKey && keyCode == '187' || keyCode == '107') {
        display("-");
    }
    if (e.shiftKey && keyCode == '189' || keyCode == '109') {
        display("+");
    }
    if (e.shiftKey && keyCode == '56' || keyCode == '106') {
        display("*");
    }
    if (keyCode == '191' || keyCode == '111') {
        display("/");
    }
    if (keyCode == '13' || keyCode == '187') {
        solve();
    }
    if (keyCode == '27') {
        clearScreen();
    }
})