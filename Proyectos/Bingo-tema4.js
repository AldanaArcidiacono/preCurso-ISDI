const bingoCardNumbers = [[],[],[]];

const greetingAndGetName = () => {
    let userName = prompt("Bienvenido a BINGO GAME!🤗🎲🎱 Cuál es tu nombre?");
    while (userName === "" || userName === null) {
        userName = prompt("Por favor, escribe tu nombre para comenzar el juego.");
    }
    alert(`Hola ${userName}! A continuación se iniciará el juego.`)
    return userName;
}
const userName = greetingAndGetName();


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
        if (item.length < 5 && !wasAdded) {
            item.push({number: randomNumber, matched: false})
            wasAdded = true;
        }
    });
    return array;
}


const generateBingoCard = (array) => {
    let randomNumber;
    for(let i = 0; i < 15; i++){
        do {
            randomNumber = Math.ceil(Math.random() * 15);
        } while(isTheNumberInTheCard(array, randomNumber));
        addNumberToBingoCard(array, randomNumber)
    }
    return array;
}
generateBingoCard(bingoCardNumbers);


const showBingoCard = (userName, array) => {
    alert(`${userName}, hemos preparado tu tablero.`);
    console.table(array);
    // HACERLO CON DO...WHILE
    // let newBingoCard = confirm("Haz click en 'aceptar' si deseas jugar con este cartón, o en 'cancelar' si quieres un cartón diferente.");
    // ///////////// NO FUNCIONAAAA
    // do{
    //     generateBingoCard(array);
    // } while(!newBingoCard);
    // if (newBingoCard) {
    //     generateRoundBall();
    // } 
    // return newBingoCard;
}    
showBingoCard(userName, bingoCardNumbers);


// Si pongo bingoBalls en global anda bien. Si lo paso como parametro no. En parámetro iría como array o dif?
const bingoBalls = [];
const generateRoundBall = () => {
    let roundBall;
    do {
        roundBall = Math.ceil(Math.random() * 15);
    } while (bingoBalls.some(ball => ball === roundBall))
    bingoBalls.push(roundBall);
    alert(`Ha salido la bolilla número ${roundBall}🎱!`);
    console.log(`Ha salido la bolilla número ${roundBall}🎱!`);
    return roundBall;
}
const roundBall = generateRoundBall();


const checkPlayersCard = (array, roundBall) => {
    array.forEach(item => {
        if (roundBall === item.number) {
            item.number = "X";
            item.matched = true;
            }
    });
    console.table(array);
}
checkPlayersCard(bingoCardNumbers, roundBall);


// const isTheNumberInTheCard = (array, randomNumber) => {
//     let foundIt = false;
//     array.forEach(item => item.forEach(element => {
//         if (element.number === randomNumber) {
//             foundIt = true;
//         }
//     })) 
//     return foundIt;
// }


const checkIfBingo = (array) => {
    if (array.some(item =>item.matched === false)){
        return false;
    } else {
        congrats();
        return true;
    }
}
checkIfBingo(bingoCardNumbers);


const checkIfLine = () => {
    // Para saber si tengo linea, tengo que haber almacenado mi array en 3 sub arrays
}


const askNewTurn = (array, userName) => {
    // Consultar con el jugadro si quiere seguir jugando
    // Si quiere seguir, sale otra bolilla y chequea si la tiene en el carton
    // Si no quiere seguir, lo saluda y termina el juego
    let playersNewTurn = confirm("Haz click en 'aceptar' si deseas sacar otra bolilla🎱. Haz click en 'cancelar' si quieres salir del juego.");
    let roundBall;
    do {
        roundBall = generateRoundBall(); 
        checkPlayersCard(array, roundBall);
        playersNewTurn = confirm("Haz click en 'aceptar' si deseas sacar otra bolilla🎱. Haz click en 'cancelar' si quieres salir del juego.");
    } while (playersNewTurn && !checkIfBingo(array));
    //alert(`Gracias por jugar con nosotros ${userName}! Vuelve pronto!🎲🎱👋🏻`);
    goodbye(userName);
}
askNewTurn(bingoCardNumbers, userName);


const congrats = () => {
    alert(`Felicitaciones! Has ganado en ${bingoBalls.length} rondas!🎱`);
}


const playAgain = (userName) => {
    const newGame = confirm("Haz click en 'aceptar' si deseas jugar de nuevo. De lo contrario, haz click en 'cancelar'");
    while (newGame) {
        greetingAndGetName();
    }
    goodbye(userName);
}
playAgain(userName);


const goodbye = (userName) => {
    alert(`Gracias por jugar a BINGO GAME ${userName}!🤗🎲🎱 Nos vemos la próxima!👋🏻`);
}


// Main Function
// const bingoGame = () => {}
// bingoGame();
