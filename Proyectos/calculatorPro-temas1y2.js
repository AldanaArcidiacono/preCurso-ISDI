//                                    PRO
// function addition() {
//     let number = 0;
//     for (num in arguments) {
//         console.log(num);
//         number += arguments[num];
//     }
//     return number;
// } 
// addition(2, 3, 4);

// Funcion que pida numeros ¿getNum? ¿Pedirle numeros separados por , o / y separarlos en mi codigo con .split?
const getArrayNumbers = () => {
    let userNumbers = prompt("Escribe todos los números con los que deeses hacer tus calculos, separandolos con un guión medio ('-')")
        .trim()
        .split("-");
    return userNumbers;
} 
getArrayNumbers();


// Funcion que me almacene los números de los usuarios en un array / arguments
function userNumber() {
    let arrayOfUserNumber = [];
}

// Funcion que realice las cuentas ¿Math operations?



//                           CALCULATOR PREVIOUS
// Auxiliary functions:
const getNum1 = () => {
    let num1 = prompt("Elige un número").trim();
    // If the user wants to quit the program:
    if (num1 === null){
        return alert("Deseas salir? Nos vemos la próxima!")
    }
    // If the user writes something besides a number:
    while (isNaN(num1) || num1 === "") {
        num1 = prompt("Ese no es un número. Debes ingresar un número.");
    }
    return +num1;
} 

const getNum2 = () => {
    let num2 = prompt("Elige otro número");
    if (num2 === null || num2.trim() === ""){
        return null;
    }
    num2 = num2.trim();
    while (isNaN(num2)) {
        num2 = prompt("Ese no es un número. Debes ingresar un número.");
    }
    return +num2;
}

// Math operations
const addition = (num1, num2) => num1 + num2;
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
    const firstNumber = getNum1();
    const secondNumber = getNum2();

    // If the user enters only one number, only the square root of that number is performed.
    if (secondNumber === null) {
        myOperationsArray.push(`La raíz cuadrada de ${firstNumber} es ${roundNumber(squareRoot(firstNumber), 3)}`);
        alert(myOperationsArray);
        return;
    }

    myOperationsArray.push(
        `El resultado de la suma de ${firstNumber} más ${secondNumber}, es ${roundNumber(addition(firstNumber, secondNumber), 3)}`, 
        ` El resultado de la resta de ${firstNumber} menos ${secondNumber}, es ${roundNumber(subtract(firstNumber, secondNumber), 3)}`, 
        ` El resultado de la multiplicación de ${firstNumber} por ${secondNumber}, es ${roundNumber(multiplication(firstNumber, secondNumber), 3)}`, 
        ` El resultado de la división de ${firstNumber} por ${secondNumber}, es ${roundNumber(division(firstNumber, secondNumber), 3)}`
    );
    alert(myOperationsArray);
}
calculatorFunction();
