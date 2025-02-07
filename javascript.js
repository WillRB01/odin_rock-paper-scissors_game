function playGame() {
    //Initialize player scores, the max number of rounds & the game winning score
    let humanScore = 0;
    let computerScore = 0;
    const winningScore = 5;

    //In-game computer game logic
    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomNum = Math.floor(Math.random() * choices.length);
        return choices[randomNum];
    };

    //Player game logic
    const displayArea = document.querySelector('.display-area');
    displayArea.style.whiteSpace = "pre-line;"

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

    //Play round logic
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === 'rock' && computerChoice === 'scissors') {
            displayArea.textContent = 'You win! Rock beats scissors.' + '\n';
            ++humanScore;
            displayArea.textContent += `Me: ${humanScore} - Computer: ${computerScore}`;
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            displayArea.textContent = 'You win! Paper beats rock.';
            ++humanScore;
            displayArea.textContent += `Me: ${humanScore} - Computer: ${computerScore}`;
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            displayArea.textContent = 'You win! Scissors beats paper.' + '\n';
            ++humanScore;
            displayArea.textContent += `Me: ${humanScore} - Computer: ${computerScore}`;
        } else if (humanChoice === computerChoice) {
            displayArea.textContent = 'It\'s a draw! Try again. :)';
        } else {
            displayArea.textContent = `You lose... ${computerChoice} beats ${humanChoice}.` + '\n';
            ++computerScore;
            displayArea.textContent += `Me: ${humanScore} - Computer: ${computerScore}`;
        };
    };
};

playGame();