//                                    PRO
// Funcion que toma los numeros del usuario
const getArrayNumbers = () => {
    let userNumbers = prompt("Escribe todos los números con los que deeses hacer tus calculos, separandolos con un guión medio ('-')")
      .trim()
      .split("-")
      .map(item => Number(item));
    return userNumbers;
}

// Funcion que realice las cuentas
// OP 1
function addition() {
  let accumulator = 0;
  for (num in arguments) {
    accumulator += arguments[num];
  }
  console.log("This is the value of the acc: ", accumulator);
  return accumulator;
}
console.log(addition(...myArgs));

// OP 2
// function addition(array) {
//   let accumulator = 0;
// for (let i = 0; i < array.length; i++){
  //   accumulator += array[i];
  // }
//   console.log("This is the value of the acc: ", accumulator);
//   return accumulator;
// }

function subtract() {
  let accumulator = arguments[0];
  for (num in arguments) {
    if (arguments[0] !== arguments[num]){
    accumulator -= arguments[num];
  }
  }
  console.log("This is the value of the acc: ", accumulator);
  return accumulator;
}
console.log(subtract(...myArgs));

function multiplication() {
  let accumulator = arguments[0];
  for (num in arguments) {
    if (arguments[0] !== arguments[num]){
    accumulator *= arguments[num];
  }
  }
  console.log("This is the value of the acc: ", accumulator);
  return accumulator;
}
console.log(multiplication(...myArgs));

function division() {
  let accumulator = arguments[0];
  for (num in arguments) {
    if (arguments[0] !== arguments[num]){
    accumulator /= arguments[num];
  }
  }
  console.log("This is the value of the acc: ", accumulator);
  return accumulator;
}
console.log(division(...myArgs));


//                           CALCULATOR PREVIOUS
// Auxiliary functions:
// const squareRoot = num => Math.sqrt(num);

// const roundNumber = (result, num) => {
//     if (!Number.isInteger(result)) {
//         return Number.parseFloat(result).toFixed(num);
//     }
//     return result;
// }

// Main function:
const calculatorFunction = () => {  

  let startCalculating = prompt("Deseas realizar calculos? Escribe 'Si' si deseas realizar calculos. O escribe 'No' si no lo deseas.")
    .trim()
    .toLowerCase();

  while (startCalculating === "si") {

    const myOperationsArray = [];
    const myArgs = getArrayNumbers();

    // If the user enters only one number, only the square root of that number is performed.
    if (myArgs.length === 1) {
        myOperationsArray.push(`La raíz cuadrada de ${myArgs} es ${roundNumber(squareRoot(...myArgs), 3)}`);
        startCalculating = prompt(myOperationsArray, "Deseas realizar más cálculos? Escribe 'Si' si deseas realizar calculos. O escribe 'No' si no lo deseas.")
          .trim()
          .toLowerCase();
        return;
    }

    myOperationsArray.push(
        `Los números seleccionados son: ${myArgs} .`
        ` El resultado de la suma de tus números, es ${roundNumber(addition(...myArgs), 3)}`, 
        ` El resultado de la resta de tus números, es ${roundNumber(subtract(...myArgs), 3)}`, 
        ` El resultado de la multiplicación de tus números, es ${roundNumber(multiplication(...myArgs), 3)}`, 
        ` El resultado de la división de tus números, es ${roundNumber(division(...myArgs), 3)}`
    );

    startCalculating = prompt(myOperationsArray, "Deseas realizar más cálculos? Escribe 'Si' si deseas realizar calculos. O escribe 'No' si no lo deseas.")
      .trim()
      .toLowerCase();
  } 
  alert("Gracias por usar la calculadora! Hasta la próxima!");
}
calculatorFunction();
