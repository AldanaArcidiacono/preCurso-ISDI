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
    const firstValue = calculator.dataset.firstValue;
    const operator = calculator.dataset.operator;
    const secondValue = displayedNum;

    if(userAction === "plus-minus" || userAction === "percentage" || userAction === "add" || userAction === "sub" || userAction === "mult" || userAction === "div"){
      calculator.dataset.previousKeyType = "operator";
      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = userAction;
      if (firstValue && operator && previousKeyType !== "operator") {
        showOnDisplay.textContent = calculate(firstValue, operator, secondValue)
      }
      
    } else if (userAction === "decimal"){
      if (!displayedNum.includes(",")) {
        showOnDisplay.textContent = displayedNum + ",";
      } else if (previousKeyType === "operator") {
        showOnDisplay.textContent = "0,";
      }
      calculator.dataset.previousKey = "decimal";
      
    } else if (userAction === "clear"){
      calculator.dataset.previousKeyType = "clear";

    } else if (userAction === "calculate"){

      calculator.dataset.previousKeyType = "calculate";
      showOnDisplay.textContent = calculate(firstValue, operator, secondValue);
      
    } else {
      // if(!userAction)
      calculator.dataset.previousKey = "number";
      if(displayedNum === "0" || previousKeyType === "operator"){
        showOnDisplay.textContent = keyContent;
      } else {
        showOnDisplay.textContent = displayedNum + keyContent;
      }
    }

    
  }
})