const add_button = document.getElementById("add");
const subtract_button = document.getElementById("subtract");
const multiply_button = document.getElementById("multiply");
const divide_button = document.getElementById("divide");
function add(number1, number2) {
  return number1 + number2;
}
function difference(number1, number2) {
  return number1 - number2;
}

function product(number1, number2) {
  return number1 * number2;
}

function quotient(number1, number2) {
  return number1 / number2;
}
add_button.addEventListener("click", function () {
  add();
  const Number1 = parseFloat(document.getElementById("number1").value);
  const Number2 = parseFloat(document.getElementById("number2").value);
  const result = add(Number1, Number2);
  document.getElementById("calculation-result").textContent = result;
});
subtract_button.addEventListener("click", function () {
  difference();
  const Number1 = parseFloat(document.getElementById("number1").value);
  const Number2 = parseFloat(document.getElementById("number2").value);
  const result = difference(Number1, Number2);
  document.getElementById("calculation-result").textContent = result;
});

multiply_button.addEventListener("click", function () {
  product();
  const Number1 = parseFloat(document.getElementById("number1").value);
  const Number2 = parseFloat(document.getElementById("number2").value);
  const result = product(Number1, Number2);
  document.getElementById("calculation-result").textContent = result;
});

divide_button.addEventListener("click", function () {
  quotient();
  const Number1 = parseFloat(document.getElementById("number1").value);
  const Number2 = parseFloat(document.getElementById("number2").value);
  const result = quotient(Number1, Number2);
  document.getElementById("calculation-result").textContent = result;
});
