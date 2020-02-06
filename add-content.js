'use strict'
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good dinnertime Bro! Wanna crush some white claws?'
}   else if (hourNow > 12) {
    greeting = 'Good lunchtime Bro! You eat yet? No? Dope lets hit that farmers market'
}   else if (hourNow > 0)  {
    greeting = 'Good morning Bro! I saw ur kegstand last night at kevin\'s rager, sick moves'
} else {
    greeting = 'Aha bro welcome to the site'
}
document.write('<h3>' + greeting + '</h3>');



