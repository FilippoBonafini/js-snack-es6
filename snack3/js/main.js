'use strict';
// FUNZIONI

// FUNZIONE CHE APPLICA DEI DATI AD UN TEMPLATE E APPLICA UNA CLASSE
function applyTemplate(templateContainer, arrayDiPartenza) {
    arrayDiPartenza.forEach(element => {
        const biciTemplate = template.content.cloneNode(true);

        biciTemplate.querySelector('.proprietarioBici').innerHTML = element.nome;
        biciTemplate.querySelector('.pesoBici').innerHTML = element.peso;

        if(element.nome === proprietarioMinore){
            biciTemplate.querySelector('li').classList.add('selected');
        }

        templateContainer.append(biciTemplate);
    });
}

// MAIN 
// array di oggetti: biciclette
const biciclette = [
    {
        nome: 'luca',
        peso: 30
    },
    {
        nome: 'marco',
        peso: 34
    },
    {
        nome: 'giacomo',
        peso: 21
    },
    {
        nome: 'federico',
        peso: 54
    },
    {
        nome: 'massimo',
        peso: 3
    },
    {
        nome: 'andrea',
        peso: 43
    },
    {
        nome: 'giovanni',
        peso: 16
    }
];

// SCRIVO IN CONSOLE L'ELENCO DELLE BICI
console.log(biciclette);

// MI IMPOSTO LE VARIABILI DA RIEMPIRE
let pesoMinore;
let proprietarioMinore;

// CICLO TUTTO L'ARRAY DI BICI
biciclette.forEach(element => {
    // FACCIO IL DESTRUCTURING DELL'ELEMENTO 
    const { peso, nome } = element;

    // SE LA VARIABILE CHE DOVRA' CONTENERE IL PESO NON E' DEFINITA IMPOSTO IL PESO DEL PRIMO
    // NOME COME PESO MINORE 
    if (pesoMinore === undefined) {
        pesoMinore = peso;
    }
    // INVECE SE IL PESO DELL'ELEMENTO IN ANALISI E' MINORE DELLA VARIABILE CONTENENTE IL PESO
    // MINORE IMPOSTO QUELLO COME PESO MINORE E SALVO IL NOME DEL PROPRIETARIO DELLA BICI 
    else if (peso < pesoMinore) {
        pesoMinore = peso
        proprietarioMinore = nome;
    }
});

// SCRIVO COL TEMPLATE LITERAL IL RISULTATO
console.log(`La bicicletta di ${proprietarioMinore} pesa ${pesoMinore}Kg. E' quella che pesa di meno!`)


// APPLICO IL RISULTATO NELL'HTML 
const template = document.getElementById('biciTemplate');
const listaBici = document.getElementById('listaBici');
applyTemplate(listaBici, biciclette);
