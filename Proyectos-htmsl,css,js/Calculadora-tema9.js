const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const display = document.querySelector("#display--number");

keys.addEventListener("click", event => {
  if (event.target.matches("button")) {
    const key = event.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;

    if (!action) {
      if (displayedNum === "0") {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
    }
    
    if(action === "plus-minus" || action === "percentage" || action === "add" || action === "sub" || action === "mult" || action === "div"){
      console.log("operator key!");
      key.classList.add('is-depressed');
    } else if (action === "decimal"){
      console.log("decimal key!");
    } else if (action === "clear"){
      console.log("clear key!");
    } else if (action === "calculate"){
      console.log("equal key!");
    } else {
      console.log("number key!");
    }
 }
});


// // Auxiliary functions:
// const getArrayNumbers = () => {
//     let userNumbers = prompt("Escribe todos los números con los que deeses hacer tus calculos, separandolos con un guión medio ('-')")
//       .trim()
//       .split("-")
//       .map(item => Number(item));
//     return userNumbers;
// }

// function addition() {
//   let accumulator = arguments[0];
//   for (num in arguments) {
//     if (arguments[0] !== arguments[num]){
//     accumulator += arguments[num];
//     }
//   }
//   return accumulator;
// }

// function subtract() {
//   let accumulator = arguments[0];
//   for (num in arguments) {
//     if (arguments[0] !== arguments[num]){
//     accumulator -= arguments[num];
//     }
//   }
//   return accumulator;
// }

// function multiplication() {
//   let accumulator = arguments[0];
//   for (num in arguments) {
//     if (arguments[0] !== arguments[num]){
//     accumulator *= arguments[num];
//    }
//   }
//   return accumulator;
// }

// function division() {
//   let accumulator = arguments[0];
//   for (num in arguments) {
//     if (arguments[0] !== arguments[num]){
//     accumulator /= arguments[num];
//     }
//   }
//   return accumulator;
// }

// function squareRoot() {
//   let accumulator = 0;
//   for (num in arguments) {
//     accumulator = Math.sqrt(arguments[num]);
//   }
//   return accumulator;
// }

// const roundNumber = (result, num) => {
//     if (!Number.isInteger(result)) {
//         return Number.parseFloat(result).toFixed(num);
//     }
//     return result;
// }

// // Main function:
// const calculatorFunction = () => {  

//   let startCalculation = confirm("Deseas realizar calculos? Si lo deseas, toca 'Aceptar', de lo contrario toca 'Cancelar'.");

//   while (startCalculation === true) {

//     const myOperationsArray = [];
//     const myArgs = getArrayNumbers();

//     //If the user enters only one number, only the square root of that number is performed.
//     if (myArgs.length === 1) {
//       myOperationsArray.push(`La raíz cuadrada de ${(myArgs)} es ${roundNumber(squareRoot(...myArgs), 3)}`);
//       startCalculation = confirm(myOperationsArray);
//       startCalculation = confirm("Deseas realizar más cálculos? Si lo deseas, toca 'Aceptar', de lo contrario toca 'Cancelar'.");
//     } else {
//       myOperationsArray.push(
//         `Los números que seleccionaste son: ${(myArgs)}.\n`,
//         `El resultado de la suma de tus números es: ${roundNumber(addition(...myArgs), 3)}\n`, 
//         `El resultado de la resta de tus números es: ${roundNumber(subtract(...myArgs), 3)}\n`, 
//         `El resultado de la multiplicación de tus números es: ${roundNumber(multiplication(...myArgs), 3)}\n`, 
//         `El resultado de la división de tus números es: ${roundNumber(division(...myArgs), 3)}`
//       );
  
//       startCalculation = confirm(myOperationsArray);
//       startCalculation = confirm("Deseas realizar más cálculos? Si lo deseas, toca 'Aceptar', de lo contrario toca 'Cancelar'.");
//     }
    
//   }

//   alert("Gracias por usar nuestro programa! Nos vemos la próxima!");
  
// }
// calculatorFunction(); 
