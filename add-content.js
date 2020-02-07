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
        question = prompt('you degenerate, try again');
        // console.log(typeof(question))

    }
    
    if (question === '1') {
         var what = confirm('Wow you really picked 1? why would you do that');
         greeting = 'You lose!';
    }else if (question === '2'){
        var whatever = confirm('dude you just won a snowboard!, sick! Email thisemailisfake@yahoo.com to claim it!');
        greeting = 'congrats!! You won a free snowboard';
    }
        
    
    return greeting;

}

function money() {
    var quest = prompt('how many boards you want bro??')
    var money;

    for (var i = 0; i < 10; i++) {
        document.write(i);
    }

}
