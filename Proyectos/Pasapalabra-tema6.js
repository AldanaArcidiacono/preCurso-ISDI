let startingPlayerScore;

// Auxiliary functions
const greetingAndGetName = () => {
    let userName = prompt("Bienvenido a Pasapalabra Game!🎮🎡📚 Cuál es tu nombre?","Martha");
    while (userName === "" || userName === null) {
        userName = prompt("Por favor, escribe tu nombre para comenzar el juego.");
    }
    // Explicar aquí cómo funcionan los puntos, una vez lo tenga definido.
    alert(`Hola ${userName}! A continuación se iniciará el juego, pero antes te contaremos cómo funciona.`);
    return userName;
}

// Esto debería aprecer al final. Acomodar puntos una vez este definido.
const storingPlayerNames = (userName, currentPlayerScore) => {
    let playerNames = [
        {name: "Donna", score: `${Math.floor(Math.random() * (84 - 1) + 1)}`},
        {name: "Clara", score: `${Math.floor(Math.random() * (84 - 1) + 1)}`},
        {name: "Amy", score: `${Math.floor(Math.random() * (84 - 1) + 1)}`},
        {name: `${userName}`, score: `${currentPlayerScore}`}
    ];
    playerNames.sort((a , b) => b.score - a.score);
    alert(`Este es el ranking de nuestros usuarios:\n${playerNames[0].name}: ${playerNames[0].score} puntos\n${playerNames[1].name}: ${playerNames[1].score} puntos\n${playerNames[2].name}: ${playerNames[2].score} puntos\n${playerNames[3].name}: ${playerNames[3].score} puntos`);
}

const playAgain = (userName) => {
    const newGame = confirm("Haz click en 'aceptar' si deseas jugar de nuevo🎲🎱. De lo contrario, haz click en 'cancelar'");
    if (newGame){
        alphabeticalGame();
    } else {
        alert(`Gracias por jugar a Pasapalabra Game! ${userName}!🤗🎡📚 Nos vemos la próxima!👋🏻`);
    }
}

// Main function:
const alphabeticalGame = () => {};
alphabeticalGame();