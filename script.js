const input = document.querySelector("#display");
const numbers = document.querySelectorAll("Button");

// Appending numbers and operators to input feild
numbers.forEach((button) => {
  button.addEventListener("click", (event) => {
    const text = event.target.innerText;
    if (button.classList.contains("number")) {
      input.value += text;
    } else if (button.classList.contains("operator")) {
      a = text === "x" ? "*" : text;
      operatorclick(a);
    }
  });
});

// logic for operators to not display at first
function operatorclick(operator) {
  if (input.value.length > 0) {
    input.value += operator;
  } else if (operator === "+" || operator === "*" || operator === "/") {
    input.value = "";
  }
}

// funcitonality of delete button
const Delete = document
  .querySelector("#delete")
  .addEventListener("click", () => {
    const value = input.value;
    input.value = value.slice(0, -1);
  });

// functionality of reset button
const reset = document
  .querySelector("#reset")
  .addEventListener("click", () => (input.value = ""));

// functionality of equals button
const equals = document
  .querySelector("#equal")
  .addEventListener("click", () => {
    const expression = input.value;
    try {
      const result = eval(expression);
      if (typeof result === "number" && isFinite(result)) {
        input.value = result % 1 === 0 ? result.toFixed(0) : result.toFixed(2);
      } else {
        input.value = "Error";
      }
    } catch (error) {
      input.value = "Error";
    }
  });
