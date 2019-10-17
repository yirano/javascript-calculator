function add(input) {
  return input.reduce(function (x, y) {
    return x + y;
  })
}

function subtract(input) {
  return input.reduce(function (x, y) {
    return x - y;
  })
}

function product(input) {
  return input.reduce(function (x, y) {
    return x * y;
  })
}

function divide(input) {
  return input.reduce(function (x, y) {
    return x / y;
  })
}

function operate(sym, arr) {
  let ans;
  switch (sym) {
    case '+':
      ans = add(arr)
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
let display = document.getElementById('window');
let clear = document.querySelector('.clear');
let operators = ['/', '*', '+', '-']
let disp_arr = [];
let num_arr = [];
let sym;

for (const button of buttons) {
  button.onclick = function (e) {
    console.log(e.target.value);
    disp_arr.push(e.target.value)
    display.textContent = parseInt(disp_arr.join('').slice(0, 10));
    if (e.target.value == '=') {
      num_arr.push(parseInt(display.textContent))
      operate(sym, num_arr)
      disp_arr = [];
      num_arr = [];
    } else if (operators.includes(e.target.value)) {
      num_arr.push(parseInt(display.textContent))
      console.log('num_arr', num_arr);
      disp_arr = []
      sym = e.target.value
      operate(sym, num_arr)
    }
  }
}

let reset = function () {
  display.textContent = '0'
}

clear.addEventListener("click", reset)