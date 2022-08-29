// let companions = {
//     name: "Donna", class: "4th", id: "DoctorDonna",
// };

// // Ejercicio 1 y 2
// const companionsInfo = () => {
//     console.log(Object.keys(companions));
//     console.log(companions.name, companions.class, companions.id);

//     // Ejercicio 3
//     companions.class = "X";
//     console.log(companions.class)

//     // Ejercicio 4
//     console.log(companions.id)
//     delete companions.id;
//     console.log(companions.id)

//     // Ejercicio 5
//     companions.city = "London";
//     console.log(companions);
//     // Ejercicio 5.1
//     console.log(companions.city)

//     //Ejercicio 6
//     console.log(Object.keys(companions).length);

//     //Ejercicio 7 y 7.1
//     companions.name = companions.fullName;
//     delete companions.name;
//     companions.fullName = "Donna Noble";
//     console.log(Object.keys(companions));

//     // Ejercicio 8 
//     console.log(`Hi there, I'm ${companions.fullName}. I used to lived in ${companions.city}, untill I met the ${companions.class} regeneration of The Doctor`)
//     // Ejercicio 8.1
//     companions.country = "Great Britain";
//     companions.job = "Temp";
//     // Ejercicio 8.2
//     console.log(Object.keys(companions));
//     console.log(companions.class, companions.city, companions.fullName, companions.country, companions.job);
// }
// companionsInfo();


// Ejercicio 9
function avenger(fullName, classRoom, city, job, studies, markAv){
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job = job;
    this.studies = studies;
    this.markAv = markAv;
    // Ejercicio 11
    this.description = function(){
        console.log(`${this.fullName}, ${this.classRoom}, ${this.city}, ${this.job}, ${this.studies}, ${this.markAv}`)
    }
}

const captainAmerica = new avenger("Steve Rogers", "XIX", "New York City", "Soldier", "None", 25);
//console.log(captainAmerica);

// Ejercicio 10
const blackWidow = new avenger("Natasha Romanoff", "III", "Russia", "Undecover agent", "Red Room", 12);
//console.log(blackWidow);
// Ejercicio 11
//blackWidow.description();

// Ejercicio 12
const avengerNames = () => {
    console.log(`${captainAmerica.fullName}, ${blackWidow.fullName}`);
}
//avengerNames();

// Ejercicio 13
const ironMan = new avenger("Tony Stark", "XI", "New York City", "Ingeneer", "MIT", 10);
const spiderman = new avenger("Peter Parker", "I", "New York City", "Pizza deliver", "High School", 8);
const mrFantastic = new avenger("Reed Richards", "XX", "New York City", "Scientist", "Harvard", 15);

//const avengers = [captainAmerica, blackWidow, ironMan, spiderman, mrFantastic];

const avengersInNYC = () => {
    let amountInNYC = 0;
    let heroesInNYC = [];
    avengers.forEach(avenger => {
        if (avenger.city === "New York City") {
            amountInNYC++;
            heroesInNYC.push(avenger.fullName);
        }
    });
    console.log(`There are ${amountInNYC} avengers living in NYC: ${heroesInNYC}`);
}
//avengersInNYC();

// Ejercicio 14
const myAvenger = new avenger("Aldana Arcidiacono", "IX", "Madrid", "Web developer", "ISDI Coders", 4);

const avengers = [captainAmerica, blackWidow, ironMan, spiderman, mrFantastic, myAvenger];

const markAverage = () => {
    let markAv = 0;
    avengers.forEach(avenger => {
        markAv += avenger.markAv
    });
    markAv /= avengers.length;
    markAv = markAv.toFixed(1);
    console.log(`The mark average of our Avengers is ${markAv}`);
}
markAverage();

// Ejercicio 15
// Ahora, crea una funcion que recoja los avengers en parejas (será necesario que tengan un id, por comodidad al aparejarlos), 
//es decir, de dos en dos, compare sus markAv y que muestre el mayor de ambos.

//Ejercicio 16
//Intenta crear las parejas de forma aleatoria. 
