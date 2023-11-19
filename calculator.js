let num1 = 0;
let num2 = 0;
let operator = 0;
let screenDiv = document.querySelector('.screen');
let clear = document.querySelector('.clear');
let decimal = document.querySelector('.decimal');
let equals = document.querySelector('.equals');

let numbs = document.querySelectorAll('.number');
let previous = document.querySelector('.previous');
let current = document.querySelector('.input');

numbs.forEach((numb) => numb.addEventListener('click', function(e) {
    getNumbers(e.target.textContent)
}))

function getNumbers(n) {
    console.log(n);
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract() {

}

function multiply() {

}

function operate() {

}