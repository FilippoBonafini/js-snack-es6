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

invitati.forEach((element, index) => {
    const person = {
        nome: element,
        tavolo: tavolo,
        posto: index + 1
    };
    elencoInvitati.push(person);
    console.log("Nel " + tavolo + " c'è " + element + ' al posto ' + (index + 1));
});

console.log(elencoInvitati);


const template = document.getElementById('invitatiTemplate');
const ulContainerInvitati = document.getElementById('listaInvitati');

for (let i = 0; i < elencoInvitati.length; i++) {
    const invitato = elencoInvitati[i];
    const invitatoTemplate = template.content.cloneNode(true);

    invitatoTemplate.querySelector('.tavolo').innerHTML = invitato.tavolo;
    invitatoTemplate.querySelector('.posto').innerHTML = invitato.posto;
    invitatoTemplate.querySelector('.nome').innerHTML = invitato.nome;

    ulContainerInvitati.append(invitatoTemplate);
}