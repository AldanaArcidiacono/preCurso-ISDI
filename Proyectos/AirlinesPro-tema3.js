// Previous Airlines functions that the program needs:
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
// Ask the admin if he wants to exit or continue in the program
const checkAdminAction = (userName, array) => {
    const doAdminAction = confirm("Presiona 'aceptar' si deseas crear o eliminar vuelos \n Presiona 'cancelar' para salir del programa.");
    if (!doAdminAction) {
        alert(`Gracias por usar nuestro programa ${userName}! Vuelve pronto!✈️🛩`);
        return false;
    }
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

// Checks if the admin can create more flights
const canCreate = (array) => {
    if (array.length <= 14) return true;
    return false;
}

// Checks if the admin can delete more flights
const canDelete = (array) => {
    if (array.length > 0) return true;
    return false;
}

// Tells the admin it can't create any more flights
const onlyDeleteFlights = (userName, array) => {
    alert("La cantidad máxima de vuelos es 15. Ya no puedes crear más.");
    const wantToDelete = confirm("Presiona 'aceptar' si deseas eliminar un vuelo o 'cancelar' de lo contrario.");
    if (wantToDelete){
        deleteFlights(array);
    } else {
        checkAdminAction(userName, array);
    }
}

// Tells the admin it can't delete any more flights
const onlyCreateFlights = (userName, array) => {
    alert("Ya no hay más vuelos para borrar.");
    const wantToCreate = confirm("Presiona 'aceptar' si deseas crear un nuevo vuelo o 'cancelar' de lo contrario.");
    if (wantToCreate){
        createFlights(array);
    } else {
        checkAdminAction(userName);
    }
}

// Asks the admin what it want to do, create or delete
const askAdminAction = (userName, array) => {
    const askForAction = confirm(`${userName}, selecciona 'aceptar' para crear un vuelo, o 'cancelar' para eliminar un vuelo`);
    if (askForAction) {
        createFlights(array);
    } else {
        deleteFlights(array);
    }
}

const createFlights = (array) => {
    const newFlight = {};
    newFlight.id = array.length;
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
    array.push(newFlight);
    infoFlights(array);
}

const deleteFlights = (array) => {
    alert("A continuación te mostraremos los vuelos disponibles. Luego te pediremos que insertes el número del vuelo que desees eliminar.")
    infoFlights(array);
    let flightToDelete = +prompt("Inserta el número del vuelo que deseas eliminar.");
    while (isNaN(flightToDelete) || flightToDelete === null || flightToDelete === ""){
        flightToDelete = +prompt("El número introducido no corresponde a ningún ID de nuestros vuelos. Por favor, ingresa un ID válido");
    };
    let flightExist = array.some(item => item.id === flightToDelete);
    while (!flightExist) {
        flightToDelete = +prompt("El número introducido no corresponde a ningún ID de nuestros vuelos. Por favor, ingresa un ID válido");
        flightExist = array.some(item => item.id === flightToDelete);
    }
    console.log(array, "Antes del filter");
    // array = array.filter(item => item.id !== flightToDelete); Antes de cambios
    const newArray = array.filter(item => item.id !== flightToDelete);
    console.log(newArray);
    alert(`El vuelo N°${flightToDelete} ha sido eliminado`);

    return newArray;
};

// ----------------------USER ACTIONS 
// The user will be able to search for flights that fit its budget
const userAction = (userName, array) => {
    const askCost = +prompt(`${userName}, ingresa tu presupuesto para el vuelo. O presiona 'cancelar' para salir del programa.`);
    if (askCost === null) {
        alert(`Gracias por usar nuestro programa ${userName}! Vuelve pronto!✈️🛩`);
    }
    const priceOfFlights = [];
    array.forEach(item => {
        if (item.cost <= askCost) {
            priceOfFlights.push(`\nVuelo N°${item.id}, ${item.from} ---> ${item.to}, €${item.cost}`);
        }
    });
    alert(`Estos son los vuelos que se ajustan a tu presupuesto:\n ${priceOfFlights}`);
}

const newUserAction = (userName, array) => {
    const newAction = confirm("Deseas ingresar otro presupuesto? Selecciona 'aceptar' si deseas continuar, o 'cancelar' para salir");
    if (!newAction) {
        alert(`Gracias por usar nuestro programa ${userName}! Vuelve pronto!✈️🛩`);
    } else {
        userAction(userName, array);
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
