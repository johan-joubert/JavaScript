// you can write js here
function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();

    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'britney') {
        return userInput;
    } else {
        return console.log('please enter a correct choice');
    }
};

function getComputerChoice() {
   let RandomNumber = Math.floor(Math.random() * 3);
   let choiceComputer;
    switch(RandomNumber) {
        case 0:
            return choiceComputer = 'rock';
            break;
        case 1:
            return choiceComputer = 'paper';
            break;
        case 2:
            return choiceComputer = 'scissors';
            break;
    }
    return choiceComputer;
}

function determineWinner(userChoice, computerChoice) {
    if(userChoice === computerChoice) {
        return 'Tied';
    }
    else if (userChoice === 'rock') {
        if (computerChoice === 'scissors') {
            return 'Won';
        } else {
            return 'Lost';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'Won';
        } else {
            return 'Lost';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoise === 'paper') {
            return 'Won';
        } else {
            return 'Lost';
        }
    }

    if (userChoice === 'britney') {
        if (computerChoice === 'paper' || computerChoice === 'rock' || computerChoice === 'scissors') {
            return 'Won';
        }
    }
}

function playGame() {
    let userChoice =  getUserChoice(prompt('votre choix :'));

    let computerChoice = getComputerChoice();

    console.log('Votre choix : ' + userChoice);

    console.log('Choix de votre adverssaire : ' + computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
}

playGame();