function getComputerChoice () {
    choices = ['rock', 'paper', 'scissors'];
    let random_choice = choices[Math.floor(Math.random()*choices.lenght)];
    return random_choice;
}