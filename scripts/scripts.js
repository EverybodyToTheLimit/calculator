//Declare basic functions of calculator
function add (a, b){return a+b}
function subtract(a, b){return a-b}
function multiply(a, b){return Math.round((a*b) * 100) / 100}
function divide(a, b){return Math.round((a/b) * 100) / 100}
function operate(operator, a, b){
    if (operator == "+") {return add(a,b)}
    else if (operator == "-") {return subtract(a,b)}
    else if (operator == "x") {return multiply(a,b)}
    else if (operator == "/") {return divide(a,b)}
    }

let currentInput = document.getElementById('display');
let currentOperator = "";
let valueA = "";
let valueB = "";
let lastClick = "";

//Add event listener for button click and play a sound
let click = new Audio();
click.src = "./img/calc1.wav"
//Buttons behaviour
document.querySelectorAll(".calc-button").forEach(item => {
    item.addEventListener('click', () => {
        click.currentTime = 0;
        click.play()
        if (currentInput.textContent.length === 15) {
            return;
        }
        else if (lastClick === "button" || lastClick === "") {
            currentInput.textContent += item.textContent;
        }
        else {
            currentInput.textContent = item.textContent;
        }
        lastClick = "button";
    })
})
//Operators behaviour (except from =)
document.querySelectorAll(".calc-button-operator").forEach(item => {
    item.addEventListener('click', () => {
        click.currentTime = 0;
        click.play()
        if (lastClick === "operator"){
            return;
        }
        else if (item.textContent === "c" || item.textContent === "CE") {
            currentOperator = "";
            valueA = "";
            valueB = "";
            lastClick = "";
            currentInput.textContent = "";
        }
        else if (currentOperator != "") {
            valueB = currentInput.textContent
            let result = operate(currentOperator,parseInt(valueA), parseInt(valueB));
            if ((Math.floor(Math.log10(result))+1) >= 15) {
                currentInput.textContent = "NUMBER TOO BIG!"
                return;
            }
            else {
            currentInput.textContent = operate(currentOperator,parseInt(valueA), parseInt(valueB))
            currentOperator = item.textContent;
            valueA = currentInput.textContent;
            valueB = ""; 
        }
        lastClick = "operator"
        }
        else {
        currentOperator = item.textContent;
        valueA = currentInput.textContent;
        currentInput.textContent = "";
        lastClick = "operator"
        }
    })
})

// = Operator behaviour
document.querySelectorAll(".calc-button-operator-equal").forEach(item => {
    item.addEventListener('click', () => {
        click.currentTime = 0;
        click.play()
        let result = operate(currentOperator,parseInt(valueA), parseInt(valueB));
        if (valueA === "") {
            return;
        }
        else if ((Math.floor(Math.log10(result))+1) >= 15) {
            currentInput.textContent = "NUMBER TOO BIG!"
            return;
        }
        else {
        valueB = currentInput.textContent
        currentInput.textContent = operate(currentOperator,parseInt(valueA), parseInt(valueB))
        valueA = currentInput.textContent; 
        valueB = "";
        currentOperator = "";
        lastClick = "equal"
        }
    })
})
