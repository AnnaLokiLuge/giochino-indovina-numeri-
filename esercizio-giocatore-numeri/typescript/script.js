"use strict";
let giocatore1 = Number($('#giocatore1').val());
let giocatore2 = Number($('#giocatore2').val());
let nRandom = Math.floor(Math.random() * 100);
let vincitore = $('#vincitore');
let verifica = $('#verifica');
let quasi1 = Math.abs(nRandom - giocatore1);
let quasi2 = Math.abs(nRandom - giocatore2);
let reset = $('#reset');
verifica.on('click', function () {
    let numeroUscito = $('#numeroUscito').text('Il numero uscito è: ' + nRandom);
    if (!giocatore1 || !giocatore2) {
        vincitore.text('tutti i giocatori devono inserire un numero');
    }
    else if (nRandom == giocatore1) {
        vincitore.text(' Congratulazioni Giocatore 1 ha vinto!');
    }
    else if (nRandom == giocatore2) {
        vincitore.text(' Congratulazioni Giocatore 2 ha vinto!');
    }
    else {
        if (quasi1 < quasi2) {
            vincitore.text(' Giocatore 1 si è avvicinato di più.');
        }
        else if (quasi1 > quasi2) {
            vincitore.text(' Giocatore 2 si è avvicinato di più.');
        }
    }
});
reset.on('click', function () {
    window.location.reload();
});
