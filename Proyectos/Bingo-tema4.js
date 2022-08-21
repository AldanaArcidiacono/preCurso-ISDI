// Versión mínima
const getUserName = () => {
    let userName = prompt("Bienvenido a BINGO GAME!🤗🎲🎱 Cuál es tu nombre?");
    while (userName === "" || userName === null) {
        userName = prompt("Por favor, escribe tu nombre para comenzar el juego.");
    }
    // if (userName === null) {
    //     alert("Adios! Vuele pronto!");
    //     // Cuando le da a cancelar, el juego sigue.
    //     return;
    alert(`Hola ${userName}! A continuación se iniciará el juego.`)
    return userName;
}


const generateBingoCard = (array) => {
    while (array.length < 15) {
        const randomNumber = Math.ceil(Math.random() * 30);
        if (!array.some(item => item.number === randomNumber)) {
           array.push({number: randomNumber, matched: false})
        }
    }
}


const showBingoCard = (array) => {
    alert("A continuación te mostraremos tu tablero.");
    console.table(array);
    // const newBingoCard = confirm("Haz click en 'aceptar' si deseas jugar con este cartón, o en 'cancelar' si quieres un cartón diferente.");
    // if (newBingoCard) {
    //     newTurn(array);
    //     AGREGAR anotherTurn como parámetro de newTurn si despues lo usa
    // } else {
    //     generateBingoCard(array); 
    // }
}    


const newTurn = (array) => {
    const roundNumber = Math.ceil(Math.random() * 30);
    alert(`Ha salido la bolilla número ${roundNumber}🎱!`);
    // hacer un loop (do/while) para que se repits cunado quiera jugar
    console.log(roundNumber);
    console.log("En newTurn", array);
    // do {
    //     checkPlayersCard(array, roundNumber);
    // } while (anotherTurn); AGREGAR anotherTurn como parámetro
    return roundNumber;
}


const checkPlayersCard = (array, roundNumber) => {
   // do {
        array.forEach(item => {
        if (roundNumber === item.number) {
            item.number = "X";
            item.matched = true;
        }
    });
    //} while (anotherTurn) AGREGAR anotherTurn como parámetro
    console.log("En checkPlayer", array);
    console.table(array);
}


const askNewTurn = (array, userName) => {
    let playersNewTurn = confirm("Haz click en 'aceptar' si deseas sacar otra bolilla🎱. Haz click en 'cancelar' si quieres salir del juego.");
    while (playersNewTurn) {
        newTurn(array); 
        //AGREGAR anotherTurn como parámetro de newTurn si despues lo usa
        playersNewTurn = confirm("Haz click en 'aceptar' si deseas sacar otra bolilla🎱. Haz click en 'cancelar' si quieres salir del juego.");
    }
    alert(`Gracias por jugar con nosotros ${userName}! Vuelve pronto!🎲🎱👋🏻`);
    return playersNewTurn;
}


// Main Function
const bingoGame = () => {
    const userName = getUserName();
    const bingoCardNumbers = [];
    generateBingoCard(bingoCardNumbers);
    showBingoCard(bingoCardNumbers);
    const roundNumber = newTurn(bingoCardNumbers);
    checkPlayersCard(bingoCardNumbers, roundNumber);
    askNewTurn(bingoCardNumbers, userName);
}
bingoGame();
