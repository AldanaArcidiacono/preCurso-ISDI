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
console.log(division("This is the div: ", ...myArgs));


// RAIZ CUADRADA: ANTES: const squareRoot = num => Math.sqrt(num);
// function squareRoot() {
//   let accumulator = arguments[0];
//   for (num in arguments) {
//     if (arguments[0] !== arguments[num]){
//     accumulator /= arguments[num];
//   }
//   }
//   console.log("This is the value of the acc: ", accumulator);
//   return accumulator;
// }
// console.log(division(...myArgs));


const roundNumber = (result, num) => {
    if (!Number.isInteger(result)) {
        return Number.parseFloat(result).toFixed(num);
    }
    return result;
}

// Main function:
const calculatorFunction = () => {  

  let startCalculation = prompt("Deseas realizar calculos? Si lo deseas, escribe 'Si'. O escribe 'No' de lo contrario.")
    .trim()
    .toLowerCase();

  while (startCalculation === "si") {

    const myOperationsArray = [];
    const myArgs = getArrayNumbers();

    // If the user enters only one number, only the square root of that number is performed.
    // if (myArgs.length === 1) {
    //     myOperationsArray.push(`La raíz cuadrada de ${myArgs} es ${roundNumber(squareRoot(...myArgs), 3)}`);
    //     startCalculation = prompt(myOperationsArray, "Deseas realizar más cálculos? Escribe 'Si' si deseas realizar calculos. O escribe 'No' si no lo deseas.")
    //       .trim()
    //       .toLowerCase();
    //     return;
    // }

    myOperationsArray.push(
        `Los números seleccionados son: ${getArrayNumbers()} .`
        ` El resultado de la suma de tus números, es ${roundNumber(addition(...myArgs), 3)}`, 
        ` El resultado de la resta de tus números, es ${roundNumber(subtract(...myArgs), 3)}`, 
        ` El resultado de la multiplicación de tus números, es ${roundNumber(multiplication(...myArgs), 3)}`, 
        //` El resultado de la división de tus números, es ${roundNumber(division(...myArgs), 3)}`
    );

    startCalculation = prompt(myOperationsArray);

    let startNewCalculation = ("Deseas realizar más cálculos? Escribe 'Si' si deseas realizar calculos. O escribe 'No' si no lo deseas.")
      .trim()
      .toLowerCase();
  } 


  alert("Gracias por usar la calculadora! Hasta la próxima!");
}
calculatorFunction(); 
