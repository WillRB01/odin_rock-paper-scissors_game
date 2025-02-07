//In-game computer game logic
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * choices.length);
    return choices[randomNum];
};

//Player game logic
const rockBtn = document.querySelector('.rockBtn');
rockBtn.addEventListener('click', () => {
    const humanSelection = 'rock';
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
});

const paperBtn = document.querySelector('.paperBtn');
paperBtn.addEventListener('click', () => {
    const humanSelection = 'paper';
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
});

const scissorsBtn = document.querySelector('.scissorsBtn');
scissorsBtn.addEventListener('click', () => {
    const humanSelection = 'scissors';
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
});

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

