// Funciones auxiliares
const getNum1 = () => {
    let num1 = prompt("Elige un número").trim();
    // En caso de que el usuario introduzca cancelar:
    if (num1 === null){
        return alert("Deseas salir? Nos vemos la próxima!")
    }
    // En caso de que el usuario introduzca cualquier cosa que no sean números:
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

// Operaciones
const addition = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiplication = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1 / num2;
const squareRoot = num => Math.sqrt(num);

// El resultado debería ser mostrado con 3 decimales.
const roundNumber = (result, num) => {
    if (!Number.isInteger(result)) {
        return Number.parseFloat(result).toFixed(num);
    }
    return result;
}

// Función principal
const calculatorFunction = () => {  

    // Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario.  
    const myOperationsArray = [];
    const firstNumber = getNum1();
    const secondNumber = getNum2();

    // Si el usuario introduce un solo numero, deberá mostrar SOLO su raíz cuadrada
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
