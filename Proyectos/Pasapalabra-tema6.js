// Alphabetical Game Questions:
const questions = [
    {letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",},
    {letter: "b", answer: "bingo", status: 0, question:"CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",},
    {letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé",},
    {letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",},
    {letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",},
    {letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",},
    {letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",},
    {letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento",},
    {letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano",},
    {letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",},
    {letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria",},
    {letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo",},
    {letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",},
    {letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia",},
    {letter: "ñ", answer: "señal", status: 0,  question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",},
    {letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",},
    {letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",},
    {letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",},
    {letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},
    {letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático",},
    {letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",},
    {letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",},
    {letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",},
    {letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",},
    {letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",},
    {letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",},
    {letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",},
  ];

// Auxiliary functions
let startingPlayerScore;
let wantToPlay = true;
let wrongAnswer = 0;
let correctAnswer = 0;

const greetingAndGetName = () => {
    let userName = prompt("Bienvenido a Pasapalabra Game!🎮🎡📚 Cuál es tu nombre?","Martha");
    while (userName === "" || userName === null) {
        userName = prompt("Por favor, escribe tu nombre para comenzar el juego.");
    }
    // Explicar aquí cómo funcionan los puntos, una vez lo tenga definido. Indicar cuanto tiempo tiene para respodner el rosco
    alert(`Hola ${userName}! A continuación se iniciará el juego, pero antes te contaremos cómo funciona.\nCada ronda, se te hará una pregunta con cada una de las letras del abecedario.\nSi no sabes alguna de ellas, puedes escribir "pasapalabra" o darle a "aceptar" y responderla en la siguiente ronda.\n Tendrás  segundos para completar el juego.\r\n Suerte!🎡🍀`);
    return userName;
}

// // TIMER PARA EL JUEGO 
// const timeToAnswer = () => {};
// // EJEMPLO:
// setTimeout(function(){
//     console.log("Hola Mundo");
// }, 2000);
// console.log("setTimeout() Ejemplo...");

const abcQuestions = (array, userName) => {
    for(let i = 0; i < array.length; i++){
        if(array[i].status === 0 || array[i].status === 1){
            let userAnswer = prompt(`${array[i].question}`);
            if(userAnswer === null || userAnswer.toLowerCase().trim() === "end"){
                wantToPlay = false;
                quitGame(userName);
                return;
            } else {
                userAnswer = userAnswer.toLowerCase().trim();
            }
            verifyAnswer(array, i, userAnswer);
        }
    }
}

const verifyAnswer = (array, i, userAnswer) => {
    switch (userAnswer) {
        case "pasapalabra":
            array[i].status = 1;
            console.log("Pasapalabra", userAnswer);
            //alert("Haz pasado palabra");
        break;
        case "":
            array[i].status = 1;
            console.log("Pasapalabra", "de string vacio", userAnswer);
        break;
        case array[i].answer:
            array[i].status = 2;
            correctAnswer++;
            console.log("Respuesta correcta", userAnswer, correctAnswer);
        break;
        default:
            array[i].status = 3;
            wrongAnswer++;
            console.log("Respuesta INCOrrecta", userAnswer, wrongAnswer);
    }
}

const isPasapalabra = (array) => {
    return array.some(item => item.status === 1);
}

const playerScores = (userName, correctAnswer) => {
    let playerNames = [
        {name: "Donna", score: `${Math.floor(Math.random() * (26 - 1) + 1)}`},
        {name: "Clara", score: `${Math.floor(Math.random() * (26 - 1) + 1)}`},
        {name: "Amy", score: `${Math.floor(Math.random() * (26 - 1) + 1)}`},
        {name: "Rory", score: `${Math.floor(Math.random() * (26 - 1) + 1)}`},
        {name: "Jack", score: `${Math.floor(Math.random() * (26 - 1) + 1)}`},
        {name: `${userName}`, score: `${correctAnswer}`}
    ];
    playerNames.sort((a , b) => b.score - a.score);
    let scoringPosition = [];
    for (let i = 0; i < playerNames.length; i++) {
        scoringPosition.push(`\r\n${playerNames[i].name}: ${playerNames[i].score} palabras correctas.`);
    }
    alert(`Este es el ranking de nuestros usuarios:\r\n${scoringPosition}`);
}

const quitGame = (userName) => {
    alert(`Gracias por jugar a Pasapalabra Game ${userName}!🤗🎡📚\nHas respondido ${correctAnswer} palabras correctamente.\nNos vemos la próxima!👋🏻`);
    return;
}

// Main function:
const alphabeticalGame = () => {
    const userName = greetingAndGetName();
    do {
        abcQuestions(questions, userName);
    } while (isPasapalabra(questions) && wantToPlay);
    if (wantToPlay){
        alert(`${userName}, has terminado el juego!🤗🎡📚\nHas respondido ${correctAnswer} palabras correctamente y te equivocaste en ${wrongAnswer}`);
        playerScores(userName, correctAnswer);
    }
};
alphabeticalGame();