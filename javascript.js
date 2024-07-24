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

buttons.addEventListener('click', (event) => {
    let target = event.target;
    let counter = document.querySelector('.result');

    let computerChoice = getComputerChoice();

    if(humanScore === 5 || computerScore === 5) {
        return;
    }

    if(target.id === computerChoice){
        counter.textContent = `It's a tie!! 
        Computer: ${computerScore} Human: ${humanScore}`;
        return;
    }

    switch(target.id) {
        case 'rock':
            if(computerChoice === "paper"){
                computerScore++;
                if(computerScore === 5) {
                    counter.textContent = `You lose! The computer won ${computerScore} rounds and you won ${humanScore}.`
                    break;
                }
                counter.textContent = `You lose! Paper beats Rock. 
                Computer: ${computerScore} Human: ${humanScore}`;
                break;
            } else{
                humanScore++;
                if(humanScore === 5) {
                    counter.textContent = `Congratulations, you win! The computer won ${computerScore} rounds and you won ${humanScore}.`
                    break;
                }
                counter.textContent = `You win! Rock beats Scissors. Computer: ${computerScore} Human: ${humanScore}`;
                break;
            }
        case 'paper':
            if(computerChoice === "scissors"){
                computerScore++;
                if(computerScore === 5) {
                    counter.textContent = `You lose! The computer won ${computerScore} rounds and you won ${humanScore}.`
                    break;
                }
                counter.textContent = `You lose! Scissors beats Paper. 
                Computer: ${computerScore} Human: ${humanScore}`;
                break;
            } else{
                humanScore++;
                if(humanScore === 5) {
                    counter.textContent = `Congratulations, you win! The computer won ${computerScore} rounds and you won ${humanScore}.`
                    break;
                }
                counter.textContent = `You win! Paper beats Rock. 
                Computer: ${computerScore} Human: ${humanScore}`;
                break;
            }
        case 'scissors':
            if(computerChoice === "rock"){
                computerScore++;
                if(computerScore === 5) {
                    counter.textContent = `You lose! The computer won ${computerScore} rounds and you won ${humanScore}.`
                    break;
                }
                counter.textContent = `You lose! Rock beats Scissors. 
                Computer: ${computerScore} Human: ${humanScore}`;
                break;
            } else{
                humanScore++;
                if(humanScore === 5) {
                    counter.textContent = `Congratulations, you win! The computer won ${computerScore} rounds and you won ${humanScore}.`
                    break;
                }
                counter.textContent = `You win! Scissors beats Paper. 
                Computer: ${computerScore} Human: ${humanScore}`;
                break;
            }
    }
});