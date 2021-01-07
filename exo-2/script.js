// you can write js here

let isRegistered = false;

let ageRunner = 7;


if (!isRegistered) {
    var raceNumber = Math.floor(Math.random()*1000);
}

if (ageRunner > 18 && isRegistered) {
    console.log('You will race at 9:30 am');
} else if (isRegistered || ageRunner > 18) {
    console.log('You will race at 11:00 am');
} else if (ageRunner < 18 && ageRunner > 8 ) {
    console.log('You will race at 12:30 pm ' + raceNumber);
} else {
    console.log('Go to see the registration desk');
}

