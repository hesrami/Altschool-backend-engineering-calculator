document.addEventListener("DOMContentLoaded", () => {
  // Select elements
  const display = document.querySelector("input[name='display']");
  const numberButtons = document.querySelectorAll("input[type='button']:not(.operator):not(.equals)");
  const operatorButtons = document.querySelectorAll("input.operator");

  const historyList = document.getElementById("historyList");

  // Handle number button clicks
  numberButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.value === "DEL") {
        // delete last character with DEL buton
        display.value = display.value.slice(0, -1);
      } else if (btn.value === "CE") {
        // clear everything
        display.value = "";
      } else {
        // add to expression
        display.value += btn.value;
      }
    });
  });

  // Handle operator button clicks
  operatorButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.value === "x") {
        display.value += "*";
      } else if (btn.value === "^") {
        display.value += "**";
      } else {
        // for +, -, /, %
        display.value += btn.value;
      }
    });
  });

  // Handle equals button click
  document.querySelector("input.equals").addEventListener("click", () => {
    try {
      let expression = display.value;
      let result = eval(expression);
      // Display the result
      display.value = result;

      // Store expression in history
      const li = document.createElement("li");

      li.textContent = `${expression} = ${result}`;
      historyList.prepend(li);
    } catch (error) {
      console.error(error);
      alert("Invalid expression.");
    }
  });
});
