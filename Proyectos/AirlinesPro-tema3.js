// Airlines prev:
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

const getUserName = () => {
    const userName = prompt("Bienvenido a ISDI Coders Airlines!✈️🛩 Aquí podrás ver la información de nuestros vuelos! Cuál es tu nombre?");
    if (userName === null) {
        alert("Hasta pronto!");
    } else {
        alert(`Hola ${userName}! A continuación te mostraremos nuestros vuelos disponibles.`)
    }
    return userName;
}
const userName = getUserName(); ////////////////////////////////// LA DECLARE ACÁ PARA QUE ME FUNCIONE ABAJO. REVISAR

const infoFlights = () => {
    const scaleInfo = [];
    flights.forEach(flight => {
        let haveScale;
        if (flight.scale) {
            haveScale = "realiza escalas."
        } else {
            haveScale = "no realiza ninguna escala."
        }
        scaleInfo.push(`El vuelo con origen ${flight.from}, y destino ${flight.to}, tiene un coste de €${flight.cost} y ${haveScale}\n`)
    });
    alert(scaleInfo);
}

const averageCost = () => {
    let flightCost = 0;
    for (flight of flights) {
        flightCost += flight.cost;
    }
    flightCost /= flights.length;
    flightCost = flightCost.toFixed(2);
    alert(`El coste medio de nuestros vuelos es de: ${flightCost} euros`)
    return flightCost
} 

const flightsWithScales = () => {
    let scales = 0;
    flights.forEach(flight => {
        if (flight.scale) {
            scales++
        }
    });
    
    alert(`Hoy tenemos ${scales} vuelos que efectuan escalas.`);
}

const lastDestinations = () => {
    let destinations = [];
    for (i = flights.length - 5; i < flights.length; i++){
        destinations.push(`* ${flights[i].to}\n\r`);
   }
    alert(`Estos son los últimos vuelos programados para hoy: \n\r ${destinations}`);
}

// Main function
const airlinesProgram = () => {
    infoFlights();
    averageCost();
    flightsWithScales();
    lastDestinations();

    alert(`Gracias por usar nuestro programa ${userName}! Vuelve pronto!✈️🛩`);
}
airlinesProgram();

// AIRLINES PRO:
// El programa pedirá al usuario si es ADMIN/USER
const categoryMember = () => {
    let adminOrUser = prompt("Para continuar, dinos cuál es tu tipo de usuario: ADMIN o USER").toUpperCase();
    if (adminOrUser === null) {
        alert(`Gracias por usar nuestro programa ${userName}! Vuelve pronto!✈️🛩`);
    }
    while (adminOrUser !== "ADMIN" && adminOrUser !== "USER") {
        adminOrUser = prompt(`Perdona ${userName}, no te hemos entendido. Por favor escribe tu tipo de usuario: ADMIN o USER`).toUpperCase();
    }
    return adminOrUser;
}
categoryMember();

// Si eres ADMIN podrás crear, más vuelos, pidiendo la información por prompt(), sin poder pasar de 15 vuelos, 
const categoryAdmin = () => {
    
}
// si se intenta introducir uno más, saltará un alert().

// Si eres USER podrás buscar por precio. Cuando el usuario ponga el precio, debera mostrar los vuelos que tengan ese precio o mas baratos.


