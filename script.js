function getComputerChoice(){
    let choice = Math.floor(Math.random()*3)+1;
    switch (choice){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function round(playerChoice, computerChoice){
    
    if (playerChoice===computerChoice)
        return "Tie";
    if (playerChoice==="rock"){
        if (computerChoice==="paper") {
            return "L choice";
        }
        return "W choice";
    }
    if (playerChoice==="paper"){
        if (computerChoice==="scissors") {
            return "L choice";
        }
        return "W choice";
    }
    if (playerChoice==="scissors"){
        if (computerChoice==="rock") {
            return "L choice";
        }
        return "W choice";
    }

    return "check spelling lmao";
    
}
let userChoice = prompt("rock or paper or scissors?").toLowerCase();
let computerChoice = getComputerChoice();
console.log("user: " + userChoice);
console.log("computer: " + computerChoice);
console.log(round(userChoice,computerChoice));
