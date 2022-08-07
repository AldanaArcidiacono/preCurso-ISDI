//                                    PRO

const getArrayNumbers = () => {
    let userNumbers = prompt("Escribe todos los números con los que deeses hacer tus calculos, separandolos con un guión medio ('-')")
        .trim()
        .split("-")
        .map(Number);
    return userNumbers;
} 
getArrayNumbers();

// Funcion que realice las cuentas ¿Math operations?
function addition() {
    let accumulator = 0;
    for (num in arguments) {
      accumulator += arguments[num];
    }
    return accumulator;
  }
addition(userNumbers);

//                           CALCULATOR PREVIOUS
// Auxiliary functions:
// Math operations
// const addition = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiplication = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1 / num2;
const squareRoot = num => Math.sqrt(num);


const roundNumber = (result, num) => {
    if (!Number.isInteger(result)) {
        return Number.parseFloat(result).toFixed(num);
    }
    return result;
}

// Main function:
const calculatorFunction = () => {  


    const myOperationsArray = [];
    const userSelectionOfNumbers = getArrayNumbers();

    // If the user enters only one number, only the square root of that number is performed.
    if (secondNumber === null) {
        myOperationsArray.push(`La raíz cuadrada de ${userSelectionOfNumbers} es ${roundNumber(squareRoot(userSelectionOfNumbers), 3)}`);
        alert(myOperationsArray);
        return;
    }

    myOperationsArray.push(
        `Los números seleccionados son: ${userSelectionOfNumbers} .`
        ` El resultado de la suma de tus números, es ${roundNumber(addition(userSelectionOfNumbers), 3)}`, 
        ` El resultado de la resta de tus números, es ${roundNumber(subtract(userSelectionOfNumbers), 3)}`, 
        ` El resultado de la multiplicación de tus números, es ${roundNumber(multiplication(userSelectionOfNumbers), 3)}`, 
        ` El resultado de la división de tus números, es ${roundNumber(division(userSelectionOfNumbers), 3)}`
    );
    alert(myOperationsArray);
}
calculatorFunction();
