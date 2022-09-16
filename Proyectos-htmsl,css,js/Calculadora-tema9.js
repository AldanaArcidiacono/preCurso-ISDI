const calculate = (num1, operator, num2) => {
  const firstValue = parseFloat(num1);
  const secondValue = parseFloat(num2);
  if (operator === "add") return firstValue + secondValue;
  if (operator === "sub") return firstValue - secondValue;
  if (operator === "mult") return firstValue * secondValue;
  if (operator === "div") return firstValue / secondValue;
  if (operator === "percentage") return firstValue % secondValue;
  //if (operator === "plus-minus") return firstValue ???? secondValue;
}

const getKeyType = key => {
  const { action } = key.dataset; //Desestructuracion {userAction} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  if (!action) return "number";
  if (
    action === "plus-minus" || 
    action === "percentage" || 
    action === "add" ||
    action === "sub" || 
    action === "mult" || 
    action === "div"
   ) return "operator";
  return action;
}

const createResultString = (key, displayedNum, state) => {
  const keyContent = key.textContent;
  const keyType = getKeyType(key);
  const { firstNumber, modValue, operator, previousKeyType } = state;

  if (keyType === "number"){
    return displayedNum === "0" || 
    previousKeyType === "operator" || 
    previousKeyType === "calculate"
      ? keyContent
      : displayedNum + keyContent;
  }

  if (keyType === "decimal"){
    if (!displayedNum.includes(".")) return displayedNum + ".";
    if (previousKeyType === "operator" || previousKeyType === "calculate") return "0.";
    return displayedNum;
  } 

  if (keyType === "operator"){    
    return firstNumber && 
    operator && 
    previousKeyType !== "operator" &&
    previousKeyType !== "calculate"
      ? calculate(firstNumber, operator, displayedNum)
      : displayedNum;
  }

  if (keyType === "clear") return 0;

  if (keyType === "calculate") {
    return firstNumber
    ? previousKeyType === "calculate"
      ? calculate(displayedNum, operator, modValue)
      : calculate(firstNumber, operator, displayedNum)
    : displayedNum
  } 
}

const updateCalculatorState = (key, calculator, calculatedValue, displayedNum) => {
  const keyType = getKeyType(key);
  const { firstNumber, modValue, operator, previousKeyType } = calculator.dataset;
  calculator.dataset.previousKeyType = keyType;
  
  if (keyType === "operator") {
    calculator.dataset.operator = key.dataset.action;
    calculator.dataset.firstNumber = firstNumber &&
     operator &&
     previousKeyType !== "operator" && 
     previousKeyType !== "calculate"
    ? calculatedValue
    : displayedNum;
  }

  if (keyType === "calculate") {    
    calculator.dataset.modValue = firstNumber && previousKeyType === "calculate"
    ? modValue
    : displayedNum;
  }

  
  if (keyType === "clear") {
    calculator.dataset.firstNumber = ""
    calculator.dataset.modValue = ""
    calculator.dataset.operator = ""
    calculator.dataset.previousKeyType = ""
  }
}

const calculator = document.querySelector(".calculator");
const showOnDisplay = document.querySelector("#display--number");
const calculatorKeys = calculator.querySelector(".calculator__keys");

calculatorKeys.addEventListener("click", event => {
  if(!event.target.matches("button")) return;
  const key = event.target;
  const displayedNum = showOnDisplay.textContent;
  const resultString = createResultString(key, displayedNum, calculator.dataset);

  showOnDisplay.textContent = resultString;
  updateCalculatorState(key, calculator, resultString, displayedNum);
})