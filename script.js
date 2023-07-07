function getComputerChoice () {
    choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It\'s a Tie!';
    }
    let playerWin = winner.includes(playerSelection + computerSelection);
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
    let s = playerWin ? `You Win! ${playerSelection} beats ${computerSelection}` : `You Lose! ${computerSelection} beats ${playerSelection}`;

    return s;
}

function game() {

}


winner = ['rockscissors', 'paperrock', 'scissorspaper'];
playerSelection = 'rock';
computerSelection = getComputerChoice();
console.log(game);