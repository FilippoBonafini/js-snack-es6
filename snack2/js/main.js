
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



const template = document.getElementById('studentiTemplate');
const ulContainerStudenti = document.getElementById('studenti');
const ulContainerstudentiMaiuscoli = document.getElementById('studentiMaiuscoli');
const ulContainerstudentiBravi = document.getElementById('studentiBravi');
const ulContainerstudentiSelezionati = document.getElementById('studentiSelezionati');


// FUNZIONE PER CREARE I LI PARTENDO DA UN TEMPLATE 
function applyTemplate(templateContainer, arrayDiPartenza) {
    arrayDiPartenza.forEach(element => {
        const studentiTemplate = template.content.cloneNode(true);

        studentiTemplate.querySelector('.idStudente').innerHTML = element.id;
        studentiTemplate.querySelector('.nomeStudente').innerHTML = element.name;
        studentiTemplate.querySelector('.votiStudente').innerHTML = element.grades;

        templateContainer.append(studentiTemplate);
    });
}

applyTemplate(ulContainerStudenti, studenti);
applyTemplate(ulContainerstudentiBravi, studentiBravi);
applyTemplate(ulContainerstudentiSelezionati, studentiSelezionati);

for (let i = 0; i < studentiMaiuscoli.length; i++) {
    const studente = studentiMaiuscoli[i];
    const studentiTemplate = template.content.cloneNode(true);

    studentiTemplate.querySelector('.idStudente').remove();
    studentiTemplate.querySelector('.nomeStudente').innerHTML = studente;
    studentiTemplate.querySelector('.votiStudente').remove();

    ulContainerstudentiMaiuscoli.append(studentiTemplate);
}


// for (let i = 0; i < studenti.length; i++) {
//     const studente = studenti[i];
//     const studentiTemplate = template.content.cloneNode(true);

//     studentiTemplate.querySelector('.idStudente').innerHTML = studente.id;
//     studentiTemplate.querySelector('.nomeStudente').innerHTML = studente.name;
//     studentiTemplate.querySelector('.votiStudente').innerHTML = studente.grades;

//     ulContainerStudenti.append(studentiTemplate);
// }


// for (let i = 0; i < studentiBravi.length; i++) {
//     const studente = studentiBravi[i];
//     const studentiTemplate = template.content.cloneNode(true);

//     studentiTemplate.querySelector('.idStudente').innerHTML = studente.id;
//     studentiTemplate.querySelector('.nomeStudente').innerHTML = studente.name;
//     studentiTemplate.querySelector('.votiStudente').innerHTML = studente.grades;

//     ulContainerstudentiBravi.append(studentiTemplate);
// }

// for (let i = 0; i < studentiSelezionati.length; i++) {
//     const studente = studentiSelezionati[i];
//     const studentiTemplate = template.content.cloneNode(true);

//     studentiTemplate.querySelector('.idStudente').innerHTML = studente.id;
//     studentiTemplate.querySelector('.nomeStudente').innerHTML = studente.name;
//     studentiTemplate.querySelector('.votiStudente').innerHTML = studente.grades;

//     ulContainerstudentiSelezionati.append(studentiTemplate);
// }