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

input = [20, 5, 6, 1]

add(input) // 32
subtract(input) // 8
product(input)
divide(input)

operate('*', [7, 8]);