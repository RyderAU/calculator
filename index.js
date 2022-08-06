let a, b, operation;
const display = document.querySelector(".field");
// create functions for operations
// add
const add = (a, b) => {
  return a + b;
};
// subtract
const subtract = (a, b) => {
  return a - b;
};
// multiply
const multiply = (a, b) => {
  return a * b;
};
// divide
const divide = (a, b) => {
  return a / b;
};
// operate
const operate = (operation, a, b) => {
  if (operation == "+") {
    return add(a, b);
  } else if (operation == "-") {
    return subtract(a, b);
  } else if (operation == "*") {
    return multiply(a, b);
  } else if (operation == "/") {
    return divide(a, b);
  }
};

document.querySelectorAll(".number").forEach((item) => {
  item.addEventListener("click", (e) => {
    // set display to have that number
    display.innerText += e.target.innerText;
  });
});

document.querySelector(".clear-btn").addEventListener("click", (e) => {
  display.innerText = "";
});
