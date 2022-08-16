let a, b, operation, lastPressed, res;
const display = document.querySelector(".display");
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
  if (b == 0) {
    display.innerText = 'wut :/';
    return
  }
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
      if ((display.innerText).length < 8) {
        display.innerText += e.target.innerText;
      } 
    }
    lastPressed = "number";
  });
});

document.querySelector(".decimal").addEventListener("click", (e) => {
  // check if there is already a decimal in display
  if (!(display.innerText).includes(".")) {
    display.innerText += e.target.innerText;
  }
});

document.querySelectorAll(".operator").forEach((item) => {
  item.addEventListener("click", (e) => {

    // evaluate previous
    if (operation) {
      // repetition
      res = operate(operation, Number(a), Number(display.innerText))
      if (!Number.isInteger(res)) {
        res = res.toFixed(8);
      }
      display.innerText = res;
      a = Number(display.innerText);
    }
    
    console.log(e);
    a = Number(display.innerText);
    operation = e.target.innerText;
    lastPressed = "operation";
    console.log(operation);
  });
});

document.querySelector(".equals").addEventListener("click", (e) => {
  if (display.innerText != "") {
    res = operate(operation, Number(a), Number(display.innerText))
    if (!Number.isInteger(res)) {
      res = Number(res.toFixed(8));
    }
    display.innerText = res;
    a = Number(display.innerText);
  }
});

document.querySelector(".clear-btn").addEventListener("click", (e) => {
  display.innerText = "";
  a = 0;
  operation = "";
});

document.querySelector(".delete-btn").addEventListener("click", (e) => {
  display.innerText = String(display.innerText).substring(0, String(display.innerText).length - 1);
});