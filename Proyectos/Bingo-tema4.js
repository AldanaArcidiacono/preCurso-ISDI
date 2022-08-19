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


const showBingoCard = (array) => {
    alert("A continuación te mostraremos tu tablero.");
    console.table(array);
    //const newBingoCard = confirm("Haz click en 'aceptar' si deseas jugar con este cartón, o en 'cancelar' si quieres un cartón diferente.")
}


const newTurn = () => {
    const roundNumber = Math.floor(Math.random() * 30);
    alert(`Ha salido la bolilla número ${roundNumber}🎱!`);
    return roundNumber;
}


const checkPlayersCard = (array, roundNumber) => {
    array.forEach(item => {
        if (roundNumber === item.number) {
            item.number = "X";
            item.matched = true;
        }
    });
}


const askNewTurn = (userName) => {
    let playersNewTurn = confirm("Haz click en 'aceptar' si deseas sacar otra bolilla🎱. Haz click en 'cancelar' si quieres salir del juego.");
    while (playersNewTurn) {
        newTurn();
        playersNewTurn = confirm("Haz click en 'aceptar' si deseas sacar otra bolilla🎱. Haz click en 'cancelar' si quieres salir del juego.");
    }
    alert(`Gracias por jugar con nosotros ${userName}! Vuelve pronto!🎲🎱👋🏻`);
}


// Main Function
const bingoGame = () => {
    const userName = getUserName();
    const bingoCardNumbers = [];
    generateBingoCard(bingoCardNumbers);
    showBingoCard(bingoCardNumbers);
    const roundNumber = newTurn();
    console.log(roundNumber);
    checkPlayersCard(bingoCardNumbers, roundNumber);
    console.table(bingoCardNumbers);
    askNewTurn(userName);
}
bingoGame();
