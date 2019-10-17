function add(input) {
  let sum = input.reduce(function (x, y) {
    return x + y;
  })
  console.log(sum);
  return sum;
}

function subtract(input) {
  let subtract = input.reduce(function (x, y) {
    return x - y;
  })
  console.log(subtract);
  return subtract;
}

function product(input) {
  let product = input.reduce(function (x, y) {
    return x * y;
  })
  console.log(product);
  return product;
}

function divide(input) {
  let divide = input.reduce(function (x, y) {
    return x / y;
  })
  console.log(divide);
  return divide;
}

function operate(sym, arr) {
  let ans;
  if (sym == '*') {
    ans = product(arr)
  }

  switch (sym) {
    case '+':
      ans = sum(arr)
      break;
    case '-':
      ans = subtract(arr)
      break;
    case '*':
      ans = product(arr);
      break;
    case '/':
      ans = divide(arr);
      break;
  }

  display.textContent = ans;
}

buttons = document.querySelectorAll('button');
let operators = ['/', '*', '+', '-']
let display = document.getElementById('window');
let clear = document.querySelector('.clear');
let disp_arr = [];
let num_arr = [];
let sym;

for (const button of buttons) {
  button.onclick = function (e) {
    console.log(e.target.value);
    disp_arr.push(e.target.value)
    display.textContent = parseInt(disp_arr.join('').slice(0, 10));
    let test = e.target.value
    if (operators.includes(e.target.value)) {
      num_arr.push(parseInt(display.textContent))
      console.log('num_arr', num_arr);
      disp_arr = []
      sym = e.target.value
    }
    if (e.target.value == '=') {
      num_arr.push(parseInt(display.textContent))
      operate(sym, num_arr)
      num_arr = [];
      disp_arr = [];
    }
  }
}

clear.addEventListener("click", function(){
  display.textContent = '0'
})