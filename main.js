'use strict'

const generaButton = document.getElementById('genera-ticket');
const resetButton = document.getElementById('reset-ticket');


generaButton.addEventListener('click', function () {
    
    const usernameInput = document.getElementById('name-input');
    const ageInput = document.getElementById('age-input');
    const kmInput = document.getElementById('km-input');
    const ticketElement = document.getElementById('ticket')

    
    //calcolo biglietto
    const kmPrice = 0.21;
    const discountUnder = 20;
    const discountOver = 40;
    let price = kmPrice * Number(kmInput.value);
    let offertaFinale = 'offerta standard';

    
    if (parseInt(ageInput.value) < 18) {
        price -= (price / 100) * discountUnder;
        offertaFinale = 'Offerta Minorenni';
    }
    
    else if (parseInt(ageInput.value) > 65) {
        price -= (price / 100) * discountOver;
        offertaFinale = 'Offerta Maggiorenni';
    }

    console.log(ageInput.value);
    console.log(kmInput.value);
    console.log(usernameInput.value);
    console.log(price.toFixed(2));

    ticketElement.classList.remove('d-none')

    // output biglietto
    const nameOutput = document.getElementById('name-output');
    const offertaOutput = document.getElementById('offerta-output');
    const carrozzaOutput = document.getElementById('carrozza-output');
    const codiceOutput = document.getElementById('codice-output');
    const costoOutput = document.getElementById('costo-output');

    nameOutput.innerText = usernameInput.value;
    offertaOutput.innerText = offertaFinale;
    costoOutput.innerText = price.toFixed(2);
    carrozzaOutput.innerText = Math.trunc(6*Math.random()) +1;
    codiceOutput.innerText = Math.trunc(99999*Math.random()) +9999;
});

resetButton.addEventListener('click', function () {
    const ticketElement = document.getElementById('ticket')
    const usernameInput = document.getElementById('name-input');
    const ageInput = document.getElementById('age-input');
    const kmInput = document.getElementById('km-input');

    usernameInput.value = '';
    ageInput.value = '';
    kmInput.value = '';
    
    
   

    ticketElement.classList.add('d-none')
});


