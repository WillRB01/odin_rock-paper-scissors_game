// Players score variables

let humanScore = 0;
let computerScore = 0;

// Player game logic

function getHumanChoice() {
    let humanInput = prompt('Make your choice!').toLowerCase();
    if (humanInput === 'rock') {
        return 'Rock';
    } else if(humanInput === 'paper') {
        return 'Paper';
    } else if (humanInput === 'scissors') {
        return 'Scissors';
    } else {
        return 'Invalid choice... Please try again.';
    }
}

// In-game computer game logic

function getComputerChoice() {
    let computerOutput = Math.floor(Math.random() * 12) + 1;
    if (computerOutput <= 4) {
        return 'Rock';
    } else if (computerOutput >= 4 && computerOutput < 8) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

// Play round game logic

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
    switch(true) {
        case (humanSelection === 'Rock' && computerSelection === 'Scissors') :
            console.log(humanSelection);
            console.log(computerSelection);
            console.log('You win! Rock beats scissors.');
            return humanScore += 1;
            break;
        case (humanSelection === 'Rock' && computerSelection === 'Paper') :
            console.log(humanSelection);
            console.log(computerSelection);
            console.log('You lose! Paper beats rock.');
            return computerScore += 1;
            break;
        case (humanSelection === 'Rock' && computerSelection === 'Rock') :
            console.log(humanSelection);
            console.log(computerSelection);
            console.log('It\s a draw! Try again. :)');
            break;
        case (humanSelection === 'Paper' && computerSelection === 'Rock') :
            console.log(humanSelection);
            console.log(computerSelection);
            console.log('You win! Paper beats rock.');
            return humanScore += 1;
            break;
        case (humanSelection === 'Paper' && computerSelection === 'Scissors'):
            console.log(humanSelection);
            console.log(computerSelection);
            console.log('You lose! Scissors beats paper.');
            return computerScore += 1;
            break;
        case (humanSelection === 'Paper' && computerSelection === 'Paper') :
            console.log(humanSelection);
            console.log(computerSelection);
            console.log('It\s a draw! Try again. :)');
            break;
        case (humanSelection === 'Scissors' && computerSelection === 'Paper') :
            console.log(humanSelection);
            console.log(computerSelection);
            console.log('You win! Scissors beats paper.');
            return humanScore += 1;
            break;
        case (humanSelection === 'Scissors' && computerSelection === 'Rock'):
            console.log(humanSelection);
            console.log(computerSelection);
            console.log('You lose! Rock beats scissors.');
            return computerScore += 1;
            break;
        case (humanSelection === 'Scissors' && computerSelection === 'Scissors') :
            console.log(humanSelection);
            console.log(computerSelection);
            console.log('It\s a draw! Try again. :)');
            break;
        default: 
        console.log('Not an option... Please try again.');
    }
}

playRound(humanSelection, computerSelection);