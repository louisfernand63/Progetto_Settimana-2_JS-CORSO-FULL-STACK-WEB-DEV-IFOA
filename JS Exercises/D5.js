/*REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

/* SCRIVI QUI LA TUA RISPOSTA */
/* 
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}
*/


/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
/* 
console.log(pets.sort());
*/


/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
/*
console.log(pets.sort().reverse());
*/


/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
/*
console.log(pets);
console.log(delete pets[0]);
console.log(pets);
console.log(pets.push('dog'));
console.log(pets);
*/

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

/* SCRIVI QUI LA TUA RISPOSTA */
//console.log(cars[0].push("licensePlate")); 
/*
for (let i = 0; i < cars.length; i++) {
  for (let y = 0; y < cars[i].length; y++) {
    let object = { licensePlate: '2020' };
    //const element = cars[i][y];
    console.log(cars[i][y].push(object));
  }
}
*/

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
/* SCRIVI QUI LA TUA RISPOSTA */



/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
/*
const justTrims = []

let trim1 = '';
for(let i = 0; i<cars.length; i++){
  let car1 = cars[i];
  trim1 = car1.trims[0];
  justTrims.push(trim1)
  console.log(justTrims);
}
*/


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
/*
let car2;
car2 = 0;
for (let i = 0; i<cars.length; i++){
  car2 = cars[i]
  if(car2.color.indexOf('b')){
    console.log("Fizz")
  } else{
    console.log("Buzz")
  }
}
*/


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
/* SCRIVI QUI LA TUA RISPOSTA */
/*
let i = 0;
i++;
while (i < numericArray.length) {
  for (let y = 0; y < 32; y++) {
    console.log(numericArray[i]);
  }
}
*/

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
/* SCRIVI QUI LA TUA RISPOSTA 7 14 21 26 4*/
/*
const charactersArray = ['g', 'n', 'u', 'z', 'd']
let i = 0;
i++
switch (i < charactersArray.length) {
  case 0:
    console.log(charactersArray[0].push(7))
    break;
  case 1:
    console.log(charactersArray[0].push(14))
    break;
  case 2:
    console.log(charactersArray[0].push(21))
    break;
  case 3:
    console.log(charactersArray[0].push(26))
    break;
  case 4:
    console.log(charactersArray[0].push(4))
    break;
  //default:
    //break;
}
console.log(charactersArray);
*/