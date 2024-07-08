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
    return prompt(`Choose: “rock”, “paper” or “scissors”.`);
}

console.log(getComputerChoice());
console.log(getHumanChoice());

