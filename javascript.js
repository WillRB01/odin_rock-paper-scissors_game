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

function playGame() {
    //Initialize player scores, the max number of rounds & the game winning score
    let humanScore = 0;
    let computerScore = 0;
    const winningScore = 5;
    const maxRounds = 20;

    //Play round logic
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === 'rock' && computerChoice === 'scissors') {
            console.log('You win! Rock beats scissors.');
            ++humanScore;
            console.log(`Me: ${humanScore} - Computer: ${computerScore}`);
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            console.log('You win! Paper beats rock.');
            ++humanScore;
            console.log(`Me: ${humanScore} - Computer: ${computerScore}`);
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            console.log('You win! Scissors beats paper.');
            ++humanScore;
            console.log(`Me: ${humanScore} - Computer: ${computerScore}`);
        } else if (humanChoice === computerChoice) {
            console.log('It\'s a draw! Try again. :)');
        } else {
            console.log(`You lose... ${computerChoice} beats ${humanChoice}.`);
            ++computerScore;
            console.log(`Me: ${humanScore} - Computer: ${computerScore}`);
        };
    };
};

playGame();