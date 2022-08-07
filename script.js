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

let user = 0;
let computer = 0;
for (i = 1; i < 99; i++) {
    console.log("round "+i);
    let userChoice = prompt("rock or paper or scissors?").toLowerCase();
    let computerChoice = getComputerChoice();
    let result = round(userChoice,computerChoice);
    if (result==="W choice"){
        user++;
    }
    if (result==="L choice"){
        computer++;
    }
    console.log("user: " + userChoice);
    console.log("computer: " + computerChoice);
    console.log(result);
    console.log("user: " + user + "\ncomputer: " + computer)
    if (user===5) {
        console.log("you win");
        break;
    }
    if (computer===5) {
        console.log("you lose");
        break;
    }
}

