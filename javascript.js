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