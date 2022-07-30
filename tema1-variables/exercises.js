//Ejercicio 1:
const myName = 'Aldana';
console.log(myName);

//Ejercicio 2:
let myAge = 24;
console.log(myAge);

//Ejercicio 3:
const myData = ["Aldana", "Arcidiacono", 24];
console.log(myData);

//Ejercicio 4:
const myObject = {
    name: "Aldana",
    age: 24
}
console.log(myObject);

//Ejercicio 5:
for (let i = 0; i < myData.length; i++){
    console.log("Estos son mis datos: ",myData[i]);
}

//Ejercicio 6:
let numberA = 9;
let numberB = 9;
if (numberA < numberB) {
    console.log("Este número es más grande que 9");
} else if (numberA === numberB) {
    console.log("Los números son iguales");
} else {
    console.log("Este número es más pequeño que 9");
}

//Ejercicio 7:
const myNumbers = [1,2,3,4,5,6];
for (let numArray = 0; numArray < myNumbers.length; numArray++){
    if (numArray === 3) {
        console.log("We are in the middle of the loop!");
    }
    console.log(myNumbers[numArray]);
}

//Ejercicio 8:
const myInfo = [["Juan", 26], ["Catalina", 23], ["Aldana", 24], ["Agustin", 27]]
for (let data = 0; data < myInfo.length; data++){
    if (myInfo[data].includes("Aldana")){
        console.log("Encontramos tu data! " + myInfo[data]);
    }
}
