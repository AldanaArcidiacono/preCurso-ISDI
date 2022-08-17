// Previous Airlines functions that the program needs:
let flights = [
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

//------------------------------------------------------------AIRLINES PRO-----------------------------------------------------------------------
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

// ----------------------ADMIN ACTIONS 
const checkAdminAction = (userName) => {
    const doAdminAction = confirm("Presiona 'aceptar' si deseas crear o eliminar vuelos \n Presiona 'cancelar' para salir del programa.");
    if (!doAdminAction) {
        alert(`Gracias por usar nuestro programa ${userName}! Vuelve pronto!✈️🛩`);
        return false;
    }
    let ableToCreate = canCreate(flights);
    let ableToDelete = canDelete(flights);
    
    if (!ableToCreate) {
        onlyDeleteFlights(userName, flights); 
    } else if (!ableToDelete) {
        onlyCreateFlights(userName, flights);
        } else {
            askAdminAction(userName, flights);
        }
    return true;
}

const canCreate = () => {
    if (flights.length <= 14) return true;
    return false;
}

const canDelete = () => {
    if (flights.length > 0) return true;
    return false;
}

const onlyDeleteFlights = (userName) => {
    alert("La cantidad máxima de vuelos es 15. Ya no puedes crear más.");
    const wantToDelete = confirm("Presiona 'aceptar' si deseas eliminar un vuelo o 'cancelar' de lo contrario.");
    if (wantToDelete){
        deleteFlights(flights);
    } else {
        checkAdminAction(userName, flights);
    }
}

const onlyCreateFlights = (userName) => {
    alert("Ya no hay más vuelos para borrar.");
    const wantToCreate = confirm("Presiona 'aceptar' si deseas crear un nuevo vuelo o 'cancelar' de lo contrario.");
    if (wantToCreate){
        createFlights(flights);
    } else {
        checkAdminAction(userName);
    }
}

const askAdminAction = (userName) => {
    const askForAction = confirm(`${userName}, selecciona 'aceptar' para crear un vuelo, o 'cancelar' para eliminar un vuelo`);
    if (askForAction) {
        createFlights(flights);
    } else {
        deleteFlights(flights);
    }
}

const createFlights = () => {
    const newFlight = {};
    newFlight.id = +prompt("Cuál es el ID del vuelo?",10);
    let flightIdExist = flights.some(flight => flight.id === newFlight.id);
    while (flightIdExist) {
        newFlight.id = +prompt("El número introducido de ID ya corresponde a uno de nuestros vuelos. Por favor, ingresa un ID válido");
        flightIdExist = flights.some(flight => flight.id === newFlight.id);
    }
    newFlight.to = prompt("Cuál es el destino del vuelo?","Málaga").trim();
    while (newFlight.to === null || newFlight.to === "") {
        newFlight.to = prompt("Por favor escribe la ciudad de destino.","Málaga").trim();
    }
    newFlight.from = prompt("Desde dónde parte el vuelo?","Madrid").trim();
    while (newFlight.from === null || newFlight.from === "") {
        newFlight.from = prompt("Por favor escribe la ciudad de origen.","Madrid").trim();
    }
    newFlight.cost = +prompt("Cuál es el costo del vuelo?",80);
    while (isNaN(newFlight.cost) || newFlight.cost === null || newFlight.cost === 0){
        newFlight.cost = +prompt("El valor introducido no es un número válido. Por favor ingresa el costo del vuelo.",80);
    };
    newFlight.scale = confirm("Presiona 'aceptar' si el vuelo tiene escalas o 'cancelar' si no realiza escalas.");
    flights.push(newFlight);
    infoFlights(flights);
}

const deleteFlights = () => {
    alert("A continuación te mostraremos los vuelos disponibles. Luego te pediremos que insertes el número del vuelo que desees eliminar.")
    infoFlights(flights);
    let flightToDelete = +prompt("Inserta el número del vuelo que deseas eliminar.");
    while (isNaN(flightToDelete) || flightToDelete === null || flightToDelete === ""){
        flightToDelete = +prompt("El número introducido no corresponde a ningún ID de nuestros vuelos. Por favor, ingresa un ID válido");
    };
    let flightExist = flights.some(flight => flight.id === flightToDelete);
    while (!flightExist) {
        flightToDelete = +prompt("El número introducido no corresponde a ningún ID de nuestros vuelos. Por favor, ingresa un ID válido");
        flightExist = flights.some(flight => flight.id === flightToDelete);
    }
    flights = flights.filter(flight => flight.id !== flightToDelete);
    alert(`El vuelo N°${flightToDelete} ha sido eliminado`);

    return flights;
};

// ----------------------USER ACTIONS 
const userAction = (userName) => {
    let askCost = +prompt(`${userName}, ingresa tu presupuesto para el vuelo. O presiona 'cancelar' para salir del programa.`);
    if (askCost === null) {
        alert(`Gracias por usar nuestro programa ${userName}! Vuelve pronto!✈️🛩`);
    }
    while (isNaN(askCost) || askCost === null || askCost === 0){
        askCost = +prompt("El valor introducido no es un número válido. Por favor ingresa tu presupuesto para el vuelo.");
    }
    const priceOfFlights = [];
    flights.forEach(flight => {
        if (flight.cost <= askCost) {
            priceOfFlights.push(`\nVuelo N°${flight.id}, ${flight.from} ---> ${flight.to}, €${flight.cost}`);
        }
    });
    alert(`Estos son los vuelos que se ajustan a tu presupuesto:\n ${priceOfFlights}`);
}

const newUserAction = (userName) => {
    const newAction = confirm("Deseas ingresar otro presupuesto? Selecciona 'aceptar' si deseas continuar, o 'cancelar' para salir");
    if (!newAction) {
        alert(`Gracias por usar nuestro programa ${userName}! Vuelve pronto!✈️🛩`);
    } else {
        userAction(userName, flights);
    }
    return newAction;
}
  
// Main function
const airlinesProgram = () => {
    const userName = getUserName();
    infoFlights(flights);
    const role = categoryMember(userName);
    if (role === "ADMIN"){
        let theAdminWantsToContinue;
        do {
            theAdminWantsToContinue = checkAdminAction(userName, flights);
        }
        while (theAdminWantsToContinue);
    } else {
        userAction(userName, flights);
        let theUserWantsToContinue;
        do {
            theUserWantsToContinue = newUserAction(userName, flights);
        }
        while (theUserWantsToContinue);
    }
}
airlinesProgram();
