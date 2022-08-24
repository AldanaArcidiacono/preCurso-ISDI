let didLine = false;
const lengthOfLine = 5;
const lengthOfCard = 15;
let currentPlayerScore = 100;

let playerNames = [
    {name: "Donna", score: 87},
    {name: "Amy", score: 35},
    {name: "Rose", score: 6}
];
console.log(playerNames);

const greetingAndGetName = () => {
    let userName = prompt("Bienvenido a BINGO GAME!🤗🎲🎱 Cuál es tu nombre?");
    while (userName === "" || userName === null) {
        userName = prompt("Por favor, escribe tu nombre para comenzar el juego.");
    }
    alert(`Hola ${userName}! A continuación se iniciará el juego.`)
    return userName;
}

// NO FUNCIONA
const storePlayerNames = (userName) => {
    if (userName !== playerNames.name){
        playerNames.push({name: userName, score: currentPlayerScore})
    }
}
console.log(playerNames);

const scoringSystem = () => {
    alert("Al comenzar el Bingo, tendrás 100 puntos. Sin embargo, cada ronda que pases sin haber ganado el juego, se te restará 1 punto.\nCuantas menos rondas uses, más puntos obrendrás")
}


const isTheNumberInTheCard = (array, randomNumber) => {
    let foundIt = false;
    array.forEach(item => item.forEach(element => {
        if (element.number === randomNumber) {
            foundIt = true;
        }
    })) 
    return foundIt;
}

const addNumberToBingoCard = (array, randomNumber) => {
    let wasAdded = false;
    array.forEach(item => {
        if (item.length < lengthOfLine && !wasAdded) {
            item.push({number: randomNumber, matched: false})
            wasAdded = true;
        }
    });
    return array;
}

const generateBingoCard = () => {
    let bingoCardEmpty = [[],[],[]];
    let randomNumber;
    for(let i = 0; i < lengthOfCard; i++){
        do {
            randomNumber = Math.ceil(Math.random() * (99 - 1) + 1);
        } while(isTheNumberInTheCard(bingoCardEmpty, randomNumber));
        bingoCardEmpty = addNumberToBingoCard(bingoCardEmpty, randomNumber);
    }
    showBingoCard(bingoCardEmpty)
    return bingoCardEmpty;
}

const showBingoCard = (array) => {
    console.log("-----------------------------------------------------");
    console.log(array[0][0].number + " " + array[0][1].number + " " + array[0][2].number + " " + array[0][3].number + " " + array[0][4].number);
    console.log(array[1][0].number + " " + array[1][1].number + " " + array[1][2].number + " " + array[1][3].number + " " + array[1][4].number);
    console.log(array[2][0].number + " " + array[2][1].number + " " + array[2][2].number + " " + array[2][3].number + " " + array[2][4].number);
}    

const chooseBingoCard = (array) => {
    let userLikesBingoCard = confirm("Haz click en 'aceptar' si deseas jugar con este cartón, o en 'cancelar' si quieres un cartón diferente.");
    if (userLikesBingoCard){
        return array;
    } 
    let myBingoCard;
    do {
        myBingoCard = generateBingoCard();
        userLikesBingoCard = confirm("Haz click en 'aceptar' si deseas jugar con este cartón, o en 'cancelar' si quieres un cartón diferente.");
    } while (!userLikesBingoCard);
    return myBingoCard;
}

const bingoBalls = [];
const generateRoundBall = () => {
    let roundBall;
    do {
        roundBall = Math.ceil(Math.random() * (99 - 1) + 1);
    } while (bingoBalls.some(ball => ball === roundBall))
    bingoBalls.push(roundBall);
    alert(`Ha salido la bolilla número ${roundBall}🎱!`);
    console.log(`Ha salido la bolilla número ${roundBall}🎱!`);
    return roundBall;
}

const checkPlayersCard = (userName, array, roundBall) => {
    array.forEach(item => item.forEach(element => {
        if (element.number === roundBall) {
            element.number = "X";
            element.matched = true;
            }
    }));
    let playersLine = false;
    if (!playersLine) {
        playersLine = checkIfLine(userName, array);
    }
    showBingoCard(array);
    return array;
}

const checkIfBingo = (array) => {
    if (array.some(item =>item.some(element => !element.matched))){
        // checkIfLine(userName, array);
        return false;
    } else {
        alert(`Felicitaciones! Has ganado en ${bingoBalls.length} rondas!🎱`);
        return true;
    }
}

const checkIfLine = (userName, array) => {
    if (array.some(item => !item.some(element => !element.matched))) {
    didLine = true;
    alert(`${userName} haz hecho línea!🎱`);
    console.log(`${userName} haz hecho línea!🎱`);
    return didLine;
    }
    return didLine;
};

const askNewTurn = (userName, array) => {
    let playersNewTurn = true;
    let roundBall;
    while (playersNewTurn && !checkIfBingo(array)) {
        playersNewTurn = confirm("Haz click en 'aceptar' si deseas sacar una bolilla🎱. Haz click en 'cancelar' si quieres salir del juego.");
        if (playersNewTurn){
            roundBall = generateRoundBall();
            array = checkPlayersCard(userName, array, roundBall);
        }
    }
    if (!playersNewTurn){
       alert(`Gracias por jugar a BINGO GAME ${userName}!🤗🎲🎱 Nos vemos la próxima!👋🏻`);
    }
}

const playAgain = (userName) => {
    const newGame = confirm("Haz click en 'aceptar' si deseas jugar de nuevo. De lo contrario, haz click en 'cancelar'");
    if (newGame){
        bingoGame();
    } else {
        alert(`Gracias por jugar a BINGO GAME ${userName}!🤗🎲🎱 Nos vemos la próxima!👋🏻`);
    }
}

// Main Function
const bingoGame = () => {
    
    const userName = greetingAndGetName();
    const bingoCardNumbers = generateBingoCard();
    let userBingoCard = chooseBingoCard(bingoCardNumbers);
    askNewTurn(userName, userBingoCard);
    playAgain(userName);
}
bingoGame();
