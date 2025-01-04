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

// Play game, game logic
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame() {

    //Initialize scores, number of maximum rounds and winning score
    let humanScore = 0;
    let computerScore = 0;
    const winningScore = 5;
    const maxRounds = 20;

    //Round logic
    for (let round = 1; round <= maxRounds; round++) {

        //Score checker
        if (humanScore === winningScore) {
            console.log('You win the game!')
            break;
        } else if (computerScore === winningScore) {
            console.log('You lost... Computer wins the game!')
            break;
        }

        // Play round game logic
        function playRound(humanChoice, computerChoice) {
            switch(true) {
                case (humanSelection === 'Rock' && computerSelection === 'Scissors') :
                    console.log(humanSelection);
                    console.log(computerSelection);
                    console.log('You win! Rock beats scissors.');
                    ++humanScore;
                    console.log(`Me: ${humanScore} - Computer: ${computerScore}`);
                    getHumanChoice(); getComputerChoice();
                    break;
                case (humanSelection === 'Rock' && computerSelection === 'Paper') :
                    console.log(humanSelection);
                    console.log(computerSelection);
                    console.log('You lose! Paper beats rock.');
                    ++computerScore;
                    console.log(`Me: ${humanScore} - Computer: ${computerScore}`);
                    getHumanChoice(); getComputerChoice();
                    break;
                case (humanSelection === 'Rock' && computerSelection === 'Rock') :
                    console.log(humanSelection);
                    console.log(computerSelection);
                    console.log('It\s a draw! Try again. :)');
                    getHumanChoice(); getComputerChoice();
                    break;
                case (humanSelection === 'Paper' && computerSelection === 'Rock') :
                    console.log(humanSelection);
                    console.log(computerSelection);
                    console.log('You win! Paper beats rock.');
                    ++humanScore;
                    console.log(`Me: ${humanScore} - Computer: ${computerScore}`);
                    getHumanChoice(); getComputerChoice();
                    break;
                case (humanSelection === 'Paper' && computerSelection === 'Scissors'):
                    console.log(humanSelection);
                    console.log(computerSelection);
                    console.log('You lose! Scissors beats paper.');
                    ++computerScore;
                    console.log(`Me: ${humanScore} - Computer: ${computerScore}`);
                    getHumanChoice(); getComputerChoice();
                    break;
                case (humanSelection === 'Paper' && computerSelection === 'Paper') :
                    console.log(humanSelection);
                    console.log(computerSelection);
                    console.log('It\s a draw! Try again. :)');
                    getHumanChoice(); getComputerChoice();
                    break;
                case (humanSelection === 'Scissors' && computerSelection === 'Paper') :
                    console.log(humanSelection);
                    console.log(computerSelection);
                    console.log('You win! Scissors beats paper.');
                    ++humanScore;
                    console.log(`Me: ${humanScore} - Computer: ${computerScore}`);
                    getHumanChoice(); getComputerChoice();
                    break;
                case (humanSelection === 'Scissors' && computerSelection === 'Rock'):
                    console.log(humanSelection);
                    console.log(computerSelection);
                    console.log('You lose! Rock beats scissors.');
                    ++computerScore;
                    console.log(`Me: ${humanScore} - Computer: ${computerScore}`);
                    getHumanChoice(); getComputerChoice();
                    break;
                case (humanSelection === 'Scissors' && computerSelection === 'Scissors') :
                    console.log(humanSelection);
                    console.log(computerSelection);
                    console.log('It\s a draw! Try again. :)');
                    getHumanChoice(); getComputerChoice();
                    break;
                default: 
                console.log('Not an option... Please try again.');
            }
        }

        playRound(humanSelection, computerSelection);
    }
}

playGame();