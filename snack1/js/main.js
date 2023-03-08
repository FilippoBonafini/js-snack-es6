'use strict';

// array di invitati
const invitati = [
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney', 
    'Amal Clooney', 
    'Maneskin'
];

const tavolo = 'Tavolo Vip';

const elencoInvitati = [];

console.log(invitati);
console.log(tavolo);

invitati.forEach((element,index) =>{
    const person = [{
        nome: element,
        tavolo: tavolo,
        posto: index + 1
    }];
    elencoInvitati.push(person);
    console.log ("Nel "+tavolo+ " c'è "+element+' al posto '+(index+1));
})

console.log(elencoInvitati)
