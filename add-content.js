'use strict'

function greetings() {
    var today = new Date();
    var hourNow = today.getHours();
    var timetemp;

if (hourNow > 15) {
    timetemp = 'Good evening Bro! Wanna crush some white claws?'
    }else if (hourNow > 12) {
    timetemp =  'You eat lunch yet? No? Dope lets hit that farmers market'
    }else if (hourNow > 0)  {
    timetemp = 'Good morning Bro! I saw ur kegstand last night at kevin\'s rager, sick moves'
    }else{
    timetemp = 'Aha bro welcome to the site'
    }
   return timetemp;

}

function dropdown() {
    var question = prompt('pick a number 1 or 2');
    var greeting;
    // console.log(typeof(question))

    while (question !== '1' && question !== '2') {
        question = prompt('you degenerate, try again. 1 or 2');
        // console.log(typeof(question))

    }
    
    if (question === '1') {
         var what = confirm('Wow you really picked 1? why would you do that');
         greeting = 'You lose!';
    }else if (question === '2'){
        var whatever = confirm('dude you just won a snowboard!, sick! Email thisemailisfake@yahoo.com to claim it!');
        greeting = 'congrats!! You won a free snowboard!';
    }
        
    
    return greeting;

}

function boards() {
    var quest = prompt('Before we get into that, how many pictures of snowboards you want bro??');
    var bigboiboard = img


    while (isNaN(quest)){
        quest = prompt('a number please bro')
    }
    
    for (var i = 0; i < quantity; i++)


}

// Ive been at this evil "for loop" for an hour and i need to sleep. I'll return to it soon. 
