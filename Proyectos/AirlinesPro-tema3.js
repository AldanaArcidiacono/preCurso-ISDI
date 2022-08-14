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

const infoFlights = (array) => {
    const scaleInfo = [];
    array.forEach(flight => {
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
        destinations.push(`\n\r* ${flights[i].to}`);
   }
    alert(`Estos son los últimos vuelos programados para hoy: \n ${destinations}`);
}

//------------------------------------------------------------AIRLINES PRO-----------------------------------------------------------------------
// El programa pedirá al usuario si es ADMIN/USER
const categoryMember = (userName) => {
    let adminOrUser = prompt("Para continuar, escribe cuál es tu tipo de usuario: 'ADMIN' o 'USER'. Si quieres salir presiona 'cancelar'").toUpperCase().trim();
    if (adminOrUser === null) {
        alert(`Gracias por usar nuestro programa ${userName}! Vuelve pronto!✈️🛩`);
    }
    while (adminOrUser !== "ADMIN" && adminOrUser !== "USER") {
        adminOrUser = prompt(`Perdona ${userName}, no te hemos entendido. Por favor escribe tu tipo de usuario: 'ADMIN' o 'USER'`).toUpperCase().trim();
    }
    return adminOrUser;
}
//const role = categoryMember();

const askAdminAction = (userName, array) => {
    const askForAction = confirm(`${userName}, selecciona 'aceptar' para crear un vuelo, o 'cancelar' para eliminar un vuelo`);
    if (askForAction) {
        createFlights(array);
    } else {
        deleteFlights(array);
    }
}

const canCreate = (array) => {
    if (array.length <= 15) return true;
    return false;
}

const canDelete = (array) => {
    if (array.length > 0) return true;
    return false;
}

//Funcion que diga que no puede crear y le pregunte si quiere eliminar
const onlyDeleteFlights = (userName, array) => {
    alert("La cantidad máxima de vuelos es 15. Ya no puedes crear más.");
    const wantToDelete = confirm("Presiona 'aceptar' si deseas eliminar un vuelo o 'cancelar' de lo contrario.");
    if (wantToDelete){
        deleteFlights(array);
    } else {
        checkAdminAction(userName, array);
    }
}

const onlyCreateFlights = (userName, array) => {
    alert("Ya no hay más vuelos para borrar.");
    const wantToCreate = confirm("Presiona 'aceptar' si deseas crear un nuevo vuelo o 'cancelar' de lo contrario.");
    if (wantToCreate){
        createFlights(array);
    } else {
        checkAdminAction(userName);
    }
}

const checkAdminAction = (userName, array) => {
    console.log("Entro en checkAdminAction");
    const doAdminAction = confirm("Presiona 'aceptar' si deseas crear o eliminar vuelos \n Presiona 'cancelar' para salir del programa.");
    if (!doAdminAction) {
        alert(`Gracias por usar nuestro programa ${userName}! Vuelve pronto!✈️🛩`);
        return false;
    }
    console.log("No entro al primer if");
    let ableToCreate = canCreate(array);
    let ableToDelete = canDelete(array);
    
    if (!ableToCreate) {
        onlyDeleteFlights(userName, array); 
    } else if (!ableToDelete) {
        onlyCreateFlights(userName, array);
        } else {
            askAdminAction(userName, array);
        }
    return true;
} 

// Si eres ADMIN podrás crear, más vuelos, pidiendo la información por prompt(),
const createFlights = (array) => {
    const newFlight = {};
    newFlight.id = array.length;
    newFlight.to = prompt("Cuál es el destino del vuelo?");
    newFlight.from = prompt("Desde dónde parte el vuelo?");
    newFlight.cost = +prompt("Cuál es el costo del vuelo?");
    newFlight.scale = confirm("Presiona 'aceptar' si el vuelo tiene escalas o 'cancelar' si no realiza escalas.");
    array.push(newFlight);
    infoFlights(array);
}

// Poderas eliminar vuelos mediante el ID.
const deleteFlights = (array) => {
    alert("A continuación te mostraremos los vuelos disponibles. Luego te pediremos que insertes el número del vuelo que desees eliminar.")
    infoFlights(array);
    const deletedFlight = +prompt("Inserta el número del vuelo que deseas eliminar.");
    array.splice(deletedFlight, 1);
    alert(`El vuelo N°${deletedFlight} ha sido eliminado`);
}

// Si eres USER podrás buscar por precio. Cuando el usuario ponga el precio, debera mostrar los vuelos que tengan ese precio o mas baratos.
const userAction = (array) => {
    const askCost = +prompt(`${userName}, ingresa tu presupuesto para el vuelo.`);
    const priceOfFlights = [];
    array.forEach(flight => {
        if (flight.cost <= askCost) {
            priceOfFlights.push(`\nEl vuelo N°${flight.id}, desde ${flight.from} con destino a ${flight.to}, tiene un precio de €${flight.cost}`)
        }
    });
    alert(priceOfFlights);
}

const newUserAction = (userName) => {
    const newAction = confirm("Deseas ingresar otro presupuesto? Selecciona 'aceptar' si deseas continuar, o 'cancelar' para salir");
    if (!newAction) {
        alert(`Gracias por usar nuestro programa ${userName}! Vuelve pronto!✈️🛩`);
    } else {
        userAction();
    }
}

// Main function
const airlinesProgram = () => {
    const userName = getUserName();
    infoFlights(flights);
    // averageCost();
    // flightsWithScales();
    // lastDestinations();
    const role = categoryMember(userName);
    if (role === "ADMIN"){
        let theUserWantsToContinue;
        do {
            theUserWantsToContinue = checkAdminAction(userName, flights);
        }
        while (theUserWantsToContinue);
    }
}
airlinesProgram();
