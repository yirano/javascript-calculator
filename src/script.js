function add(input) {
  let sum = input.reduce(function (x, y) {
    return x + y;
  })
  console.log(sum);
}

function subtract(input) {
  let subtract = input.reduce(function (x, y) {
    return x - y;
  })
  console.log(subtract);
}

function product(input) {
  let product = input.reduce(function (x, y) {
    return x * y;
  })
  console.log(product);
}

function divide(input) {
  let divide = input.reduce(function (x, y) {
    return x / y;
  })
  console.log(divide);
}

function operate(sym, arr) {
  if (sym == '*') {
    product(arr)
  }
}

buttons = document.querySelectorAll('button');
let operators = ['/', '*', '+', '-']

for (const button of buttons) {
  button.onclick = function (e) {
    console.log(e.target.value);
    if (operators.includes(e.target.value)) {
      console.log("operator clicked");
    }
  }
}