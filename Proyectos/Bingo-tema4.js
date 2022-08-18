// const getRandomNumber = () => {
//     const randomNumber = Math.floor(Math.random() * 30);
//     return randomNumber;
// };
// const randomNumber = getRandomNumber();

// const bingoCard = [
//     // First line
//     { number: randomNumber, matched: false },
//     { number: randomNumber, matched: false },
//     { number: randomNumber, matched: false },
//     { number: randomNumber, matched: false },
//     { number: randomNumber, matched: false },
//     // Second line
//     { number: randomNumber, matched: false },
//     { number: randomNumber, matched: false },
//     { number: randomNumber, matched: false },
//     { number: randomNumber, matched: false },
//     { number: randomNumber, matched: false },
//     // Third line
//     { number: randomNumber, matched: false },
//     { number: randomNumber, matched: false },
//     { number: randomNumber, matched: false },
//     { number: randomNumber, matched: false },
//     { number: randomNumber, matched: false },
//   ];

// console.table(bingoCard);

// Versión mínima
const getUserName = () => {
    const userName = prompt("Bienvenido a BINGO GAME!🤗🎲🎱 Cuál es tu nombre?");
    if (userName === null) {
        alert("Adios! Vuele pronto!");
    } else {
        alert(`Hola ${userName}! A continuación se iniciará el juego.`)
    }
    return userName;
}
const userName = getUserName();

// CAMBIAR NOMBRE (en plural)
const bingoCardNumbers = [];

const generateBingoCard = () => {
    while (bingoCardNumbers.length < 15) {
        const randomNumber = Math.floor(Math.random() * 30);
        // do {
        //     const randomNumber = Math.floor(Math.random() * 30);
        //     bingoCardNumbers.push({number: randomNumber, matched: false})
        // } while (bingoCardNumbers.length < 15 && !bingoCardNumbers.some(bingoCardNumber => bingoCardNumber.number === randomNumber));
        if (!bingoCardNumbers.some(bingoCardNumber => bingoCardNumber.number === randomNumber)) {
           bingoCardNumbers.push({number: randomNumber, matched: false})
        }
    }
}
generateBingoCard();
console.table(bingoCardNumbers);

const showBingoCard = () => {
    alert("A continuación le mostraremos el que será su tablero durante el juego");
    console.table(bingoCardNumbers);
    //const newBingoCard = confirm("Haz click en 'aceptar' si deseas jugar con este cartón, o en 'cancelar' si quieres un cartón diferente.")
}
showBingoCard();

const newTurn = () => {
    const roundNumber = Math.floor(Math.random() * 30);
    alert(`Bolilla número ${roundNumber}🎱!`);
}
newTurn();

const checkPlayersCard = () => {
    
}

const askNewTurn = () => {
    const playersNewTurn = confirm("Haz click en 'aceptar' si deseas sacar otra bolilla🎱. Haz click en 'cancelar' si quieres salir del juego.");
    if (!playersNewTurn) {
        alert(`Gracias por jugar con nosotros ${userName}! Vuelve pronto!🎲🎱👋🏻`);
    } else {
        newTurn();
    }
}
askNewTurn();

//////EJ de la clase:
const checkWord =() => {
    if (userWords.includes(word)){
        alert("Palabra esta repetida!")
    }
}
