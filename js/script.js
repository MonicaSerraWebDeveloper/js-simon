// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Array vuoto da popolare con numeri random
const randomNumberArray = [];
console.log(randomNumberArray);

// Prendiamo il div dove andiamo a stampare i numeri random da mostrare allo user
const textInPage = document.querySelector('.list-numbers-random');
console.log(textInPage);

// Variabili per i numeri che ci permette di rendere le operazioni più flessibili
let minNumber = 1;
let maxNumber = 100;
let howManyNumberForArray = 5

// Prendiamo i numeri random che vengono generati e li pushiamo dentro l'array
// Assicurandoci che non siano mai uguali
while (randomNumberArray.length < howManyNumberForArray) {
    // Creiamo una variabile per creare un numero random ogni volta
    let randomNumber = Math.floor((Math.random() * 100) + 1);
    if (!randomNumberArray.includes(randomNumber)) {
        randomNumberArray.push(randomNumber)
    }

    randomNumber++
}
// Stampiamo nel DOM la lista dell'Array di randomNumberArray
textInPage.innerHTML = randomNumberArray;

// Rimuoviamo la lista con un setTimeout di 30 secondi
const cancelTheNumbers = setTimeout (function() {
    textInPage.innerHTML = '';
}, 30000)

// Sempre con un setTimeout di un secondodi ritardo andiamo a chiedere all'utente con il prompt i numeri che ha appena visto
const promptUser = setTimeout (function() {
    // Per ricordare ogni numero aggiunto nel prompt ci andiamo a stampare il valore in un Array vuoto chiamato userNumberInTheArray
    let userNumberInTheArray = []
    // Con il ciclo for creiamo 5 con 5 prompt all'utente un numero
    for (let i = 0; i < howManyNumberForArray; i++) {
        let userNumber = parseInt(prompt('Scrivi un numero che ricordi'))
        userNumberInTheArray.push(userNumber)
    }
    console.log(userNumberInTheArray);

    // Contiamo con una variabile esterna quanti elementi vengono indovinati tramite un ciclo for riprendiamo l'array appena creato popolato dai numeri che ci sono stati scritti dall'utente per verificare quali numeri sono prensenti nell'array random di randomNumberArray, i numeri corretti fanno salite la variabile di youScore e allora stesso tempo vengono aggiunti in un'altra lista vuota di numeri corretti scritti dall'utente
    let yourScore = 0;
    const correctNumbers = [];
    for (let i = 0; i < userNumberInTheArray.length; i++) {
        let compareNumber = userNumberInTheArray[i]
        if (randomNumberArray.includes(compareNumber)) {
            correctNumbers.push(compareNumber)
            yourScore++
        }
    }
    // Prendiamo dal DOM un div che stampa il risultato, sia il punteggio dello score che i numeri detti correttamente
    const resultUser = document.querySelector('.result')
    resultUser.innerHTML = `Hai totalizzato: ${yourScore} punti perché hai ricordato: ${correctNumbers}`
}, 31000)

// Creiamo un array vuoto 
// Prendiamo la funzione che genera dei numeri random
// Inseriamo i numeri random nell'Array 
// Assicuriamoci che i numeri random siano diversi 
// Mostriamoli in pagina nel DOM in sync (al caricamento)
// Stabiliamo con un setTimeOut che dopo 30 secondi l'array scompare
// Dopo 30 secondi scompaiono i numeri e compare un prompt in cui 
// L'utente scrive i numeri che ricorda 
// Verifichiamo quanti e quali numeri sono giusti 
// Stabiliamo che SE i numeri scritti nel prompt sono presenti nell'Array
// Allora diciamo all'utente con un alert i numeri indovinati e quanti da 0 a 5
// Sono giusti
