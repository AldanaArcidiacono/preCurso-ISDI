//               METHODS
// Ejercicio 1:
// const myName = "Aldana";
// function lettersOfMyName(){
//     return "My name has " + myName.length + " letters";
// }
// const result = lettersOfMyName();
// console.log(result);

// const myName = "Aldana";
// const lettersOfMyName = () => {
//     return "My name has " + myName.length + " letters";
// }
// const result = lettersOfMyName();
// console.log(result);

// Ejercicio 2:
// const myFullName = "Aldana Arcidiacono";
// const fullNameStarts = () => {
//     return "My last name starts on positon " + myFullName.lastIndexOf("A");
// }
// const result = fullNameStarts();
// console.log(result);

// Ejercicio 3:
// const myFullName = "Aldana Arcidiacono";
// const onlyMyFirstName = () => {
//     return "My name is " + myFullName.slice(0,6);
// }
// const result = onlyMyFirstName();
// console.log(result);

// Ejercicio 4:
// const myFullName = "Aldana Arcidiacono";
// const onlyMySurname = () => {
//     return myFullName.slice(7,18);
// }
// const result = onlyMySurname();
// console.log(result);

// Ejercicio 4.1:
// const mySurname = result;
// console.log(myFullName + ", " + mySurname);

// Ejercicio 5:
// const myFullName = "Aldana Arcidiacono";
// const onlyMySurname = () => {
//     return myFullName.slice(7,18);
// }
// const result = onlyMySurname();
// const mySurname = result;
// console.log("Hello Ms. " + mySurname);

// Ejercicio 6:
// const myFullName = "Aldana Arcidiacono";

// const onlyMySurname = () => {
//     return myFullName.slice(7,18);
// }
// const result = onlyMySurname();
// const mySurname = result;

// const surnameToUpperCase = () => {
//     return result.toUpperCase();
// }
// const newResult = surnameToUpperCase();
// const myUpperCaseSurname = newResult;

// console.log("my last name is " + myUpperCaseSurname);

// Ejercicio 7:
// const myFullName = "Aldana Arcidiacono";

// const onlyMyFirstName = () => {
//     return myFullName.slice(0,6);
// }

// const result = onlyMyFirstName();

// let adjective = result + " is awesome";
// console.log(adjective);

// Ejercicio 8:
// const myFullName = "Aldana Arcidiacono";
// console.log("Mis iniciales son: " + myFullName.substring(0,1) + ". " + myFullName.substring(7,8) + ".");

//               ARRAYS     
// Ejercicio 1:
//const myName = ['A','L','D','A','N','A','A','R','C','I','D','I','A','C','O','N','O'];
// function myFullName(myName){
//     return myName.join('/');
// }
// const result = myFullName(myName);
// console.log(result);

// const myFullName = (myName) => {
//     return myName.join('/');
// }
// const result = myFullName(myName);
// console.log(result);

// Ejercicio 2:
// const onlyMySurname = () => {
//     return myName.slice(6,18);
//     }
// const result = onlyMySurname();

// const myFullName = (result) => {
//     return result.join('|');
//     }
// const result2 = myFullName(result);

// console.log(result2);

// Ejercicio 3: 

//const myName = ['A','L','D','A','N','A','A','R','C','I','D','I','A','C','O','N','O'];
// const onlyName = myName.slice(0,6);
// console.log(onlyName);

// for (let i = 0; i < onlyName.length; i++){
//    console.log(`${i + 1}°: ${onlyName[i]}`);
// };

// Ejercicio 4: 
// const printLettersInOrder = (array) => {
//     const onlySurname = array.slice(6,array.length);
//     for (let i = 0; i < onlySurname.length; i++){
//         console.log(`${i + 1}°: ${onlySurname[i]}`);
//      };
// }
// printLettersInOrder(myName);

// Ejercicio 4.1
// const printLettersInOrder = (array) => {
//     const onlyName = array.slice(0,6);
//     for (let i = 0; i < onlyName.length; i++){
//         console.log(`${i + 1}°: ${onlyName[i]}`);
//      };
// }
// printLettersInOrder(myName);

// Ejercicio 5:
// const myName = ['A','L','D','A','N','A','A','R','C','I','D','I','A','C','O','N','O'];
// console.log("Mis iniciales son: " + myName.slice(0,1) + ". " + myName.slice(6,7) + ".");

// Ejercicio 6:
// const myData = ["Aldana", "Arcidiacono", 24];
// console.log("My name is " + myData[0] + " and i'm " + myData[2] + " years old.");
// // Ejercicio 7:
// let addCityToMyData = myData.push("Madrid");
// console.log(myData);
// // Ejercicio 8:
// let deleteCityToMyData = myData.pop();
// console.log(myData);
// // Ejercicio 9:
// let deleteNameToMyData = myData.shift();
// console.log(myData);
// // Ejercicio 10:
// let addNameToMyData = myData.splice(0,0,"Aldana");
// console.log(myData);

// Ejercicio 11:
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const multByTwo = numbers.map(x => x * 2);
// console.log(multByTwo);

// Ejercicio 12: Reformula la función para que puedas especificar por cual número debería multiplicar cada elemento de la array.
// const myNumber = 3;
// const multByNum = (num, array) => {
//     const arrayMult = array.map(item => item * num);
//     return arrayMult;
// }
// console.log("Resultado: ", multByNum(myNumber, numbers));

// Ejercicio 13: Mostrar resultado, del ex. anterior, en orden inverso
// const orderer = multByNum(myNumber, numbers).sort((a , b) => b - a);
// console.log("Numeros de mayor a menor: ", orderer);

// Ejercicio 14: Puedes indicarme que letras se repiten de tu nombre y cuantas veces? 
//                                                                                       NO TERMINADO
// const myFullName = "Aldana Arcidiacono";
// const repitedLetters = (string) => {
//     const charactersArray = [];
    
// }

// Ejercicio 15: Ahora muestra por consola que letras NO se repiten y muestra tu nombre sin esas letras

//               NUMBERS
// Ejercicio 1:
// const hora = [14.09];
// console.log("It's " + hora.toString() + " in the afternoon");
// // Ejercicio 2:
// console.log("It's around " + (14).toString());
// // Ejercicio 3:
// console.log(Math.round(14.09) + "!");
// // Ejercicio 4:
// let num1 = 1;
// let num2 = 2;
// let num3 = 3;
// let num4 = 4;
// let num5 = 5;
// let num6 = 6;
// let sum = num6 + num5;
// console.log("The sum of 6+5, is: " + sum);
// // Ejercicio 5:
// let sub = num6 - num4;
// console.log("The subtraction of 6-4, is: " + sub);
// // Ejercicio 6:
// let mult = num2 * num3;
// console.log("The multiplication of 2*3, is: " + mult);
// // Ejercicio 7:
// let div = num6 / num2;
// console.log("The division of 6/2, is: " + div);
// // Consolear todos los resultados juntos:
// console.log(sum, sub, mult, div);

// // Ejercicio 8:
// console.log(10 * "hora"); // Output: NaN "Not-a-Number"
// // Ejercicio 9: Podemos controlar este error con un condicional if?
let num1 = 10;
let num2 = "Hora";

// console.log(isNaN(num2))
// console.log(typeof num2)

const isThisANumber = (num) => {
    if (isNaN(num)) {
    return "This is not a number"; 
    }
    return "It is a number";
}; 

console.log(isThisANumber(num2));
