'use strict'
var question = prompt('pick a number 1 or 2')
var greeting;

if (question == 1) {
    greeting = prompt('Wow you really picked 1? why would you do that')
}   else if (question == 2) {
    greeting = confirm('dude you just won a snowboard!, sick! Email thisemailisfake@yahoo.com to claim it!')
}   else if (question > 2)  {
    greeting = prompt('you coulda won a free snowboard but you decided to not play by the rules >:(')
}




