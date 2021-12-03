let list = document.querySelectorAll(".show-display");
let display = document.querySelector(".display");

const showDisplay = (event) => {
    const x = event.target.innerText;
    if (display.innerHTML === 0) {
        return (display.innerHTML = x);
    } else {
        return (display.innerHTML += x);
    }
};

const calculate = () => {
    let result = display.innerText;
    display.innerText = eval(result);
};

const clearAll = () => {
    display.innerText = 0;
};

const clearLast = () => {
    let text = display.innerText;
    if (text.length === 1) {
        display.innerText = 0;
    } else {
        display.innerText = text.substring(0, text.length - 1);
    }
};

document.querySelector(".calculate").addEventListener("click", calculate);
document.querySelector(".all-clear").addEventListener("click", clearAll);
document.querySelector(".clear-last").addEventListener("click", clearLast);
list.forEach((item) => {
    item.addEventListener("click", showDisplay);
});

console.log(display);
