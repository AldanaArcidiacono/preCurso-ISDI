const calculator = document.querySelector(".calculator");
const calculatorKeys = calculator.querySelector(".calculator__keys");
const showOnDisplay = document.querySelector("#display--number");

const calculate = (num1, operator, num2) => {
  let result = "";
  
  if (operator === "add") {
    result = parseFloat(num1) + parseFloat(num2);
  } else if (operator === "sub") {
    result = parseFloat(num1) - parseFloat(num2);
  } else if (operator === "mult") {
    result = parseFloat(num1) * parseFloat(num2);
  } else if (operator === "div") {
    result = parseFloat(num1) / parseFloat(num2);
  }
  return result
}

calculatorKeys.addEventListener("click", event => {
  if(event.target.matches("button")){
    const selectedKey = event.target;
    const userAction = selectedKey.dataset.action;
    const keyContent = selectedKey.textContent;
    const displayedNum = showOnDisplay.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    let firstNumber = calculator.dataset.firstNumber;
    const operator = calculator.dataset.operator;
    let secondNumber = displayedNum;

    if (!userAction){
      if(displayedNum === "0" || previousKeyType === "operator" || previousKeyType === "calculate"){
        showOnDisplay.textContent = keyContent;
      } else {
        showOnDisplay.textContent = displayedNum + keyContent;
      }
      calculator.dataset.previousKeyType = "number";
    }

    if (userAction === "decimal"){
      if (!displayedNum.includes(",")) {
        showOnDisplay.textContent = displayedNum + ".";
      } else if (previousKeyType === "operator" || previousKeyType === "calculate") {
        showOnDisplay.textContent = "0.";
      }
      calculator.dataset.previousKeyType = "decimal";
    } 

    if(userAction === "plus-minus" || userAction === "percentage" || userAction === "add" || userAction === "sub" || userAction === "mult" || userAction === "div"){    
      if (firstNumber && operator && previousKeyType !== "operator" && previousKeyType !== "calculate") {
        const calculateNewNum = calculate(firstNumber, operator, secondNumber);
        showOnDisplay.textContent = calculateNewNum;
        calculator.dataset.firstNumber = calculateNewNum;
      } else {
        calculator.dataset.firstNumber = displayedNum;
      }
      calculator.dataset.previousKeyType = "operator";
      calculator.dataset.operator = userAction;
    }

    if (userAction === "clear") {
        calculator.dataset.firstNumber = "";
        calculator.dataset.modValue = "";
        calculator.dataset.operator = "";
        calculator.dataset.previousKeyType = "";

      showOnDisplay.textContent = 0;
      calculator.dataset.previousKeyType = "clear";
    }

    if (userAction === "calculate") {
      if (firstNumber) {
        if(previousKeyType === "calculate") {
          firstNumber = displayedNum;
          secondNumber = calculator.dataset.modValue;
        }
        showOnDisplay.textContent = calculate(firstNumber, operator, secondNumber);
      }
      calculator.dataset.modValue = secondNumber;
      calculator.dataset.previousKeyType = "calculate";
   } 

  }
})