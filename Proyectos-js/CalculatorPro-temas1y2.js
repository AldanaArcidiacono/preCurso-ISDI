// Auxiliary functions:
const getArrayNumbers = () => {
    let userNumbers = prompt("Escribe todos los números con los que deeses hacer tus calculos, separandolos con un guión medio ('-')")
      .trim()
      .split("-")
      .map(item => Number(item));
    return userNumbers;
}

function addition() {
  let accumulator = arguments[0];
  for (num in arguments) {
    if (arguments[0] !== arguments[num]){
    accumulator += arguments[num];
    }
  }
  return accumulator;
}

function subtract() {
  let accumulator = arguments[0];
  for (num in arguments) {
    if (arguments[0] !== arguments[num]){
    accumulator -= arguments[num];
    }
  }
  return accumulator;
}

function multiplication() {
  let accumulator = arguments[0];
  for (num in arguments) {
    if (arguments[0] !== arguments[num]){
    accumulator *= arguments[num];
   }
  }
  return accumulator;
}

function division() {
  let accumulator = arguments[0];
  for (num in arguments) {
    if (arguments[0] !== arguments[num]){
    accumulator /= arguments[num];
    }
  }
  return accumulator;
}

function squareRoot() {
  let accumulator = 0;
  for (num in arguments) {
    accumulator = Math.sqrt(arguments[num]);
  }
  return accumulator;
}

const roundNumber = (result, num) => {
    if (!Number.isInteger(result)) {
        return Number.parseFloat(result).toFixed(num);
    }
    return result;
}

// Main function:
const calculatorFunction = () => {  

  let startCalculation = confirm("Deseas realizar calculos? Si lo deseas, toca 'Aceptar', de lo contrario toca 'Cancelar'.");

  while (startCalculation === true) {

    const myOperationsArray = [];
    const myArgs = getArrayNumbers();

    //If the user enters only one number, only the square root of that number is performed.
    if (myArgs.length === 1) {
      myOperationsArray.push(`La raíz cuadrada de ${(myArgs)} es ${roundNumber(squareRoot(...myArgs), 3)}`);
      startCalculation = confirm(myOperationsArray);
      startCalculation = confirm("Deseas realizar más cálculos? Si lo deseas, toca 'Aceptar', de lo contrario toca 'Cancelar'.");
    } else {
      myOperationsArray.push(
        `Los números que seleccionaste son: ${(myArgs)}.\n`,
        `El resultado de la suma de tus números es: ${roundNumber(addition(...myArgs), 3)}\n`, 
        `El resultado de la resta de tus números es: ${roundNumber(subtract(...myArgs), 3)}\n`, 
        `El resultado de la multiplicación de tus números es: ${roundNumber(multiplication(...myArgs), 3)}\n`, 
        `El resultado de la división de tus números es: ${roundNumber(division(...myArgs), 3)}`
      );
  
      startCalculation = confirm(myOperationsArray);
      startCalculation = confirm("Deseas realizar más cálculos? Si lo deseas, toca 'Aceptar', de lo contrario toca 'Cancelar'.");
    }
    
  }

  alert("Gracias por usar nuestro programa! Nos vemos la próxima!");
  
}
calculatorFunction(); 
