let num1 = '';
let num2 = '';
let operator = '';
let screenDiv = document.querySelector('.screen');
let clear = document.querySelector('.clear');
let decimal = document.querySelector('.decimal');
let equals = document.querySelector('.equals');

let numbs = document.querySelectorAll('.number');
let previous = document.querySelector('.previous');
let current = document.querySelector('.input');

numbs.forEach((numb) => numb.addEventListener('click', function(e) {
    getNumbers(e.target.textContent)
    screenDiv.textContent = num1;
}))

function getNumbers(n) {
    num1 += n;
}