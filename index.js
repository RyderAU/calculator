let a, b, operation, lastPressed;
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
  } else if (operation == "x") {
    return multiply(a, b);
  } else if (operation == "÷") {
    return divide(a, b);
  }
};

document.querySelectorAll(".number").forEach((item) => {
  item.addEventListener("click", (e) => {
    // set display to have that number
    if (lastPressed == "operation") {
      display.innerText = e.target.innerText;
    } else {
      display.innerText += e.target.innerText;
    }
    lastPressed = "number";
  });
});

document.querySelectorAll(".operator").forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e);
    a = parseInt(display.innerText);
    operation = e.target.innerText;
    lastPressed = "operation"
    console.log(operation);
  });
});

document.querySelector(".equals").addEventListener("click", (e) => {
  display.innerText = `${operate(operation, a, parseInt(display.innerText))}`;
  a = parseInt(display.innerText);
});

document.querySelector(".clear-btn").addEventListener("click", (e) => {
  display.innerText = "";
  // think I need to wipe more data
});
