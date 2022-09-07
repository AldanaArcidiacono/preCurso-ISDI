// // Ejercicio 1
// const showNums = () => {
//     const nums = [1,2,3,4,5,6,7,8,9]
//     for(let i = 0; i < nums.length -1; i++){
//         let pairs = [];
//         pairs.push(nums[i], nums[i + 1]);
//         const multBy2 = pairs.map(num => num * 2).join(" - ");
//         console.log(`${i+1}° pareja ${multBy2}`);
//     }
// }
// showNums();
 
// //Ejercicio 1.1
// function showNumsWithArgs() {
//     let nums = arguments;
//     for(let i = 0; i < nums.length -1; i++){
//         let pairs = [];
//         pairs.push(arguments[i], arguments[i + 1]);
//         const multBy2 = pairs.map(num => num * 2).join(" - ");
//         console.log(`${i+1}° pareja ${multBy2}`);
//     }
// }
// showNumsWithArgs(1,2,3,4,5);

// // Ejercicio 1.2
// function showNumsWithArgs2(array, multNum) {
//     let nums = arguments;
//     for(let i = 0; i < array.length -1; i++){
//         let pairs = [];
//         pairs.push(array[i], array[i + 1]);
//         const multBy = pairs.map(num => num * multNum).join(" - ");
//         console.log(`${i+1}° pareja ${multBy}`);
//     }
// }
// showNumsWithArgs2([1,2,3,4,5,6], 12);

// // Ejercicio 1.3
// function showNumsWithArgs3(array, multNum, pairsToShow) {
//     for(let i = 0; i < pairsToShow; i++){
//         let pairs = [];
//         pairs.push(array[i], array[i + 1]);
//         const multBy = pairs.map(num => num * multNum).join(" - ");
//         console.log(`${i+1}° pareja ${multBy}`);
//     }
// }
// showNumsWithArgs3([1,2,3,4,5,6], 12, 3);

// //------------------------------------------------------------------------------------------------------------------------------

// // Ejercicio 2
// // output: 0 1 1 2 3 5 8...
// const fibo = num => {
//     let fibonacci = [0, 1];
//     for(let i = 2; i < num; i++){
//         fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]);
//     }
//     console.log(fibonacci);
//     return fibonacci[num];
// };
// fibo(7);

// // Ejercicio 2.1
// const fibo1 = num => {
//     let fibonacci = [0, 1];
//     for(let i = 2; i < num; i++){
//         fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
//     }
//     fibonacci.forEach((item, index) => {
//         console.log(`Fibonacci de ${index} es ${item}`);
//     })
//     return fibonacci[num];
// };
// fibo1(7);

// // Ejercicio 2.2
// const fibo2 = num => {
//     let fibonacci = [0, 1];
//     for(let i = 2; i < num; i++){
//         fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
//     }
//     console.log(`La serie Fibonacci es la siguiente serie de números: ${fibonacci}`);
//     return fibonacci[num];
// };
// fibo2(7);

// // Ejercicio 2.3
// const fibo3 = num => {
//     let fibonacci = [0, 1];
//     for(let i = 2; i <= num; i++){
//         fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
//     }
//     fibonacci.forEach((item, index) => {
//         console.log(`Fibonacci de ${index} es ${item}`);
//     });
//     return fibonacci[num];
// };
// fibo3(10);

// //Ejercicio 2.4
// const fiboPyramid = num => {
//     let fibonacci = [0, 1];
//     console.log(`${fibonacci[0]}`);
//     for(let i = 2; i <= num; i++){
//         console.log(`${fibonacci}`);
//         fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
//         if(i === num){
//             console.log(`${fibonacci}`);
//         }
//     }
//     for(let i = fibonacci.length -1; i >= 0; i--){
//         fibonacci.pop();
//         console.log(`${fibonacci}`);
//     }
// };
// fiboPyramid(6);

// //------------------------------------------------------------------------------------------------------------------------------

// // Ejercicio 3:
// const codeScript = code => {
//     let digits = code.toString().split("");
//     let numbers = digits.map(Number);
//     numbers.forEach(item => {
//         numbers.push(numbers.shift());
//         console.log(numbers.join(" "));
//     });
// }
// codeScript(3712);

// // Ejercicio 3.1:
// const codeScript1 = (code1, code2) => {
//     let digits1 = code1.toString().split("");
//     let numbers1 = digits1.map(Number);

//     let digits2 = code2.toString().split("");
//     let numbers2 = digits2.map(Number);
    
//     numbers1.forEach(item => {
//         numbers1.push(numbers1.shift());
//         console.log(numbers1.join(" "));
//     });

//     numbers2.forEach(item => {
//         numbers2.push(numbers2.shift());
//         console.log(numbers2.join(" "));
//     });
// }
// codeScript1(3712, 1234);

// // Ejercicio 3.2:
// const codeScript2 = (code) => {
//     let digits = code.toString().split("");
//     let numbers = digits.map(Number);
//     const mult = numbers.map(item => item * 2);
//     mult.forEach(item => {
//         mult.push(mult.shift());
//         //console.log(mult.join(" "));
//     });
//     console.log("Antes del forEach", mult)
//     mult.forEach(item => {
//         if(item >= 10){
//             console.log("Entre al if", item);
//             item /= 2;
//             console.log("Dividi item", item, mult);
//             return item;
//         }
//         console.log("Fuera del forEach", item, mult);
//     });
// }
// codeScript2(3712);

// // Ejercicio 3.3:
// // Ahora, implementa en otra funcion aparte el decrypter(), que recibirá como argumento un código encriptado 
// // (y correspondientemente multiplicado en el apartado c3) y nos devuelva el código desencriptado.
// //---------------------------------------------------------------------NO ME SALIO
// const decrypter = (codeEncypt) => {
//     let digits = codeEncypt.toString().split("");
//     let numbers = digits.map(Number);
//     console.log("decrypter", numbers);
// }
// decrypter(9798);

// // Ejercicio 3.4:
// // Añade las dos funciones a la misma función padre, de forma que encripte y desencripte a la vez cuando termine de ejecutarse.
// // codeScript = (code1, code2) => {... codeDecrypt(code1Encrypt,code2Encrypt)}
// //---------------------------------------------------------------------NO ME SALIO

// // Ejercicio 3.5:
// const dictionary = {
//     0: ['A', 'K', 'T', 'F', 'O', 'Y'],
//     1: ['B', 'L', 'U', 'G', 'P', 'Z'],
//     2: ['C', 'M', 'V', 'H', 'Q', '.'],
//     3: ['D', 'N', 'W', 'I', 'R', ','],
//     4: ['E', 'Ñ', 'X', 'J', 'S', ' ']
// }
// const codeScript = (word1, word2, word3, word4) => {
//     console.log(`${dictionary[2][3]}${dictionary[3][3]}${dictionary[4][5]}${dictionary[3][2]}${dictionary[4][0]}`);
// }
// codeScript("HI  ", "WE  ", "NEED ", "HELP")


