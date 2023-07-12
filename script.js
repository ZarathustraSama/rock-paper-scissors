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

function game () {
    playerScore = 0;
    cpuScore = 0;

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.onclick = () => console.log(playRound(button.dataset.rps, getComputerChoice()));
    });
}

function getWinner(playerScore, cpuScore) {
    if (playerScore > cpuScore) {
        return `Player wins against CPU ${playerScore} to ${cpuScore}!`;
    }
    else if (playerScore < cpuScore) {
        return `CPU wins againts Player ${cpuScore} to ${playerScore}!`;
    }
    else {
        return `It's a Tie! Both Player and CPU achieved a score of ${playerScore}!`;
    }
}

winner = ['rockscissors', 'paperrock', 'scissorspaper'];
console.log(game());