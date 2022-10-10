//Declare basic functions of calculator
function add (a, b){return a+b}
function subtract(a, b){return a-b}
function multiply(a, b){return a*b}
function divide(a, b){return a/b}
function operate(operator, a, b){
    if (operator == "+") {return add(a,b)}
    else if (operator == "-") {return subtract(a,b)}
    else if (operator == "*") {return multiply(a,b)}
    else if (operator == "/") {return divide(a,b)}
    }

let currentInput = document.getElementById('display');
currentOperator = "";

//Add event listener for button click and play a sound
let click = new Audio();
click.src = "./img/calc1.wav"
document.querySelectorAll(".calc-button").forEach(item => {
    item.addEventListener('click', () => {
        click.currentTime = 0;
        click.play()
        currentInput.innerHTML += item.innerHTML;
    })
})
// let displayButton = document.getElementById('display');
// displayButton.addEventListener('click', () => {click.play()});

