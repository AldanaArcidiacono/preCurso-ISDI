//Ejercicio 1
const myFunc = (myName) => {
    console.log("Hello " + myName)
};
myFunc("Aldana");

// Ejercicio 2 y 3
const myFunc2 = (myName, myAge) => {
    return("Hello " + myName + " you're " + myAge + " years old");
};
//myFunc2("Aldana",24);

const myFunction = myFunc2();
myFunc2("Aldana ",24);

// Ejercicio 5
const myName = (string) => {
    return(string);
} 
const myAge = (num) => {
    return(num);
}

const varName = myName();
const varAge = myAge();

myName("Aldana ") + myAge(24);
// Ejercicio 5.1
myName("Aldana ") + (myAge(24) + 5).toString();

// Ejercicio 6---------------------------------------Ejercicio sin sentido aparente
myName(varName) + myAge(varAge);

// Ejercicio 7
// const myInfo = (string, num) => {
    
//     const varName2 = myName(string);
//     const varAge2 = myAge(num);

//     return varName2 + varAge2;
// }
// myInfo("Aldana ",24);

// Ejercicio 8---------------------------------------No tengo idea que quiere que haga
const myInfo = (string, num) => {
    const randomNumber = (num) => {
        Math.floor(Math.random() * 2);
        console.log(randomNumber);
    }
    const varName2 = myName(string);
    const varAge2 = myAge(num);

    return varName2 + varAge2;
}
myInfo("Aldana ", 3);


