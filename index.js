// DECLARATIONS
let a, b, operation, operationPressed = 0, res;
const display = document.querySelector(".display");

// OPERATION FUNCTIONS
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
    return;
  }
  return a / b;
};

// OPERATE FUNCTION
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
    // check if last button pressed was an operation
    if (operationPressed) {
      // completely replace display text
      display.innerText = e.target.innerText;
    } else {
      // add number to existing display text (provided there is space)
      if ((display.innerText).length < 8) {
        display.innerText += e.target.innerText;
      } 
    }
    // we just clicked a number so set operationPressed to 0
    operationPressed = 0;
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
    // if 'a' exists, evaluate the previous expression first
    if (a) {
      // operate with our previously stored 'a' variable and the current number in the display as 'b'
      res = operate(operation, Number(a), Number(display.innerText))
      // if our result is a float
      if (!Number.isInteger(res)) {
        // cap at 8 decimal places
        res = res.toFixed(8);
      }
      display.innerText = res;
      a = Number(display.innerText);
    }
    
    // store the number inputted before the operation
    a = Number(display.innerText);
    operation = e.target.innerText;
    operationPressed = 1;
  });
});

document.querySelector(".equals").addEventListener("click", (e) => {
  if (display.innerText != "") {
    res = operate(operation, Number(a), Number(display.innerText))
    if (!Number.isInteger(res)) {
      res = Number(res.toFixed(8));
    }
    display.innerText = res;
    a = null;
    operationPressed = 0;
  }
});

document.querySelector(".clear-btn").addEventListener("click", (e) => {
  // reset all values
  display.innerText = "";
  a = null;
  operation = "";
  operationPressed = 0;
});

document.querySelector(".delete-btn").addEventListener("click", (e) => {
  // convert display value to a string of length - 1
  display.innerText = String(display.innerText).substring(0, String(display.innerText).length - 1);
});