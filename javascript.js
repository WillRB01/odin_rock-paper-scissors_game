// Players score variables

let humanScore = 0;
let computerScore = 0;

// In-game computer game logic

let rand = Math.random();

function getComputerChoice() {
    let num = Math.floor(rand * 12) + 1;
    if (num <= 4) {
        return 'Rock';
    } else if (num > 4 && num <= 8){
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

console.log(getComputerChoice());

// Player game logic

function getHumanChoice() {
    let humanChoice = prompt('Make your choice!');
    if (humanChoice === 'Rock') {
        return 'Rock';
    } else if(humanChoice === 'Paper') {
        return 'Paper';
    } else if (humanChoice === 'Scissors') {
        return 'Scissors';
    } else {
        return 'Invalid choice... Please try again.'
    }
}

console.log(getHumanChoice());