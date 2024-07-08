function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
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
        return console.log("It's a tie!!")
    }

    switch (humanChoice) {
        case "rock":
            if(computerChoice === "paper"){
                computerScore++;
                return console.log("You lose! Paper beats Rock");
            } else{
                humanScore++;
                return console.log("You win! Rock beats Scissors");
            }
        case "paper":
            if(computerChoice === "scissors"){
                computerScore++;
                return console.log("You lose! Scissors beats Paper");
            } else{
                humanScore++;
                return console.log("You win! Paper beats Rock");
            }
        case "scissors":
            if(computerChoice === "rock"){
                computerScore++;
                return console.log("You lose! Rock beats Scissors");
            } else{
                humanScore++;
                return console.log("You win! Scissors beats Paper");
            }
        default:
            return console.log("Are you sure you have spelled the option correctly?")

    }

}

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

