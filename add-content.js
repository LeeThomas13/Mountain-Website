'use strict'
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Sup bro, wanna crush some white claws?'
}   else if (hourNow > 12) {
    greeting = 'Bro you eat lunch yet? No? Dope Lets hit that farmers market'
}   else if (hourNow > 0)  {
    greeting = 'Bro I saw ur kegstand last night at kevins rager, sick moves'
} else {
    greeting = 'Aha bro welcome to the site'
}

document.write('<h3>' + greeting + '</h3>');



