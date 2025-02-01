//In-game computer game logic
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * choices.length);
    return choices[randomNum];
};

//Player game logic
function getHumanChoice() {
    const humanChoice = prompt('Enter your choice: rock, paper, or scissors').toLowerCase();
    if (humanChoice === 'rock') {
        return 'rock';
    } else if(humanChoice === 'paper') {
        return 'paper';
    } else if (humanChoice === 'scissors') {
        return 'scissors';
    } else {
        console.log('Invalid choice... please enter rock, paper, or scissors.');
        return getHumanChoice();
    };
};