function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors";
    }
}

function getHumanChoice() {
    return prompt(`Write: Rock, paper or scissors.`);
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice === computerChoice){
        return "It's a tie!!";
    }

    switch (humanChoice) {
        case "rock":
            if(computerChoice === "paper"){
                computerScore++;
                return "You lose! Paper beats Rock";
            } else{
                humanScore++;
                return "You win! Rock beats Scissors";
            }
        case "paper":
            if(computerChoice === "scissors"){
                computerScore++;
                return "You lose! Scissors beats Paper";
            } else{
                humanScore++;
                return "You win! Paper beats Rock";
            }
        case "scissors":
            if(computerChoice === "rock"){
                computerScore++;
                return "You lose! Rock beats Scissors";
            } else{
                humanScore++;
                return "You win! Scissors beats Paper";
            }
    }
}

let buttons = document.querySelector(".buttonsContainer");

//The idea is to combine this first event handler approach with the playRound original function

buttons.addEventListener('click', (event) => {
    let target = event.target;
    let counter = document.querySelector('.result');
    if(humanScore === 5){

    }else if(computerScore === 5){

    }else{
        switch(target.id) {
            case 'rock':
                playRound('rock', getComputerChoice());
                counter.textContent = `Computer: ${computerScore} Human: ${humanScore}`;
                break;
            case 'paper':
                playRound('paper', getComputerChoice());
                counter.textContent = `Computer: ${computerScore} Human: ${humanScore}`;
                break;
            case 'scissors':
                playRound('scissors', getComputerChoice());
                counter.textContent = `Computer: ${computerScore} Human: ${humanScore}`;
                break;
        }
    }

});

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
}