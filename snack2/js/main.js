
const studenti = [
    {
        id: 213,
        name: 'Marco della Rovere',
        grades: 78
    },
    {
        id: 110,
        name: 'Paola Cortellessa',
        grades: 96
    },
    {
        id: 250,
        name: 'Andrea Mantegna',
        grades: 48
    },
    {
        id: 145,
        name: 'Gaia Borromini',
        grades: 74
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',
        grades: 68
    },
    {
        id: 102,
        name: 'Piero della Francesca',
        grades: 50
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        grades: 84
    }
]

// NOMI STUDENTI IN MAIUSCOLO
const studentiMaiuscoli = studenti.map((element) => element.name.toUpperCase());
console.log(studentiMaiuscoli);

// STUDENTI CON VOTI SUPERIORE A 70
const studentiBravi = studenti.filter((element) => element.grades > 70);
console.log(studentiBravi);

//STUDENTI CON VOTI SUPERIORI A 70 E ID SUPERIORE A 120
const studentiSelezionati = studentiBravi.filter((element) => element.id > 120);
console.log(studentiSelezionati);
