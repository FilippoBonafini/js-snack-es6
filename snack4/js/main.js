'use strict';
// --------------------------------------------------------
// FUNCTION 

// FUNZIONE PER GENERARE UN NUMERO RANDOM TRA 10 E 50
function randomNumber() {
    return Math.floor(Math.random() * (50 - 10 + 1) + 10)
}

// FUNZIONE CHE APPLICA DEI DATI AD UN TEMPLATE 
function applyTemplate(templateContainer, arrayDiPartenza) {
    arrayDiPartenza.forEach(element => {
        const studentiTemplate = template.content.cloneNode(true);

        studentiTemplate.querySelector('.nomeSquadra').innerHTML = element.nomeSquadra;
        studentiTemplate.querySelector('.puntiSquadra').innerHTML = element.punti;
        studentiTemplate.querySelector('.falliSquadra').innerHTML = element.falli;

        templateContainer.append(studentiTemplate);
    });
}

// -------------------------------------------------------
// MAIN 

// CREIAMO L'ARRAY DI PARTENZA DELLE SQUADRE 
const squadre = [
    {
        nomeSquadra: 'Juventus',
        punti: 0,
        falli: 0
    },
    {
        nomeSquadra: 'Milan',
        punti: 0,
        falli: 0
    },
    {
        nomeSquadra: 'Inter',
        punti: 0,
        falli: 0
    },
    {
        nomeSquadra: 'Roma',
        punti: 0,
        falli: 0
    },
    {
        nomeSquadra: 'Napoli',
        punti: 0,
        falli: 0
    },
    {
        nomeSquadra: 'Spal',
        punti: 0,
        falli: 0
    },
];


const template = document.getElementById('templateRow');
const containerDefault = document.getElementById('squadreZero');
const containerAfter = document.getElementById('squadreScore');

console.log('Array di partenza:')
console.log(squadre)
console.log('')


// MAPPO L'ARRAY DI PARTENZA
const nuoviScore = squadre.map(element => {
    // DESTRUTTURO OGNI ELEMENTO 
    let { nomeSquadra, puntiNew, falliNew } = element;
    // ASSEGNO A 2 VARIABILI I VALORI RANDOM 
    puntiNew = randomNumber();
    falliNew = randomNumber();
    // RESTITUISCO UN NUOVO ARRAY 
    return {
        nomeSquadra: nomeSquadra,
        punti: randomNumber(),
        falli: randomNumber()
    }
});

// STAMPO IL NUOVO ARRAY
console.log('Array finale');
console.log(nuoviScore);

// STAMPO SU SCHERMO I RISULTATI
applyTemplate(containerDefault, squadre);
applyTemplate(containerAfter, nuoviScore);