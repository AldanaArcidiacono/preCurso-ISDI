// Estos vuelos estarán declarados de manera global:
const flights = [
    { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
    { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
    { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
    { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
    { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
    { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
    { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
    { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
    { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
    { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
  ];

// Se preguntará por el nombre de usuario y dará la bienvenida.
const getUserName = () => {
    const userName = prompt("Bienvenido a Airlines! Cuál es tu nombre?");
    if (userName === null) {
        alert("Hasta pronto!");
    } else {
        alert(`Hola ${userName}! Gracias por usar nuestro programa!`)
    }
}
getUserName();

// El usuario visualizará todos los vuelos disponibles de una forma amigable: 
// Podrá ver cuantos vuelos efectúan escalas.
const scales = () => {
    //let hasScale = "";
    flights.forEach((flights) => {
        if (flights.scale) {
            flights.scale = "realiza escalas."
        } else {
            flights.scale = "no realiza ninguna escala."
        }
        console.log(`El vuelo con origen: ${flights.from}, y destino: ${flights.to}, tiene un coste de €${flights.cost} y ${flights.scale}`)
    });
}
scales();

// El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de 90€ y no realiza ninguna escala
const availableFlights = confirm(`El vuelo con origen: ${flights[5].from}, y destino: ${flights[5].to}, tiene un coste de €${flights[5].cost} y escalas ${flights[5].scale}`);

// El usuario verá el coste medio de los vuelos.

// Y, sabiendo que los ultimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.
const lastDestinations = alert(`Los últimos vuelos programados para hoy son hacia los destinos:
${flights[9].to}, ${flights[8].to}, ${flights[7].to}, ${flights[6].to} y ${flights[5].to}`)

// This is a example of array of objects... each position of array contains one object...
