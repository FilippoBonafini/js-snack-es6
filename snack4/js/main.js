'use strict';
// --------------------------------------------------------
// FUNCTION 

// FUNZIONE PER GENERARE UN NUMERO RANDOM TRA 10 E 50
function randomNumber(){
    return Math.floor(Math.random() * (50 - 10 + 1) + 10)
}









// -------------------------------------------------------
// MAIN 

// CREIAMO L'ARRAY DI PARTENZA DELLE SQUADRE 
const squadre = [
    {
        nomeSquadra: 'Juventus',
        punti : 0,
        falli : 0
    },
    {
        nomeSquadra: 'Milan',
        punti : 0,
        falli : 0
    },
    {
        nomeSquadra: 'Inter',
        punti : 0,
        falli : 0
    },
    {
        nomeSquadra: 'Roma',
        punti : 0,
        falli : 0
    },
    {
        nomeSquadra: 'Napoli',
        punti : 0,
        falli : 0
    },
    {
        nomeSquadra: 'Spal',
        punti : 0,
        falli : 0
    },
];
