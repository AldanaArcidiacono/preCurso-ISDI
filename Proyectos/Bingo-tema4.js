// Versión mínima
const getUserName = () => {
    let userName = prompt("Bienvenido a BINGO GAME!🤗🎲🎱 Cuál es tu nombre?");
    while (userName === "" || userName === null) {
        userName = prompt("Por favor, escribe tu nombre para comenzar el juego.");
    }
    // if (userName === null) {
    //     alert("Adios! Vuele pronto!");
    //     return;
    //}
    alert(`Hola ${userName}! A continuación se iniciará el juego.`)
    return userName;
}


const generateBingoCard = (array) => {
    while (array.length < 5) {
        const randomNumber = Math.ceil(Math.random() * 5);
        if (!array.some(item => item.number === randomNumber)) {
           array.push({number: randomNumber, matched: false})
        }
    }
}


const showBingoCard = (userName, array) => {
    alert(`${userName}, hemos preparado tu tablero.`);
    console.table(array);
    // HACERLO CON DO...WHILE
    // const newBingoCard = confirm("Haz click en 'aceptar' si deseas jugar con este cartón, o en 'cancelar' si quieres un cartón diferente.");
    // if (!newBingoCard) {
    //     generateBingoCard(array); 
    // //AGREGAR anotherTurn como parámetro de newTurn si despues lo usa
    // } else {
    //     newTurn(array);
    // }
    //return newBingoCard;
}    


const newTurn = () => {
    const bingoBalls = [];
    let roundBall;
    do {
        roundBall = Math.ceil(Math.random() * 5);
    } while (bingoBalls.some(ball => ball === roundBall))
    bingoBalls.push(roundBall);
    alert(`Ha salido la bolilla número ${roundBall}🎱!`);
    console.log(`Ha salido la bolilla número ${roundBall}🎱!`);
    console.log(bingoBalls);
    return roundBall;
}


const checkPlayersCard = (array, roundBall) => {
    array.forEach(item => {
        if (roundBall === item.number) {
            item.number = "X";
            item.matched = true;
            }
    });
    console.table(array);
}


const checkIfWin = (array) => {
    if (array.some(item =>item.matched === false)){
        return false;
    } else {
        console.log("Felicitaciones, haz ganado!");
        return true;
    }
}


const askNewTurn = (array, userName) => {
    // Consultar con el jugadro si quiere seguir jugando
    // Si quiere seguir, sale otra bolilla y chequea si la tiene en el carton
    // Si no quiere seguir, lo saluda y termina el juego
    let playersNewTurn = confirm("Haz click en 'aceptar' si deseas sacar otra bolilla🎱. Haz click en 'cancelar' si quieres salir del juego.");
    let roundBall;
    do {
        roundBall = newTurn(); 
        checkPlayersCard(array, roundBall);
        playersNewTurn = confirm("Haz click en 'aceptar' si deseas sacar otra bolilla🎱. Haz click en 'cancelar' si quieres salir del juego.");
    } while (playersNewTurn && !checkIfWin(array));
    alert(`Gracias por jugar con nosotros ${userName}! Vuelve pronto!🎲🎱👋🏻`);
}



// Main Function
const bingoGame = () => {
    // COnsultar nombre de jugador
    const userName = getUserName();
    // Defino mi array "carton bingo"
    const bingoCardNumbers = [];
    // Genero el cartón de bingo con números random
    generateBingoCard(bingoCardNumbers);
    // Se lo muestro al jugador
    showBingoCard(userName, bingoCardNumbers);
    // Empieza el juego; muestro bolilla y la guardo
    const roundBall = newTurn();
    // Se fija si esta en el carton la bollilla y la tacha
    checkPlayersCard(bingoCardNumbers, roundBall);
    //
    askNewTurn(bingoCardNumbers, userName);
}
bingoGame();
