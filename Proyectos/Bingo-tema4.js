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

const generateBingoCard = (array) => {
    while (array.length < 15) {
        const randomNumber = Math.floor(Math.random() * 30);
        // do {
        //     const randomNumber = Math.floor(Math.random() * 30);
        //     array.push({number: randomNumber, matched: false})
        // } while (array.length < 15 && !array.some(item => item.number === randomNumber));
        if (!array.some(item => item.number === randomNumber)) {
           array.push({number: randomNumber, matched: false})
        }
    }
}
generateBingoCard(bingoCardNumbers);

const showBingoCard = (array) => {
    alert("A continuación le mostraremos el que será su tablero durante el juego");
    console.table(array);
    //const newBingoCard = confirm("Haz click en 'aceptar' si deseas jugar con este cartón, o en 'cancelar' si quieres un cartón diferente.")
}
showBingoCard(bingoCardNumbers);

const newTurn = () => {
    const roundNumber = Math.floor(Math.random() * 30);
    alert(`Ha salido la bolilla número ${roundNumber}🎱!`);
    return roundNumber;
}
const roundNumber = newTurn();
console.log(roundNumber);

const checkPlayersCard = (array, roundNumber) => {
    if (array.some(item => item.number === roundNumber)) {
    //if (array.includes(roundNumber)) {    
        item.number = "X";
        item.matched = true;
    };
}
checkPlayersCard(bingoCardNumbers, roundNumber);

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
