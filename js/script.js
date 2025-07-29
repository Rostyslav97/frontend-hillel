'use strict';

function variableScopeDemo() {
    for (var i = 0; i < 1; i++) {
        var varVariable = 'Я оголошений через var';
        let letVariable = 'Я оголошений через let';
        const constVariable = 'Я оголошений через const';

        console.log('Всередині циклу:');
        console.log('varVariable:', varVariable);   // доступний
        console.log('letVariable:', letVariable);   // доступний
        console.log('constVariable:', constVariable); // доступний
    }

    console.log('\nПоза циклом:');
    console.log('varVariable:', varVariable);       // доступний
    try {
        console.log('letVariable:', letVariable);   // ReferenceError
    } catch (e) {
        console.log('letVariable: ReferenceError');
    }

    try {
        console.log('constVariable:', constVariable); // ReferenceError
    } catch (e) {
        console.log('constVariable: ReferenceError');
    }
}

variableScopeDemo();