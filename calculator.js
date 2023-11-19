let num1 = '';
let num2 = '';
let operator = '';
let screenDiv = document.querySelector('.screen');
let clear = document.querySelector('.clear');
let decimal = document.querySelector('.decimal');
let equals = document.querySelector('.equals');

let numbs = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let previous = document.querySelector('.previous');
let current = document.querySelector('.input');

numbs.forEach((numb) => numb.addEventListener('click', function(e) {
    getNumbers(e.target.textContent)
    current.textContent = num1;
}))

operators.forEach((ops) => ops.addEventListener('click', function(e) {
    getOperator(e.target.textContent);
    previous.textContent = num2 + ' ' + operator;
    current.textContent = num1;
}))

equals.addEventListener('click', function() {
    getAnswer();
})

function getNumbers(n) {
    if(num1.length <= 10) {
    num1 += n;
    }
}

function getOperator(n) {
    operator = n;
    num2 = num1;
    num1 = '';
}

clear.addEventListener('click', function () {
    num1 = '';
    num2 = '';
    operator = '';
    current.textContent = '';
    previous.textContent = '';
})

function getAnswer() {
    previous = Number(previous);
    current = Number(current);

    if (operators === '+') {
        previous += current;
    }
    else if (operators === '-') {
        previous -= current;
    }
    else if (operators === '*') {
        previous *= current;
    }
    else if (operators === '/') {
        previous /= current;
    }

    previous = previous.toString();
    current = previous.toString();
}