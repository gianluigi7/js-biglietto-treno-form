'use strict'

const generaButton = document.getElementById('genera-ticket');
const resetButton = document.getElementById('reset-ticket');

generaButton.addEventListener('click', function () {
    
    const ageInput = document.getElementById('age-input');
    const kmInput = document.getElementById('km-input');

    
    //calcolo biglietto
    const kmPrice = 0.21;
    const discountUnder = 20;
    const discountOver = 40;
    let price = kmPrice * Number(kmInput.value);
    
    if (parseInt(ageInput.value) < 18) {
        price -= (price / 100) * discountUnder;
    }
    
    else if (parseInt(ageInput.value) > 65) {
        price -= (price / 100) * discountOver;
    }

    console.log(ageInput.value);
    console.log(kmInput.value);
    console.log(price.toFixed(2));
});



