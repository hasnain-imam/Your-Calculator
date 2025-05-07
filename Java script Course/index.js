function factorial(n) {
  if (n < 0 || !Number.isInteger(n)) return "Invalid!";
  let fact = 1;
  for (let i = 1; i <= n; i++) fact *= i;
  return fact;
}

function toRadians(deg) {
  return deg * (Math.PI / 180);
}

document.getElementById("operator").addEventListener("change", () => {
  const op = document.getElementById("operator").value;
  const secondBox = document.getElementById("secondValue");
  const needsSecond = ["+", "-", "*", "/", "%", "^"].includes(op);

  secondBox.style.display = needsSecond ? "block" : "none";
});

function calculate() {
  const num1 = parseFloat(document.getElementById("firstValue").value);
  const num2 = parseFloat(document.getElementById("secondValue").value);
  const operator = document.getElementById("operator").value;
  let result;

  if (["+", "-", "*", "/", "%", "^"].includes(operator) && (isNaN(num1) || isNaN(num2))) {
    result = "Enter both numbers";
  } else if (
    ["sqrt", "sin", "cos", "tan", "log", "ln", "exp", "fact"].includes(operator) &&
    isNaN(num1)
  ) {
    result = "Enter first number";
  } else {
    switch (operator) {
      case "+": result = num1 + num2; break;
      case "-": result = num1 - num2; break;
      case "*": result = num1 * num2; break;
      case "/": result = num2 !== 0 ? (num1 / num2).toFixed(4) : "Divide by 0 Error"; break;
      case "%": result = num2 !== 0 ? num1 % num2 : "Mod by 0 Error"; break;
      case "^": result = Math.pow(num1, num2).toFixed(4); break;
      case "sqrt": result = num1 >= 0 ? Math.sqrt(num1).toFixed(4) : "Invalid √"; break;
      case "sin": result = Math.sin(toRadians(num1)).toFixed(4); break;
      case "cos": result = Math.cos(toRadians(num1)).toFixed(4); break;
      case "tan": result = Math.tan(toRadians(num1)).toFixed(4); break;
      case "log": result = num1 > 0 ? Math.log10(num1).toFixed(4) : "Invalid log"; break;
      case "ln": result = num1 > 0 ? Math.log(num1).toFixed(4) : "Invalid ln"; break;
      case "exp": result = Math.exp(num1).toFixed(4); break;
      case "fact": result = factorial(num1); break;
      default: result = "Unknown operator";
    }
  }

  document.getElementById("result").value = result;
}