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
const userName = getUserName();

const infoFlights = () => {
    const scaleInfo = [];
    flights.forEach(flight => {
        let haveScale;
        if (flight.scale) {
            haveScale = "realiza escalas."
        } else {
            haveScale = "no realiza escalas."
        }
        scaleInfo.push(`\nVuelo N°${flight.id}, ${flight.from} ---> ${flight.to}, €${flight.cost} y ${haveScale}`)
    });
    alert(scaleInfo);
}
infoFlights();

const averageCost = () => {
    let flightCost = 0;
    for (flight of flights) {
        flightCost += flight.cost;
    }
    flightCost /= flights.length;
    flightCost = flightCost.toFixed(2);
    alert(`El coste medio de nuestros vuelos es de: €${flightCost}`)
    return flightCost
} 
averageCost();

const flightsWithScales = () => {
    let scales = 0;
    flights.forEach(flight => {
        if (flight.scale) {
            scales++
        }
    });
    
    alert(`Hoy tenemos ${scales} vuelos que efectuan escalas.`);
}
flightsWithScales();

const lastDestinations = () => {
    let destinations = [];
    for (i = flights.length - 5; i < flights.length; i++){
        destinations.push(`\n\r* ${flights[i].to}`);
   }
    alert(`Estos son los últimos vuelos programados para hoy: \n ${destinations}`);
}
lastDestinations();

//------------------------------------------------------------AIRLINES PRO-----------------------------------------------------------------------
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

const role = categoryMember();

if (role === "ADMIN") {

    const askAdminAction = () => {
        let askForAction = prompt(`${userName}, deseas crear o eliminar un vuelo? Escribe 'crear' o 'eliminar'`).toLowerCase();
        if (askForAction === null) {
            alert(`Gracias por usar nuestro programa ${userName}! Vuelve pronto!✈️🛩`);
        } else if (askForAction !== "crear" && askForAction !== "eliminar") {
            askForAction = prompt(`Perdona ${userName}, no te hemos entendido. Por favor escribe que deseas hacer: 'crear' o 'eliminar'`).toLowerCase();
        } else {
            return askForAction;
        }
    }
    const action = askAdminAction();
    
    // Si eres ADMIN podrás crear, más vuelos, pidiendo la información por prompt(),  
    const adminAction = () => {
        
        if (action === "crear"){
            const newFlight = {};
            newFlight.id = flights.length;
            newFlight.to = prompt("Cuál es el destino del vuelo?");
            newFlight.from = prompt("Desde dónde parte el vuelo?");
            newFlight.cost = +prompt("Cuál es el costo del vuelo?");
            newFlight.scale = prompt("Realiza escalas? Escribe 'true' si las realiza o 'false' de lo contrario.");
            flights.push(newFlight);
            infoFlights();
        
        // Poderas eliminar vuelos mediante el ID.
        } else if (action === "eliminar"){
            alert("A continuación te mostraremos los vuelos disponibles. Para eliminar un vuelo deberás escribir su número más adelante.")
            infoFlights();
            const deletedFlight = +prompt("Inserta el número del vuelo que deseas eliminar.");
            flights.splice(deletedFlight, 1);
            infoFlights();
        }
    }
    adminAction();

    // sin poder pasar de 15 vuelos, si se intenta introducir uno más, saltará un alert().
    const newAdminAction = () => {
        const newAction = confirm("Deseas crear o eliminar otro vuelo? Toca aceptar si lo deseas o cancelar de lo contrario");
        if (!newAction) {
            alert(`Gracias por usar nuestro programa ${userName}! Vuelve pronto!✈️🛩`);
        } else if (newAction && flights.length >= 14) {
            alert("No se puede crear un nuevo vuelo, ya que actualmente hay demasiados.");
            askAdminAction();
        }
        while (newAction && flights.length <= 14){
            adminAction();
        }
    }
    newAdminAction();

} else if (categoryMember === "USER") {
// Si eres USER podrás buscar por precio. Cuando el usuario ponga el precio, debera mostrar los vuelos que tengan ese precio o mas baratos.
    const userAction = () => {

    }
}


// Main function
const airlinesProgram = () => {

    infoFlights();
    averageCost();
    flightsWithScales();
    lastDestinations();
    const adminOrUser = categoryMember();

    if (adminOrUser === "ADMIN"){
        askAdminAction();
    }

    alert(`Gracias por usar nuestro programa ${userName}! Vuelve pronto!✈️🛩`);
}
airlinesProgram();
