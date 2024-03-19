// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Array vuoto da popolare con numeri random
const randomNumberArray = [];

// Prendiamo il div dove andiamo a stampare i numeri random da mostrare allo user
const textInPage = document.querySelector('.list-numbers-random');
console.log(textInPage);

// Creiamo una variabile che genera numeri random da 1 a 100
let randomNumber = Math.floor((Math.random() * 100) + 1);
console.log(randomNumber);

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
