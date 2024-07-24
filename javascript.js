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


let humanScore = 0;
let computerScore = 0;

let buttons = document.querySelector(".buttonsContainer");
let container = document.querySelector('.result');
let info = document.createElement('p');
let counter = document.createElement('p')

container.appendChild(info);
container.appendChild(counter);

buttons.addEventListener('click', (event) => {
    let target = event.target;

    let computerChoice = getComputerChoice();

    if(humanScore === 5 || computerScore === 5) {
        return;
    }

    if(target.id === computerChoice){
        info.textContent = `It's a tie!!`
        counter.textContent = `Computer: ${computerScore} Human: ${humanScore}`;
        return;
    }

    switch(target.id) {
        case 'rock':
            if(computerChoice === "paper"){
                computerScore++;
                if(computerScore === 5) {
                    info.textContent = `You lose!`
                    break;
                }
                info.textContent = `You lose! Paper beats Rock.`;
                break;
            } else{
                humanScore++;
                if(humanScore === 5) {
                    info.textContent = `Congratulations, you win!`
                    break;
                }
                info.textContent = `You win! Rock beats Scissors.`;
                break;
            }
        case 'paper':
            if(computerChoice === "scissors"){
                computerScore++;
                if(computerScore === 5) {
                    info.textContent = `You lose!`
                    break;
                }
                info.textContent = `You lose! Scissors beats Paper.`;
                break;
            } else{
                humanScore++;
                if(humanScore === 5) {
                    info.textContent = `Congratulations, you win!`
                    break;
                }
                info.textContent = `You win! Paper beats Rock.`;
                break;
            }
        case 'scissors':
            if(computerChoice === "rock"){
                computerScore++;
                if(computerScore === 5) {
                    info.textContent = `You lose!`
                    break;
                }
                info.textContent = `You lose! Rock beats Scissors.`;
                break;
            } else{
                humanScore++;
                if(humanScore === 5) {
                    info.textContent = `Congratulations, you win! `
                    break;
                }
                info.textContent = `You win! Scissors beats Paper.`;
                break;
            }
    }
    
    counter.textContent = `Computer: ${computerScore} Human: ${humanScore}`;

    if(humanScore === 5 || computerScore === 5) {
        counter.textContent = `The computer won ${computerScore} rounds and you won ${humanScore}.`    
    }
});