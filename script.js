// Global variables
const choices = ['rock', 'paper', 'scissors'];
const winner = ['rockscissors', 'paperrock', 'scissorspaper'];
let playerScore = 0;
let cpuScore = 0;
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    playerChoice = button.dataset.rps;
    button.addEventListener('click', () => game(playerChoice, getComputerChoice()));
});

function getComputerChoice() {    
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) return 'It\'s a Tie!';
    let playerWin = winner.includes(playerSelection + computerSelection);
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
    let s = playerWin ? `You Win! ${playerSelection} beats ${computerSelection}` : `You Lose! ${computerSelection} beats ${playerSelection}`;
    return s;
}

function game(playerChoice, computerChoice) {
    roundWinner = playRound(playerChoice, computerChoice);
    roundWinner[4] === 'W' ? playerScore++ : cpuScore++;
    showRoundWinner(roundWinner);
    showScore();
    checkWin();
}

function showRoundWinner(roundWinner) {
    const resultsDiv = document.querySelector('#results-container');
    const roundResultDiv = document.createElement('div');
    roundResultDiv.textContent = roundWinner;
    resultsDiv.appendChild(roundResultDiv);
}

function showScore() {
    const playerScoreDiv = document.querySelector('#player-score');
    const cpuScoreDiv = document.querySelector('#cpu-score');
    playerScoreDiv.textContent = `Player: ${playerScore}`;
    cpuScoreDiv.textContent = `CPU: ${cpuScore}`;
}

function checkWin() {
    if (playerScore === 5 || cpuScore === 5) {
        showWinner();
    }
    else return;
}

function getWinner() {
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

function showWinner() {
    const winnerDiv = document.querySelector('#winner');
    winnerDiv.textContent = getWinner();
}

showScore();