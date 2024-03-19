// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Array vuoto da popolare con numeri random
const randomNumberArray = [];

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

console.log(randomNumberArray);



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
