function calculate(num1, operator, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      return "Invalid input. Please enter valid numbers.";
    }
  
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          return "Division by zero is not allowed";
        }
        return num1 / num2;
      default:
        return "Invalid operator";
    }
  }

  console.log(calculate(100, "-", 50));

  