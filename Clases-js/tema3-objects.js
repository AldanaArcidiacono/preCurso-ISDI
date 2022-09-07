//               OBJECTS
// Ejercicio 1 y 2:
const myself = {
    name: "Aldana",
    family: "Arcidiacono",
    id: 6,
    bio() {
        console.log(`${this.name}, ${this.id}`)
    }
};
console.log(myself.family);
console.log(myself.bio());

// Ejercicio 3:
const person = {
    name: "Aldana",
    family: "Lanister",
    id: 6,
};
console.log(person.family);

// Ejercicio 4:
const person4 = {
    name: "Aldana",
    family: "Lanister",
};
console.log(person4.id);

// Ejercicio 5 y 5.1:
myself.age = 24;
console.log(myself.age);

// Ejercicio 6:
console.log(Object.keys(myself).length);

// Ejercicio 7: Cambia la propiedad name por fullName. 7.1 Asegura los cambios.
//Object.defineProperty(obj, prop, descriptor)

// Ejercicio 8:
myself.greeting = function()  {
    console.log(`Hi there, I'm ${this.name} ${this.family} and I'm ${this.age} years old`);
}
console.log(myself.greeting());

// Ejercicio 9 y 9.1:
myself.location = "Madrid";
myself.job = "None";
console.log(`I live in ${myself.location} and my job is ${myself.job}`);